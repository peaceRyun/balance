'use client';

import DisplayPortfolioSec from './components/displayportfoliosec/DisplayPortfolioSec';
import IntroSec from './components/introsec/IntroSec';
import SubtitleBanner from './components/subtitlebanner/SubtitleBanner';
import { MainContainer } from './style';

const HomePage = () => {
    return (
        <>
            <MainContainer>
                <IntroSec />
                <SubtitleBanner />
                <DisplayPortfolioSec />
            </MainContainer>
        </>
    );
};

export default HomePage;
