import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

// Importações do Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';

const ContatoSection = styled.section`
  padding: 6rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const HeaderContainer = styled.div`
  margin-bottom: 3rem;
`;

const HeaderTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeaderSubtitle = styled.p`
  color: #a0a0a0;
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  background-color: rgba(30, 20, 48, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(111, 66, 193, 0.2);
  border-radius: 12px;
  padding: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
    text-align: center;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const InfoCard = styled.div`
  background-color: rgba(30, 20, 48, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(111, 66, 193, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 400px;
  }
`;

const InfoTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 1024px) {
    justify-content: center;
    text-align: left;
  }
`;

const IconWrapper = styled.div`
  background: linear-gradient(135deg, #7e22ce, #0a5ad3b0);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

const ContactText = styled.div`
  p {
    margin: 0;
    font-size: 0.9rem;
    color: #fff;
  }
  
  a {
    color: #a0a0a0;
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: #3120cf;
    }
  }
`;

const SocialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(30, 20, 48, 0.5);
  border: 1px solid rgba(111, 66, 193, 0.2);
  border-radius: 8px;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.2s ease;

  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    background: linear-gradient(135deg, #7e22ce, #0a5ad3b0);
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

const FormTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  color: #a0a0a0;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  background-color: rgba(30, 20, 48, 0.5);
  border: 1px solid rgba(111, 66, 193, 0.2);
  color: #fff;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #6f42c1;
    box-shadow: 0 0 0 2px #6f42c1;
  }
`;

const FormTextarea = styled.textarea`
  background-color: rgba(30, 20, 48, 0.5);
  border: 1px solid rgba(111, 66, 193, 0.2);
  color: #fff;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #6f42c1;
    box-shadow: 0 0 0 2px #6f42c1;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #7e22ce, #0a5ad3b0);
  color: #fff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const FooterCTA = styled.div`
  background: linear-gradient(135deg, #7e22ce, #0a5ad3b0);
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 4rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FooterSubtitle = styled.p`
  color: #e0e0e0;
`;

const Message = styled.p`
  margin-top: 1rem;
  font-weight: 600;
  color: ${props => props.color === 'success' ? '#4CAF50' : '#F44336'};
`;

export default function Contato() {
  // Estado para os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  // Estado para mensagens de feedback e carregamento
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Estados para o Firebase e a autenticação
  const [db, setDb] = useState<Firestore | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  // Use o objeto de configuração do Firebase fornecido por você, agora memoizado
  const firebaseConfig = useMemo(() => ({
  apiKey: "AIzaSyA43W1PPbZm55uGyja_bnvL5BA17NWsuwk",
  authDomain: "meuportifolio-8f34d.firebaseapp.com",
  projectId: "meuportifolio-8f34d",
  storageBucket: "meuportifolio-8f34d.firebasestorage.app",
  messagingSenderId: "35673509767",
  appId: "1:35673509767:web:7dbc4a5be662cbf3118d22",
  measurementId: "G-17YBTMVC2E"
  }), []);

  useEffect(() => {
    try {
      const app = initializeApp(firebaseConfig);
      const firestoreDb = getFirestore(app);
      const firebaseAuth = getAuth(app);
      
      setDb(firestoreDb);

      const unsubscribe = onAuthStateChanged(firebaseAuth, async (user: User | null) => {
        if (user) {
          setUserId(user.uid);
        } else {
          await signInAnonymously(firebaseAuth);
        }
        setIsAuthReady(true);
      });

      return () => unsubscribe();
    } catch (e) {
      console.error("Erro ao inicializar Firebase: ", e);
      setIsAuthReady(false);
    }
  }, [firebaseConfig]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthReady || isLoading || !db || !userId) {
      setMessageColor('error');
      setMessage('Aguardando a conexão com o banco de dados. Tente novamente.');
      console.log('Firebase não está pronto ou já está carregando. Abortando envio.');
      return;
    }
    
    setIsLoading(true);
    setMessage('');
    setMessageColor('');

    try {
      // Usa o projectId do firebaseConfig para o caminho da coleção
      const contactCollection = collection(db, `artifacts/${firebaseConfig.projectId}/users/${userId}/contact_messages`);
      
      await addDoc(contactCollection, {
        ...formData,
        timestamp: new Date()
      });
      
      setMessageColor('success');
      setMessage('Mensagem enviada com sucesso!');
      
      setFormData({
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
      });

    } catch (error) {
      console.error("Erro ao enviar mensagem para o Firestore:", error);
      setMessageColor('error');
      setMessage('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContatoSection>
      <HeaderContainer>
        <HeaderTitle>Pronto para <span className='skills-highlight'>Começar?</span></HeaderTitle>
        <HeaderSubtitle>
          Tem um projeto em mente? Vamos transformar sua ideia em uma <span className='skills-highlight'>solução digital excepcional</span>.
        </HeaderSubtitle>
      </HeaderContainer>

      <MainContent>
        <ContactInfoContainer>
          <InfoCard>
            <InfoTitle>Informações de Contato</InfoTitle>
            <ContactItem>
              <IconWrapper><FaEnvelope /></IconWrapper>
              <ContactText>
                <p>Email</p>
                <a href="mailto:anathyon@protonmail.com">anathyon@protonmail.com</a>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <IconWrapper><FaPhone /></IconWrapper>
              <ContactText>
                <p>Telefone</p>
                <p>(88) 99414-7362</p>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <IconWrapper><FaMapMarkerAlt /></IconWrapper>
              <ContactText>
                <p>Localização</p>
                <p>Meruoca, CE</p>
              </ContactText>
            </ContactItem>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Redes Sociais</InfoTitle>
            <SocialsGrid>
              <SocialButton href="#" target="_blank">
                <FaGithub /> GitHub
              </SocialButton>
              <SocialButton href="#" target="_blank">
                <FaLinkedin /> LinkedIn
              </SocialButton>
              <SocialButton href="#" target="_blank">
                <FaTwitter /> Twitter
              </SocialButton>
              <SocialButton href="#" target="_blank">
                <FaInstagram /> Instagram
              </SocialButton>
            </SocialsGrid>
          </InfoCard>
        </ContactInfoContainer>

        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>Envie uma Mensagem</FormTitle>
          <FormRow>
            <FormGroup>
              <FormLabel>Nome *</FormLabel>
              <FormInput 
                type="text" 
                name="nome"
                placeholder="Seu nome completo" 
                required 
                onChange={handleChange}
                value={formData.nome}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>E-mail *</FormLabel>
              <FormInput 
                type="email" 
                name="email"
                placeholder="seu@email.com" 
                required 
                onChange={handleChange}
                value={formData.email}
              />
            </FormGroup>
          </FormRow>
          
          <FormGroup style={{ marginBottom: '1.5rem' }}>
            <FormLabel>Assunto</FormLabel>
            <FormInput 
              type="text" 
              name="assunto"
              placeholder="Assunto da mensagem"
              onChange={handleChange}
              value={formData.assunto}
            />
          </FormGroup>
          
          <FormGroup style={{ marginBottom: '1.5rem' }}>
            <FormLabel>Mensagem *</FormLabel>
            <FormTextarea 
              name="mensagem"
              placeholder="Descreva seu projeto ou como posso ajudá-lo..." 
              required
              onChange={handleChange}
              value={formData.mensagem}
            />
          </FormGroup>
          
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
          </SubmitButton>

          {message && <Message color={messageColor}>{message}</Message>}
        </FormContainer>
      </MainContent>

      <FooterCTA>
        <FooterTitle>Pronto para Decolar?</FooterTitle>
        <FooterSubtitle>
          Transforme sua ideia em realidade. Vamos criar algo incrível juntos!
        </FooterSubtitle>
      </FooterCTA>
    </ContatoSection>
  );
}
