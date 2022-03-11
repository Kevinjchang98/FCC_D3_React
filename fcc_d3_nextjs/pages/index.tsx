import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import * as d3 from 'd3';

interface Datum {
    key: string;
    value: number;
}

const Home: NextPage = () => {
    const width = 960;
    const height = 500;
    const centerX = width / 2;
    const centerY = height / 2;
    const strokeWidth = 10;
    const eyeOffsetX = 90;
    const eyeOffsetY = 90;
    const eyeRadius = 50;
    const mouthWidth = 20;
    const mouthRadius = 140;

    const mouthArc = d3
        .arc<void, void>()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWidth)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * (3 / 2));

    return (
        <div className={styles.container}>
            <svg width={width} height={height}>
                <g transform={`translate(${centerX}, ${centerY})`}>
                    <circle
                        r={centerY - strokeWidth / 2}
                        fill={'yellow'}
                        stroke={'black'}
                        strokeWidth={strokeWidth}
                    ></circle>

                    <circle
                        cx={-eyeOffsetX}
                        cy={-eyeOffsetY}
                        r={eyeRadius}
                    ></circle>

                    <circle
                        cx={eyeOffsetX}
                        cy={-eyeOffsetY}
                        r={eyeRadius}
                    ></circle>

                    <path d={mouthArc() || ''}></path>
                </g>
            </svg>
        </div>
    );
};

export default Home;
