import './Header.css'
import { IoMdMenu } from 'react-icons/io'
import { IoMdSearch } from 'react-icons/io'
import { IoMdArrowDropdown, IoIosNotifications } from 'react-icons/io'
import { GrApps } from 'react-icons/gr'

export default function Header ({}) {
  return (
    <>
      <div className='header'>
        <div className='header-left'>
          <IoMdMenu size={28} />
          <img
            src={
              'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png'
            }
            alt='test'
            className=''
          />
        </div>

        <div className='header-middle'>
          <IoMdSearch size={28} className='search' color={'gray'} />
          <input placeholder='search mail...' type='text' />
          <IoMdArrowDropdown color={'gray'} className='drop-down' size={28} />
        </div>

        <div className='header-right'>
          <GrApps size={28} color={'gray'} />
          <IoIosNotifications size={28} color={'gray'} />
          <div
            style={{
              background: 'gray',
              height: 40,
              width: 40,
              borderRadius: 50
            }}
          ></div>
        </div>
      </div>
    </>
  )
}
