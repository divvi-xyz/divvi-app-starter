import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color?: string;
  size?: number;
}

export default function PlaygroundTabIcon({ color, size }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fill={color}
        d="M5.3 3.8L1.8 10L5.3 16.2H7.3L3.9 10L7.3 3.8H5.3ZM14.7 3.8H12.7L16.1 10L12.7 16.2H14.7L18.2 10L14.7 3.8Z"
      />
    </Svg>
  );
}
