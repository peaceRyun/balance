'use client';

import { portfoliodata } from '@/app/api/data';
import { DivWrap, StyledImg } from '@/app/styles/globals';
import { useParams } from 'next/navigation';
import {
    ContsWrap,
    HeadingWrapDiv,
    ImgFilter,
    MainBannerWrap,
    MainCont,
    StickyCont,
    StyledWaveDiv,
    TheStyledH2,
} from './style';

const Projectpage = () => {
    const params = useParams();
    const paramsId = parseInt(params.id);

    const projectData = portfoliodata.find((item) => item.id === paramsId);

    const { id, src, alt } = projectData;

    if (!projectData) {
        return <div>프로젝트 데이터를 불러오지 못했습니다.</div>;
    }

    return (
        <>
            <MainBannerWrap>
                <HeadingWrapDiv>
                    <TheStyledH2>Pretcoord</TheStyledH2>
                </HeadingWrapDiv>
                <StyledImg
                    $position='absolute'
                    $top='0'
                    $left='0'
                    $zIndex='0'
                    $filter='blur(4px)'
                    src={src}
                    alt={alt}
                />
                <ImgFilter />
                <StyledWaveDiv src='/projects/bg_wave.png' alt='파도' />
            </MainBannerWrap>
            <MainCont>
                <ContsWrap
                    className='contents-wrap'
                    $display='flex'
                    $justifyContent='space-between'
                    $alignItems='stretch'
                >
                    <div className='info-area' style={{ flex: '1' }}>
                        <StickyCont>
                            <DivWrap $display='flex' $alignItems='center' $width='100%'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium aliquam sapiente
                                mollitia corrupti, cum iste enim, eligendi, dolor optio nam aspernatur itaque nostrum?
                                Placeat harum laboriosam veritatis consectetur totam! Adipisci!
                            </DivWrap>
                        </StickyCont>
                    </div>
                    <DivWrap className='img-area' $flex='1'>
                        <div style={{ height: '2000px' }}>dd</div>
                        <div style={{ height: '2000px' }}>dd</div>
                    </DivWrap>
                </ContsWrap>
            </MainCont>
        </>
    );
};

export default Projectpage;
