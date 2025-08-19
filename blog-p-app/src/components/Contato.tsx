import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

// Estilos usando styled-components
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
  text-align: left;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background-color: rgba(30, 20, 48, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(111, 66, 193, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
`;

const InfoTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  background-color: #6f42c1;
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
      color: #6f42c1;
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
    background-color: #6f42c1;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
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
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
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
  
  &:focus {
    outline: none;
    border-color: #6f42c1;
    box-shadow: 0 0 0 2px #6f42c1;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #6f42c1, #53389e);
  color: #fff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const FooterCTA = styled.div`
  background: linear-gradient(90deg, #53389e, #6f42c1);
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

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Aqui você pode adicionar a lógica para enviar o formulário (e.g., para uma API, e-mail, etc.)
  };

  return (
    <ContatoSection>
      <HeaderContainer>
        <HeaderTitle>Pronto para <span style={{ color: '#6f42c1' }}>Começar?</span></HeaderTitle>
        <HeaderSubtitle>
          Tem um projeto em mente? Vamos transformar sua ideia em uma <span style={{ color: '#6f42c1' }}>solução digital excepcional</span>.
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
                <a href="mailto:contato@desenvolvedor.com">contato@desenvolvedor.com</a>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <IconWrapper><FaPhone /></IconWrapper>
              <ContactText>
                <p>Telefone</p>
                <p>(11) 99999-9999</p>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <IconWrapper><FaMapMarkerAlt /></IconWrapper>
              <ContactText>
                <p>Localização</p>
                <p>São Paulo, SP</p>
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
            />
          </FormGroup>
          
          <FormGroup style={{ marginBottom: '1.5rem' }}>
            <FormLabel>Mensagem *</FormLabel>
            <FormTextarea 
              name="mensagem"
              placeholder="Descreva seu projeto ou como posso ajudá-lo..." 
              required
              onChange={handleChange}
            />
          </FormGroup>
          
          <SubmitButton type="submit">
            Enviar Mensagem
          </SubmitButton>
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