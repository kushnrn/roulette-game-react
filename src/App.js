import React from 'react';
import Roulette from "./Roulette";
import RouletteProvider from "./RouletteProvider"

/**
 * The component sits at the root of the tree. 
 * @returns components that make up the whole structure of the app – the roulette itself and the provider that keeps states of the whole app.
 */
export default function App(){
  return (
    <div className="container">
        <form className="my-5 mx-md-5" id='form'>
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-body">
                  <div className="text-center" style={{color: '#757575'}}>
                    <RouletteProvider>
                      <Roulette />
                    </RouletteProvider>
                  </div>
                </div>
              </div>
            </div>
        </form>
    </div>
  );
}
