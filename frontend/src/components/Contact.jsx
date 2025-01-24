import { Label } from '@radix-ui/react-dropdown-menu'
import { React, useRef, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import emailjs from '@emailjs/browser'


const Contact = () => {

  const [user_name, setName] = useState('')
  const [user_email, setEmail] = useState('')
  const [user_contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = {
        user_name,
        user_email,
        message,
      };
      emailjs
        .send(
          `${import.meta.env.VITE_service_id}`,
          `${import.meta.env.VITE_template_id}`,
          formData,
          `${import.meta.env.VITE_public_key}`
        )
        .then(
          () => {
            setLoading(false);
            alert("Message Sent Successfully");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            setLoading(false);
            alert("Failed to send message");
            console.log(error);
          }
        );
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      className='py-24 flex justify-center bg-secondary text-text'
    >
      <div className='px-4 md:px-6 w-full flex flex-col items-center gap-10 md:flex-row justify-evenly '>
        <div className='flex flex-col gap-4 md:gap-8'>
          <h2 className='text-4xl font-bold  '>
            Contact Us
          </h2>
          <h3 className=' w-[30vw]'><span className='text-xl font-bold'>Our Location<br /></span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis in soluta placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, excepturi.</h3>
          <p><span className='font-bold'>Address:</span> dknjasdnakjsdnaksjda</p>
          <p><span className='font-bold'>Email:</span> 123@email.com </p>
          <p><span className='font-bold'>Phone:</span> 0334123123</p>
        </div>

        <div>
          <form className='flex flex-col gap-4 bg-background w-[30vw] p-6 rounded-lg' ref={form} onSubmit={handleSubmit}>
            <div className='flex flex-col gap-1'>
              <Label>Name</Label>
              <Input type='text' style={{ border: "none", boxShadow: "none" }} placeholder="Enter your name" value={user_name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='flex flex-col gap-1'>
              <Label htmlFor='name'>Email</Label>
              <Input type='email' style={{ border: "none", boxShadow: "none" }} placeholder="Enter your email" value={user_email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
              <Label>Message</Label>
              <Textarea placeholder="Enter your message "
                style={{ border: "none", boxShadow: "none" }} value={message} onChange={(e) => setMessage(e.target.value)}
              ></Textarea>
            </div>

            <Button type='submit' className="bg-primary dark:bg-primary dark:hover:bg-[#D49A14] hover:bg-[#D49A14] text-text">{loading ? 'Sending...' : 'Send Message'}</Button>
          </form>
        </div>
      </div>

    </div>
  )

}

export default Contact
