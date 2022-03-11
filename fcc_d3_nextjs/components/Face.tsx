import BackgroundCircle from '../components/BackgroundCircle';
import Eyes from '../components/Eye';
import Mouth from '../components/Mouth';
import FaceContainer from '../components/FaceContainer';

interface Props {
    width: number;
    height: number;
    centerX: number;
    centerY: number;
    strokeWidth: number;
    eyeOffsetX: number;
    eyeOffsetY: number;
    eyeRadius: number;
    mouthWidth: number;
    mouthRadius: number;
}

const Face = ({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthWidth,
    mouthRadius,
}: Props) => {
    return (
        <FaceContainer
            width={width}
            height={height}
            centerX={centerX}
            centerY={centerY}
        >
            <BackgroundCircle height={height} strokeWidth={strokeWidth} />

            <Eyes
                eyeOffsetX={eyeOffsetX}
                eyeOffsetY={eyeOffsetY}
                eyeRadius={eyeRadius}
            ></Eyes>

            <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
        </FaceContainer>
    );
};

export default Face;
