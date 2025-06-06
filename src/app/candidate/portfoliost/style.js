import styled from 'styled-components';

export const SecAniCont = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 200vh;
    z-index: 3;
`;

export const AniLi = styled.li`
    position: relative;
    width: 137px;
    height: 90px;
    transform: matrix(1, 0, 0, 1, 0, 800);
    overflow: hidden;
    margin: ${(props) => props.$margin};
`;
