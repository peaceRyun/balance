'use client';

import { DivWrap, SecCont } from '@/app/styles/globals';
import { WebkitSpan } from './style';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SubtitleBanner = () => {
    useEffect(() => {
        const pinWrap = document.querySelector('.textBox'); // DivWrap에 클래스 추가
        const textObject = document.querySelector('.webkitSpan');
        gsap.to(pinWrap, {
            scrollTrigger: {
                trigger: pinWrap,
                start: 'top top', // viewport의 top이 trigger 요소의 top에 닿았을 때 시작
                end: '+=200vh', // trigger 요소의 시작점에서 200vh만큼 스크롤했을 때 종료 (300vh - 100vh)
                pin: true,
                scrub: 0.5, // 부드러운 스크러빙 효과 (선택 사항)
            },
        });

        gsap.fromTo(
            textObject,
            { 'background-size': '0% 100%' },
            {
                'background-size': '100% 100%',
                scrollTrigger: {
                    trigger: '.textBox',
                    pinnedContainer: '.textBox',
                    start: '0% 60%',
                    markers: true,
                    scrub: 1,
                },
            }
        );
        return () => {
            ScrollTrigger.killAll(); // 컴포넌트 언마운트 시 ScrollTrigger 인스턴스 정리
        };
    }, []);

    return (
        <SecCont $backgroundColor='rgb(236, 236, 236)'>
            <h2 className='sr-only'>부제</h2>
            <DivWrap
                $width='100%'
                $height='300vh'
                $display='flex'
                $alignItems='center'
                $justifyContent='center'
                $lineHeight='1.2'
                className='textBox'
            >
                <div>
                    <WebkitSpan $fontSize='80px' $fontWeight='900' className='webkitSpan'>
                        당신이 능력을 최대한 발휘해서 실행하는 데 주의를 기울이고 있다면,
                        <br /> 당신은 성과 영역에 있는 것이다.
                    </WebkitSpan>
                </div>
            </DivWrap>
        </SecCont>
    );
};

export default SubtitleBanner;
