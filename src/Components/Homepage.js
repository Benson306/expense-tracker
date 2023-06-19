import LandingHeaderBar from "./LandingHeaderBar";
import EastIcon from '@mui/icons-material/East';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Utils/AuthContext";

const Homepage = () => {

    const { name, addName } = useContext(AuthContext);

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();


        addName(user);

        navigate('/dashboard');

    }

    return ( <div className="bg-gradient-to-l from-slate-800 via-slate-800 to-slate-900 min-h-screen">
        <LandingHeaderBar />

        <div className="lg:flex flex-row ">
            <div className="w-3/4 lg:w-1/2 mt-20 lg:mt-40 mx-10 lg:mx-14">
                <h1 className="text-white mb-5 text-3xl lg:text-4xl font-bold tracking-wider">Take control of your finances with our intelligent expense tracker - the key to financial freedom!</h1>
                <h3 className="pt-4 text-lg lg:text-xl text-gray-500 ">Effortlessly track every penny you spend, stay on top of your budget, and achieve your financial goals with our intuitive expense tracker. Start making smarter financial decisions today!</h3>

                
            </div>
            
        </div>
        {
                    name !== null ? 
                    <Link to={"/dashboard"} className="mx-10 lg:mx-14 bg-sky-600 p-2 px-5 mt-10 rounded-3xl text-white flex place-items-center w-48 ">
                        Go to Dashboard
                        <EastIcon color="white" style={{marginLeft:6}} />
                    </Link> 
                    :
                    <form className="flex mx-10 lg:mx-14 bg-white p-1 w-72 rounded-lg mt-5">
                        <input type="text" className="p-3" onChange={e => setUser(e.target.value)} placeholder="Enter Your Name"  required/>
                        <button type="submit" className="bg-sky-600 p-4 text-white rounded-lg" onClick={(e)=> handleSubmit(e)}><EastIcon color="white"/></button>
                    </form>
                }

                <br /><br />

    </div> );
}
 
export default Homepage;