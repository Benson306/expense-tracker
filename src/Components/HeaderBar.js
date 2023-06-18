import React from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';

export default function HeaderBar({ title }) {

  return (
    <div className='bg-gray-200 shadow-md p-2 flex justify-between pr-5'>
        <div>{title}</div>
        <Link to={'/'}>
            <PowerSettingsNewIcon />
        </Link>
    </div>
  )
}
