'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
    Bubble,
    Container,
    MainReflection,
    MainText,
    RainbowEffect,
    SmallReflection1,
    SmallReflection2,
    SphereEffect,
    TextContainer,
} from './style';

function BubblesGSAP() {
    const containerRef = useRef(null);
    const [bubbles, setBubbles] = useState([]);
    const bubblesRef = useRef([]);
    const animationRef = useRef(null);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1000,
        height: typeof window !== 'undefined' ? window.innerHeight : 800,
    });

    // 화면 크기 변경 감지
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 비눗방울 초기화
    useEffect(() => {
        const width = windowSize.width;
        const height = windowSize.height;

        // 비눗방울 데이터 생성
        const initialBubbles = [
            {
                id: 1,
                radius: width * 0.4, // 화면 너비의 60%
                color: '#5D68F0',
                x: width * 0.25,
                y: -width * 0.6,
                vx: 0.1, // 초기 X 속도
                vy: 0, // 초기 Y 속도
                opacity: 0.5,
                mass: 1,
            },
            {
                id: 2,
                radius: width * 0.3, // 화면 너비의 55%
                color: '#4FC1E4',
                x: width * 0.75,
                y: -width * 0.55,
                vx: -0.05, // 초기 X 속도
                vy: 0, // 초기 Y 속도
                opacity: 0.5,
                mass: 0.9,
            },
        ];

        setBubbles(initialBubbles);
        bubblesRef.current = initialBubbles;

        return () => {
            if (animationRef.current) {
                gsap.ticker.remove(animationRef.current);
            }
        };
    }, [windowSize]);

    // 애니메이션 설정
    useEffect(() => {
        if (bubbles.length === 0 || !containerRef.current) return;

        const width = windowSize.width;
        const height = windowSize.height;

        // 현재 상태의 복사본 생성
        const physicsBubbles = bubbles.map((bubble) => ({ ...bubble }));

        // 각 비눗방울의 요소 참조 설정
        physicsBubbles.forEach((bubble) => {
            const bubbleElement = document.getElementById(`bubble-${bubble.id}`);
            if (bubbleElement) {
                // 초기 위치 설정
                gsap.set(bubbleElement, {
                    x: bubble.x - bubble.radius,
                    y: bubble.y - bubble.radius,
                    width: bubble.radius * 2,
                    height: bubble.radius * 2,
                });
            }
        });

        // 애니메이션 틱 함수
        const animateBubbles = () => {
            const gravity = 0.015; // 중력값

            // 각 비눗방울 업데이트
            physicsBubbles.forEach((bubble, index) => {
                // 중력 적용
                bubble.vy += gravity;

                // 속도 감쇠 (저항 효과)
                bubble.vx *= 0.995;
                bubble.vy *= 0.995;

                // 위치 업데이트
                bubble.x += bubble.vx;
                bubble.y += bubble.vy;

                // 벽과의 충돌 검사 (좌우)
                if (bubble.x - bubble.radius < -width * 0.3) {
                    bubble.x = -width * 0.3 + bubble.radius;
                    bubble.vx *= -0.7; // 반발력 0.7
                } else if (bubble.x + bubble.radius > width + width * 0.3) {
                    bubble.x = width + width * 0.3 - bubble.radius;
                    bubble.vx *= -0.7; // 반발력 0.7
                }

                // 바닥과의 충돌 검사
                if (bubble.y + bubble.radius > height + height * 0.2) {
                    bubble.y = height + height * 0.2 - bubble.radius;
                    bubble.vy *= -0.5; // 반발력 0.5
                }

                // 비눗방울 간의 충돌 검사
                for (let j = index + 1; j < physicsBubbles.length; j++) {
                    const otherBubble = physicsBubbles[j];

                    const dx = otherBubble.x - bubble.x;
                    const dy = otherBubble.y - bubble.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const minDistance = bubble.radius + otherBubble.radius;

                    if (distance < minDistance) {
                        // 충돌 방향 계산
                        const angle = Math.atan2(dy, dx);
                        const targetX = bubble.x + Math.cos(angle) * minDistance;
                        const targetY = bubble.y + Math.sin(angle) * minDistance;

                        // 충돌 결과 계산
                        const ax = (targetX - otherBubble.x) * 0.05; // 충격 0.05
                        const ay = (targetY - otherBubble.y) * 0.05; // 충격 0.05

                        // 질량에 따른 속도 변화
                        const massRatio1 = otherBubble.mass / (bubble.mass + otherBubble.mass);
                        const massRatio2 = bubble.mass / (bubble.mass + otherBubble.mass);

                        // 속도 적용
                        bubble.vx -= ax * massRatio1;
                        bubble.vy -= ay * massRatio1;
                        otherBubble.vx += ax * massRatio2;
                        otherBubble.vy += ay * massRatio2;
                    }
                }

                // DOM 요소 업데이트
                const bubbleElement = document.getElementById(`bubble-${bubble.id}`);
                if (bubbleElement) {
                    gsap.to(bubbleElement, {
                        x: bubble.x - bubble.radius,
                        y: bubble.y - bubble.radius,
                        duration: 0.01, // 짧은 진행 시간으로 부드러운 애니메이션
                        ease: 'none',
                    });
                }
            });
        };

        // GSAP 애니메이션 틱 등록
        animationRef.current = () => animateBubbles();
        gsap.ticker.add(animationRef.current);

        // 클린업
        return () => {
            if (animationRef.current) {
                gsap.ticker.remove(animationRef.current);
            }
        };
    }, [bubbles, windowSize]);

    // RGB 값 추출 함수
    const getRgbFromColor = (color) => {
        return color === '#5D68F0' ? '93, 104, 240' : '79, 193, 228';
    };

    return (
        <Container ref={containerRef}>
            {/* 중앙 텍스트 */}
            <TextContainer>
                <MainText>
                    문장을
                    <br />더 돋보이게
                </MainText>
            </TextContainer>

            {/* 비눗방울 렌더링 */}
            {bubbles.map((bubble) => {
                const rgb = getRgbFromColor(bubble.color);
                return (
                    <Bubble
                        key={bubble.id}
                        id={`bubble-${bubble.id}`}
                        style={{
                            width: bubble.radius * 2,
                            height: bubble.radius * 2,
                            background: `radial-gradient(circle at 35% 35%, 
                rgba(255, 255, 255, 0.8) 0%, 
                rgba(255, 255, 255, 0.4) 20%, 
                rgba(242, 246, 255, 0.3) 40%,
                rgba(${rgb}, 0.25) 60%, 
                rgba(${rgb}, 0.2) 80%)`,
                            boxShadow: `0 0 40px rgba(${rgb}, 0.2), 
                          inset 0 0 40px rgba(255, 255, 255, 0.4)`,
                            opacity: bubble.opacity,
                            border: '1px solid rgba(255, 255, 255, 0.6)',
                        }}
                    >
                        {/* 주 반사광 */}
                        <MainReflection
                            style={{
                                width: bubble.radius * 0.4,
                                height: bubble.radius * 0.4,
                                left: bubble.radius * 0.3,
                                top: bubble.radius * 0.3,
                            }}
                        />

                        {/* 작은 반사광 1 */}
                        <SmallReflection1
                            style={{
                                width: bubble.radius * 0.1,
                                height: bubble.radius * 0.1,
                                left: bubble.radius * 0.2,
                                top: bubble.radius * 0.2,
                            }}
                        />

                        {/* 작은 반사광 2 */}
                        <SmallReflection2
                            style={{
                                width: bubble.radius * 0.15,
                                height: bubble.radius * 0.15,
                                right: bubble.radius * 0.4,
                                bottom: bubble.radius * 0.5,
                            }}
                        />

                        {/* 구면 효과 */}
                        <SphereEffect />

                        {/* 무지개 효과 */}
                        <RainbowEffect />
                    </Bubble>
                );
            })}
        </Container>
    );
}

export default BubblesGSAP;
