import styled from 'styled-components';

export const WebkitSpan = styled.span`
    font-family: var(--my-poppins-font);
    font-size: 60px;
    @media (max-width: 1280px) {
        font-size: 44px;
    }
    @media (max-width: 768px) {
        font-size: 32px;
    }
    font-weight: ${(props) => props.$fontWeight};
    color: ${(props) => props.$color};
    -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
    -webkit-background-clip: text;
    background-repeat: no-repeat;
    background-image: linear-gradient(#fff, #fff);
    background-size: 0% 100%;
`;

export const HighlightedKeyword = styled.span`
    -webkit-background-clip: text;
    background-repeat: no-repeat;
    background-image: linear-gradient(to top, #ffda63 0%, #ffda63 100%); /* 그라데이션 방향 변경 */
    background-size: 100% 0%; /* 초기 사이즈 변경 (높이 0%) */
    color: transparent; /* 기존 텍스트 색상 투명하게 */
`;
