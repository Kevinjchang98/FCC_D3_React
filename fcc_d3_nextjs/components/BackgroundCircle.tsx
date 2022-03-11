interface Props {
    height: number;
    strokeWidth: number;
}

const BackgroundCircle = ({ height, strokeWidth }: Props) => {
    const centerY = height / 2;

    return (
        <circle
            r={centerY - strokeWidth / 2}
            fill={'yellow'}
            stroke={'black'}
            strokeWidth={strokeWidth}
        />
    );
};

export default BackgroundCircle;
