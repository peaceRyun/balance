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
    padding: 6% 0%;
    width: 100% !important;
    height: auto;
    overflow: visible;
    border-radius: 10px;
    .swiper-wrapper {
        display: flex;
        align-items: center;
    }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
    width: calc(100vw * 0.5);
    height: auto;
    aspect-ratio: 1.5 / 1;
    border-radius: 10px;
    border-radius: ${(props) => props.$borderRadius};
`;
