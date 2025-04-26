import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BoxDivWrap = styled.div`
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
    color: ${(props) => props.$color};
`;

export const StyledSwiper = styled(Swiper)`
    width: 100% !important;
    height: 630px !important;
    overflow: hidden;
    border-radius: 10px;
    .swiper-wrapper {
        display: flex;
        align-items: center;
    }
    .swiper-slide {
        margin-right: 4vw;
    }
    @media (max-width: 1280px) {
        height: 413px !important;
    }
    @media (max-width: 768px) {
        height: 135px !important;
    }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
    width: 930px !important;
    height: 100% !important;
    @media (max-width: 1280px) {
        width: 610px !important;
    }
    @media (max-width: 768px) {
        width: 200px !important;
    }
`;
