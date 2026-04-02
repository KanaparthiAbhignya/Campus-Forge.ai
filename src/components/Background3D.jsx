import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';

function InteractiveShape({ position, color, speed, distort, scale=1, type="icosahedron" }) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    
    // Smooth interactive mouse parallax
    meshRef.current.position.x += ((state.mouse.x * 5) + position[0] - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += ((state.mouse.y * 5) + position[1] - meshRef.current.position.y) * 0.05;
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh 
        ref={meshRef} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? scale * 1.3 : scale}
        position={position}
      >
        {type === "icosahedron" && <icosahedronGeometry args={[2, 0]} />}
        {type === "torus" && <torusGeometry args={[1.5, 0.6, 16, 50]} />}
        {type === "box" && <boxGeometry args={[2, 2, 2]} />}
        {type === "sphere" && <sphereGeometry args={[1.5, 32, 32]} />}
        
        {type === "torus" || type === "box" ? (
          <MeshWobbleMaterial 
            color={hovered ? "#ffffff" : color} 
            factor={hovered ? 1 : 0.6} 
            speed={speed * 2} 
            metalness={0.8} 
            roughness={0.1}
            wireframe={hovered}
          />
        ) : (
          <MeshDistortMaterial 
            color={hovered ? "#ffffff" : color} 
            envMapIntensity={1} 
            clearcoat={1} 
            clearcoatRoughness={0.1} 
            metalness={0.5} 
            roughness={0.2}
            speed={hovered ? speed * 3 : speed}
            distort={hovered ? distort * 2 : distort}
            wireframe={hovered}
          />
        )}
      </mesh>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, pointerEvents: 'none', opacity: 0.8 }}>
      <Canvas eventSource={document.getElementById('root')}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={3} color="#f59e0b" />
        <pointLight position={[10, -10, 10]} intensity={3} color="#ec4899" />
        
        {/* Vibrant Colorful Floating Physics Objects Mapping To Parallax */}
        <InteractiveShape position={[-6, 3, -2]} color="#0ea5e9" speed={1.2} distort={0.5} type="icosahedron" scale={1.2} />
        <InteractiveShape position={[7, -3, -4]} color="#ec4899" speed={0.8} distort={0.4} type="torus" scale={1.3} />
        <InteractiveShape position={[-7, -4, -5]} color="#10b981" speed={1.5} distort={0.6} type="sphere" scale={1.1} />
        <InteractiveShape position={[8, 5, -8]} color="#f59e0b" speed={1} distort={0.3} type="box" scale={1.2} />
        <InteractiveShape position={[0, -7, -4]} color="#a855f7" speed={1.8} distort={0.7} type="icosahedron" scale={1.5} />
      </Canvas>
    </div>
  );
}
