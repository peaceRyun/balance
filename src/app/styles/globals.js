import styled from 'styled-components';

const getVariantTitleStyles = (variant) => {
    switch (variant) {
        case 'intro':
            return `
                font-family: var(--my-poppins-font);
                font-size: clamp(90px, 15vh, 180px);
                text-align: left;
                line-height: 0.8em;
                letter-spacing: -0.09em;
                color: rgb(52, 53, 57);
                @media (max-width: 1280px) {
                    font-size: clamp(73px, 16vh, 136px);
                }
                @media (max-width: 768px) {
                    font-size: clamp(40px, 16vh, 73px);
                }
      `;
        case 'subtitle':
            return `
            font-family: var(--my-pretendard-font);
            font-size: 30px;
            text-align: left;
            `;

        case 'titleLarge':
            return `
            font-family: var(--my-poppins-font);
            font-size: 2.5rem;
            letter-spacing: 1px;
            line-height: 150%;
            @media (max-width: 1280px) {
                font-size: 2.5rem;
            }
            @media (max-width: 768px) {
                font-size: 1.75rem;
            }
            @media (max-height: 800px) {
                        font-size: 2rem; 
                    }
            @media (max-height: 600px) {
                        font-size: 1.5rem; 
                    }
            `;

        case 'titleMedium':
            return `
                font-family: var(--my-pretendard-font);
                font-size: 32px;
                letter-spacing: 0px;
                line-height: 150%;
                @media (max-width: 1280px) {
                    font-size: 32px;
                }
                @media (max-width: 768px) {
                    font-size: 24px;
                }
                `;
    }
};

const introLabelResponsive = () => {
    return `
        @media (max-width: 768px) {
            flex-direction: column;
            padding: 10px 0 5px;
            gap: 10px;
        }
    `;
};

const introImgResponsive = () => {
    return `
        @media (max-width: 1280px) {
            width: clamp(100px, 15vh,204px);
            height: clamp(58.41px, 10vh, 108.8px);
        }
        @media (max-width: 768px) {
            width: 109.5px;
            height: 58.41px;
        }
    `;
};

const innerResponsive = () => {
    return `
        @media (max-width: 1280px) {
            padding: 6.5vh 30px 1.4vh;
        }
        @media (max-width: 768px) {
            padding: 7.7vh 20px 0;
        }
    `;
};

const innerBannerResponsive = () => {
    return `
        @media (max-width: 1280px) {
            padding: 0px 30px 0px;
        }
        @media (max-width: 768px) {
            padding: 0px 20px 0px;
        }
    `;
};

export const SecCont = styled.section`
    position: ${(props) => (props.$position ? props.$position : 'relative')};
    width: 100%;
    height: 100%;
    padding: ${(props) => props.$padding};
    background-color: ${(props) => props.$backgroundColor};
    overflow: ${(props) => props.$overFlow};
`;

export const Space = styled.div`
    position: ${(props) => props.$position};
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    padding: ${(props) => props.$padding};
    background-color: ${(props) => props.$backgroundColor};
`;

export const DivWrap = styled.div`
    padding: ${(props) => props.$padding};
    margin: ${(props) => props.$margin};
    display: ${(props) => props.$display};
    gap: ${(props) => props.$gap};
    flex-direction: ${(props) => props.$flexDirection};
    flex-shrink: ${(props) => props.$flexShrink};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    overflow: ${(props) => (props.$overflow ? props.$overflow : 'hidden')};
    position: ${(props) => props.$position};
    border-radius: ${(props) => props.$borderRadius};
    bottom: ${(props) => props.$bottom};
    color: ${(props) => props.$color};
    z-index: ${(props) => props.$zIndex};
    flex: ${(props) => props.$flex};
    ${(props) => (props.$introLabelResponsive ? introLabelResponsive() : null)}
    ${(props) => (props.$introImgResponsive ? introImgResponsive() : null)}
        ${(props) => (props.$innerResponsive ? innerResponsive() : null)}
        ${(props) => (props.$innerBannerResponsive ? innerBannerResponsive() : null)};
`;

export const UlWrap = styled.ul`
    padding: ${(props) => props.$padding};
    display: ${(props) => props.$display};
    gap: ${(props) => props.$gap};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    overflow: ${(props) => props.$overflow};
    position: ${(props) => props.$position};
    border-radius: ${(props) => props.$borderRadius};
`;

export const StyledLi = styled.li`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    padding: ${(props) => props.$padding};
    flex-shrink: ${(props) => props.$flexShrink};
`;

export const StyledSpan = styled.span`
    font-family: var(--my-pretendard-font);
    font-weight: ${(props) => props.$fontWeight};
    font-size: ${(props) => props.$fontSize};
    color: ${(props) => props.$color};
`;

export const StyledImg = styled.img`
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    position: ${(props) => props.$position};
    top: ${(props) => props.$top};
    left: ${(props) => props.$left};
    z-index: ${(props) => props.$zIndex};
    transition:
        transform 0.3s ease-in-out,
        opacity 0.3s ease-in-out;
    filter: ${(props) => props.$filter};
`;

export const StyledH2 = styled.h2`
    ${(props) => getVariantTitleStyles(props.$variant)}
    font-weight: ${(props) => props.$fontWeight};
`;

export const StyledH3 = styled.h3`
    ${(props) => getVariantTitleStyles(props.$variant)}
    font-weight: ${(props) => props.$fontWeight};
`;

export const StyledH4 = styled.h4`
    ${(props) => getVariantTitleStyles(props.$variant)}
    font-weight: ${(props) => props.$fontWeight};
`;

export const StyledP = styled.p`
    font-family: var(--my-pretendard-font);
    font-weight: ${(props) => props.$fontWeight};
    font-size: ${(props) => props.$fontSize};
    color: ${(props) => props.$color};
`;
