import PaidIcon from '@mui/icons-material/Paid';
import MoneyIcon from '@mui/icons-material/Money';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const Statictics = () => {
    return ( 
        <div className="block lg:flex justify-evenly">

                <div className="flex place-items-center bg-gray-200 p-5 shadow-lg rounded-lg lg:w-80 mb-5">
                    <div className="align-middle">
                        <PaidIcon fontSize="large" />
                    </div>
                    <div className="align-middle ml-4">
                        <div>This Month's Budget</div>
                        <div>30,000</div>
                    </div>
                    
                </div>

                <div className="flex place-items-center bg-gray-200 p-5 shadow-lg rounded-lg  lg:w-80 mb-5">
                    <div className="align-middle">
                        <MoneyIcon fontSize="large" />
                    </div>
                    <div className="align-middle ml-4">
                        <div>This Month's Expenditure</div>
                        <div>50,000</div>
                    </div>
                    
                </div>

                <div className="flex place-items-center bg-gray-200 p-5 shadow-lg rounded-lg lg:w-80 mb-5">
                    <div className="align-middle">
                        <CurrencyExchangeIcon fontSize="large" />
                    </div>
                    <div className="align-middle ml-4">
                        <div>Total Expenditure</div>
                        <div>100,000</div>
                    </div>
                    
                </div>

            </div>
     );
}
 
export default Statictics;