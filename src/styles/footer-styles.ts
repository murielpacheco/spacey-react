import styled from "styled-components";

export const Footer = styled.footer`
   width: 100%;
   height: 10rem;
   background-color: var(--background-color);
   padding: 0 11.2rem;

   display: flex;
   justify-content: space-between;
   align-items: center;

   img {
      width: 22.7rem;
      height: 3.5rem;
   }

   ul {
      display: flex;
      gap: 1.8rem;

      img {
         width: 2.5rem;
         height: 2.5rem;
         cursor: pointer;

      }
   }

   div {
      font-size: 1.6rem;
      line-height: 2rem;
      color: var(--text-color);
      font-weight: 400;

      display: flex;
      gap: 3.4rem;

      a {
         cursor: pointer;
         text-decoration: none;
         color: var(--text-color);

         :hover {
            color: var(--mars);
         }
      }
   }
`