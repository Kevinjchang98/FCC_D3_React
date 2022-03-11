import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Link href="/faces">
                <h1>Part 1: Smiley faces</h1>
            </Link>
        </div>
    );
};

export default Home;
