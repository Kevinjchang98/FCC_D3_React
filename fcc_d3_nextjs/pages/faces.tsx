import { range } from 'd3';
import type { NextPage } from 'next';
import Face from '../components/Face';
import styles from '../styles/Home.module.css';

const Faces: NextPage = () => {
    const width = 160;
    const height = 160;

    const arr = range(20);

    return (
        <div className={styles.container}>
            {arr.map((i) => (
                <Face
                    key={i}
                    width={width}
                    height={height}
                    centerX={width / 2}
                    centerY={height / 2}
                    strokeWidth={10}
                    eyeOffsetX={30}
                    eyeOffsetY={30}
                    eyeRadius={5 + Math.random() * 10}
                    mouthWidth={5 + Math.random() * 10}
                    mouthRadius={30 + Math.random() * 10}
                />
            ))}
        </div>
    );
};

export default Faces;
