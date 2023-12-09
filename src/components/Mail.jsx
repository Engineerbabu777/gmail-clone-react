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
export default function Mail ({}) {
  const navigate = useNavigate()

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
            <h2 className=''>Subject</h2>
            <MdLabelImportant color={'orange'} size={28} />
            <p className='mail-title'>Title</p>
            <p className='mail-time'>10pm</p>
          </div>
          <div className='mail-body-message'>
            <p>This is a message</p>
          </div>
        </div>
      </div>
    </>
  )
}
