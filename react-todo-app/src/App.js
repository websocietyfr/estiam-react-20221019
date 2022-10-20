import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Task from './pages/Task';
import TokenContext from './contextes/TokenContext';

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <TokenContext.Provider value={token}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="task/:id" element={<Task />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Container>
          <Outlet />
        </Container>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
