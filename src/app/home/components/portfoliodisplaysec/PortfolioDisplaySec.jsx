'use client';

import { DivWrap, SecCont, StyledH3, StyledImg, StyledP } from '@/app/styles/globals';
import { BoxDivWrap, StyledSwiper, StyledSwiperSlide } from './style';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import 'swiper/css';
import { portfoliodata } from '@/app/api/data';

gsap.registerPlugin(ScrollTrigger);

const PortfolioDisplaySec = () => {
    const swiperRef = useRef(null);

    const handleMouseEnter = (event) => {
        event.currentTarget.style.transform = 'scale(1.04)';
        event.currentTarget.style.cursor = 'pointer';
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.style.transform = 'scale(1)';
        event.currentTarget.style.cursor = 'auto';
    };

    useEffect(() => {
        let swiperInstance;
        let scrollTriggerInstance;

        if (swiperRef.current) {
            swiperInstance = swiperRef.current.swiper;
        }

        if (swiperInstance) {
            const totalSlides = swiperInstance.slides.length;

            // 먼저 ScrollTrigger 설정을 생성
            scrollTriggerInstance = ScrollTrigger.create({
                trigger: '.portfolio',
                pin: true,
                scrub: 1,
                snap: (value) => {
                    const snapPoints = Array.from({ length: totalSlides }, (_, i) => i / (totalSlides - 1));
                    return gsap.utils.snap(snapPoints, value);
                },
                start: 'center center',
                end: '+=200%',
                markers: true,
                onUpdate: (self) => {
                    // ScrollTrigger가 업데이트될 때마다 translateX 값 계산
                    const progress = self.progress;
                    const translateX = -progress * (swiperInstance.width * (totalSlides - 1));
                    gsap.set(swiperInstance.wrapperEl, { translateX: `${translateX}px` });
                },
            });
        }

        return () => {
            // 컴포넌트 언마운트 시 정리
            if (scrollTriggerInstance) scrollTriggerInstance.kill();
        };
    }, []);

    return (
        <SecCont className='portfolio' $padding='100px 0 0' $overFlow='hidden'>
            <h2 className='sr-only'>포트폴리오 섹션</h2>
            <DivWrap $padding='120px 50px' $height='100vh'>
                <DivWrap className='textBox' $width='100%' $margin='0 auto' $color='#0f0d0d'>
                    <StyledP $fontSize='36px'>성과 영역</StyledP>
                    <StyledH3 $variant='sectitle'>PORTFOLIO</StyledH3>
                </DivWrap>
                <StyledSwiper
                    ref={swiperRef}
                    className='list'
                    slidesPerView={1.5}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={false}
                >
                    {portfoliodata.map((item) => (
                        <StyledSwiperSlide key={item.id}>
                            <BoxDivWrap $width='100%' $height='100%' $position='relative' $borderRadius='10px'>
                                <StyledImg
                                    src={item.src}
                                    alt={item.alt}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                            </BoxDivWrap>
                        </StyledSwiperSlide>
                    ))}
                </StyledSwiper>
            </DivWrap>
        </SecCont>
    );
};

export default PortfolioDisplaySec;
