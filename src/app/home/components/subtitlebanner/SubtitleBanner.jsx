import { DivWrap, SecCont, StyledH3, StyledSpan } from '@/app/styles/globals';

const SubtitleBanner = () => {
    return (
        <SecCont $backgroundColor='rgb(236, 236, 236)'>
            <h2 className='sr-only'>부제</h2>
            <DivWrap
                $width='100%'
                $height='100vh'
                $display='flex'
                $alignItems='center'
                $justifyContent='center'
                $lineHeight='1.2'
            >
                <div>
                    <StyledSpan $fontSize='80px' $fontWeight='900' $webColor='rgba(255, 255, 255, 0.2'>
                        당신이 능력을 최대한 발휘해서 실행하는 데 주의를 기울이고 있다면,
                        <br /> 당신은 성과 영역에 있는 것이다.
                    </StyledSpan>
                </div>
            </DivWrap>
        </SecCont>
    );
};

export default SubtitleBanner;
