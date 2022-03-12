import { arc, pie } from 'd3';

const ColorPieChart = ({ data }: any) => {
    const width = 960;
    const height = 500;
    const centerX = width / 2;
    const centerY = height / 2;

    const pieArc: any = arc().innerRadius(0).outerRadius(width);

    const colorPie = pie().value(1);

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${centerX}, ${centerY})`}>
                {colorPie(data).map((d: any, i: number) => (
                    <path fill={d.data['RGB hex value']} d={pieArc(d) || ''} />
                ))}
            </g>
        </svg>
    );
};

export default ColorPieChart;
