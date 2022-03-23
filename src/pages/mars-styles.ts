import styled from "styled-components"

export const MarsSection = styled.section`
   background: linear-gradient(180deg, #040327 0%, #0D0E13 24.49%);
   width: 100%;
   height: 124rem;
   
   > div {
      display: flex;
      align-items: center;
      gap: 13.2rem;
   }

   img {
      margin-left: 4.2rem;
      height: 62.1rem;
      width: 62.1rem;
   }
`

export const MarsText = styled.div`
   width: 64.8rem;
   height: 39.7rem;
   display: flex;
   flex-direction: column;


   span {
      color: var(--sun);
      font-size: 1.8rem;
      line-height: 2.7rem;
      letter-spacing: 0.5rem;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 1.4rem;
   }

   strong {
      color: var(--text-color);
      font-size: 3.2rem;
      line-height: 4.8rem;
      letter-spacing: 0.1rem;
      font-weight: 700;
      margin-bottom: 2.6rem;
   }

   p {
      color: var(--gray-05);
      font-size: 1.6rem;
      line-height: 2.4rem;
      letter-spacing: 0.1rem;
      font-weight: 400;
   }
`


export const MarsGallery = styled.section`
   display: flex;
   align-items: center;
   gap: 30rem;

`

export const SubscriptionNow = styled.aside`
   width: 34.35rem;
   height: 22.9rem;
   margin: 16.8rem 9rem 0 11.2rem;

   display: flex;
   flex-direction: column;
   align-items: flex-start;

   img {
      width: 11.4rem;
      height: 2.5rem;
      margin-left: -0.05rem;
      margin-bottom: 1.3rem;
   }

   strong {
      color: var(--text-color);
      font-size: 3.2rem;
      line-height: 4.8rem;
      letter-spacing: 0.1rem;
      font-weight: 700;
      margin-bottom: 1.67rem;
   }

   span {
      color: var(--mars-light);
      font-size: 1.8rem;
      line-height: 2.6rem;
      font-weight: 700;

      cursor: pointer;

      :hover {
         text-decoration: underline;
      }
   }
`
