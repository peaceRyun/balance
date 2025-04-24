import styled from 'styled-components';

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
    &:hover {
        transform: scale(0.98);
        filter: brightness(60%);
    }
`;

export const PDSStyledLI = styled.li`
    font-family: var(--my-poppins-font);
    font-weight: ${(props) => props.$fontWeight};
    font-size: ${(props) => props.$fontSize};
    color: ${(props) => props.$color};
    flex-shrink: ${(props) => props.$flexShrink} !important;
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    padding: ${(props) => props.$padding};
    margin: ${(props) => props.$margin};
    border-radius: ${(props) => props.$borderRadius};
`;
