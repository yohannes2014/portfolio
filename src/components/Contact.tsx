import React from 'react'

const Contact:React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto pt-14 lg:h-[700px]' id='contact'>
        <p className='text-center text-primary font-bold text-[24px] mt-10'>Contact</p>

<div className='flex justify-around flex-col-reverse items-center'>
        <div>
          <p className='text-primary font-bold 4sx:text-[14px] 4sx:my-4'>Address</p>
          <iframe className='4sx:w-[280px] 4sx:h-[250px] rounded-xl' src="https://maps.google.com/maps?width=517&amp;height=527&amp;hl=en&amp;q=Bole medhanialem&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
         <div className='4sx:my-4 4sx:h-[50px]'>
         <p className='font-black text-primary'>Email: <a className='font-semibold text-blue-800 my-2 cursor-pointer hover:text-blue-600' href='mailto:m.yohammes2010@gmail.com'>m.yohannes2010@gmail.com</a></p>
         <p className='font-black text-primary'>Phone: <a className='font-semibold text-blue-800 my-2 cursor-pointer hover:text-blue-600' href='callto:+251912445517'>+2519 1244 5517</a></p>
         </div>
        </div> 
        <div className='w-[280px] h-[320px] rounded-xl shadow-md shadow-blue-300 backdrop-blur-sm bg-slate-100'>
          <p className='text-center text-primary font-bold mt-2 text-md'>Send message</p>
          <div className='p-3'>
            <form>
              <div className='mb-1'>
                <div className='flex justify-between px-1'>
                <label className='text-[12px]'>Full name:</label>
                <p className='text-red-500 font-bold'>*</p>
                </div>
                <input className='w-full h-7 text-md px-1 text-primary font-semibold bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200' type='text' />
              </div>
              <div className='mt-1'>
                <div className='flex justify-between px-1'>
                <label className='text-[12px]'>Email:</label>
                <p className='text-red-500 font-bold'>*</p>
                </div>
                <input className='w-full h-7 text-md px-1 text-primary font-semibold bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200' type='email' />
              </div>
              <div className='mt-1'>
                <div className='flex justify-between px-1'>
                <label>Message:</label>
                <p className='text-red-500 font-bold'>*</p>
                </div>
                <textarea className='w-full h-[60px] px-1 text-md text-primary font-semibold bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200 resize-none' ></textarea>
              </div>
              <div className='flex gap-3 my-1'>
                <button className='bg-primary hover:bg-blue-950 text-white px-5 py-1 rounded-md' type='submit'>Submit</button>
                <p className='cursor-pointer bg-green-500 px-3 py-1 rounded-md hover:bg-green-600 text-white'>Cancel</p>
              </div>

            </form>
          </div>
        </div>

</div>

        
    </div>
  )
}

export default Contact