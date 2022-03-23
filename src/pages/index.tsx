import { Gallery } from "../components/Gallery";

import { Main,Header, BannerSection, TextBanner, IconsSection } from "../styles/styles"
import { MarsSection, MarsText, SubscriptionNow, MarsGallery } from "../styles/mars-styles"
import { FormSection, ContainerForm, DivForm, DivInputCheckBox, DivFormImage } from "../styles/form-styles"
import {Footer} from "../styles/footer-styles"

import logoImg from "/assets/logo.svg";
import homeMars from "/assets/home-mars.svg";
import iconsRocket from "/assets/icon-rocket.svg";
import iconsFlag from "/assets/icon-flag.svg";
import iconsTelescope from "/assets/icon-telescope.svg";
import iconTicket from "/assets/icon-ticket.svg";
import marsImg from "/assets/mars.svg";
import rocketLaunch from "/assets/rocket-illustra.svg";
import smokeFooter from "/assets/smoke-footer.svg";
import instagram from "/assets/instagram.svg";
import linkedin from "/assets/linkedin.svg";
import facebook from "/assets/facebook.svg";

export function Home() {
   return (
      <Main>
         <Header id="header">
            <img src={logoImg} alt="Logo Spacey"></img>
            <img src={homeMars} alt="Mars"></img>
         </Header>
         <BannerSection>
            <TextBanner>
               <span>Finalmente é possível!</span>  
               <strong>Sua jornada para Marte começa aqui.</strong> 
               <p>A primeira viagem para Marte estará disponivél a partir do dia <br/> 12/03/2028.
                  Inscreva-se em nossa lista de espera.
               </p>
               <button type="button"><a href="#form-section">Increva-se agora</a></button>
            </TextBanner>
            <IconsSection>
               <div>
                  <img src={iconsRocket} alt="Rocket icon" />
                  <span>Foguetes com a mais alta <br /> tecnologia e conforto.</span>
               </div>
               <div>
                  <img src={iconsFlag} alt="Flag icon" />
                  <span>Mais de 100 missões <br /> consecutivas com sucesso.</span>
               </div>
               <div>
                  <img src={iconsTelescope} alt="Telescope icon" />
                  <span>Experiencia única <br /> e exclusiva.</span>
               </div>
            </IconsSection>
         </BannerSection>
         <MarsSection>
            <div>
               <img src={marsImg} alt="Mars" />
               <MarsText>
                  <span>Por que marte?</span>
                  <strong>Sobre o planea vermelho</strong>
                  <p>A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis
                     mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol,
                     então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar.
                     Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e
                     alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte
                     apenas comprimindo a atmosfera.
                  </p>
               </MarsText>
            </div>
            <MarsGallery>
               <SubscriptionNow>
                  <img src={logoImg} alt="Logo Spacey" />
                  <strong>
                     O caminho para <br /> tornar a humanidade multiplanetária.
                  </strong>
                  <a href="#form-section">Inscreva-se agora</a>
               </SubscriptionNow>
               <Gallery />
            </MarsGallery>
         </MarsSection>
         <FormSection id="form-section">
            <ContainerForm>
               <img src={iconTicket} alt="Ticket form" />
               <DivForm>
                  <strong>Garanta sua vaga para a primeira viagem</strong>
                  <span>Preencha os campos abaixo para entrar na lista de espera</span>
                  <label htmlFor="name">Seu nome</label>
                  <input type="text" name="name" placeholder="Digite seu nome" />
                  <label htmlFor="email">E-mail</label>
                  <input type="email" name="email" placeholder="email@email.com"/>
                  <label htmlFor="phone">Telefone</label>
                  <input type="number" name="phone" placeholder="(XX) XXXXX-XXXX"/>
               </DivForm>
               <DivInputCheckBox>
                  <input type="checkbox" />
                  <p>Concordo em receber comunicações por email.</p>
               </DivInputCheckBox>
               <button>Garantir minha vaga</button>
            </ContainerForm>
               <img src={rocketLaunch} alt="Rocket" />
         </FormSection>
         <DivFormImage>
               <img src={smokeFooter} alt="Smoke" />
         </DivFormImage>
         <Footer>
            <img src={logoImg} alt="Spacey logo" />
            <ul>
               <a href="https://bit.ly/354NBq4" target="_blank">
                  <img src={instagram} alt="instagram" />
               </a>
               <a href="https://bit.ly/3IBCX7Q" target="_blank">
                  <img src={linkedin} alt="Linkedin" />
               </a>
               <a href="https://bit.ly/3L8eZ66" target="_blank">
                  <img src={facebook} alt="Facebook" />
               </a>
            </ul>
            <div>
               <a href="#header">Início</a>
               <a>Sobre nós</a>
               <a>Missões</a>
               <a>Contato</a>
            </div>
         </Footer>
      </Main>
   )
}