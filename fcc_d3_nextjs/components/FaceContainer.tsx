interface Props {
    width: number;
    height: number;
    centerX: number;
    centerY: number;
    children: any;
}
const FaceContainer = ({
    width,
    height,
    centerX,
    centerY,
    children,
}: Props) => {
    return (
        <svg width={width} height={height}>
            <g transform={`translate(${centerX}, ${centerY})`}>{children}</g>
        </svg>
    );
};

export default FaceContainer;
