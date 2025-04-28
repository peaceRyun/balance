'use client';

import { useSelector } from 'react-redux';
import IntroSec from './components/introsec/IntroSec';
import PortfolioDisplaySec from './components/portfoliodisplaysec/PortfolioDisplaySec';
import SubtitleBanner from './components/subtitlebanner/SubtitleBanner';
import { MainContainer } from './style';

const HomePage = () => {
    return (
        <>
            <MainContainer>
                <IntroSec />
                <SubtitleBanner />
                <PortfolioDisplaySec />
            </MainContainer>
        </>
    );
};

export default HomePage;
