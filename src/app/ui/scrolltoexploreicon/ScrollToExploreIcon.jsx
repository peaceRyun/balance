import { Chevron } from "./style";
import styled from "styled-components";

const ScrollToExploreIcon = ({ position, bottom, left, transform }) => {
  return (
    <>
      <IconWrap
        $position={position}
        $bottom={bottom}
        $left={left}
        $transform={transform}
      >
        <Chevron></Chevron>
        <Chevron></Chevron>
        <Chevron></Chevron>
      </IconWrap>
    </>
  );
};

export default ScrollToExploreIcon;

const IconWrap = styled.div`
  position: ${(props) => props.$position};
  bottom: ${(props) => props.$bottom};
  left: ${(props) => props.$left};
  transform: ${(props) => props.$transform};
  display: flex;
  align-items: center;
  justify-content: center;
`;
