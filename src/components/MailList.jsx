import './MailList.css'
import { Checkbox, IconButton } from '@mui/material'
import { IoMdArrowDropdown } from 'react-icons/io'
import { LuRedo } from 'react-icons/lu'
import { MdOutlineMoreVert, MdSettings } from 'react-icons/md'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft, FaKeyboard } from 'react-icons/fa'
import Section from './Section'
import { FaInbox } from 'react-icons/fa6'
import { IoIosPricetag } from 'react-icons/io'
import { IoPeople } from 'react-icons/io5'
import EmailRow from './EmailRow'
import { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../firebase'

export default function EmailList ({}) {
  const [email, setEmails] = useState([])

  const [values] = useCollection(collection(db, 'emails'))

  return (
    <>
      <div className='email-list'>
        <div className='email-list-settings'>
          <div className='email-list-settings-left'>
            <Checkbox />

            <IconButton>
              <IoMdArrowDropdown />
            </IconButton>

            <IconButton>
              <LuRedo />
            </IconButton>

            <IconButton>
              <MdOutlineMoreVert />
            </IconButton>
          </div>
          <div className='email-list-settings-right'>
            <IconButton>
              <FaChevronLeft />
            </IconButton>
            <IconButton>
              <FaChevronRight />
            </IconButton>
            <IconButton>
              <FaKeyboard />
            </IconButton>
            <IconButton>
              <MdSettings />
            </IconButton>
          </div>
        </div>

        <div className='email-list-sections'>
          <Section Icon={FaInbox} title='primary' color='red' selected />
          <Section Icon={IoPeople} title='social' color='#1A73E8' />
          <Section Icon={IoIosPricetag} title='promotions' color='green' />
        </div>

        <div className='email-list-list'>
          {values?.docs?.map(doc => (
            <EmailRow
              title={'Title'}
              subject={doc.data().subject}
              description={doc.data().message}
              id={doc.id}
              time={new Date(doc.data().timestamp?.seconds *1000).toUTCString()}
            />
          ))}

          
        </div>
      </div>
    </>
  )
}
