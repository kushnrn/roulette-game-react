import React, { useContext } from "react";
import ConfirmWindow from "./ConfirmWindow"
import GameWindow from "./GameWindow.js";
import DeniedWindow from "./DeniedWindow";
import WinWindow from "./WinWindow";
import EndWindow from "./EndWindow";
import { RouletteContext } from "./RouletteProvider";

/**
 * The component displays the window depending on the step a user is on.
 * @returns 
 */
export default function Roulette () {
  const { step } = useContext(RouletteContext);
  
  const startFunc = () => {
    switch(step) {
      case 1: return <ConfirmWindow />
      case 2: return <GameWindow  />
      case 3: return <DeniedWindow />
      case 4: return <WinWindow />
      case 5: return <EndWindow />
    }
  }

  return (
    startFunc()
  )
}