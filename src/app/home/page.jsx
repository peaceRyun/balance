'use client';

import { useSelector } from 'react-redux';
import IntroSec from './components/introsec/IntroSec';
import PortfolioDisplaySec from './components/portfoliodisplaysec/PortfolioDisplaySec';
import SubtitleBanner from './components/subtitlebanner/SubtitleBanner';
import { MainContainer } from './style';
import PortfolioST from './components/portfoliost/PortfolioST';

const HomePage = () => {
    const { miniProjectST } = useSelector((state) => state.sTR);

    return (
        <>
            <MainContainer>
                <IntroSec />
                <SubtitleBanner />
                <PortfolioDisplaySec />
                {miniProjectST ? <PortfolioST /> : null}
            </MainContainer>
        </>
    );
};

export default HomePage;
