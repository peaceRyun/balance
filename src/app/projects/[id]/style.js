import styled from 'styled-components';

export const MainBannerWrap = styled.div`
    position: relative;
    width: 100%;
    height: 587px;
    overflow: hidden;
    @media (max-width: 1280px) {
        height: 510px;
    }
`;

export const HeadingWrapDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    width: 100%;
    max-width: 1400px;
    padding: 0 30px;
    @media (max-width: 1280px) {
        max-width: auto;
    }
    @media (max-width: 768px) {
        max-width: auto;
        padding: 0 20px;
    }
`;

export const StyledWaveDiv = styled.div`
    position: absolute;
    bottom: -76px;
    left: 0;
    width: 5000px;
    height: 247px;
    z-index: 3;
    object-fit: contain;
    animation: wave 30s linear infinite;
    background: url(/projects/bg_wave.png) no-repeat;
    @keyframes wave {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-25%);
        }
        100% {
            transform: translateX(-50%);
        }
    }
    @media (max-width: 1280px) {
        bottom: 0px;
        height: 160px;
        animation: wave 25s linear infinite;
    }
`;

export const ImgFilter = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
`;

export const TheStyledH2 = styled.h2`
    color: white;
    font-size: 60px;
    font-weight: 700;
`;

export const StickyCont = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
`;

export const MainCont = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    @media (max-width: 1280px) {
        padding: 0 30px;
    }
    @media (max-width: 1280px) {
        padding: 0 20px;
    }
`;

export const ContsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
`;
