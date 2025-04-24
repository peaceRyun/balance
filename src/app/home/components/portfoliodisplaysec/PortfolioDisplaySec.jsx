'use client';

import { DivWrap, SecCont, StyledH3, StyledImg, StyledP, UlWrap } from '@/app/styles/globals';
import { BoxDivWrap, PDSStyledLI } from './style';
import gsap from 'gsap';
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PortfolioDisplaySec = () => {
    useEffect(() => {
        //gsap.utils.toArray는 대상을 배열로 만들어줍니다.
        const list = gsap.utils.toArray('.portfolio .list li');
        const listA = gsap.utils.toArray('.portfolio .list .a');
        const listB = gsap.utils.toArray('.portfolio .list .b');
        const listC = gsap.utils.toArray('.portfolio .list .c');

        gsap.to(list, {
            //리스트 길이를 기반으로 마지막 요소까지 이동해야할 거리를 백분율 단위로 계산하는 수식입니다.
            xPercent: -100 * (list.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: '.portfolio',
                pin: true,
                scrub: 1,
                start: 'center center',
                end: '200%',
                marker: true,
            },
        });

        gsap.to(listA, {
            y: 50,
            rotation: 10,
            scrollTrigger: {
                trigger: '.portfolio',
                scrub: 2,
                end: '200%',
            },
        });

        gsap.to(listB, {
            y: -50,
            rotation: 20,
            scrollTrigger: {
                trigger: '.portfolio',
                scrub: 2,
                end: '200%',
            },
        });

        gsap.to(listC, {
            y: -50,
            x: 20,
            rotation: -10,
            scrollTrigger: {
                trigger: '.portfolio',
                scrub: 2,
                end: '200%',
            },
        });
    }, []);

    return (
        <SecCont className='portfolio' $padding='100px 0 0' $overFlow='hidden'>
            <h2 className='sr-only'>포트폴리오 섹션</h2>
            <DivWrap className='textBox' $width='100%' $margin='0 auto' $padding='0 50px' $color='#0f0d0d'>
                <StyledH3 $variant='sectitle'>Portfolio</StyledH3>
                <StyledP $fontSize='18px'>성과 영역</StyledP>
            </DivWrap>
            <UlWrap className='list' $display='flex' $padding='6% 0%'>
                <PDSStyledLI
                    className='a'
                    $variant='a'
                    $width='600px'
                    $height='320px'
                    $padding='0 30px'
                    $flexShrink='0'
                >
                    <BoxDivWrap $width='100%' $height='100%' $position='relative'>
                        <StyledImg src='./home/displayportfolio/thumb/pretcoord.png' alt='개인포폴241216' />
                    </BoxDivWrap>
                </PDSStyledLI>
                <PDSStyledLI
                    className='b'
                    $variant='b'
                    $width='600px'
                    $height='320px'
                    $padding='0 30px'
                    $flexShrink='0'
                >
                    <BoxDivWrap $width='100%' $height='100%' $position='relative'>
                        <StyledImg src='./home/displayportfolio/thumb/sunfish.png' alt='개인포폴241123' />
                    </BoxDivWrap>
                </PDSStyledLI>
                <PDSStyledLI
                    className='c'
                    $variant='c'
                    $width='600px'
                    $height='320px'
                    $padding='0 30px'
                    $flexShrink='0'
                >
                    <BoxDivWrap $width='100%' $height='100%' $position='relative'>
                        <StyledImg src='./home/displayportfolio/thumb/samcheonbike.png' alt='개인포폴241014' />
                    </BoxDivWrap>
                </PDSStyledLI>
                <PDSStyledLI
                    className='b'
                    $variant='b'
                    $width='600px'
                    $height='320px'
                    $padding='0 30px'
                    $flexShrink='0'
                >
                    <BoxDivWrap $width='100%' $height='100%' $position='relative'>
                        <StyledImg src='./home/displayportfolio/thumb/vancleef.png' alt='팀포폴250226' />
                    </BoxDivWrap>
                </PDSStyledLI>
                <PDSStyledLI
                    className='c'
                    $variant='c'
                    $width='600px'
                    $height='320px'
                    $padding='0 30px'
                    $flexShrink='0'
                >
                    <BoxDivWrap $width='100%' $height='100%' $position='relative'>
                        <StyledImg src='./home/displayportfolio/thumb/vibo.png' alt='팀포폴241231' />
                    </BoxDivWrap>
                </PDSStyledLI>
            </UlWrap>
        </SecCont>
    );
};

export default PortfolioDisplaySec;
