import styled from 'styled-components';

export const WebkitSpan = styled.span`
    font-family: var(--my-poppins-font);
    font-weight: ${(props) => props.$fontWeight};
    font-size: ${(props) => props.$fontSize};
    color: ${(props) => props.$color};
    -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
    -webkit-background-clip: text;
    background-repeat: no-repeat;
    background-image: linear-gradient(#fff, #fff);
    background-size: 0% 100%;
`;
