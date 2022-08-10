import React, { useContext } from "react";
import { RouletteContext } from "./RouletteProvider";

/** 
 * The component returns the window that asks a user if he wants to play a game.
 * If users confirm, the game begins.
 */
export default function ConfirmWindow() {
  const { openDeniedWindow, resetAttemptNumber, openGameWindow } = useContext(RouletteContext);

  /**
   * The function resets the number of attempts and opens the game.
   */
  const startToPlay = () => {
    resetAttemptNumber();
    openGameWindow();
  }

  return (
    <div id='confirm-window'>
      <h1>Do you want to play a game?</h1>
      <div className='buttons-field'>
        <button className='btn btn-outline-warning' id="button-deny-play" onClick={openDeniedWindow}>No</button>
        <button className='btn btn-outline-success' id="button-confirm-play" onClick={(startToPlay)}>Yes</button>
      </div>
  </div>
  ) 
}

