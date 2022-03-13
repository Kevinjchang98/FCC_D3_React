import { NextPage } from 'next';
import BarChart from '../components/BarChart';
import { useData } from '../hooks/useData';

const populationGraph: NextPage = () => {
    const csvUrl =
        'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

    const data = useData(csvUrl, 10);

    return <div>{data ? <BarChart data={data} /> : 'Loading'}</div>;
};

export default populationGraph;
