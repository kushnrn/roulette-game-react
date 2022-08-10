import { useContext } from "react";
import { RouletteContext } from "./RouletteProvider";

/**
 * The component appears if the user decides to stop the game and take his money.
 */
export default function EndWindow() {
  const { totalPrize } = useContext(RouletteContext);
  return (
    <div id='end-window'>
      <h3>
      Thank you for your participation.<br />
      Your prize is: {totalPrize}$
      </h3>
    </div>
  )
}