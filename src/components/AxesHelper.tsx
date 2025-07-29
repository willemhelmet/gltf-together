import type React from 'react';
import { Line } from "@react-three/drei";
export function AxesHelper(props: React.JSX.IntrinsicElements['group']) {
  return (
    <group {...props}>
      <Line
        points={[
          [0, 0, 0],
          [0, 0, 1],
        ]}
        lineWidth={5}
        vertexColors={[
          [0, 0, 0],
          [0, 0, 1],
        ]}
      />
      <Line
        points={[
          [0, 0, 0],
          [1, 0, 0],
        ]}
        lineWidth={5}
        vertexColors={[
          [0, 0, 0],
          [1, 0, 0],
        ]}
      />
      <Line
        points={[
          [0, 0, 0],
          [0, 1, 0],
        ]}
        lineWidth={5}
        vertexColors={[
          [0, 0, 0],
          [0, 1, 0],
        ]}
      />
    </group>
  );
}
