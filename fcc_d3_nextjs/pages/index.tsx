import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Link href="/faces">
                <h1>Part 1: Smiley faces</h1>
            </Link>

            <Link href="/colorPie">
                <h1>Part 2: Color pie chart</h1>
            </Link>

            <Link href="/populationGraph">
                <h1>Part 3: Population bar chart</h1>
            </Link>
        </div>
    );
};

export default Home;
