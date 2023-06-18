import React from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';

export default function HeaderBar() {
  return (
    <div className='bg-gray-200 shadow-md p-2 flex justify-end pr-5'>
        <Link to={'/'}>
            <PowerSettingsNewIcon />
        </Link>
    </div>
  )
}
