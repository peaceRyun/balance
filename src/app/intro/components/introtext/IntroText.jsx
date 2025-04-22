"use client";

import {
  DivWrap,
  SecCont,
  StyledH2,
  StyledImg,
  StyledLabel,
} from "@/app/styles/globals";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IntroText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0", "1"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]); // 스크롤 진행도 0~1을 translateY 0~100px로 매핑

  return (
    <>
      <div ref={ref} style={{ height: "200vh", position: "relative" }}>
        <motion.div
          style={{
            y: translateY,
          }}
        >
          <SecCont $padding="120px 50px 50px">
            <DivWrap $padding="75px 0">
              <StyledH2 $variant="intro" $fontWeight="700">
                Balancing
              </StyledH2>
              <StyledH2 $variant="intro" $fontWeight="100">
                Learning
              </StyledH2>
              <DivWrap $display="flex" $gap="10px">
                <StyledH2 $variant="intro" $fontWeight="700">
                  and
                </StyledH2>
                <DivWrap $width="350px" $height="160px">
                  <StyledImg src="./home/intro/seesaw-unscreen.gif"></StyledImg>
                </DivWrap>
                <StyledH2 $variant="intro" $fontWeight="100">
                  Performance
                </StyledH2>
              </DivWrap>
              <DivWrap $display="flex" $gap="15px" $padding="30px 0 0 ">
                <StyledLabel>Web Publisher</StyledLabel>
                <StyledLabel>FrontEnd Developer</StyledLabel>
              </DivWrap>
            </DivWrap>
          </SecCont>
        </motion.div>
      </div>
    </>
  );
};

export default IntroText;
