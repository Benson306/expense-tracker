import HeaderBar from "../Components/HeaderBar";
import Statictics from "../Components/Statistics";


const Dashboard = () => {
    return ( 
    <div className="w-full min-h-screen bg-neutral-300 ">

        <HeaderBar title={"Dashboard"} />

        <div className="p-5">
            {/* Statictics */}

            <Statictics />
            
            
        </div>
    </div>
     );
}
 
export default Dashboard;