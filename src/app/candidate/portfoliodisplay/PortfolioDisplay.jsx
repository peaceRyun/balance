import dynamic from 'next/dynamic';

// ScrollMagic 컴포넌트를 클라이언트 사이드에서만 렌더링
const ScrollMagicComponent = dynamic(() => import('./ScrollMagicComponent'), {
    ssr: false,
});

const PortfolioDisplay = () => {
    return (
        <div style={{ height: '200vh' }}>
            <ScrollMagicComponent />
        </div>
    );
};

export default PortfolioDisplay;
