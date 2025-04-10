import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: white;
`;

export const TextContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    pointer-events: none;
`;

export const MainText = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    color: black;
    margin: 0;
    line-height: 1.2;
    text-align: center;
`;

export const Bubble = styled.div`
    position: absolute;
    border-radius: 50%;
    transform: translate3d(0, 0, 0);
    will-change: left, top;
    transition: left 0.01s linear, top 0.01s linear;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
`;

export const Reflection = styled.div`
    position: absolute;
    border-radius: 50%;
`;

export const MainReflection = styled(Reflection)`
    background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0) 100%
    );
`;

export const SmallReflection1 = styled(Reflection)`
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 100%);
`;

export const SmallReflection2 = styled(Reflection)`
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%);
`;

export const SphereEffect = styled(Reflection)`
    background: radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0) 50%, rgba(180, 180, 200, 0.15) 100%);
    width: 100%;
    height: 100%;
`;

export const RainbowEffect = styled(Reflection)`
    background: linear-gradient(
        135deg,
        rgba(255, 0, 0, 0.03) 0%,
        rgba(255, 165, 0, 0.03) 20%,
        rgba(255, 255, 0, 0.03) 40%,
        rgba(0, 128, 0, 0.03) 60%,
        rgba(0, 0, 255, 0.03) 80%,
        rgba(75, 0, 130, 0.03) 100%
    );
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
`;
