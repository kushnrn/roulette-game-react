import React, { createContext, useState } from "react";

/**
 * Context is created to store state data in a single location, so there is no need to pass that data through a bunch of components.
 */
export const RouletteContext = createContext();

/**
 * The component that will be used to wrap the App with the provider.
 */
export default function RouletteProvider({ children }) {
  let initialMaxRange = 8;
  let rangeAdd = 4;
  let initialMaxPrize = 100;
  let degreeBase = 2;
  let maxAttemptNumber = 3;

  /**
   * The variable shows the current cycle of the game. It depends on whether the user wins or loses.
   */
  const [cycleNumber, setCycleNumber] = useState(0);
  /** 
   * The function resets a cycle – it happens if a user loses.
  */
  const resetCycle = () => setCycleNumber(0);
  /**
   * The function increases a cycle number if a user wins on any step of the current cycle and agrees to continue the game.
   */
  const addCycleNumber = () => setCycleNumber(cycleNumber + 1);
  /**
   * The variable shows the number of users` attempts to guess the roulette number.
   */
  const [currentAttemptNumber, setAttemptNumber] = useState(null);
  /**
   * The function resets the number of attempts.
   */
  const resetAttemptNumber = () => setAttemptNumber(0);
  /**
   * The function increases the number of attempts if the user doesn`t guess the roulette number on the current cycle.
   */
  const addAttemptNumber = () => setAttemptNumber(currentAttemptNumber + 1);
  /**
   * The number that the user checks.
   */
  const [userNumber, setUserNumber] = useState(null);
  /**
   * The function that changes a user`s number.
   */
  const changeUserNumber = (number) => setUserNumber(number);
  /**
   * The total amount of money a user wins on a current attempt and a current cycle.
   */
  const [totalPrize, setTotalPrize] = useState(0);
  /**
   * The function that resets the total prize.
   */
  const resetTotalPrize = () => setTotalPrize(0);
  /**
   * The variable used to navigate between windows, that change if the user wins/loses/clicks to play more or deny to continue.
   */
  const [step, setStep] = useState(1);
  /** 
   * Opens the window that asks a user if he wants to play a game.
   */
  const openConfirmWindow = () => setStep(1);
  /**
   * Opens the window where a user plays a game and tries to guess the number.
   */
  const openGameWindow = () => setStep(2);
  /**
   * Opens the window if the user denies to play a game.
   */
  const openDeniedWindow = () => setStep(3);
  /**
   * Opens the window if the user guesses the number.
   */
  const openWinWindow = () => setStep(4);
  /**
   * Opens the window if user decides to stop the game and take the money.
   */
  const openEndWindow = () => setStep(5);
  /**
   * The function changes steps(windows), depending on the current stage of the game.
   */
  const moveStep = (steps) => setStep(steps);
  /**
   * The number that is generated randomly and needs to be guessed by a user.
   */
  const [numberToGuess, setGuessNumber] = useState(null);
  /**
   * The function that resets the random number.
   */
  const resetGuessNumber = () => setGuessNumber(null);
  /**
   * The function that generates a random number.
   */
  const generateGuessNumber = (randomNumber) => setGuessNumber(randomNumber);
  /**
   * The variable that sets the class to a Wheel Component.
   */
  const [classWheel, setClassWheel] = useState(null);
  /**
   * This function makes the wheel turn.
   */
  const runWheel = () => setClassWheel('turn');
  /**
   * This function stops the wheel.
   */
  const stopWheel = () => setClassWheel(null);

  /**
   * The Provider is the App component’s parent, and it’s providing values in context. The App component’s children can obtain these values directly on their own.
   */
  return (
    <RouletteContext.Provider value={{initialMaxRange, rangeAdd, initialMaxPrize, degreeBase, maxAttemptNumber, resetCycle, addCycleNumber, cycleNumber, resetAttemptNumber, addAttemptNumber, currentAttemptNumber, changeUserNumber, userNumber, resetTotalPrize, setTotalPrize, totalPrize, openConfirmWindow, openGameWindow, openDeniedWindow, openWinWindow, openEndWindow, moveStep, step, resetGuessNumber, generateGuessNumber, runWheel, stopWheel, classWheel, numberToGuess, setGuessNumber }}>
      {children}
    </RouletteContext.Provider>
  )
}