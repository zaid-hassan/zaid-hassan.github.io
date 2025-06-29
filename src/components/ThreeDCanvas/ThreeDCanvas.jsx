import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Float, useGLTF } from "@react-three/drei";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import * as THREE from "three";

const modelPositions = {
  "/": {
    eth: {
      desktop: [0, 1.3, 0],
      mobile: [0, 1, 0],
    },
    terminal: {
      desktop: [-3.5, 0, 0],
      mobile: [-.5, -1, 0],
    },
  },
  "/about": {
    eth: {
      desktop: [3.7, 1, 0],
      mobile: [1.1, 1, 0],
    },
    terminal: {
      desktop: [2, -1, 0],
      mobile: [.5, -1.5, 0],
    },
  },
  "/projects": {
    eth: {
      desktop: [0, -1, 0],
      mobile: [0, 0, 0],
    },
    terminal: {
      desktop: [2, 1, 0],
      mobile: [1.1, 1.5, 0],
    },
  },
  "/contact": {
    eth: {
      desktop: [-3, 1, 0],
      mobile: [-1.2, -.6, 0],
    },
    terminal: {
      desktop: [1.5, -0.5, 0],
      mobile: [.8, 0.8, 0],
    },
  },
};

const terminalLines = [
  "> npx zaid-web3 boot",
  "> Compiling smart minds & smart contracts...",
  "> Web3 handshake: Polygon ✅",
  "> Authenticated: 0xza1dH4ss4n",
  "> arch@chain ~/src/spacegunner$",
];

function useTypingText(lines, speed = 80) {
  const [displayText, setDisplayText] = useState("");
  const index = useRef(0);
  const cursorVisible = useRef(true);

  useEffect(() => {
    const fullText = lines.join("\n");

    const typing = setInterval(() => {
      if (index.current <= fullText.length) {
        setDisplayText(
          fullText.slice(0, index.current) + (cursorVisible.current ? "▌" : "")
        );
        index.current++;
      } else {
        clearInterval(typing);
        setInterval(() => {
          cursorVisible.current = !cursorVisible.current;
          setDisplayText(fullText + (cursorVisible.current ? "▌" : ""));
        }, 500);
      }
    }, speed);

    return () => clearInterval(typing);
  }, [lines, speed]);

  return displayText;
}

function useTerminalTexture(text) {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#1a1b26";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "18px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#7dcfff";

    const lines = text.split("\n");
    lines.forEach((line, i) => {
      ctx.fillText(line, 20, 30 + i * 26);
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [text]);
}
function CodeBlock() {
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const typedText = useTypingText(terminalLines);
  const terminalTexture = useTerminalTexture(typedText);

  return (
    <group>
      <mesh>
        <boxGeometry args={isMobile ? [1.2, 0.75, 0.055] : [2.4, 1.5, 0.11]} />
        <meshStandardMaterial
          color="#1a1b26"
          roughness={0.2}
          metalness={0.3}
          emissive="#7aa2f7"
          emissiveIntensity={0.15}
        />
      </mesh>

      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={isMobile ? [1.05, 0.6] : [2.1, 1.2]} />
        <meshBasicMaterial map={terminalTexture} />
      </mesh>
    </group>
  );
}

function ETHModel() {
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const { scene } = useGLTF("/eth-logo.glb");
  
  return (
    <primitive
    object={scene}
    scale={isMobile ? 0.0015 : 0.002}
    position={[0, 0, 0]}
    />
  );
}

function ThreeDCanvas() {
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const location = useLocation();
  const currentRoute =
    modelPositions[location.pathname] || modelPositions["/"];

  const ethPosition = isMobile
    ? currentRoute.eth.mobile
    : currentRoute.eth.desktop;
  const terminalPosition = isMobile
    ? currentRoute.terminal.mobile
    : currentRoute.terminal.desktop;

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{ alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Ethereum Logo */}
          <group position={ethPosition}>
            <Float speed={5.5} rotationIntensity={0} floatIntensity={1.5}>
              <ETHModel />
            </Float>
          </group>

          {/* Terminal / Code Block */}
          <group position={terminalPosition}>
            <Float speed={5} rotationIntensity={.8} floatIntensity={.2}>
              <CodeBlock />
            </Float>
          </group>

          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
          <Environment preset="night" />
        </Suspense>

        <OrbitControls
          enableZoom
          autoRotate={false}
          minDistance={1}
          maxDistance={30}
        />
      </Canvas>
    </div>
  );
}

export default ThreeDCanvas;
