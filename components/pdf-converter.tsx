'use client'

import { useState, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from 'lucide-react'
import * as THREE from 'three'

function Duck() {
  const gltf = useLoader(GLTFLoader, '/assets/3d/duck.glb')
  const meshRef = useRef<THREE.Object3D>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return <primitive object={gltf.scene} ref={meshRef} scale={[2, 2, 2]} position={[0, -1, 0]} />
}

export default function PDFConverter() {
  const [url, setUrl] = useState('')

  const handleConvert = () => {
    if (!url) return
    const workerUrl = `https://pdfgen.letsbuild.fun/?url=${encodeURIComponent(url)}`
    window.open(workerUrl, '_blank')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleConvert()
    }
  }

  const handleClearUrl = () => {
    setUrl('')
  }

  return (
    <div className="relative w-full h-screen">
      <Canvas className="absolute inset-0">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Duck />
        <Environment preset="sunset" background />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-white">URL to PDF Converter</h1>
          <div className="relative">
            <Input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full bg-white/50 backdrop-blur-sm text-black placeholder-gray-500 pr-10"
              placeholder=" "
            />
            <label
              className="absolute left-3 top-2 text-gray-500 transition-all duration-300 pointer-events-none italic text-sm"
              style={{
                transform: url ? 'translateY(-130%) scale(0.75)' : 'translateY(0) scale(1)',
                transformOrigin: 'left top'
              }}
            >
              Input/paste your URL here
            </label>
            {url && (
              <button
                onClick={handleClearUrl}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label="Clear input"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <div className="flex justify-center">
            <Button
              onClick={handleConvert}
              className="px-6"
            >
              Let&apos;s PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}