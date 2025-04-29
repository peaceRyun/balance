import { Chevron, IconWrap } from './style';

const ScrollToExploreIcon = ({ position, bottom, left, transform }) => {
    return (
        <>
            <IconWrap $position={position} $bottom={bottom} $left={left} $transform={transform}>
                <Chevron></Chevron>
                <Chevron></Chevron>
                <Chevron></Chevron>
            </IconWrap>
        </>
    );
};

export default ScrollToExploreIcon;
