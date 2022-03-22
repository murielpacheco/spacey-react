
import {
   Main,
   Header,
   BannerSection,
   TextBanner,
   IconsSection,
   MarsSection,
   MarsText,
   SubscriptionNow,
   MarsGallery
} from "./styles"

import logoImg from "/assets/logo.svg";
import homeMars from "/assets/home-mars.svg";
import iconsRocket from "/assets/icon-rocket.svg";
import iconsFlag from "/assets/icon-flag.svg";
import iconsTelescope from "/assets/icon-telescope.svg";
import marsImg from "/assets/mars.svg";
import { Gallery } from "../components/Gallery";

export function Home() {
   return (
      <Main>
         <Header>
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
               <button type="button"> Increva-se agora</button>
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
                  <span>Inscreva-se agora</span>
               </SubscriptionNow>
               <Gallery />
            </MarsGallery>
         
         </MarsSection>
      </Main>
   )
}