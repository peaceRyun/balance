import IntroText from './components/introtext/IntroText';
import PortfolioDisplay from './components/portfoliodisplay/PortfolioDisplay';
import SubtitleBanner from './components/subtitlebanner/SubtitleBanner';

const IntroPage = () => {
    return (
        <>
            <IntroText />
            <SubtitleBanner />
            <PortfolioDisplay />
        </>
    );
};

export default IntroPage;
