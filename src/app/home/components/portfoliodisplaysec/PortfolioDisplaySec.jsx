'use client';

import { DivWrap, SecCont, StyledH3, StyledImg, StyledP } from '@/app/styles/globals';
import { BoxDivWrap, StyledSwiper, StyledSwiperSlide } from './style';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import 'swiper/css';
import { portfoliodata } from '@/app/api/data';
import { SwiperSlide } from 'swiper/react';

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

            scrollTriggerInstance = ScrollTrigger.create({
                trigger: '.portfolio',
                pin: true,
                snap: {
                    snapTo: Array.from({ length: totalSlides }, (_, i) => i / (totalSlides - 1)),
                    duration: 0.5,
                    ease: 'power3.inOut',
                },
                start: 'top top',
                end: `+=${totalSlides - 1}00%`,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const snapIndex = Math.round(progress * (totalSlides - 1));
                    if (swiperInstance.activeIndex !== snapIndex) {
                        swiperInstance.slideTo(snapIndex);
                    }
                    // 활성 슬라이드 클래스 업데이트
                    swiperInstance.slides.forEach((slide, index) => {
                        if (index === snapIndex) {
                            slide.classList.add('active');
                        } else {
                            slide.classList.remove('active');
                        }
                    });
                },
                onKill: () => {
                    // ScrollTrigger가 kill될 때 Swiper 이벤트 리스너 제거 (안전하게 처리)
                    swiperInstance?.off('slideChange');
                },
            });

            // Swiper 초기 설정 (centeredSlides 활성화)
            swiperInstance.params.centeredSlides = true;
            swiperInstance.update();

            // 초기 로드시 active 클래스 적용
            if (swiperInstance.slides && swiperInstance.activeIndex !== undefined) {
                swiperInstance.slides.forEach((slide, index) => {
                    if (index === swiperInstance.activeIndex) {
                        slide.classList.add('active');
                    }
                });
            }

            // Swiper의 slideChange 이벤트 핸들러 (필요하다면 추가적인 동작 정의)
            swiperInstance.on('slideChange', () => {
                // ScrollTrigger progress를 현재 Swiper index에 맞게 업데이트 (선택 사항)
                const currentIndex = swiperInstance.activeIndex;
                const progress = currentIndex / (totalSlides - 1);
                gsap.to(scrollTriggerInstance, { progress, overwrite: true, duration: 0.5, ease: 'power3.inOut' });
            });
        }

        return () => {
            if (scrollTriggerInstance) scrollTriggerInstance.kill();
        };
    }, []);

    return (
        <SecCont className='portfolio' $padding='100px 0 0' $overFlow='hidden'>
            <h2 className='sr-only'>포트폴리오 섹션</h2>
            <DivWrap $padding='0px 50px' $height='100vh'>
                <DivWrap className='textBox' $width='100%' $margin='0 auto 80px' $color='#0f0d0d'>
                    <StyledP $fontSize='36px'>성과 영역</StyledP>
                    <StyledH3 $variant='sectitle'>PORTFOLIO</StyledH3>
                </DivWrap>
                <StyledSwiper
                    ref={swiperRef}
                    className='list'
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={false}
                    onSwiper={(swiper) => {
                        if (swiper && !swiperRef.current) {
                            swiperRef.current = { swiper };
                        }
                    }}
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
