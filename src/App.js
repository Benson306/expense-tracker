import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Expenditures from './Pages/Expenditures';
import Budget from './Pages/Budget';
import { BudgetExpProvider } from './Utils/BudgetExpContext';
import { AuthContext, AuthProvider } from './Utils/AuthContext';
import { useContext } from 'react';

function App() {
  const { name }  = useContext(AuthContext);

  return (
    <BrowserRouter>
    <BudgetExpProvider>

    {
      name == null ? 
    
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Homepage />} />
    </Routes>
  
    :

    <div className='flex'>
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
      </div>
      }

      </BudgetExpProvider>
    </BrowserRouter>

  );
}

export default App;
