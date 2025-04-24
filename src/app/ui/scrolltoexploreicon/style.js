import styled, { keyframes } from "styled-components";

const base = "0.6rem";

const moveChevron = keyframes`
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translateY(${parseFloat(base) * 3.8}rem);
  }
  66.6% {
    opacity: 1;
    transform: translateY(${parseFloat(base) * 5.2}rem);
  }
  100% {
    opacity: 0;
    transform: translateY(${parseFloat(base) * 8}rem) scale(0.5);
  }
`;

export const Chevron = styled.div`
  position: absolute;
  width: calc(${base} * 3.5);
  height: calc(${base} * 0.8);
  opacity: 0;
  transform: scale(0.3);
  animation: ${moveChevron} 3s ease-out infinite;

  &:first-child {
    animation-delay: 1s;
  }

  &:nth-child(2) {
    animation-delay: 2s;
  }

  &::before,
  &::after {
    content: "";
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
