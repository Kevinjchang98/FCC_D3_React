interface Props {
    eyeOffsetX: number;
    eyeOffsetY: number;
    eyeRadius: number;
}

const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }: Props) => {
    return (
        <>
            <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius}></circle>

            <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius}></circle>
        </>
    );
};

export default Eyes;
