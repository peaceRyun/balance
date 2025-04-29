'use client';

import { DivWrap, SecCont, StyledH3, StyledSpan } from '@/app/styles/globals';
import { ImgFilter, PDSDivWrap, PDSStyledImg, StyledSwiper, StyledSwiperSlide } from './style';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import 'swiper/css';
import { portfoliodata } from '@/app/api/data';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const PortfolioDisplaySec = () => {
    const swiperRef = useRef(null);
    const sectionRef = useRef(null);
    const [HoveredItemId, setHoveredItemId] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredItemId(id);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
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
        <SecCont className='portfolio' $overFlow='hidden' ref={sectionRef} $backgroundColor='white'>
            <h2 className='sr-only'>포트폴리오 섹션</h2>
            <DivWrap
                $padding='0px 80px 60px'
                $height='100vh'
                $display='flex'
                $flexDirection='column'
                $alignItems='flex-start'
                $gap='100px'
            >
                <DivWrap className='textBox' $width='100%' $padding='120px 0 80px' $color='#0f0d0d'>
                    <StyledH3 $variant='titleLarge' $fontWeight='900'>
                        PROJECTS
                    </StyledH3>
                </DivWrap>

                <StyledSwiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    slidesPerView={'auto'}
                    centeredSlides={true} // 활성화된 슬라이드를 중앙에 배치
                    loop={false}
                    initialSlide={1}
                    watchSlidesProgress={true}
                    spaceBetween={60}
                >
                    {portfoliodata.map((item) => (
                        <StyledSwiperSlide key={item.id}>
                            <Link href={`/projects/${item.id}`}>
                                <PDSDivWrap
                                    $width='100%'
                                    $height='auto'
                                    $position='relative'
                                    $borderRadius='10px'
                                    onMouseEnter={() => handleMouseEnter(item.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <ImgFilter $isHovering={HoveredItemId === item.id}>
                                        <DivWrap
                                            $position='absolute'
                                            $bottom='0'
                                            $display='flex'
                                            $alignItems='end'
                                            $justifyContent='space-between'
                                            $width='100%'
                                            $margin='auto 0 0'
                                            $padding='40px'
                                            $color='white'
                                        >
                                            <StyledSpan $fontSize='24px' $fontWeight='500'>
                                                {item.title}
                                            </StyledSpan>
                                            <StyledSpan $fontSize='14px' $fontWeight='100'>
                                                {item.thumbstartdate}
                                            </StyledSpan>
                                        </DivWrap>
                                    </ImgFilter>
                                    <PDSStyledImg
                                        src={item.src}
                                        alt={item.alt}
                                        $isHovering={HoveredItemId === item.id}
                                    />
                                </PDSDivWrap>
                            </Link>
                        </StyledSwiperSlide>
                    ))}
                </StyledSwiper>
            </DivWrap>
        </SecCont>
    );
};

export default PortfolioDisplaySec;
