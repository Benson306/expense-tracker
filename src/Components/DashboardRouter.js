import { Route, Routes } from "react-router-dom";
import Budget from "../Pages/Budget";
import Dashboard from "../Pages/Dashboard";
import Expenditures from "../Pages/Expenditures";
import Sidebar from "./Sidebar";

const DashboardRouter = () => {
    return (
        <Sidebar>
            <Routes>
                <Route path="/dashboard" element={ <Dashboard /> } />
                <Route path="/expenditure" element={<Expenditures />} />
                <Route path="/budget" element={<Budget />} />
            </Routes>
        </Sidebar>
    );
}
 
export default DashboardRouter;