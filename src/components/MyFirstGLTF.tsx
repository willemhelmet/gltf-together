import {useEffect, useState} from "react";
import {useDocument} from "@automerge/react";
import {GlTF} from "../glTF.d.ts"
import {GLTFLoader} from "three-stdlib";

export function MyFirstGLTF({docUrl}) {
  const [doc] = useDocument<GlTF>(docUrl, {
    suspense: true,
  })
  const [gltf, setGltf] = useState(null);

  useEffect(() => {
    if (!doc) return;

    const loader = new GLTFLoader();
    loader.parse(
      doc,
      '/damaged-helmet/',
      (loadedGltf) => {
        setGltf(loadedGltf);
      },
      (error) => {
        console.error('An error happened during GLTF parsing:', error);
      }
    );
  }, [doc])

  return (
    <>
      {gltf && <primitive object={gltf.scene}/>}
    </>
  )
}

export default MyFirstGLTF
