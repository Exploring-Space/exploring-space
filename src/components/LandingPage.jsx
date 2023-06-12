import { Float, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";

import { LandingPageText } from "./canvas/LandingPageText";
import { Background } from "./canvas/Background";
import launchAudio from "/assets/Audio/launchAudio.mp3";

export function LandingPage() {
  const navigate = useNavigate();

  function startAudio() {
    new Audio(launchAudio).play();
  }

  function handleClick() {
    setTimeout(() => {
      navigate("/Explore");
    }, 3000);
  }

  return (
    <div className="relative w-screen h-screen grid ">
      <Background count={2000} />
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="#e7eaea" position={[0, 0, 5]} />
        <Float speed={0.8}>
          <LandingPageText />
        </Float>
      </Canvas>
      <Loader />
      <button
        onClick={() => {
          handleClick();
          startAudio();
        }}
        className="absolute justify-self-center bottom-1/4 z-1 w-60 p-5 rounded-md bg-indigo-800 text-white text-lg drop-shadow-xl"
      >
        ENTER SPACE
      </button>
    </div>
  );
}
