import { DivWrap, StyledImg, UlWrap } from '@/app/styles/globals';
import { AniLi, SecAniCont } from './style';
import { portfoliodata } from '@/app/api/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const PortfolioST = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) {
            return;
        }

        // 각 li 요소를 개별적으로 선택합니다.
        // 순서대로 첫 번째, 두 번째, 세 번째 요소입니다.
        const firstLi = section.querySelector('li:first-child');
        const middleLi = section.querySelector('li:nth-child(2)');
        const lastLi = section.querySelector('li:last-child');

        // GSAP 타임라인을 생성하고 ScrollTrigger를 연결합니다.
        // 타임라인 전체가 스크롤에 의해 제어됩니다.
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom bottom', // 200vh 스크롤 동안 애니메이션 진행
                scrub: true, // 스크롤과 애니메이션 진행률 연동
            },
        });

        // 타임라인에 각 요소의 애니메이션을 순차적으로 추가합니다.
        // .to(요소, 애니메이션_설정, 추가_위치)
        // 추가_위치로 '>'를 사용하면 바로 이전 애니메이션이 끝난 직후에 시작합니다.

        if (firstLi) {
            tl.to(
                firstLi,
                {
                    width: 330, // 첫 번째 요소 목표 width
                    height: 630,
                    y: 1056,
                    ease: 'none',
                },
                0
            ); // 타임라인 시작 지점 (0초)
        }

        if (middleLi) {
            tl.to(
                middleLi,
                {
                    width: 930, // 두 번째 요소 목표 width
                    height: 630,
                    y: 1056,
                    ease: 'none',
                },
                '>'
            ); // 첫 번째 애니메이션 끝난 직후 시작
        }

        if (lastLi) {
            tl.to(
                lastLi,
                {
                    width: 330, // 세 번째 요소 목표 width
                    height: 630,
                    y: 1056,
                    ease: 'none',
                },
                '>'
            ); // 두 번째 애니메이션 끝난 직후 시작
        }

        // 클린업 함수: 타임라인 전체를 제거합니다.
        return () => {
            tl.kill(); // 타임라인을 kill하면 포함된 모든 트윈과 연결된 ScrollTrigger도 제거됩니다.
        };
    }, []);
    return (
        <SecAniCont ref={sectionRef}>
            <UlWrap $display='flex' $alignItems='center' $justifyContent='center'>
                <AniLi>
                    <DivWrap $width='100%' $height='100%' $borderRadius='10px'>
                        <StyledImg src={portfoliodata[0].src} alt={portfoliodata[0].alt} />
                    </DivWrap>
                </AniLi>
                <AniLi $margin='0 20px 0'>
                    <DivWrap $width='100%' $height='100%' $borderRadius='10px'>
                        <StyledImg src={portfoliodata[1].src} alt={portfoliodata[1].alt} />
                    </DivWrap>
                </AniLi>
                <AniLi>
                    <DivWrap $width='100%' $height='100%' $borderRadius='10px'>
                        <StyledImg src={portfoliodata[2].src} alt={portfoliodata[2].alt} />
                    </DivWrap>
                </AniLi>
            </UlWrap>
        </SecAniCont>
    );
};

export default PortfolioST;
