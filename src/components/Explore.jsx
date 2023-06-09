import { Loader } from "@react-three/drei";

import { Background } from "./canvas/Background";
import { RocketModel } from "./RocketModel";
import { Cards } from "./Cards";
import { SolarSystem } from "./SolarSystem";
import "../App.css";

export function Explore() {
  return (
    <>
      <div className="relative">
        <Background count={80000} />
        <div id="rocket">
          <RocketModel />
        </div>
        <Cards />
      </div>
      <SolarSystem />
      <Loader />
    </>
  );
}
