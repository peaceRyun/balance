'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { UlWrap } from '@/app/styles/globals';

const ScrollMagicComponent = () => {
    const triggerRef = useRef(null);
    const targetRef = useRef(null);

    useEffect(() => {
        const initScrollMagic = async () => {
            try {
                const ScrollMagic = (await import('scrollmagic')).default;

                // 타겟 요소 초기 상태 설정
                gsap.set(targetRef.current, {
                    opacity: 1,
                    transform: 'translate3d(0, 659px, 0)',
                    width: '137px',
                    height: '90px',
                });

                // ScrollMagic 컨트롤러 생성
                const controller = new ScrollMagic.Controller();

                // ScrollMagic 씬 생성
                const scene = new ScrollMagic.Scene({
                    triggerElement: triggerRef.current,
                    duration: '100%', // 스크롤 지속 시간을 화면 높이의 100%로 설정
                    triggerHook: 0, // 트리거 지점을 화면 최상단으로 설정
                })
                    .on('progress', (e) => {
                        // 스크롤 진행도에 따라 y값과 크기를 변경
                        const yPos = 659 + 360 * e.progress; // 1019 - 659 = 360
                        const width = 137 + 316 * e.progress; // 453 - 137 = 316
                        const height = 90 + 383 * e.progress; // 473 - 90 = 383

                        gsap.to(targetRef.current, {
                            transform: `translate3d(0, ${yPos}px, 0)`,
                            width: `${width}px`,
                            height: `${height}px`,
                            duration: 0,
                            ease: 'none',
                        });
                    })
                    .addTo(controller);

                // 컴포넌트 언마운트 시 정리
                return () => {
                    scene.destroy(true);
                    controller.destroy(true);
                };
            } catch (error) {
                console.error('ScrollMagic 초기화 중 오류 발생:', error);
            }
        };

        initScrollMagic();
    }, []);

    return (
        <>
            <section
                ref={triggerRef}
                style={{
                    height: '100vh',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 10,
                }}
            >
                <UlWrap $display='flex' $justifyContent='center' $alignItems='center' $position='relative'>
                    <li
                        ref={targetRef}
                        style={{
                            backgroundColor: 'lightcoral',
                            transition: 'width 0s, height 0s',
                        }}
                    >
                        애니메이션 대상
                    </li>
                </UlWrap>
            </section>
        </>
    );
};

export default ScrollMagicComponent;
