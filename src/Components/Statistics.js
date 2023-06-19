import PaidIcon from '@mui/icons-material/Paid';
import MoneyIcon from '@mui/icons-material/Money';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useEffect, useState } from 'react';
import useBudgetExp from '../Utils/BudgetExpContext';

const Statictics = () => {

    const [currentBudget, setCurrentBudget] = useState(0);
    const [expenditure, setExpenditure] = useState(0);

    const [totalExpenditure, setTotalExpenditure] = useState(0);


    const { budgets, expenditures } = useBudgetExp();
    useEffect(()=>{
        //Get Current Month
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index

        const formattedCurrentMonth = `${currentYear}-${currentMonth.toString().padStart(2, '0')}`;

        budgets.forEach(budg => {
            if(budg.month == formattedCurrentMonth){
                setCurrentBudget(budg.amount);
            }
            
        })

        expenditures.forEach( exp =>{
            const parts = exp.date.split("-");
            const yearMonth = parts.slice(0, 2).join("-");

            if(yearMonth == formattedCurrentMonth){
                setExpenditure(prev => prev + Number(exp.amount) )
            }
        } )

        expenditures.forEach( exp =>{
            setTotalExpenditure(prevExp => prevExp + Number(exp.amount) )
        } )


    },[])
    return ( 
        <div className="block lg:flex justify-evenly">

                <div className="flex place-items-center bg-gray-50 p-5 shadow-lg rounded-lg lg:w-80 mb-5">
                    <div className="align-middle">
                        <PaidIcon fontSize="large" />
                    </div>
                    <div className="align-middle ml-4">
                        <div>This Month's Budget</div>
                        <div className='text-2xl font-bold text-gray-600'>
                            {currentBudget}
                        </div>
                    </div>
                    
                </div>

                <div className="flex place-items-center bg-gray-50 p-5 shadow-lg rounded-lg  lg:w-80 mb-5">
                    <div className="align-middle">
                        <MoneyIcon fontSize="large" />
                    </div>
                    <div className="align-middle ml-4">
                        <div>This Month's Expenditure</div>
                        <div className='text-2xl font-bold text-gray-600'>{expenditure}</div>
                    </div>
                    
                </div>

                <div className="flex place-items-center bg-gray-50 p-5 shadow-lg rounded-lg lg:w-80 mb-5">
                    <div className="align-middle">
                        <CurrencyExchangeIcon fontSize="large" />
                    </div>
                    <div className="align-middle ml-4">
                        <div>Total Expenditure</div>
                        <div className='text-2xl font-bold text-gray-600'>{totalExpenditure}</div>
                    </div>
                    
                </div>

            </div>
     );
}
 
export default Statictics;