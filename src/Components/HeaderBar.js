import React, { useContext } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Utils/AuthContext';

export default function HeaderBar({ title }) {

  const { name } = useContext(AuthContext);

  return (
    <div className='bg-gray-200 shadow-md p-2 flex justify-between pr-5'>
        <div>{title}</div>

        <Link to={'/'} className='flex place-items-center'>
              <div className='mr-2'>{name}</div>
              <PowerSettingsNewIcon />    
        </Link>
        
        
    </div>
  )
}
