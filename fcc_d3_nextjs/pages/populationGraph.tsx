import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { csv } from 'd3';
import BarChart from '../components/BarChart';

const populationGraph: NextPage = () => {
    const csvUrl =
        'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

    const [data, setData] = useState<any | undefined>(null);

    useEffect(() => {
        const row = (d: any) => {
            d.Population = +d['2020'];
            return d;
        };

        csv(csvUrl, row).then((data) => {
            setData(data.slice(0, 10));
        });
    }, []);

    return <div>{data ? <BarChart data={data} /> : 'Loading'}</div>;
};

export default populationGraph;
