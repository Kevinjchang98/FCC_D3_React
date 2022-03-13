import { scaleBand, scaleLinear, max, format } from 'd3';
import styles from '../styles/barchart.module.css';

const BarChart = ({ data }: any) => {
    const width: number = 960;
    const height: number = 500;
    const margin = { top: 30, right: 30, bottom: 60, left: 220 };
    const innerWidth: number = width - margin.right - margin.left;
    const innerHeight: number = height - margin.top - margin.bottom;

    const yScale: any = scaleBand()
        .domain(data.map((d: any) => d.Country))
        .range([0, innerHeight])
        .paddingInner(0.1);

    const maxPop: any = max(data, (d: any) => d.Population);

    const xScale: any = scaleLinear()
        .domain([0, maxPop])
        .range([0, innerWidth]);

    const xScaleMarks = xScale.ticks().map((tickValue: number) => (
        <g
            className={styles.tick}
            key={tickValue}
            transform={`translate(${xScale(tickValue)}, 0)`}
        >
            <line y2={innerHeight} />
            <text
                style={{ textAnchor: 'middle' }}
                dy={'0.71em'}
                y={innerHeight + 3}
            >
                {format('.2s')(tickValue).replace('G', 'B')}
            </text>
        </g>
    ));

    const yScaleMarks = yScale.domain().map((tickValue: number) => (
        <g className={styles.tick}>
            <text
                key={tickValue}
                style={{ textAnchor: 'end' }}
                dy={'0.32em'}
                x={'-9'}
                y={yScale(tickValue) + yScale.bandwidth() / 2}
            >
                {tickValue}
            </text>
        </g>
    ));

    const bars = data.map((d: any) => (
        <rect
            className={styles.mark}
            key={d.Country}
            x={0}
            y={yScale(d.Country)}
            width={xScale(d.Population)}
            height={yScale.bandwidth()}
            color={'yellow'}
        >
            {/* TODO: The on-hover doesn't work */}
            <title>{d.Population}</title>
        </rect>
    ));

    const xAxisLabel = (
        <text
            className={styles['axis-label']}
            x={innerWidth / 2}
            y={innerHeight + 40}
            textAnchor="middle"
        >
            2020 Population
        </text>
    );

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                {xScaleMarks}
                {yScaleMarks}
                {xAxisLabel}
                {bars}
            </g>
        </svg>
    );
};

export default BarChart;
