import { useState, useEffect } from 'react';
import { csv } from 'd3';

export const useData = (csvUrl: string, numElements: number) => {
    const [data, setData] = useState<any | undefined>(null);

    useEffect(() => {
        let row: any = null;
        if (
            (d: any) => {
                d['2020'];
            }
        ) {
            row = (d: any) => {
                d.Population = +d['2020'] * 1000;
                return d;
            };
        }

        csv(csvUrl, row).then((data) => {
            setData(data.slice(0, numElements));
        });
    }, []);

    return data;
};
