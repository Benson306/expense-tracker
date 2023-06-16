import LandingHeaderBar from "./LandingHeaderBar";
import EastIcon from '@mui/icons-material/East';

const Homepage = () => {
    return ( <div className="bg-gradient-to-l from-slate-800 via-slate-800 to-slate-900 min-h-screen">
        <LandingHeaderBar />

        <div className="flex flex-row ">
            <div className="w-full lg:w-1/2 mt-20 lg:mt-40 mx-14">
                <h1 className="text-white mb-5 text-3xl lg:text-4xl font-bold tracking-wider">Take control of your finances with our intelligent expense tracker - the key to financial freedom!</h1>
                <h3 className="pt-4 text-lg lg:text-xl text-gray-500 ">Effortlessly track every penny you spend, stay on top of your budget, and achieve your financial goals with our intuitive expense tracker. Start making smarter financial decisions today!</h3>

                <button className="bg-sky-600 p-2 px-5 mt-10 rounded-3xl text-white flex place-items-center">
                    Get Started
                    <EastIcon color="white" style={{marginLeft:5}} />
                </button>
            </div>
            
        </div>
    </div> );
}
 
export default Homepage;