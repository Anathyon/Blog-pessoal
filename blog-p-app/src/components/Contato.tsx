import { useState, useEffect, useMemo } from 'react';
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

  @media (max-width: 380px) {
    padding: 1.5rem 0.5rem;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    align-items: stretch; /* Alterado para esticar */
    flex-direction: row; /* Cards lado a lado */
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 767px) { /* Volta a ser coluna em mobile */
    flex-direction: column;
    align-items: center;
  }
`;

const InfoCard = styled.div`
  background-color: rgba(30, 20, 48, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(111, 66, 193, 0.2);
  border-radius: 12px;
  padding: 1.5rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex: 1; /* Permite que os cards cresçam igualmente */
    min-width: 300px; /* Largura mínima para cada card */
  }
  
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 400px;
  }     

  @media (max-width: 380px) {
    margin-right: 0;
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
    justify-content: left;
    text-align: left;
  }
   @media (max-width: 800px) {
    justify-content: flex-start;
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
    text-align: left;
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

  @media (max-width: 380px) {
    margin-right: 0;
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
  width: 100%; /* Garante que a linha ocupe todo o espaço */
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* Adicionado para garantir a largura total */
  
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
 apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
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
      console.log('Tentando enviar dados:', { ...formData, userId });
      const contactCollection = collection(db, 'contact_messages');
      
      const docRef = await addDoc(contactCollection, {
        ...formData,
        userId: userId,
        timestamp: new Date()
      });
      
      console.log('Documento criado com ID:', docRef.id);
      
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
    <ContatoSection id="contato">
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
              <SocialButton href="https://github.com/Anathyon" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </SocialButton>
              <SocialButton href="https://www.linkedin.com/in/anathyonerysson/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </SocialButton>
              <SocialButton href="https://x.com/anathyon?t=PJC7lZPV48cmzzea0FvE9Q&s=09" target="_blank" rel="noopener noreferrer">
                <FaTwitter /> Twitter
              </SocialButton>
              <SocialButton href="https://www.instagram.com/anathyon/" target="_blank" rel="noopener noreferrer">
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

      <FooterCTA className="shadow-lg" style={{boxShadow: '0 0.25rem 0.94rem #0a5ad3b0'}}>
        <FooterTitle>Pronto para Decolar?</FooterTitle>
        <FooterSubtitle>
          Transforme sua ideia em realidade. Vamos criar algo incrível juntos!
        </FooterSubtitle>
      </FooterCTA>
    </ContatoSection>
  );
}