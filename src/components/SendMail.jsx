import './SendMail.css'
import { Button } from '@mui/material'
import { MdClose } from 'react-icons/md'
export default function SendMail ({}) {
  return (
    <>
      <div className='send-mail'>
        <div className='send-mail-header'>
          <h3>New Message</h3>
          <MdClose className='send-mail-close' />
          </div>

          <form>
            <input type="text" placeholder='To'/>
            <input type="text" placeholder='Subject'/>
            <input type="text" placeholder='Message'
            className="send-mail-message"
            />

            <div className='send-mail-options'>
              <Button 
              variant={'contained'}
              color={"primary"}
              type="submit"
              className="send-mail-btn">Send</Button>
            </div>
          </form>
      </div>
    </>
  )
}
