import { Button, IconButton } from '@mui/material'
import { IoMdAdd } from 'react-icons/io'
import './Sidebar.css'
import SIdebarOption from './SidebarOption'
import { FaInbox, FaRegStar, FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineAccessTime } from 'react-icons/md'
import { IoPaperPlaneOutline, IoDocumentOutline } from 'react-icons/io5'
import { IoPerson } from 'react-icons/io5'
import { MdDuo } from 'react-icons/md'
import {
  closeSendMessage,
  openSendMessage,
  selectMail
} from '../features/mailSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function SIdebar ({}) {
  const isSendMessageOpen = useSelector(selectMail)
  const dispatch = useDispatch();


  return (
    <>
      <div className='sidebar'>
        <Button
          className='sidebar-compose'
          startIcon={<IoMdAdd size={32} />}
          onClick={() => isSendMessageOpen ? dispatch(closeSendMessage()) : dispatch(openSendMessage())}
        >
          Compose
        </Button>

        <SIdebarOption
          selected={true}
          Icon={FaInbox}
          title={'Inbox'}
          number={54}
        />
        <SIdebarOption Icon={FaRegStar} title={'Starred'} number={54} />
        <SIdebarOption
          Icon={MdOutlineAccessTime}
          title={'Snoozed'}
          number={54}
        />
        <SIdebarOption Icon={IoPaperPlaneOutline} title={'Inbox'} number={54} />
        <SIdebarOption Icon={IoDocumentOutline} title={'Inbox'} number={54} />

        <div className='sidebar-footer'>
          <div className='sidebar-footer-icons'>
            <IconButton>
              <IoPerson />
            </IconButton>

            <IconButton>
              <MdDuo />
            </IconButton>

            <IconButton>
              <FaPhoneAlt />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  )
}
