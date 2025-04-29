import styled, { keyframes } from 'styled-components';

const baseVh = 0.5;

const moveChevron = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, ${baseVh * 0}vh);
  }
   25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translate(-50%, ${baseVh * 3.8}vh) ;
  }
  66.6% {
    opacity: 1;
    transform: translate(-50%, ${baseVh * 5.2}vh) ;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, ${baseVh * 8}vh) scale(0.5);
  }
`;

export const Chevron = styled.div`
    position: absolute;
    top: 0;
    left: 50%;

    width: ${baseVh * 3.5}vh;
    height: ${baseVh * 0.8}vh;

    opacity: 0;
    animation: ${moveChevron} 3s ease-out infinite;

    &:first-child {
        animation-delay: 1s;
    }

    &:nth-child(2) {
        animation-delay: 2s;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background: #2c3e50;
    }

    &::before {
        left: 0;
        transform: skewY(30deg);
    }

    &::after {
        right: 0;
        width: 50%;
        transform: skewY(-30deg);
    }
`;

export const IconWrap = styled.div`
    position: ${(props) => props.$position};
    bottom: ${(props) => props.$bottom};
    left: ${(props) => props.$left};
    transform: ${(props) => props.$transform};

    width: ${baseVh * 10}vh;
    height: ${baseVh * 12}vh;
`;
