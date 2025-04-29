'use client';

import { DivWrap, SecCont, StyledH3, StyledImg } from '@/app/styles/globals';
import ScrollToExploreIcon from '@/app/ui/scrolltoexploreicon/ScrollToExploreIcon';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IntroStyledSpan, StyledLabel } from './style';

const IntroSec = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0', '1'],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [0, 1000]); // 스크롤 진행도 0~1을 translateY 0~100px로 매핑

    return (
        <>
            <div ref={ref} style={{ height: '100vh', position: 'relative' }}>
                <motion.div
                    style={{
                        y: translateY,
                    }}
                >
                    <SecCont>
                        <h2 className='sr-only'>제목</h2>
                        <DivWrap $padding='11vh 50px 3.7vh' $innerResponsive>
                            <DivWrap $padding='7.5vh 0' $display='flex' $flexDirection='column' $gap='0.4vh'>
                                <StyledH3 $variant='intro' $fontWeight='700'>
                                    Balancing
                                </StyledH3>
                                <StyledH3 $variant='intro' $fontWeight='100'>
                                    Learning
                                </StyledH3>
                                <DivWrap $display='flex' $gap='1vw'>
                                    <StyledH3 $variant='intro' $fontWeight='700'>
                                        and
                                    </StyledH3>
                                    <DivWrap
                                        $width='clamp(150px,30vh,250px)'
                                        $height='clamp(72px, 15vh,144px)'
                                        $introImgResponsive
                                    >
                                        <StyledImg src='./home/intro/seesaw-unscreen.gif'></StyledImg>
                                    </DivWrap>
                                </DivWrap>
                                <StyledH3 $variant='intro' $fontWeight='100'>
                                    Performance
                                </StyledH3>
                                <DivWrap $display='flex' $gap='1.5vw' $padding='3vh 0 0' $introLabelResponsive>
                                    <StyledLabel>Web Publisher</StyledLabel>
                                    <StyledLabel>FrontEnd Developer</StyledLabel>
                                </DivWrap>
                            </DivWrap>
                            <DivWrap
                                $width='100%'
                                $display='flex'
                                $flexDirection='column'
                                $alignItems='center'
                                $justifyContent='center'
                                $gap='1vh'
                                $padding='0 0 10vh'
                                $position='relative'
                            >
                                <IntroStyledSpan
                                    $fontWeight='700'
                                    $fontSize='clamp(12px, 1.5vw, 20px)'
                                    $color='#2c3e50'
                                >
                                    스크롤로 탐색하기
                                </IntroStyledSpan>
                                <ScrollToExploreIcon
                                    position='absolute'
                                    bottom='2vh'
                                    left='50%'
                                    transform='translateX(-50%)'
                                />
                            </DivWrap>
                        </DivWrap>
                    </SecCont>
                </motion.div>
            </div>
        </>
    );
};

export default IntroSec;
