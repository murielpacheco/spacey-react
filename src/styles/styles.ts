import styled from "styled-components";

export const Main = styled.main`
   width: 100%;
   height: 100%;
   overflow-x: hidden;
   position: relative;

`

export const Header = styled.header`
   width: 100%;
   height: 8.9rem;
   background-color: var(--space-dark);
   position: relative;
   
   @media (max-width: 376px) {
      display: flex;
      justify-content: center;
      align-items: center;
   }

      
   img:nth-child(1) {
      width: 20.1rem;
      height: 4.1rem;
      margin: 2.4rem 0 2.4rem 11.2rem;

      @media (max-width: 376px) {
         margin: 0;
      }
    }

   img:nth-child(2) {
      width: 55rem;
      height: 56rem;
      position: absolute;
      left: 108.5rem;
      top: 1.6rem;
      
      @media (max-width: 376px) {
         width: 41rem;
         height: 42rem;
         left: 0;
         right: 0;
         top: 44rem;
      }
   }
`	

export const BannerSection = styled.section`
   background-color: var(--space-dark);
   padding-top: 9.5rem;

   @media (max-width: 376px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin-right: 2rem;
   }
`

export const TextBanner = styled.div`
      
      @media (max-width: 376px) {
         width: 100%;
         height: 33rem;
         margin-left: 1.6rem;
         align-items: center;
         justify-content: center;
         text-align: center;
      }
      
      width: 81.4rem;
      height: 36rem;
      margin-left: 11.2rem;     
      display: flex;
      flex-direction: column;

      span {
      color: var(--sun);
      display: inline-block;
      text-transform: uppercase;
      line-height: 3.2rem;
      letter-spacing: 0.5rem;

      @media (max-width: 376px) {
         font-size: 1rem;
         line-height: 2rem;
      }
   }

   strong {
      color: var(--text-color);
      font-size: 6.2rem ;
      line-height: 8.2rem;
      font-weight: 800;

      @media (max-width: 376px) {
         font-size: 2.4rem;
         line-height: 4.2rem;
      }
   }

   p {
      color: var(--gray-05);
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: 400;
      letter-spacing: 0.1rem;

      @media (max-width: 376px) {
         font-size: 1.5rem;
      }
   }

   button {
      width: 26.4rem;
      height: 5.2rem;
      margin-top: 1.6rem;
      background-color: var(--mars);
      border: none;
      border-radius: 1rem;
      font-size: 1.8rem;
      line-height: 2.6rem;
      font-weight: 700;

      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      :hover {
         filter: brightness(1.1);
      }

      a {
         color: var(--text-color);
      }

      @media (max-width: 376px) {
         width: 22rem;
         margin-bottom: 6.4rem;
      }
   }

`
export const IconsSection = styled.section`
   width: 100%;
   background-color: var(--space-dark);
   padding: 13.3rem 14.0rem 0 11.2rem;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   @media (max-width: 376px) {
      margin-bottom: 16rem;
      flex-direction: column;
      gap: 6.5rem;
      padding: 0;
      margin-left: 4.2rem;
      margin-top: 50rem;
   }
   
   div {
      display: flex;
      flex-direction: column;

      @media (max-width: 376px) {
         width: 22.6rem;
         height: 11.2rem;
         align-items: center;
         justify-content: center;
         text-align: center;
      }
   }

   img {
      width: 5.6rem;
      height: 5.6rem;
      margin-bottom: 1rem;
   }

   span {
      font-size: 1.6rem;
      line-height: 2.4rem;
      letter-spacing: 0.1rem;
      font-weight: 400;
      color: var(--gray-05);
   }
`