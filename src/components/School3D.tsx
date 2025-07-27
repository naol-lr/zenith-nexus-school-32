import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cone } from '@react-three/drei';
import { Mesh } from 'three';

function SchoolBuilding() {
  const buildingRef = useRef<Mesh>(null);
  const roofRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (buildingRef.current && roofRef.current) {
      buildingRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      roofRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group>
      {/* Main Building */}
      <Box ref={buildingRef} args={[4, 3, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2d7d32" transparent opacity={0.8} />
      </Box>
      
      {/* Roof */}
      <Cone ref={roofRef} args={[3, 1.5, 4]} position={[0, 2.25, 0]}>
        <meshStandardMaterial color="#1565c0" transparent opacity={0.9} />
      </Cone>
      
      {/* Windows */}
      <Box args={[0.6, 0.6, 0.1]} position={[-1.2, 0.5, 1.05]}>
        <meshStandardMaterial color="#81c784" transparent opacity={0.6} />
      </Box>
      <Box args={[0.6, 0.6, 0.1]} position={[1.2, 0.5, 1.05]}>
        <meshStandardMaterial color="#81c784" transparent opacity={0.6} />
      </Box>
      
      {/* Door */}
      <Box args={[0.8, 1.5, 0.1]} position={[0, -0.75, 1.05]}>
        <meshStandardMaterial color="#4caf50" />
      </Box>
      
      {/* School Sign */}
      <Text
        position={[0, 3.5, 0]}
        fontSize={0.4}
        color="#4caf50"
        anchorX="center"
        anchorY="middle"
      >
        UNIFARM
      </Text>
    </group>
  );
}

function FloatingElements() {
  const sphereRef = useRef<Mesh>(null);
  const sphere2Ref = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (sphereRef.current && sphere2Ref.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5 + 2;
      sphere2Ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.3 + 1.5;
      sphere2Ref.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group>
      <Sphere ref={sphereRef} args={[0.3]} position={[-3, 2, 1]}>
        <meshStandardMaterial color="#4caf50" transparent opacity={0.6} />
      </Sphere>
      <Sphere ref={sphere2Ref} args={[0.2]} position={[3, 1.5, -1]}>
        <meshStandardMaterial color="#81c784" transparent opacity={0.7} />
      </Sphere>
    </group>
  );
}

interface School3DProps {
  className?: string;
}

export const School3D = ({ className }: School3DProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`w-full h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas camera={{ position: [5, 3, 8], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4caf50" />
        
        <SchoolBuilding />
        <FloatingElements />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={!isHovered}
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minDistance={6}
          maxDistance={12}
        />
      </Canvas>
    </div>
  );
};