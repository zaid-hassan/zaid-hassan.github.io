import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Float,
  useGLTF,
  Html,
} from "@react-three/drei";
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
      mobile: [-0.5, -1, 0],
    },
  },
  "/about": {
    eth: {
      desktop: [3.7, 1, 0],
      mobile: [1.1, 1, 0],
    },
    terminal: {
      desktop: [2, -1, 0],
      mobile: [0.5, -1.5, 0],
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
      mobile: [-1.2, -0.6, 0],
    },
    terminal: {
      desktop: [1.5, -0.5, 0],
      mobile: [0.8, 0.8, 0],
    },
  },
};

function Loading() {
  return (
    <Html fullscreen>
      <div className="flex items-center justify-center w-full h-full bg-black animate-pulsate">
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </Html>
  );
}

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
  const currentRoute = modelPositions[location.pathname] || modelPositions["/"];

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
        <Suspense fallback={<Loading />}>
          {/* Ethereum Logo */}
          <group position={ethPosition}>
            <Float speed={5.5} rotationIntensity={0} floatIntensity={1.5}>
              <ETHModel />
            </Float>
          </group>

          {/* Terminal / Code Block */}
          <group position={terminalPosition}>
            <Float speed={5} rotationIntensity={0.8} floatIntensity={0.2}>
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
