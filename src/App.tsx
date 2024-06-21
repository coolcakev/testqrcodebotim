import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import CustomSnackbarProvider from "./components/Snackbar/SnackbarProvider";

function App() {

  return (
      <>
          <CustomSnackbarProvider/>
          <Routes>
              <Route index element={<Home/>}/>
          </Routes>
      </>

  );
}

export default App;