'use client';

import IntroSec from './components/introsec/IntroSec';
import SubtitleBanner from './components/subtitlebanner/SubtitleBanner';
import { MainContainer } from './style';

const HomePage = () => {
    return (
        <>
            <MainContainer>
                <IntroSec />
                <SubtitleBanner />
                <div style={{ height: '100vh' }}>sss</div>
            </MainContainer>
        </>
    );
};

export default HomePage;
