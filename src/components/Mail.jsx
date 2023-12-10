import './Mail.css'
import {
  FaPrint,
  FaArrowLeftLong,
  FaInbox,
  FaCheckCircle,
  FaEllipsisVertical
} from 'react-icons/fa6'
import { PiWarningCircleFill } from 'react-icons/pi'
import { MdDelete, MdEmail, MdLabelImportant } from 'react-icons/md'
import { IoTime } from 'react-icons/io5'
import { BsBoxArrowInRight } from 'react-icons/bs'
import { TbArrowsMoveVertical } from 'react-icons/tb'

import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import {useSelector} from 'react-redux';

export default function Mail ({}) {
  const navigate = useNavigate()

  const selectedMail = useSelector(state => state.mail.selectedMail)

  return (
    <>
      <div className='mail'>
        <div className='mail-tools'>
          <div className='mail-tools-left'>
            <IconButton onClick={() => navigate('/')}>
              <FaArrowLeftLong />
            </IconButton>
            <IconButton>
              <FaInbox />
            </IconButton>
            <IconButton>
              <PiWarningCircleFill />
            </IconButton>
            <IconButton>
              <MdDelete />
            </IconButton>
            <IconButton>
              <MdEmail />
            </IconButton>
            <IconButton>
              <MdLabelImportant />
            </IconButton>
            <IconButton>
              <IoTime />
            </IconButton>
            <IconButton>
              <TbArrowsMoveVertical />
            </IconButton>
          </div>

          <div className='mail-tools-right'>
            <IconButton>
              <FaEllipsisVertical />
            </IconButton>
            <IconButton>
              <FaPrint />
            </IconButton>
            <IconButton>
              <BsBoxArrowInRight />
            </IconButton>
          </div>
        </div>

        <div className='mail-body'>
          <div className='mail-body-header'>
            <h2 className=''>{selectedMail.subject}</h2>
            <MdLabelImportant color={'orange'} size={28} />
            <p className='mail-title'>{selectedMail.title}</p>
            <p className='mail-time'>{selectedMail.time}</p>
          </div>
          <div className='mail-body-message'>
            <p>{selectedMail.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
