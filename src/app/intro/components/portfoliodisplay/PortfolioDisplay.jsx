'use-client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';

import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'; // 개발 시 애니메이션 트리거 확인에 유용

const PortfolioDisplay = () => {
    const triggerRef = useRef(null);
    const targetRef = useRef(null);
    const controllerRef = useRef(null);

    useEffect(() => {
        // 클라이언트 측에서만 ScrollMagic과 GSAP 관련 코드 실행
        if (typeof window !== 'undefined') {
            controllerRef.current = new ScrollMagic.Controller();

            // GSAP 타임라인 생성
            const tl = gsap.timeline({ paused: true });
            tl.to(targetRef.current, { x: 100, opacity: 1, duration: 1, ease: 'power2.out' });

            // ScrollMagic 씬 생성
            new ScrollMagic.Scene({
                triggerElement: triggerRef.current, // 애니메이션 트리거 요소
                triggerHook: 0.8, // 화면의 80% 지점에서 트리거
                duration: 0, // 스크롤 지속 시간에 따른 애니메이션 (0은 즉시 실행)
                reverse: false, // 스크롤 방향을 반대로 해도 애니메이션 실행
            })
                .setTween(tl) // GSAP 타임라인 설정
                // .addIndicators({ name: 'slide' }) // 개발 시 트리거 및 애니메이션 시작/종료 지점 시각화
                .addTo(controllerRef.current);

            // 컴포넌트 언마운트 시 ScrollMagic 컨트롤러 정리
            return () => {
                if (controllerRef.current) {
                    controllerRef.current.destroy(true);
                    controllerRef.current = null;
                }
            };
        }
    }, []);

    return (
        <div style={{ height: '200vh' }}>
            {' '}
            {/* ScrollMagic 효과를 보기 위한 충분한 스크롤 영역 */}
            <div
                ref={triggerRef}
                style={{
                    height: '100px',
                    backgroundColor: 'lightblue',
                    marginBottom: '500px',
                    textAlign: 'center',
                    lineHeight: '100px',
                }}
            >
                스크롤하여 애니메이션 트리거
            </div>
            <div
                ref={targetRef}
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'lightcoral',
                    opacity: 0,
                    position: 'relative',
                }}
            >
                애니메이션 대상
            </div>
        </div>
    );
};

export default PortfolioDisplay;
