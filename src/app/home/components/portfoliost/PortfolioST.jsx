import { DivWrap, StyledImg, UlWrap } from '@/app/styles/globals';
import { AniLi, SecAniCont } from './style';
import { portfoliodata } from '@/app/api/data';

const PortfolioST = () => {
    return (
        <SecAniCont>
            <UlWrap $display='flex' $alignItems='center' $justifyContent='center'>
                <AniLi>
                    <DivWrap $width='100%' $height='100%' $borderRadius='10px'>
                        <StyledImg src={portfoliodata[0].src} alt={portfoliodata[0].alt} />
                    </DivWrap>
                </AniLi>
                <AniLi $margin='0 20px 0'>
                    <DivWrap $width='100%' $height='100%' $borderRadius='10px'>
                        <StyledImg src={portfoliodata[1].src} alt={portfoliodata[1].alt} />
                    </DivWrap>
                </AniLi>
                <AniLi>
                    <DivWrap $width='100%' $height='100%' $borderRadius='10px'>
                        <StyledImg src={portfoliodata[2].src} alt={portfoliodata[2].alt} />
                    </DivWrap>
                </AniLi>
            </UlWrap>
        </SecAniCont>
    );
};

export default PortfolioST;
