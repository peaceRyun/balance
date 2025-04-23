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
      `;
        case 'subtitle':
            return `
            font-family: var(--my-pretendard-font);
            font-size: 30px;
            text-align: left;
            `;
    }
};

export const SecCont = styled.section`
    position: ${(props) => (props.$position ? props.$position : 'relative')};
    width: 100%;
    height: 100%;
    padding: ${(props) => props.$padding};
    background-color: ${(props) => props.$backgroundColor};
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
`;

export const UlWrap = styled.ul`
    padding: ${(props) => props.$padding};
    display: ${(props) => props.$display};
    gap: ${(props) => props.$gap};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    overflow: ${(props) => (props.$overflow ? props.$overflow : 'visible')};
    position: ${(props) => props.$position};
`;

export const StyledSpan = styled.span`
    font-family: var(--my-poppins-font);
    font-weight: ${(props) => props.$fontWeight};
    font-size: ${(props) => props.$fontSize};
    color: #2c3e50;
`;

export const StyledImg = styled.img`
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
`;

export const StyledH2 = styled.h2`
    ${(props) => getVariantTitleStyles(props.$variant)}
    font-weight: ${(props) => props.$fontWeight}
`;

export const StyledH3 = styled.h3`
    ${(props) => getVariantTitleStyles(props.$variant)}
    font-weight: ${(props) => props.$fontWeight}
`;

export const StyledLabel = styled.div`
    font-family: var(--my-poppins-font);
    font-weight: 600;
    color: rgb(52, 53, 57);
    border: 2px solid rgb(52, 53, 57);
    border-radius: 250px;
    padding: 10px 25px;
    font-size: 20px;
`;
