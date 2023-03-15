import React , {useEffect} from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCharacters } from "./store/createSlice";
import Home from "./Pages/Home/Home";
import Character from "./Pages/Character/Character";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  },[])


  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
