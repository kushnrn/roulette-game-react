import { useContext } from "react";
import { RouletteContext } from "./RouletteProvider";

/**
 * The component appears when a user guesses the number, telling the total amount of the prize and asking if he wants to continue the game.
 */
export default function WinWindow() {
  const { totalPrize, resetAttemptNumber, addCycleNumber, openGameWindow, openEndWindow, resetCycle, resetTotalPrize, openConfirmWindow, resetGuessNumber} = useContext(RouletteContext);

  /**
   * The function tracks the user`s reply. 
   * If he agrees to continue the game, then a new cycle starts and the game starts again.
   * If he denies, the game stops.
   */ 
  const setToPlayMore = (event) => {
    if (event.target === document.getElementById('agree-to-play-more')) {
      resetAttemptNumber();
      addCycleNumber();
      resetGuessNumber();
      openGameWindow();
    } if (event.target === document.getElementById('denied-to-play-more')) {
      openEndWindow();
      resetCycle();
      resetTotalPrize();
      openConfirmWindow();
    }
  }

  return (
    <div id='win-window'>
      <h3>
      Congratulation, you won! Your prize is: {totalPrize}$.<br/>
      Do you want to continue?
      </h3>
      <div className='buttons-field'>
      <button className='btn btn-outline-warning' id='denied-to-play-more' onClick={setToPlayMore}>Cancel</button>
      <button className='btn btn-outline-success'id='agree-to-play-more' onClick={setToPlayMore}>Ok</button>
      </div>
    </div>
  )
}