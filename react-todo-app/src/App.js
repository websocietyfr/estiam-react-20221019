import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Task from './pages/Task';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="task/:id" element={<Task />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;
