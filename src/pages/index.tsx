
import {Main, Header, BannerSection, TextBanner, IconsSection } from "./styles"

import logoImg from "../../assets/logo.svg";
import homeMars from "../../assets/home-mars.svg";
import iconsRocket from "../../assets/icon-rocket.svg";
import iconsFlag from "../../assets/icon-flag.svg";
import iconsTelescope from "../../assets/icon-telescope.svg";

export function Home() {
   return (
      <Main>
         <Header>
            <img src={logoImg} alt="Logo Spacey"></img>
            <img src={homeMars} alt="Logo Spacey"></img>
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
                  <img src={iconsRocket} alt="" />
                  <span>Foguetes com a mais alta <br /> tecnologia e conforto.</span>
               </div>
               <div>
                  <img src={iconsFlag} alt="" />
                  <span>Mais de 100 missões <br /> consecutivas com sucesso.</span>
               </div>
               <div>
                  <img src={iconsTelescope} alt="" />
                  <span>Experiencia única <br /> e exclusiva.</span>
               </div>
            </IconsSection>
         </BannerSection>
      </Main>
   )
}