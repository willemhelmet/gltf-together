import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls } from "@react-three/drei";
import { AxesHelper } from "./components/AxesHelper.tsx";
import { Lighting } from "./components/Lighting.tsx";
import { AutomergeUrl, useDocument } from "@automerge/react";
import {MyFirstGLTF} from "./components/MyFirstGLTF.tsx"

function App({docUrl}) {
  return (
   <>
      <Canvas
        shadows
          className="fixed top-0 left-0 outline-none z-0 w-screen h-screen"
        camera={{ position: [5, 5, 5] }}
      >
        <OrbitControls />
        <Grid
          args={[20, 20]}
          position={[0, 0, 0]}
          cellColor={"#808080"}
          sectionColor={"#808080"}
        />
        <AxesHelper />
        <Suspense fallback={null}>
          <Lighting />
        </Suspense>
        <MyFirstGLTF docUrl={docUrl}/>
      </Canvas>
    </>
  );
}

export default App;
