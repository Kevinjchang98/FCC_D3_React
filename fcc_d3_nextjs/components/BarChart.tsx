import { scaleBand, scaleLinear, max } from 'd3';

const BarChart = ({ data }: any) => {
    const width: number = 960;
    const height: number = 500;
    const margin = { top: 20, right: 20, bottom: 20, left: 200 };
    const innerWidth: number = width - margin.right - margin.left;
    const innerHeight: number = height - margin.top - margin.bottom;

    const yScale: any = scaleBand()
        .domain(data.map((d: any) => d.Country))
        .range([0, innerHeight]);

    const maxPop: any = max(data, (d: any) => d.Population);

    const xScale: any = scaleLinear()
        .domain([0, maxPop])
        .range([0, innerWidth]);

    const xScaleMarks = xScale.ticks().map((tickValue: number) => (
        <g transform={`translate(${xScale(tickValue)}, 0)`}>
            <line y2={innerHeight} stroke="gray" />
            <text
                style={{ textAnchor: 'middle' }}
                dy={'0.71em'}
                y={innerHeight + 3}
            >
                {tickValue}
            </text>
        </g>
    ));

    const yScaleMarks = yScale.domain().map((tickValue: number) => (
        <text
            style={{ textAnchor: 'end' }}
            dy={'0.32em'}
            x={'-9'}
            y={yScale(tickValue) + yScale.bandwidth() / 2}
        >
            {tickValue}
        </text>
    ));

    const bars = data.map((d: any) => (
        <rect
            x={0}
            y={yScale(d.Country)}
            width={xScale(d.Population)}
            height={yScale.bandwidth()}
            color={'yellow'}
        />
    ));

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                {xScaleMarks}
                {yScaleMarks}
                {bars}
            </g>
        </svg>
    );
};

export default BarChart;
