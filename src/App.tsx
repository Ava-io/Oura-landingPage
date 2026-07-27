import { Route, Routes } from "react-router-dom";

import DashLayout from "./components/Layout/DashLayout";

const App = () => {
  return (
    <div className="font-sans ">
      <Routes>
        <Route element={<DashLayout />} path="/dashboard"></Route>
      </Routes>
    </div>
  );
};

export default App;
