import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto pt-6 lg:h-[700px] 3xs:pt-8' id='contact' >
      <p className='text-center text-primary font-bold text-[18px] mt-10'>Contact</p>

      <div className='flex justify-around flex-col-reverse items-center'>
        <div>
          <p className='text-primary font-bold 3sx:text-[14px] pr-2 3sx:my-4'>Address</p>
          <iframe className='3sx:w-[280px] w-[240px] 3sx:h-[250px] rounded-xl' src="https://maps.google.com/maps?width=517&amp;height=527&amp;hl=en&amp;q=Bole medhanialem&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          <div className='my-4 3sx:h-[50px] h-[40px]'>
            <p className='3xs:font-black font-semi-bold text-primary text-[11px]'>Email: <a className='3xs:font-semibold text-blue-800 my-2 cursor-pointer hover:text-blue-600 text-[10px]' href='mailto:m.yohammes2010@gmail.com'>m.yohannes2010@gmail.com</a></p>
            <p className='3xs:font-black font-semi-bold text-primary text-[11px]'>Phone: <a className='3xs:font-semibold text-blue-800 my-2 cursor-pointer hover:text-blue-600 text-[10px]' href='callto:+251912445517'>+2519 1244 5517</a></p>
          </div>
        </div>
        <div className='3xs:w-[280px] w-[240] h-[280px] rounded-xl shadow-md shadow-blue-300 backdrop-blur-sm bg-slate-100'>
          <p className='text-center text-primary font-bold mt-2 text-sm'>Send message</p>
          <div className='p-3'>
            <form>
              <div className='3xs:mb-1'>
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
                  <label className="text-[12px]" >Message:</label>
                  <p className='text-red-500 font-bold'>*</p>
                </div>
                <textarea className='w-full h-[50px] px-1 text-md text-primary font-semibold bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200 resize-none' ></textarea>
              </div>
              <div className='flex gap-3 my-1'>
                <button className='bg-primary hover:bg-blue-950 text-white px-5 py-1 text-[12px] rounded-md' type='submit'>Submit</button>
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