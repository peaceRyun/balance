import { DivWrap, SecCont, StyledH3, StyledImg, StyledLi, StyledP, UlWrap } from '@/app/styles/globals';
import { BoxDivWrap, PDSStyledLI } from './style';

const PortfolioDisplaySec = () => {
    return (
        <SecCont className='portfolio' $padding='120px 0 0'>
            <h2 className='sr-only'>포트폴리오 섹션</h2>
            <DivWrap className='textBox' $width='1400px' $margin='0 auto' $color='#0f0d0d'>
                <StyledH3 $variant='sectitle'>Portfolio</StyledH3>
                <StyledP $fontSize='18px'>성과 영역</StyledP>
            </DivWrap>
            <UlWrap className='list' $display='flex' $padding='6% 0%'>
                <PDSStyledLI className='a' $width='1000px' $height='520px' $padding='0 30px' $flexShrink='0'>
                    <BoxDivWrap $width='100%' $height='100%' $position='relative'>
                        <StyledImg src='./home/displayportfolio/thumb/pretcoord.png' alt='개인포폴241216' />
                    </BoxDivWrap>
                </PDSStyledLI>
                <PDSStyledLI className='b' $width='1000px' $height='520px' $padding='0 30px' $flexShrink='0'>
                    <BoxDivWrap $width='100%' $height='100%' $position='relative'>
                        <StyledImg src='./home/displayportfolio/thumb/sunfish.png' alt='개인포폴241123' />
                    </BoxDivWrap>
                </PDSStyledLI>
                <PDSStyledLI className='c' $width='1000px' $height='520px' $padding='0 30px' $flexShrink='0'>
                    <BoxDivWrap $width='100%' $height='100%' $position='relative'>
                        <StyledImg src='./home/displayportfolio/thumb/samcheonbike.png' alt='개인포폴241014' />
                    </BoxDivWrap>
                </PDSStyledLI>
                <PDSStyledLI className='b' $width='1000px' $height='520px' $padding='0 30px' $flexShrink='0'>
                    <BoxDivWrap $width='100%' $height='100%' $position='relative'>
                        <StyledImg src='./home/displayportfolio/thumb/vancleef.png' alt='팀포폴250226' />
                    </BoxDivWrap>
                </PDSStyledLI>
                <PDSStyledLI className='c' $width='1000px' $height='520px' $padding='0 30px' $flexShrink='0'>
                    <BoxDivWrap $width='100%' $height='100%' $position='relative'>
                        <StyledImg src='./home/displayportfolio/thumb/vibo.png' alt='팀포폴241231' />
                    </BoxDivWrap>
                </PDSStyledLI>
            </UlWrap>
        </SecCont>
    );
};

export default PortfolioDisplaySec;
