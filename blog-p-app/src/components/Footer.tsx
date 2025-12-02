import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

// Estilos usando styled-components
const FooterContainer = styled.footer`
  background-color: #0b0d17;
  color: #fff;
  padding: 4rem 1.5rem;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 2rem;
  border-bottom: 1px solid #333;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const BrandInfo = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const LogoIcon = styled.div`
  background: linear-gradient(135deg, #7e22ce, #0a5ad3b0);
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
`;

const LogoText = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const Tagline = styled.p`
  font-size: 0.875rem;
  color: #a0a0a0;
  margin-top: 0.25rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #a0a0a0;
  line-height: 1.5;
  margin-top: 1rem;
  
  @media (max-width: 1024px) {
    max-width: 500px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const SocialButton = styled.a`
  width: 40px;
  height: 40px;
  background-color: #1f2937;
  color: #a0a0a0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #7e22ce, #0a5ad3b0);
    color: #fff;
  }
`;

const LinksSection = styled.div`
  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`;

const LinksTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.5rem;
    
    a {
      color: #a0a0a0;
      text-decoration: none;
      transition: color 0.2s ease;
      
      &:hover {
        color: #6f42c1;
      }
    }
  }
  
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CopyrightSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1.5rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding-top: 1rem;
  }
`;

const CopyrightText = styled.p`
  font-size: 0.875rem;
  color: #a0a0a0;
  margin: 0;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandInfo>
          <Logo>
            <LogoIcon className="shadow-lg" style={{boxShadow: '0 0.25rem 0.94rem #0a5ad3b0'}}> <img src="/logo/Logotipo.png" alt="Logo" className="w-full h-full object-cover" style={{borderRadius: '8px'}} /> </LogoIcon>
            <div>
              <LogoText>Desenvolvedor Web</LogoText>
              <Tagline>Transformando ideias em realidade</Tagline>
            </div>
          </Logo>
          <Description>
            Especializado em criar experiências digitais modernas e eficientes que geram resultados reais para o seu negócio.
          </Description>
          <SocialLinks>
            <SocialButton href="https://github.com/Anathyon" target="_blank">
              <FaGithub size={20} />
            </SocialButton>
            <SocialButton href="https://www.linkedin.com/in/anathyonerysson/" target="_blank">
              <FaLinkedinIn size={20} />
            </SocialButton>
            <SocialButton href="https://x.com/anathyon?t=PJC7lZPV48cmzzea0FvE9Q&s=09" target="_blank">
              <FaTwitter size={20} />
            </SocialButton>
            <SocialButton href="mailto:anathyon@protonmail.com" target="_blank">
              <FaEnvelope size={20} />
            </SocialButton>
          </SocialLinks>
        </BrandInfo>

        <LinksSection>
          <LinksTitle>Links Rápidos</LinksTitle>
          <LinkList>
            <li><a href="#home">Início</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </LinkList>
        </LinksSection>

        <LinksSection>
          <LinksTitle>Serviços</LinksTitle>
          <LinkList>
            <li><a href="https://wa.me/5588994147362?text=Ol%C3%A1%2C%20encontrei%20seu%20site%20e%20gostaria%20de%20solicitar%20uma%20consultoria%20t%C3%A9cnica%20na%20%C3%A1rea%20de%20desenvolvimento%20frontend.%20Tenho%20interesse%20em%20compreender%20melhor%20as%20solu%C3%A7%C3%B5es%20que%20voc%C3%AA%20pode%20oferecer%20para%20aprimorar%20a%20interface%20e%20a%20experi%C3%AAncia%20do%20usu%C3%A1rio.">Desenvolvimento Frontend</a></li>
            {/* <li><a href="#">Desenvolvimento Backend</a></li> */}
            <li><a href="https://wa.me/5588994147362?text=Oi%2C%20vi%20seu%20site%20e%20quero%20fazer%20uma%20consultoria%20t%C3%A9cnica.">Consultoria Técnica</a></li>
            <li><a href="https://wa.me/5588994147362?text=Oi%2C%20vi%20seu%20site%20e%20quero%20uma%20consultoria%20t%C3%A9cnica%20voltada%20para%20otimiza%C3%A7%C3%A3o%20de%20performance.%20Pode%20me%20explicar%20como%20funciona%3F">Otimização de Performance</a></li>
            <li><a href="https://wa.me/5588994147362?text=Ol%C3%A1%2C%20visitei%20seu%20site%20e%20gostaria%20de%20solicitar%20uma%20consultoria%20t%C3%A9cnica%20voltada%20para%20reestrutura%C3%A7%C3%A3o%20ou%20upgrade%20de%20c%C3%B3digo%20j%C3%A1%20existente.%20Tenho%20interesse%20em%20entender%20como%20podemos%20melhorar%20a%20qualidade%20e%20a%20efici%C3%AAncia%20do%20projeto%20atual.">Reestruturação ou upgrade de código já existente</a></li>
          </LinkList>
        </LinksSection>
      </FooterContent>

      <CopyrightSection>
        <CopyrightText>
          Feito com <span role="img" aria-label="coração">❤️</span> e muito <span role="img" aria-label="café">☕️</span> por Desenvolvedor Web
        </CopyrightText>
        <CopyrightText>
          © 2025 Portfólio. Todos os direitos reservados.
        </CopyrightText>
      </CopyrightSection>
    </FooterContainer>
  );
}