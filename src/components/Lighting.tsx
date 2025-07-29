import {Sky, Environment} from "@react-three/drei"
export function Lighting() {
  return (
    <>
      <Environment background={true} files={"/hdri/lilienstein_1k.exr"}/>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
    </>
  );
}
