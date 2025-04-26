'use client';

import { DivWrap, SecCont } from '@/app/styles/globals';
import { WebkitSpan, HighlightedKeyword } from './style'; // 스타일 import
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { sTActions } from '@/app/store/modules/sTSlice';
import { useDispatch } from 'react-redux';

gsap.registerPlugin(ScrollTrigger);

const SubtitleBanner = () => {
    const pinWrapRef = useRef(null);
    const textObjectRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const pinWrap = pinWrapRef.current;
        const textObject = textObjectRef.current;

        if (pinWrap && textObject) {
            // 배경색 채우기 애니메이션 (흰색)
            gsap.to(textObject, {
                backgroundSize: '100% 100%',
                scrollTrigger: {
                    trigger: pinWrap,
                    start: 'top top',
                    end: '+=500px',
                    pin: true,
                    scrub: 1,
                    onEnterBack: () => {
                        dispatch(sTActions.setPortfolioST(false));
                        console.log('onEnterBack dispatch 호출됨 (textObject)');
                    },
                    onLeave: () => {
                        dispatch(sTActions.setPortfolioST(true));
                        console.log('onLeave 호출됨 (textObject)');
                    },
                },
            });

            // 하이라이트 키워드 채우기 애니메이션 (노란색)
            gsap.to(textObject.querySelectorAll('.highlight'), {
                backgroundSize: '100% 100%',
                scrollTrigger: {
                    trigger: pinWrap,
                    start: 'top top',
                    end: '+=500px',
                    scrub: 1,
                },
            });
        }

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <SecCont $backgroundColor='rgb(236, 236, 236)'>
            <h2 className='sr-only'>부제</h2>
            <DivWrap
                $width='100%'
                $height='100vh'
                $display='flex'
                $alignItems='center'
                $justifyContent='center'
                $lineHeight='1.2'
                className='textBox'
                $padding='0 50px 0'
                ref={pinWrapRef}
                $position='sticky'
                $top='0'
            >
                <div>
                    <WebkitSpan
                        $fontSize='80px'
                        $fontWeight='900'
                        className='webkitSpan'
                        ref={textObjectRef}
                        $color='transparent'
                    >
                        당신이 <HighlightedKeyword className='highlight'>능력</HighlightedKeyword>을 최대한 발휘해서
                        실행하는 데 <HighlightedKeyword className='highlight'>주의</HighlightedKeyword>
                        를 기울이고 있다면,
                        <br /> 당신은 <HighlightedKeyword className='highlight'>성과</HighlightedKeyword> 영역에 있는
                        것이다.
                    </WebkitSpan>
                </div>
            </DivWrap>
        </SecCont>
    );
};

export default SubtitleBanner;
