import styled from "styled-components";

export const Main = styled.main`
   width: 100%;
   height: 100%;
   overflow-x: hidden;

`

export const Header = styled.header`
   width: 100%;
   height: 8.9rem;
   background-color: var(--space-dark);
   position: relative;

      
   img:nth-child(1) {
      width: 20.1rem;
      height: 4.1rem;
      margin: 2.4rem 0 2.4rem 11.2rem;
    }

   img:nth-child(2) {
      width: 55rem;
      height: 56rem;
      position: absolute;
      left: 142.5rem;
      top: 1.6rem;
   }
`	

export const BannerSection = styled.section`
   background-color: var(--space-dark);
   padding-top: 9.5rem;
`

export const TextBanner = styled.div`
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
   }

   strong {
      color: var(--text-color);
      font-size: 6.2rem ;
      line-height: 8.2rem;
      font-weight: 800;
   }

   p {
      color: var(--gray-05);
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: 400;
      letter-spacing: 0.1rem;
   }

   button {
      width: 26.4rem;
      height: 5.2rem;
      margin-top: 1.6rem;
      background-color: var(--mars);
      border: none;
      border-radius: 1rem;
      color: var(--text-color);
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
   }

`
export const IconsSection = styled.section`
   width: 100%;
   background-color: var(--space-dark);
   padding: 13.3rem 14.0rem 0 11.2rem;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   
   div {
      display: flex;
      flex-direction: column;
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

