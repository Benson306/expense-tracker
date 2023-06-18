const LandingHeaderBar = () => {
    return ( <div className="bg-gradient-to-l from-slate-800 via-slate-800 to-slate-900">
        <ul className="flex flex-row justify-between p-4 mx-2 lg:mx-10 place-items-center">
            <li className="text-xl font-bold text-white">Expense Tracker</li>
            <li className="flex-end ">
                <button className="p-2 bg-sky-600 text-white rounded-3xl w-28">Get Started</button>
            </li>
        </ul>
    </div> );
}
 
export default LandingHeaderBar;