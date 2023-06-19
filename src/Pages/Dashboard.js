import HeaderBar from "../Components/HeaderBar";
import Statictics from "../Components/Statistics";
import useBudgetExp from "../Utils/BudgetExpContext";


const Dashboard = () => {

    const { budgets, expenditures} = useBudgetExp();
    return ( 
    <div className="w-full min-h-screen bg-neutral-300 ">

        <HeaderBar title={"Dashboard"} />

        <div className="p-5">
            {/* Statictics */}

            <Statictics />
            
            <div className="block lg:flex lg:mx-10 mt-5 justify-evenly gap-10">

            <div className="bg-white p-2 lg:p-5 rounded-lg mb-5 w-full lg:w-1/2 flex justify-center">
                <div>
                <h1 className="text-xl text-center mb-4 font-bold">Latest Expenses</h1>
                    <table className="text-sm text-left text-gray-500 dark:text-gray-400">
                        
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="p-4 ">
                                <th scope="col" className="px-6 py-3">Title</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody className="mb-2">
                        {
                                expenditures.slice().reverse().map(budg =>(
                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 mb-2" key={budg.id}>
                                    <td className="px-6 py-4">{budg.title}</td>
                                    <td className="px-6 py-4">{budg.amount}</td>
                                    <td className="px-6 py-4">{budg.date}</td>                                    
                                </tr>
                                ))
                            }
                        </tbody>
                        
                    </table>
                    
                    </div>
                </div>



                <div className="bg-white p-2 lg:p-5 rounded-lg mb-5 w-full lg:w-1/2 flex justify-center">
                <div>
                <h1 className="text-xl text-center mb-4 font-bold">Latest Budgets</h1>
                    <table className="text-sm text-left text-gray-500 dark:text-gray-400">
                        
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="p-4 ">
                                <th scope="col" className="px-6 py-3">Title</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="mb-2">
                        {
                                budgets.slice().reverse().map(budg =>(
                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 mb-2" key={budg.id}>
                                    <td className="px-6 py-4">{budg.month}</td>
                                    <td className="px-6 py-4">{budg.amount}</td>                                  
                                </tr>
                                ))
                            }
                        </tbody>
                        
                    </table>
                    
                    </div>
                </div>
                
            </div>
        </div>
    </div>
     );
}
 
export default Dashboard;