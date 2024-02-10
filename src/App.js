import "./App.css";
import Character from "./pages/Character";
import CharacterList from "./pages/CharacterList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" Component={CharacterList} />
        <Route strict exact path="/:id" Component={Character} />
      </Routes>
    </div>
  );
}

export default App;
