import React from "react";
import { Message } from "./pages/Message";
import { Buttons } from "./pages/Buttons";
import { BrowserRoute, Routes, Route, BrowserRouter } from "react-router-dom";
import { Router } from "./pages/Router";
import { Counters } from "./pages/Counters";
import { Items } from "./pages/Items";
import { List } from "./pages/List";
import { TicTacToe } from "./tictactoe/Tictactoe";


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Router/>}>
          <Route index element={<Message/>}/>
          <Route path="Buttons" element={<Buttons/>}/>
          <Route path="Counters" element={<Counters/>}/>
          <Route path="Items" element={<Items/>}/>
          <Route path="List" element={<List/>}/>
          <Route path="ticTacToe" element={<TicTacToe/>}/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
