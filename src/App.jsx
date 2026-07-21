import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Calendar from "./pages/Calendar";
import Notes from "./pages/Notes";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
     
      <Route path="/login" element={<Login />} />

     
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="notes" element={<Notes />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        
      </Route>

     
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;