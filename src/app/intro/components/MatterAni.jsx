'use client';

import { useEffect, useRef } from 'react';

const Matter = require('matter-js');

export default function MatterAni() {
    const canvasRef = useRef(null);
    const engineRef = useRef(null);

    useEffect(() => {
        // Matter.js 모듈 설정
        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const Runner = Matter.Runner;
        const Bodies = Matter.Bodies;
        const Composite = Matter.Composite;
        const Mouse = Matter.Mouse;
        const MouseConstraint = Matter.MouseConstraint;
        const Events = Matter.Events;

        // 엔진 생성
        engineRef.current = Engine.create();
        const engine = engineRef.current;

        // 캔버스 설정
        const canvas = canvasRef.current;
        const render = Render.create({
            canvas: canvas,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: 500,
                wireframes: false,
                background: '#000000',
            },
        });

        // 단어 데이터 (텍스트, 색상, 위치)
        const words = [
            { text: 'EXPERIENCE', x: 150, y: 330, width: 180, height: 60 },
            { text: 'TRANSFORM', x: 210, y: 410, width: 160, height: 60 },
            { text: 'GOODS', x: 230, y: 480, width: 100, height: 60 },
            { text: 'DESIGN', x: 350, y: 380, width: 100, height: 60 },
            { text: 'PRODUCTION', x: 450, y: 470, width: 180, height: 60 },
            { text: 'OBJECTIVE', x: 510, y: 340, width: 160, height: 60 },
            { text: 'INSPIRATION', x: 560, y: 410, width: 160, height: 60 },
            { text: 'BRAND', x: 650, y: 480, width: 100, height: 60 },
            { text: 'CREATIVITY', x: 770, y: 410, width: 160, height: 60 },
            { text: 'LISTEN', x: 810, y: 480, width: 100, height: 60 },
            { text: 'STRATEGY', x: 970, y: 380, width: 140, height: 60 },
            { text: 'CONCEPT', x: 980, y: 460, width: 140, height: 60 },
            { text: 'IDEAS', x: 60, y: 440, width: 60, height: 150 },
        ];

        // 단어 버튼 생성 함수
        function createWordBody(word) {
            // 일부 단어는 회전 상태 처리
            const isVertical = word.text === 'IDEAS' || word.text === 'CONCEPT';

            // 세로 텍스트의 경우 너비와 높이 바꾸기
            const finalWidth = isVertical ? word.height : word.width;
            const finalHeight = isVertical ? word.width : word.height;

            const body = Bodies.rectangle(word.x, word.y, finalWidth, finalHeight, {
                chamfer: { radius: finalHeight / 2 }, // 둥근 모서리
                render: {
                    fillStyle: '#000000',
                    strokeStyle: '#FFFFFF',
                    lineWidth: 1,
                },
                friction: 0.05,
                frictionAir: 0.005,
                restitution: 0.8, // 탄성 높임
                label: word.text,
            });

            // 세로 텍스트인 경우 회전 적용
            if (isVertical) {
                Matter.Body.rotate(body, Math.PI / 2);
            }

            return body;
        }

        // 단어 생성 및 추가
        const wordBodies = words.map(createWordBody);

        // 바닥, 벽 생성 (화면 밖에 위치)
        const ground = Bodies.rectangle(window.innerWidth / 2, 550, window.innerWidth, 50, { isStatic: true });
        const leftWall = Bodies.rectangle(-50, 250, 100, 1000, { isStatic: true });
        const rightWall = Bodies.rectangle(window.innerWidth + 50, 250, 100, 1000, { isStatic: true });
        const topWall = Bodies.rectangle(window.innerWidth / 2, -50, window.innerWidth, 100, { isStatic: true });

        // 물체들 엔진에 추가
        Composite.add(engine.world, [...wordBodies, ground, leftWall, rightWall, topWall]);

        // 마우스 컨트롤 추가
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        Composite.add(engine.world, mouseConstraint);

        // 마우스 이벤트와 렌더러를 연결
        render.mouse = mouse;

        // 엔진, 렌더러 실행
        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);

        // 텍스트 렌더링을 위한 후처리 함수
        // Render.js에 afterRender 콜백을 사용하여 안전하게 텍스트 렌더링
        render.options.wireframes = false;

        // 안전하게 렌더링 이후에 텍스트 추가
        Events.on(render, 'afterRender', () => {
            const context = render.context;
            if (!context) return; // 컨텍스트가 없으면 실행하지 않음

            const bodies = Composite.allBodies(engine.world);

            context.font = '16px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = '#FFFFFF';

            for (let i = 0; i < bodies.length; i++) {
                const body = bodies[i];
                if (body.label && body.label !== 'Rectangle Body') {
                    context.fillText(body.label, body.position.x, body.position.y);
                }
            }
        });

        // 창 크기 조정 대응
        const handleResize = () => {
            render.options.width = window.innerWidth;
            render.options.height = 500;
            render.canvas.width = window.innerWidth;
            render.canvas.height = 500;

            // 벽 위치 조정
            Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: 550 });
            Matter.Body.setPosition(rightWall, { x: window.innerWidth + 50, y: 250 });
            Matter.Body.setPosition(topWall, { x: window.innerWidth / 2, y: -50 });
        };

        window.addEventListener('resize', handleResize);

        // 클린업 함수
        return () => {
            // 이벤트 리스너 제거
            window.removeEventListener('resize', handleResize);

            // Matter.js 인스턴스 정리
            Render.stop(render);
            Runner.stop(runner); // Runner 정지 추가
            Engine.clear(engine);

            // 안전하게 캔버스 제거
            if (render.canvas && render.canvas.parentNode) {
                render.canvas.parentNode.removeChild(render.canvas);
            } else if (render.canvas) {
                // 부모 노드가 없으면 직접 삭제 시도는 하지 않음
                render.canvas = null;
            }

            render.context = null;
            render.textures = {};
        };
    }, []);

    return (
        <div className='canvas-container' style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <canvas ref={canvasRef} style={{ background: '#000000' }} />
        </div>
    );
}
