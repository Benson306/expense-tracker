import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardRouter from './Components/DashboardRouter';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Expenditures from './Pages/Expenditures';
import Budget from './Pages/Budget';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/dashboard"
          element={
          <>
            <Sidebar />
            <Dashboard />
          </>
        }
        />
        <Route
          path="/expenditure"
          element={
          <>
            <Sidebar />
            <Expenditures />
          </>
        }
        />
        <Route
          path="/budget"
          element={
          <>
            <Sidebar />
            <Budget />
          </>
        }
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
