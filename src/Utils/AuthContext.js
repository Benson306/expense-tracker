import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [name, setName] = useState(null);

    const addName = (name) =>{
        
        setName(name);
        localStorage.setItem('expname', name);
    }

    const isNameSet = async () =>{
        try{
            let name = localStorage.getItem('expname');

            if(name){
                setName(name);
            }
        }
        catch(e){
            console('Setting Name Gives An Error');
        }
    }

    useEffect(()=>{
        isNameSet();
    },[]);

    return ( 
        <AuthContext.Provider value={{ name, addName}}>
            { children }
        </AuthContext.Provider>
     );
}