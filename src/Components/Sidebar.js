import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const Sidebar = () => {


    const sidebarItems =[
        {
            label: "Dashboard",
            icon: <DashboardIcon />,
            route: '/dashboard'
            
        },
        {
            label: 'Expenditures',
            icon: <AttachMoneyIcon />,
            route: '/expenditure'
        },
        {
            label:'Budgets',
            icon: <AccountBalanceWalletIcon />,
            route: '/budget'
        }

    ]

    const [ isOpen, setIsOpen ] = useState(false);

    const [width, setWidth] = useState('w-1/5');


    const handleSidebar = () =>{
         
        setIsOpen(!isOpen);
    }
    return (
    <div className='min-h-screen bg-gradient-to-l from-slate-800 via-slate-800 to-slate-900 mr-2' style={{ width: isOpen ? '260px': '50px'}} >

        <MenuIcon htmlColor="#0284c7" style={{float: 'right', marginRight: 12, marginTop: 50, marginBottom: 20}} onClick={handleSidebar}/>

        <div className="mt-28" style={{marginLeft: isOpen ? '32px' : '10px'}}>
        {
            sidebarItems.map(item=>(
                <Link className="flex text-white py-5 align-middle gap-4 hover:text-blue-400" to={item.route}>

                    {item.icon}
                   <div style={{display: isOpen ? 'block' : 'none'}}>{item.label}</div> 

                </Link>
            ))
        }
        </div>


        
    </div> 
    );
}
 
export default Sidebar;