import styled from "styled-components";

export const FormSection = styled.div`
   @media (max-width: 376px) {
      display: none;
   }

   width: 100%;
   background: #0D0E13;

   display: flex;
   gap: 14.4rem;

`

export const ContainerForm = styled.div`
   width: 52rem;
   height: 79rem;
   background: var(--background-form);
   border-radius: 2rem;
   padding-left: 5.2rem;
   margin-left: 11.2rem;

   display: flex;
   flex-direction: column;
   gap: 1.6rem;

   img {
      width: 5.6rem;
      height: 5.6rem;
      margin-top: 4rem;

   }

   button {
      width: 41.6rem;
      height: 5.6rem;
      background-color: var(--mars);
      color: var(--text-color);
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
   }
`

export const DivForm = styled.div`
   display: flex;
   flex-direction: column;

   strong {
      display: inline-block;
      width: 26.4rem;
      color: var(--text-color);
      font-size: 2.4rem;
      line-height: 3.2rem;
      letter-spacing: 1px;
      font-weight: 500;
      margin-bottom: 1.6rem;
   }

   span {
      color: var(--gray-05);
      font-size: 1.6rem;
      line-height: 2rem;
      font-weight: 500;
      margin-bottom: 3.2rem;
   }

   label {
      color: var(--text-color);
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 400;
   }

   input {
      width: 41.6rem;
      height: 5.6rem;
      margin: 2.4rem 5rem 2.4rem 0;
      border: 1px solid var(--gray-05);
      border-radius: .6rem;
      background: transparent;
      
      color: var(--text-color);
      font-size: 2.4rem;

      ::-webkit-input-placeholder {
         font-size: 1.6rem;
         padding-left: 1.4rem;
      }

      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
         -webkit-appearance: none;
      }
   }
   
`

export const DivInputCheckBox = styled.div`
   display: flex;
   padding-bottom: 2.2rem;
   
   input {
      width: 2.4rem;
      height: 2.4rem;
      border: 1px solid var(--gray-05);
      border-radius: .6rem;
      background-color: transparent;
      appearance: none;
      margin-right: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &:checked {
      background-color: var(--mars);
    }

   }

   p {
      color: var(--gray-05);
      font-size: 1.6rem;
      line-height: 2.4rem;
   }
`

export const DivFormImage = styled.div`
   @media (max-width: 376px) {
      display: none;
   }
   
   width: 100%;
   background: #0D0E13;
   img {
      width: 100%;
   }
`