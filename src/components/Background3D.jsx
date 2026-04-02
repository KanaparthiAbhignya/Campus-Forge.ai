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
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      zIndex: -1, 
      pointerEvents: 'none', 
      overflow: 'hidden',
      background: '#020617' // Deep dark base to match the nebula
    }}>
      <iframe 
        src='https://my.spline.design/particlenebula-4wjabM6b4V2Kf6ZWg8sJotdq/' 
        frameBorder='0' 
        width='100%' 
        height='100%'
        style={{ border: 'none' }}
        title="Spline Particle Nebula"
      ></iframe>
      
      {/* Subtle Dark Overlay to ensure UI readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.2) 0%, rgba(2, 6, 23, 0.6) 100%)',
        pointerEvents: 'none'
      }}></div>
    </div>
  );
}
