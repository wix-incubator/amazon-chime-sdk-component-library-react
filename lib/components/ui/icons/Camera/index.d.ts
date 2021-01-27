import React from 'react';
import { SvgProps } from '../Svg';
interface CameraProps extends SvgProps {
    /** Whether or not should show a camera icon with strikethrough. */
    disabled?: boolean;
}
declare const Camera: React.SFC<CameraProps>;
export default Camera;
