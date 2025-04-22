import { DivWrap, SecCont, StyledH2, StyledImg, StyledLabel } from '@/app/styles/globals';

const IntroText = () => {
    return (
        <>
            <SecCont $padding='120px 50px 50px'>
                <DivWrap $padding='75px 0'>
                    <StyledH2 variant='intro' $fontWeight='700'>
                        Balancing
                    </StyledH2>
                    <StyledH2 variant='intro' $fontWeight='100'>
                        Learning
                    </StyledH2>
                    <DivWrap $display='flex' $gap='10px'>
                        <StyledH2 variant='intro' $fontWeight='700'>
                            and
                        </StyledH2>
                        <DivWrap $width='350px' $height='200px'>
                            <StyledImg src='./home/intro/seesaw-unscreen.gif'></StyledImg>
                        </DivWrap>
                        <StyledH2 variant='intro' $fontWeight='100'>
                            Growth
                        </StyledH2>
                    </DivWrap>
                    <DivWrap $display='flex' $gap='15px' $padding='30px 0 0 '>
                        <StyledLabel>Web Publisher</StyledLabel>
                        <StyledLabel>FrontEnd Developer</StyledLabel>
                    </DivWrap>
                </DivWrap>
            </SecCont>
        </>
    );
};

export default IntroText;
