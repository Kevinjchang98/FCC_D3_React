import { arc } from 'd3';

interface Props {
    mouthRadius: number;
    mouthWidth: number;
}

const Mouth = ({ mouthRadius, mouthWidth }: Props) => {
    const mouthArc = arc<void, void>()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWidth)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * (3 / 2));
    return <path d={mouthArc() || ''}></path>;
};

export default Mouth;
