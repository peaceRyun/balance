"use client";

import {
  DivWrap,
  SecCont,
  StyledH2,
  StyledH3,
  StyledImg,
  StyledLabel,
  StyledSpan,
} from "@/app/styles/globals";
import ScrollToExploreIcon from "@/app/ui/scrolltoexploreicon/ScrollToExploreIcon";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IntroText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0", "1"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 1000]); // 스크롤 진행도 0~1을 translateY 0~100px로 매핑

  return (
    <>
      <div ref={ref} style={{ height: "90vh", position: "relative" }}>
        <motion.div
          style={{
            y: translateY,
          }}
        >
          <SecCont>
            <h2 className="sr-only">제목</h2>
            <DivWrap $padding="120px 50px 50px">
              <DivWrap $padding="75px 0">
                <StyledH3 $variant="intro" $fontWeight="700">
                  Balancing
                </StyledH3>
                <StyledH3 $variant="intro" $fontWeight="100">
                  Learning
                </StyledH3>
                <DivWrap $display="flex" $gap="10px">
                  <StyledH3 $variant="intro" $fontWeight="700">
                    and
                  </StyledH3>
                  <DivWrap $width="350px" $height="160px">
                    <StyledImg src="./home/intro/seesaw-unscreen.gif"></StyledImg>
                  </DivWrap>
                  <StyledH3 $variant="intro" $fontWeight="100">
                    Performance
                  </StyledH3>
                </DivWrap>
                <DivWrap $display="flex" $gap="15px" $padding="30px 0 0 ">
                  <StyledLabel>Web Publisher</StyledLabel>
                  <StyledLabel>FrontEnd Developer</StyledLabel>
                </DivWrap>
              </DivWrap>
              <DivWrap
                $width="100%"
                $display="flex"
                $flexDirection="column"
                $alignItems="center"
                $justifyContent="center"
                $gap="10px"
                $padding="200px 0 100px"
              >
                <StyledSpan $fontWeight="700" $fontSize="20px" $color="#2c3e50">
                  스크롤로 탐색하기
                </StyledSpan>
                <ScrollToExploreIcon />
              </DivWrap>
            </DivWrap>
          </SecCont>
        </motion.div>
      </div>
    </>
  );
};

export default IntroText;
