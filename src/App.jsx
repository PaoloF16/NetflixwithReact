import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./assets/pages/HomePage";
import ProfilePage from "./assets/pages/ProfilePage";
import SettingsPage from "./assets/pages/SettingsPage";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </>
  );
};

export default App;
