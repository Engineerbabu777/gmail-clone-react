import './EmailRow.css'
import { IconButton, Checkbox } from '@mui/material'
import { CiStar } from 'react-icons/ci'
import { MdLabelImportant } from 'react-icons/md'
import {Navigate, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { setSelectedMail } from '../features/mailSlice';

export default function EmailRow ({ title, subject, description, time, id }) {

    const navigation = useNavigate();

    const dispatch = useDispatch();
  return (
    <>
      <div onClick={() => {navigation('/mail');dispatch(setSelectedMail({title,subject,time,id,description}))}} className='email-row'>
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
