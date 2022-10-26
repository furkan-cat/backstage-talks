import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "@/layout/index";
import Home from "@/pages/home";
import { ContextProvider } from "./context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
