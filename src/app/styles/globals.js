import styled from 'styled-components';

const getVariantTitleStyles = (variant) => {
    switch (variant) {
        case 'intro':
            return `
                font-family: var(--my-poppins-font);
                font-size: 180px;
                text-align: left;
                line-height: 0.8em;
                letter-spacing: -0.09em;
                color: rgb(52, 53, 57);
                @media (max-width: 1280px) {
                    font-size: 136px;
                }
                @media (max-width: 768px) {
                    font-size: 73px;
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
            font-family: var(--my-pretendard-font);
            font-size: 40px;
            letter-spacing: 1px;
            line-height: 150%;
            @media (max-width: 1280px) {
                font-size: 40px;
            }
            @media (max-width: 768px) {
                font-size: 28px;
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
            width: 204px;
            height: 108.8px;
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
            padding: 70px 20px 15px;
        }
        @media (max-width: 768px) {
            padding: 50px 30px 0px;
        }
    `;
};

const innerBannerResponsive = () => {
    return `
        @media (max-width: 1280px) {
            padding: 0px 20px 0px;
        }
        @media (max-width: 768px) {
            padding: 0px 30px 0px;
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
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    overflow: ${(props) => (props.$overflow ? props.$overflow : 'hidden')};
    position: ${(props) => props.$position};
    border-radius: ${(props) => props.$borderRadius};
    bottom: ${(props) => props.$bottom};
    color: ${(props) => props.$color};
    ${(props) => (props.$introLabelResponsive ? introLabelResponsive() : null)}
    ${(props) => (props.$introImgResponsive ? introImgResponsive() : null)}
    ${(props) => (props.$innerResponsive ? innerResponsive() : null)}
    ${(props) => (props.$innerBannerResponsive ? innerBannerResponsive() : null)}
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
    font-family: var(--my-poppins-font);
    font-weight: ${(props) => props.$fontWeight};
    font-size: ${(props) => props.$fontSize};
    color: ${(props) => props.$color};
`;

export const StyledImg = styled.img`
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    transition:
        transform 0.3s ease-in-out,
        opacity 0.3s ease-in-out;
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
