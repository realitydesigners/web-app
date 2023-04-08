import { OrbitControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import useSpline from '@splinetool/r3f-spline'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    'https://prod.spline.design/VGHoKknJbcK55ull/scene.splinecode'
  )
  return (
    <>
      <group {...props} dispose={null}>
        <OrbitControls />
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100000}
          near={70}
          fov={45}
          position={[0.0, 0.0, 800.0]}
          rotation={[0, 0, 0]}
        />
        <group name="Hologram">
          <group name="Animation">
            <group
              name="Logo"
              position={[0.38, 115.81, -0.25]}
              rotation={[0, 0, 0]}
              scale={0.07}
            >
              <group
                name="Left-Side"
                position={[-97.21, -48.96, -6.63]}
                rotation={[0, 0, Math.PI / 4]}
                scale={1}
              >
                <mesh
                  name="R"
                  geometry={nodes.R.geometry}
                  material={nodes.R.material}
                  castShadow
                  receiveShadow
                  position={[103.34, -5, 15.4]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.97}
                />
              </group>
              <group
                name="Right-Side"
                position={[95.64, 49.56, -1.5]}
                rotation={[0, 0, Math.PI / 4]}
                scale={1}
              >
                <mesh
                  name="D"
                  geometry={nodes.D.geometry}
                  material={nodes.D.material}
                  castShadow
                  receiveShadow
                  position={[-99.94, 6.97, 10.26]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={0.97}
                />
              </group>
            </group>
            <group
              name="TItle 2"
              position={[-7.31, 18.66, -2.59]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <group name="Group 5" position={[23.62, -3.18, 0]}>
                <mesh
                  name="Text 6"
                  geometry={nodes['Text 6'].geometry}
                  material={materials['Text 6 Material']}
                  castShadow
                  receiveShadow
                  position={[-25.38, -46.11, 3.63]}
                />
                <mesh
                  name="Text 61"
                  geometry={nodes['Text 61'].geometry}
                  material={materials['Text 61 Material']}
                  castShadow
                  receiveShadow
                  position={[-27.11, 2, 3.92]}
                />
                <mesh
                  name="Text 62"
                  geometry={nodes['Text 62'].geometry}
                  material={materials['Text 62 Material']}
                  castShadow
                  receiveShadow
                  position={[-25.14, 43.87, 3.55]}
                />
              </group>
            </group>
            <group name="TItle" position={[5.34, 18.66, -2.59]}>
              <group name="Group 51" position={[23.62, -3.18, 0]}>
                <mesh
                  name="Text 63"
                  geometry={nodes['Text 63'].geometry}
                  material={materials['Text 63 Material']}
                  castShadow
                  receiveShadow
                  position={[-25.38, -46.11, 3.63]}
                />
                <mesh
                  name="Text 64"
                  geometry={nodes['Text 64'].geometry}
                  material={materials['Text 64 Material']}
                  castShadow
                  receiveShadow
                  position={[-27.11, 2, 3.92]}
                />
                <mesh
                  name="Text 65"
                  geometry={nodes['Text 65'].geometry}
                  material={materials['Text 65 Material']}
                  castShadow
                  receiveShadow
                  position={[-25.14, 43.87, 3.55]}
                />
              </group>
            </group>
            <mesh
              name="Shape 3"
              geometry={nodes['Shape 3'].geometry}
              material={materials['Shape 3 Material']}
              castShadow
              receiveShadow
              position={[-133.52, 139.06, -0.08]}
              scale={[0.95, 0.97, 0.96]}
            />
            <mesh
              name="Border"
              geometry={nodes.Border.geometry}
              material={nodes.Border.material}
              castShadow
              receiveShadow
            />
          </group>
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1000}
          shadow-camera-right={1000}
          shadow-camera-top={1000}
          shadow-camera-bottom={-1000}
          position={[-27.34, -39.9, 300]}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
        />
      </group>
    </>
  )
}
