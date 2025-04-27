'use client';

import { DivWrap, SecCont, StyledH3, StyledH4, StyledImg, StyledP } from '@/app/styles/globals';
import { BoxDivWrap, StyledSwiper, StyledSwiperSlide } from './style';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import 'swiper/css';
import { portfoliodata } from '@/app/api/data';
import { sTActions } from '@/app/store/modules/sTSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { useSelector } from 'react-redux';

gsap.registerPlugin(ScrollTrigger);

const PortfolioDisplaySec = () => {
    const swiperRef = useRef(null);
    const sectionRef = useRef(null);
    const dispatch = useDispatch();
    const { projectST } = useSelector((state) => state.sTR);

    const handleMouseEnter = (event) => {
        event.currentTarget.style.transform = 'scale(1.04)';
        event.currentTarget.style.cursor = 'pointer';
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.style.transform = 'scale(1)';
        event.currentTarget.style.cursor = 'auto';
    };

    useEffect(() => {
        let scrollTrigger;
        const totalSlides = portfoliodata.length;

        if (swiperRef.current && sectionRef.current) {
            const swiper = swiperRef.current;

            const transitionDuration = 0.3;

            // 스크롤 트리거 설정
            scrollTrigger = ScrollTrigger.create({
                trigger: sectionRef.current,
                pin: true,
                start: 'top top',
                end: `+=${(totalSlides - 1) * 100}%`,
                snap: {
                    snapTo: 1 / (totalSlides - 1), // 각 슬라이드 간격을 균등하게 나눔
                    duration: { min: 0.6, max: 0.8 }, // 스냅 애니메이션 시간
                    ease: 'power2.inOut',
                },
                onEnter: () => {
                    document.body.style.overflow = 'hidden';
                    setTimeout(() => {
                        dispatch(sTActions.setMiniProjectST(false));
                        dispatch(sTActions.setProjectST(true));
                        document.body.style.overflow = '';
                    }, 3000);
                },
                onLeaveBack: () => {
                    dispatch(sTActions.setProjectST(false));
                    dispatch(sTActions.setMiniProjectST(true));
                },
                onUpdate: (self) => {
                    // 스크롤 위치에 따른 슬라이드 인덱스 계산
                    const newIndex = Math.round(self.progress * (totalSlides - 1));

                    // 슬라이드 인덱스가 변경된 경우만 업데이트
                    if (swiper.activeIndex !== newIndex) {
                        swiper.slideTo(newIndex, transitionDuration * 1000, 'linear');
                    }
                },
            });
        }

        return () => {
            if (scrollTrigger) {
                scrollTrigger.kill();
            }
            if (swiperRef.current) {
                swiperRef.current.off('slideChange');
            }
        };
    }, []);

    return (
        <SecCont className='portfolio' $overFlow='hidden' ref={sectionRef}>
            <h2 className='sr-only'>포트폴리오 섹션</h2>
            <DivWrap
                $padding='120px 80px'
                $height='100vh'
                $display='flex'
                $flexDirection='column'
                $justifyContent='space-around'
                $alignItems='flex-start'
            >
                <DivWrap className='textBox' $width='100%' $margin='0 auto 80px' $color='#0f0d0d'>
                    <StyledH3 $variant='titleMedium' $fontWeight='400'>
                        성과 영역
                    </StyledH3>
                    <StyledH4 $variant='titleLarge' $fontWeight='700'>
                        PROJECTS
                    </StyledH4>
                </DivWrap>

                <StyledSwiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className={`${projectST ? 'on' : ''}`}
                    slidesPerView={'auto'}
                    centeredSlides={true} // 활성화된 슬라이드를 중앙에 배치
                    loop={false}
                    initialSlide={0}
                    watchSlidesProgress={true}
                >
                    {portfoliodata.map((item) => (
                        <StyledSwiperSlide key={item.id}>
                            <Link href={`/projects/${item.id}`}>
                                <BoxDivWrap $width='100%' $height='100%' $position='relative' $borderRadius='10px'>
                                    <StyledImg
                                        src={item.src}
                                        alt={item.alt}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                </BoxDivWrap>
                            </Link>
                        </StyledSwiperSlide>
                    ))}
                </StyledSwiper>
            </DivWrap>
        </SecCont>
    );
};

export default PortfolioDisplaySec;
