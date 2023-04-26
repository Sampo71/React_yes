import React from "react";
import './Tictactoe.css'
import { Board } from "./Board";
import { useState } from "react";

const initialBoard=['','','','','','','','',''];

export const TicTacToe =()=>{
    const[gameState, setGameState]= useState(initialBoard);
    const[isXTurn, setIsXTurn] = useState(true);

    const onSquareClick =(index)=>{
        let strings = Array.from(gameState);
        if(strings[index] !== ''){
           return;
        }
        strings[index] = isXTurn ? 'X' : 'O';
        setGameState(strings);
        setIsXTurn(!isXTurn);
    }

   const checkWinner = ()=>{
       const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
       ];
       for (let i = 0; 1 < lines.length; i++){
           const [a,b,c] = lines[i];
           if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gamestate[c]){return gameState[a]}
       }
       return null;
   }

    return(
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Board gameState={gameState} onSquareClick={onSquareClick}/>
        </div>
    );
}