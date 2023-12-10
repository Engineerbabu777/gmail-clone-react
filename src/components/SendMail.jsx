import './SendMail.css'
import { Button } from '@mui/material'
import { MdClose } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'

export default function SendMail ({}) {
  const { register, handleSubmit, watch, errors } = useForm()

  const [data, setData] = useState({
    to: '',
    message: '',
    subject: ''
  })

  const onSubmit = async formData => {
    const colRef = collection(db, 'emails')
    console.log(data)

    await addDoc(colRef, {
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: serverTimestamp()
    })
  }

  return (
    <>
      <div className='send-mail'>
        <div className='send-mail-header'>
          <h3>New Message</h3>
          <MdClose className='send-mail-close' />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            value={data.to}
            onChange={e => setData({ ...data, to: e.target.value })}
            name='to'
            type='text'
            placeholder='To'
          />
          {/* {errors.p && <p>to is required</p>} */}
          <input
            type='email'
            value={data.subject}
            onChange={e => setData({ ...data, subject: e.target.value })}
            name='subject'
            type='text'
            placeholder='Subject'
          />
          <input
            value={data.message}
            onChange={e => setData({ ...data, message: e.target.value })}
            name='message'
            type='text'
            placeholder='Message'
            className='send-mail-message'
          />

          <div className='send-mail-options'>
            <Button
              variant={'contained'}
              color={'primary'}
              type='submit'
              className='send-mail-btn'
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
