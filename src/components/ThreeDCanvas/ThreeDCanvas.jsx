import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Float, useGLTF } from "@react-three/drei";
import { useSelector } from "react-redux";

function ETHModel() {
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const { scene } = useGLTF("/eth-logo.glb");
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        console.log(JSON.stringify(child.material));
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={isMobile ? 0.0015 : 0.002}
      position={[0, 1.3, 0]}
    />
  );
}

function ThreeDCanvas() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{ alpha: true }}
      >
        <Suspense fallback={null}>
          <Float speed={5.5} rotationIntensity={0} floatIntensity={1.5}>
            <ETHModel />
          </Float>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={.5} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls
          enableZoom
          minDistance={1}
          autoRotateSpeed={5}
          autoRotate={true}
          maxDistance={30}
        />
      </Canvas>
    </div>
  );
}

export default ThreeDCanvas;
