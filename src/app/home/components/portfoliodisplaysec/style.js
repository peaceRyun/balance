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
`;

export const StyledSwiper = styled(Swiper)`
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    padding: 0 0 180px;
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
    ${(props) => props.$isHovering && `background: linear-gradient(to top, black, transparent); opacity: 1`}
`;

export const PDSStyledImg = styled.img`
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    transition:
        transform 0.3s ease-in-out,
        opacity 0.3s ease-in-out;
    ${(props) => (props.$isHovering ? `transform: scale(1.04); cursor: pointer` : `transform: scale(1); cursor: auto`)}
`;
