import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Sky, Grid, OrbitControls } from "@react-three/drei";
import { AxesHelper } from "./components/AxesHelper.tsx";
import { useEffect } from "react";

function App() {
  const gltf = useGLTF("/box/Box.gltf");

  useEffect(() => {
    console.log(gltf);
  }, [gltf]);

  return (
    <>
      <Canvas
        shadows
        className="fixed top-0 left-0 outline-none z-0 w-screen h-screen"
        camera={{ position: [5, 5, 5] }}
      >
        <Sky />
        <OrbitControls />
        <Grid
          args={[20, 20]}
          position={[0, 0, 0]}
          cellColor={"#808080"}
          sectionColor={"#808080"}
        />
        <AxesHelper />
      </Canvas>
    </>
  );
}

export default App;
