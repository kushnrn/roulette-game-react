import { useContext } from "react";
import { RouletteContext } from "./RouletteProvider";

/**
 * The component represents the wheel that starts to turn, when a user enters the number.
 * It shows the random number after some time in the center of the wheel showing whether a user guessed or not. 
 */
export default function Wheel () {
  const { classWheel, numberToGuess } = useContext(RouletteContext);

  return (
    <div className='fortune-wheel'>
      <div className="rotor">
        <div className={`${classWheel} cn-wrapper js-wheel`} id="cn-wrapper">
          <ul>
            <li><a href="#"><span ></span></a></li>
            <li><a href="#"><span ></span></a></li>
            <li><a href="#"><span ></span></a></li>
            <li><a href="#"><span ></span></a></li>
            <li><a href="#"><span ></span></a></li>
            <li><a href="#"><span ></span></a></li>
            <li><a href="#"><span ></span></a></li>
            <li><a href="#"><span ></span></a></li>
            <li><a href="#"><span ></span></a></li>
            <li><a href="#"><span ></span></a></li>
            <li><a href="#"><span ></span></a></li>
            <li><a href="#"><span ></span></a></li>
          </ul>
        </div>
      </div>
      <div className="cn-wrapper shadow">
        <div className="center">
          <h3 id='number-to-guess'>
            {numberToGuess}
          </h3>
        </div>
      </div>
    </div>
  )
}