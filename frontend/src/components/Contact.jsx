import { Label } from '@radix-ui/react-dropdown-menu'
import {React, useState} from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'


const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [message, setMessage] = useState('')

  return (
    <div
    className='py-24 flex justify-center bg-white dark:bg-darkmode '
    >
        <div className='px-4 md:px-6 w-full flex flex-col items-center gap-10 md:flex-row justify-evenly dark:text-white '>
            <div className='flex flex-col    gap-4 md:gap-10 '>
                <h2 className='text-4xl font-bold  dark:text-white'>
                    Contact Us
                </h2>
                <h3 className=' w-[30vw]'><span className='text-xl font-bold'>Our Location<br/></span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis in soluta placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, excepturi.</h3>
                <p><span className='font-bold'>Address:</span> dknjasdnakjsdnaksjda</p>
                <p><span className='font-bold'>Email:</span> 123@email.com </p>
                <p><span className='font-bold'>Phone:</span> 0334123123</p>
            </div>

            <div>
                <form className='flex flex-col gap-4 bg-slate-200  w-[30vw] p-6 rounded-lg dark:bg-gray-800'>
                    <div className='flex flex-col gap-4'>
                        <Label>Name</Label>
                        <Input type='text' className="dark:bg-white text-black" placeholder= "Enter your name" value ={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Label htmlFor='name'>Email</Label>
                        <Input type='email' className="dark:bg-white text-black" placeholder="Enter your email" value={email} onChange = {(e) => setEmail(e.target.value)}  />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Label htmlFor='name'>Contact Number</Label>
                        <Input type='text' className="dark:bg-white text-black" placeholder="Enter your contact number" value={contact} onChange={(e) => setContact(e.target.value)} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Label>Message</Label>
                        <Textarea  placeholder="Enter your message " 
                        className="dark:bg-white text-black" value={message} onChange={(e) => setMessage(e.target.value)}
                        ></Textarea>
                    </div>
                    
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        </div>
      
    </div>
  )
  
}

export default Contact
