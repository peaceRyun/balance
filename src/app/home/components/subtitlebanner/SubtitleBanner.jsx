import { DivWrap, SecCont, StyledH3 } from '@/app/styles/globals';

const SubtitleBanner = () => {
    return (
        <SecCont $backgroundColor='rgb(236, 236, 236)'>
            <h2 className='sr-only'>부제</h2>
            <DivWrap $width='100%' $height='100vh' $display='flex' $alignItems='center' $justifyContent='center'>
                <StyledH3 $variant='subtitle'>
                    "당신이 능력을 최대한 발휘해서 실행하는 데 주의를 기울이고 있다면, 당신은 성과 영역에 있는 것이다."
                </StyledH3>
            </DivWrap>
        </SecCont>
    );
};

export default SubtitleBanner;
