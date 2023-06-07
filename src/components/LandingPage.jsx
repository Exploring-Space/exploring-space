import { Float } from "@react-three/drei";
import { LandingPageText } from "./canvas/3dText";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import launchAudio from "/assets/Audio/armstrongSmallStepCrop.wav";
import { Background } from "./canvas/Background";
import { PresentationControls } from "@react-three/drei";
import { useState } from "react";

export function LandingPage() {
  const [clicked, setClicked ] = useState(false);

  const navigate = useNavigate();

  function startAudio() {
    if (!clicked) {
      setClicked(true)
      new Audio(launchAudio).play();
    }
  }

  function handleClick() {
    setTimeout(() => {
      navigate("/Explore");
    }, 4000);
  }

  return (
    <div className="relative w-screen h-screen grid ">
      <Background count={2000} />
      <Canvas>
        {/* <pointLight position={[0, 20, 10]} intensity={1.5}/> */}
        <ambientLight intensity={0.1} />
        <directionalLight color="#e7eaea" position={[0, 0, 5]} />
        <PresentationControls snap>
        <Float speed={0.8}>
          <LandingPageText />
        </Float>
        </PresentationControls>
      </Canvas>
      <Loader />
      <button
        onClick={() => {
          handleClick();
          startAudio();
        }}
        className="absolute justify-self-center bottom-1/4 z-1 w-60 p-5 rounded-md bg-indigo-800 hover:bg-indigo-600 active:bg-indigo-400 text-white text-lg drop-shadow-xl"
      >
        STEP INTO SPACE
      </button>
    </div>
  );
}
