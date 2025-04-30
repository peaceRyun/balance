import { DivWrap } from '@/app/styles/globals';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const PDSDivWrap = styled.div`
    padding: ${(props) => props.$padding};
    margin: ${(props) => props.$margin};
    display: ${(props) => props.$display};
    gap: ${(props) => props.$gap};
    flex-direction: ${(props) => props.$flexDirection};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    overflow: ${(props) => (props.$overflow ? props.$overflow : 'hidden')};
    position: ${(props) => props.$position};
    border-radius: ${(props) => props.$borderRadius};
    bottom: ${(props) => props.$bottom};
    aspect-ratio: 16 / 9;
    max-height: 100%; /* max-height가 적용되면 height: auto는 max-height 범위 내에서 aspect-ratio에 맞게 높이를 조절합니다.
       max-height를 초과할 경우, 높이가 max-height로 고정되고, aspect-ratio에 따라 너비가 함께 줄어듭니다.
    */
`;

export const StyledSwiper = styled(Swiper)`
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    padding: 0 0 20vh;
    align-items: center;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
    width: 100% !important;
    max-width: 900px;
    @media (max-width: 1280px) {
        max-width: 768px;
    }
    @media (max-width: 768px) {
        max-width: 390px;
    }
    @media (max-height: 800px) {
        max-width: 768px;
    }
    @media (max-height: 600px) {
        max-width: 390px;
    }

    height: 100% !important;
`;

export const ImgFilter = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: transparent;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    ${PDSDivWrap}:hover & {
        background: linear-gradient(to top, black, transparent);
        opacity: 1;
    }
`;

export const PDSStyledImg = styled.img`
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    transition:
        transform 0.3s ease-in-out,
        opacity 0.3s ease-in-out;
    ${PDSDivWrap}:hover & {
        transform: scale(1.04);
        cursor: pointer;
    }
`;

export const PDSTitleStyledSpan = styled.span`
    font-family: var(--my-pretendard-font);
    font-weight: ${(props) => props.$fontWeight};
    font-size: clamp(1rem, 1vh, 1.5rem);
    @media (max-width: 1280px) {
        font-size: clamp(1rem, 1vh, 1rem);
    }
    @media (max-width: 1280px) {
        font-size: clamp(0.9rem, 1vh, 0.9rem);
    }
`;

export const PDSDateStyledSpan = styled.span`
    font-family: var(--my-pretendard-font);
    font-weight: ${(props) => props.$fontWeight};
    font-size: clamp(0.88rem, 1vh, 0.88rem);
`;

export const PDSCont = styled(DivWrap)`
    gap: 100px;
    @media (max-height: 700px) {
        gap: 60px; // 뷰포트 높이 700px 이하일 때 간격 줄임
    }
    @media (max-height: 550px) {
        gap: 40px; // 더 줄임
    }
`;
