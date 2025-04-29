import styled from 'styled-components';

export const StyledLabel = styled.div`
    font-family: var(--my-poppins-font);
    font-weight: 600;
    color: rgb(52, 53, 57);
    border: 2px solid rgb(52, 53, 57);
    border-radius: 250px;
    padding: 10px 25px;
    font-size: clamp(8px, 2vh, 20px);
    width: min-content;
    white-space: nowrap;
    @media (max-width: 1280px) {
        font-size: 14px;
    }
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const IntroStyledSpan = styled.span`
    font-family: var(--my-poppins-font);
    font-weight: ${(props) => props.$fontWeight};
    font-size: ${(props) => props.$fontSize};
    color: ${(props) => props.$color};
    @media (max-width: 1280px) {
        font-size: 14px;
    }
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;
