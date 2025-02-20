import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [message, setMessage] = useState({})
  const [input, setInput] = useState({
    fullName:'',
    email:'',
    message:''
  });

const handleInput = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   const { name, value} = e.target;

   setInput((pre)=>({...pre, [name]:value}));

}

const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const mess = {
    fullName:input.fullName,
    email:input.email,
    message:input.message
  }
   setMessage(mess)
   console.log(message)
}

  return (
    <div className='lg:w-[1120px] m-auto '  >
      <p className='text-center text-primary 2xs:text-[28px] font-bold text-[18px] pt-20 mb-2' id='contact'>Contact us</p>

      <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full p-3 gap-8'>
        <div className='col-start-1 col-end-2 row-start-2 row-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2'>
          <iframe className='3sx:h-[250px] shadow-shadow 2xs:h-[280px] rounded-xl w-full' src="https://maps.google.com/maps?width=517&amp;height=527&amp;hl=en&amp;q=Bole medhanialem&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          <div className='my-4 3sx:h-[50px] h-[40px]'>
            <p className='3xs:font-black font-semi-bold text-primary text-[11px] 2xs:text-[14px]'>Email: <a className='3xs:font-semibold text-blue-800 my-2 cursor-pointer hover:text-blue-600 text-[10px]' href='mailto:m.yohammes2010@gmail.com'>m.yohannes2010@gmail.com</a></p>
            <p className='3xs:font-black font-semi-bold text-primary text-[11px] 2xs:text-[14px]'>Phone: <a className='3xs:font-semibold text-blue-800 my-2 cursor-pointer hover:text-blue-600 text-[10px]' href="tel:+251912 445 517">+2519 1244 5517</a></p>
          </div>
        </div>
        <div className='rounded-xl col-start-1 col-end-2 row-start-1 row-end-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 w-full shadow-shadow backdrop-blur-sm bg-slate-100 h-[300px]'>
          <p className='text-center text-primary font-bold mt-2 text-[16px]'>Send message</p>
          <div className='p-3'>
            <form onSubmit={submitHandler}>
              <div className='3xs:mb-1'>
                <div className='flex justify-between px-1'>
                  <label className='text-[12px]'>Full name:</label>
                  <p className='text-red-500 font-bold'>*</p>
                </div>
                <input onChange={handleInput} name='fullName' className='w-full h-7 text-md px-1 text-primary font-semibold bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200' type='text' />
              </div>
              <div className='mt-1'>
                <div className='flex justify-between px-1'>
                  <label className='text-[12px]'>Email:</label>
                  <p className='text-red-500 font-bold'>*</p>
                </div>
                <input onChange={handleInput} name='email' className='w-full h-7 text-md px-1 text-primary font-semibold bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200' type='email' />
              </div>
              <div className='mt-1'>
                <div className='flex justify-between px-1'>
                  <label className="text-[12px]" >Message:</label>
                  <p className='text-red-500 font-bold'>*</p>
                </div>
                <textarea onChange={handleInput} name='message' className='w-full h-[50px] px-1 text-md text-primary font-semibold bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200 resize-none' ></textarea>
              </div>
              <div className='flex gap-3 my-1'>
                <button  className='bg-primary hover:bg-blue-950 text-white px-5 py-1 text-[12px] rounded-md' type='submit'>Submit</button>
                <p className='cursor-pointer bg-green-500 px-3 py-1 rounded-md hover:bg-green-600 text-[12px] text-white'>Cancel</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact