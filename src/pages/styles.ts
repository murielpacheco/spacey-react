import styled from "styled-components";

export const Main = styled.main`
   width: 100%;
   height: 100%;
   overflow-x: hidden;

`

export const Header = styled.header`
   width: 100%;
   height: 89px;
   background-color: var(--background-color);
   position: relative;

      
   img:nth-child(1) {
      margin: 24px 0 24px 112px;
    }

   img:nth-child(2) {
      position: absolute;
      left: 1066px;
      top: 16px;
   }
`	

export const BannerSection = styled.section`
   background-color: var(--background-color);
   padding-top: 95px;
`

export const TextBanner = styled.div`
      width: 814px;
      height: 360px;
      margin-left: 112px;     
      display: flex;
      flex-direction: column;

      span {
      color: var(--sun);
      display: inline-block;
      text-transform: uppercase;
      line-height: 32px;
      letter-spacing: 5px;
   }

   strong {
      color: var(--text-color);
      font-size: 62px;
      line-height: 82px;
      font-weight: 800;
   }

   p {
      color: var(--gray-05);
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
      letter-spacing: 1px;
   }

   button {
      width: 264px;
      height: 52px;
      margin-top: 16px;
      background-color: var(--mars);
      border: none;
      border-radius: 10px;
      color: var(--text-color);
      font-size: 18px;
      line-height: 26px;
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
   background-color: var(--space-dark);
   margin: 133px 140px 0 133px;
   
   display: flex;
   justify-content: space-between;
   
   div {
      display: flex;
      flex-direction: column;
   }

   img {
      width: 56px;
      height: 56px;
      margin-bottom: 10px;
   }

   span {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 1px;
      font-weight: 400;
      color: var(--gray-05);
   }
`