import type React from 'react';
import { Line } from "@react-three/drei";
export function AxesHelper(props: React.JSX.IntrinsicElements['group']) {
  const lineWidth = 3
  const lineLength = 1
  return (
    <group {...props}>
      <Line
        points={[
          [0, 0, 0],
          [0, 0, lineLength],
        ]}
        lineWidth={lineWidth}
        vertexColors={[
          [0, 0, 0],
          [0, 0, 1],
        ]}
      />
      <Line
        points={[
          [0, 0, 0],
          [lineLength, 0, 0],
        ]}
        lineWidth={lineWidth}
        vertexColors={[
          [0, 0, 0],
          [1, 0, 0],
        ]}
      />
      <Line
        points={[
          [0, 0, 0],
          [0, lineLength, 0],
        ]}
        lineWidth={lineWidth}
        vertexColors={[
          [0, 0, 0],
          [0, 1, 0],
        ]}
      />
    </group>
  );
}
