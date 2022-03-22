import styled from "styled-components";
import { keyframes } from "styled-components";

const swiper = keyframes`
  from {
    transform: translateX(0%)
  }
  to {
    transform: translateX(100%)
  }
`;

export const GalleryContainer = styled.div`
  width: 112.4rem;
  height: 35.3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  
  img {
    width: 32.5rem;
    height: 31.3rem;
    border-radius: 1rem;
    margin-right: 3.2rem;
    animation: ${swiper} 20s linear infinite;
  }
`;

export const ArrowLeft = styled.div`
  display: flex;
  background: url("../../../assets/chevron-left.svg") no-repeat;
  width: 4.2rem;
  background-position: center;
  cursor: pointer;
  margin: 2rem;
`;

export const ArrowRight = styled.div`
  display: flex;
  background: url("../../../assets/chevron-left.svg") no-repeat;
  transform: rotate(180deg);
  width: 4.2rem;
  background-position: center;
  cursor: pointer;
  margin: 2rem,;
`;