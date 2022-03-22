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
      left: 1446px;
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
   width: 100%;
   background-color: var(--space-dark);
   padding: 133px 140px 0 112px;
   display: flex;
   flex-direction: row;
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

export const MarsSection = styled.section`
   background: linear-gradient(180deg, #040327 0%, #0D0E13 24.49%);
   
   > div {
      display: flex;
      align-items: center;
      gap: 132px;
   }

   img {
      margin-left: 42px;
   }
`

export const MarsText = styled.div`
   width: 648px;
   height: 397px;
   display: flex;
   flex-direction: column;


   span {
      color: var(--sun);
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 5px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 14px;
   }

   strong {
      color: var(--text-color);
      font-size: 32px;
      line-height: 48px;
      letter-spacing: 1px;
      font-weight: 700;
      margin-bottom: 26px;
   }

   p {
      color: var(--gray-05);
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 1px;
      font-weight: 400;
   }
`