import './EmailRow.css'
import { IconButton, Checkbox } from '@mui/material'
import { CiStar } from 'react-icons/ci'
import { MdLabelImportant } from 'react-icons/md'
import {Navigate, useNavigate} from 'react-router-dom';

export default function EmailRow ({ title, subject, description, time, id }) {

    const navigation = useNavigate();
  return (
    <>
      <div onClick={() => navigation('/mail')} className='email-row'>
        <div className='email-row-options'>
          <Checkbox />
          <IconButton>
            <CiStar size={28} />
          </IconButton>

          <IconButton>
            <MdLabelImportant size={28} />
          </IconButton>
        </div>

        <h3 className='email-row-title'>{title}</h3>

        <div className='email-row-message'>
          <h4>
            {subject}
            <span className='email-row-description'>{description}</span>
          </h4>
        </div>
        <p className='email-row-time'>{time}</p>
      </div>
    </>
  )
}
