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
