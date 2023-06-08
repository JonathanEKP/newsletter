import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Components/Form/Form'
import Thanks from './Components/Thanks/Thanks'
import './App.css'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Form/>}/>
            <Route path="/thanks" element={<Thanks/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
