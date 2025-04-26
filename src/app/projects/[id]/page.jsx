'use client';

import { portfoliodata } from '@/app/api/data';
import { DivWrap, StyledImg } from '@/app/styles/globals';
import { useParams } from 'next/navigation';

const Projectpage = () => {
    const params = useParams();
    const paramsId = parseInt(params.id);

    const projectData = portfoliodata.find((item) => item.id === paramsId);

    const { id, src, alt } = projectData;

    if (!projectData) {
        return <div>프로젝트 데이터를 불러오지 못했습니다.</div>;
    }

    return (
        <div>
            <h2>프로젝트 ID: {id}</h2>
            <DivWrap $width='200px' $height='200px'>
                <StyledImg src={src} alt={alt}></StyledImg>
            </DivWrap>
        </div>
    );
};

export default Projectpage;
