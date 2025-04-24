import { DivWrap, StyledImg, UlWrap } from "@/app/styles/globals";
import { AniLi, SecAniCont } from "./style";

const PortfolioST = () => {
  return (
    <SecAniCont>
      <UlWrap $display="flex" $alignItems="center" $justifyContent="center">
        <AniLi>
          <DivWrap $width="100%" $height="100%" $borderRadius="10px">
            <StyledImg
              src="./home/displayportfolio/thumb/pretcoord.png"
              alt="pretcoord"
            />
          </DivWrap>
        </AniLi>
        <AniLi $margin="0 20px 0">
          <DivWrap $width="100%" $height="100%" $borderRadius="10px">
            <StyledImg
              src="./home/displayportfolio/thumb/samcheonbike.png"
              alt="samcheonbike"
            />
          </DivWrap>
        </AniLi>
        <AniLi>
          <DivWrap $width="100%" $height="100%" $borderRadius="10px">
            <StyledImg
              src="./home/displayportfolio/thumb/sunfish.png"
              alt="sunfish"
            />
          </DivWrap>
        </AniLi>
      </UlWrap>
    </SecAniCont>
  );
};

export default PortfolioST;
