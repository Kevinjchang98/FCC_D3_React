import { useEffect, useState } from 'react';
import { csv } from 'd3';
import { NextPage } from 'next';
import ColorPieChart from '../components/ColorPieChart';

const colorPie: NextPage = () => {
    const csvUrl =
        'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv';

    const [data, setData] = useState<any | undefined>(null);

    useEffect(() => {
        csv(csvUrl).then((data) => {
            setData(data);
        });
    }, []);

    return <div>{!data ? 'Loading' : <ColorPieChart data={data} />}</div>;
};

export default colorPie;
