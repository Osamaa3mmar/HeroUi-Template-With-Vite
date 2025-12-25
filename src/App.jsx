import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />} path="/">
        <Route element={"inside Layout"} path="inside" />
        <Route element={"inside Layout"} path="" />
      </Route>
    </Routes>
  );
}

export default App;
