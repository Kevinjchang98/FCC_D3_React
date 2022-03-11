import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import BackgroundCircle from '../components/BackgroundCircle';
import Eyes from '../components/Eye';
import Mouth from '../components/Mouth';

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

    return (
        <div className={styles.container}>
            <svg width={width} height={height}>
                <g transform={`translate(${centerX}, ${centerY})`}>
                    <BackgroundCircle
                        height={height}
                        strokeWidth={strokeWidth}
                    />

                    <Eyes
                        eyeOffsetX={eyeOffsetX}
                        eyeOffsetY={eyeOffsetY}
                        eyeRadius={eyeRadius}
                    ></Eyes>

                    <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
                </g>
            </svg>
        </div>
    );
};

export default Home;
