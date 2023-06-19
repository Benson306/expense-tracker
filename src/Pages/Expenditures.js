import HeaderBar from "../Components/HeaderBar";
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

const Expenditure = () => {

    const [showModal, setShowModal] = useState(false);

    return ( 
    <div className="w-full min-h-screen bg-neutral-300 ">

        <HeaderBar title={"Expenditures"} />
        
        <div className="p-5">
            <button className="p-3 shadow-sm bg-sky-600 rounded-lg text-white flex place-items-center" onClick={() => setShowModal(true)}> 
                <AddIcon /> 
                Add Expenditure
            </button>

            { /* Modal */}

                {showModal ? (
                <div >
                    <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                    <div className="relative w-full my-6 mx-auto max-w-3xl">

                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h5 className="text-2xl font-semibold">
                            Add Expenditure
                            </h5>
                            <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                            >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                x
                            </span>
                            </button>
                        </div>

                        <form action="">
                            {/*body*/}
                            <div className="block p-6">

                                    <label>Title</label>
                                    <br />
                                    <input type="text" placeholder="Title" className="p-4 mb-5 w-full border border-slate-500 rounded-lg" required />
                                    <br />

                                    <div>
                                        <label>Amount:</label>
                                        <br />
                                        <input type="number" placeholder="Amount" className="p-4 mb-5 w-full border border-slate-500 rounded-lg" required />
                                    </div>

                                    <div>
                                        <label>Date:</label>
                                        <br />
                                        <input type="date" className="p-4 mb-5 w-full border border-slate-500 rounded-lg" required />
                                    </div>

                                
                            </div>

                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                                >
                                Close
                                </button>
                                <button
                                className="bg-sky-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                               // onClick={() => setShowModal(false)}
                                >
                                Save Changes
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
                ) : null}
            
            

            <div className="flex justify-center relative overflow-x-auto shadow-md sm:rounded-lg mt-5 lg:mx-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="p-4 ">
                        <th scope="col" className="px-6 py-3">id</th>
                        <th scope="col" className="px-6 py-3">Title</th>
                        <th scope="col" className="px-6 py-3">Amount</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody className="mb-2">
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 mb-2">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">Lunch</td>
                        <td className="px-6 py-4">2000</td>
                        <td className="px-6 py-4">Jun 20, 2023</td>
                        <td className="flex justify-evenly px-6 py-4">
                            <BorderColorIcon /> 
                            
                            <DeleteIcon />  
                        </td>
                    </tr>
                </tbody>
                
            </table>
            </div>




            
            
        </div>
    </div>
     );
}
 
export default Expenditure;