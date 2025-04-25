'use client';

import { useSelector } from 'react-redux';
import IntroSec from './components/introsec/IntroSec';
import PortfolioDisplaySec from './components/portfoliodisplaysec/PortfolioDisplaySec';
import SubtitleBanner from './components/subtitlebanner/SubtitleBanner';
import { MainContainer } from './style';
import PortfolioST from './components/portfoliost/PortfolioST';
import { useEffect } from 'react';

const HomePage = () => {
    const { isPortfolioST } = useSelector((state) => state.sTR);

    useEffect(() => {
        console.log('isPortfolioST 상태 변경:', isPortfolioST); // 이 줄을 추가
    }, [isPortfolioST]);

    return (
        <>
            <MainContainer>
                <IntroSec />
                <SubtitleBanner />
                <PortfolioDisplaySec />
                {isPortfolioST ? <PortfolioST /> : null}
            </MainContainer>
        </>
    );
};

export default HomePage;
