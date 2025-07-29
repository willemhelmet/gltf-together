import {useEffect} from "react";
import {Box, Gltf} from "@react-three/drei";
import {AutomergeUrl, useDocument} from "@automerge/react";
import {GlTF} from "../glTF.d.ts"
import {GLTFLoader} from "three-stdlib";

export function MyFirstGLTF({docUrl}) {
  const [doc, changeDoc] = useDocument<GlTF>(docUrl, {
    suspense: true,
  })
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.parse(doc);
  }, [doc])
  return (
    <>
      <Box>
        <meshBasicMaterial color="royalblue"/>
      </Box>
    </>
  )
}

export default MyFirstGLTF
