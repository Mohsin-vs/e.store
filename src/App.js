import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Index from './Pages';
import { Route, Routes } from 'react-router-dom';
import { DetailPage } from "./Components/index"
function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Index />} ></Route>
        <Route path="/test" element={<h1>test</h1>} ></Route>
        <Route path="/ProductDetail/:pid" element={<DetailPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div >
  );
}

export default App;
