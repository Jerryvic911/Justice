import React from 'react';
import Image from 'next/image';

export default function Contact() {
  return (
    <main className='mx-auto w-[90%] md:w-[85%]'>
      <section className='my-6'>
        <div className='mb-5 w-full py-3 text-center md:py-0 md:text-left'>
          <h1 className='py-2 font-popins font-[600] text-[40px] capitalize tracking-wide md:text-[40px]'>
            contact us
          </h1>
          <span className='md:text-[20px] font-manrope text-[20px] font-light tracking-wider'>
            Get in Touch We are Here to Listen, Help, and Support — Reach Out
            Today.
          </span>
        </div>
        <Image
          src='https://images.pexels.com/photos/2789781/pexels-photo-2789781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='FAQ image'
          width={500}
          height={500}
          className='object-auto h-auto w-full object-center md:h-[300px]'
        />
      </section>
      <section className='my-6'>
        <div className='mb-5'>
          <h3 className='text-[30px] font-popins font-[600] tracking-wide md:text-[30px]'>
            Send us a message
          </h3>
          <span className='text-[20px] font-manrope font-[500] tracking-wider md:text-[20px]'>
            Fill the form and our team will get back to you as quickly as we
            can.
          </span>
        </div>
        <form className='flex flex-col'>
          <div className='grid-cols-3 grid-rows-5 gap-6 p-1 md:grid'>
            {/* Enter name of sender */}
            <div className='mb-5 flex flex-col md:mb-0'>
              <label
                htmlFor='name'
                className='mb-2 font-manrope inline-block text-[20px] font-[500] tracking-wide md:text-[20px]'
              >
                Name
              </label>
              <input
                type='text'
                placeholder='Enter Your Name'
                id='name'
                className='rounded-md border border-gray-900 p-2'
              />
            </div>
            {/* Enter email of sender */}
            <div className='mb-5 flex flex-col md:mb-0'>
              <label
                htmlFor='email'
                className='mb-2 inline-block font-manrope text-[20px] font-[500] tracking-wide md:text-[20px]'
              >
                E-mail
              </label>
              <input
                type='text'
                placeholder='Enter Your E-mail'
                id='email'
                className='rounded-md border border-gray-900 p-2'
              />
            </div>
            {/* Enter subject of message */}
            <div className='mb-5 flex flex-col md:mb-0'>
              <label
                htmlFor='subject'
                className='mb-2 inline-block font-manrope text-[20px] font-[500] tracking-wide md:text-[20px]'
              >
                Subject
              </label>
              <input
                type='text'
                placeholder='Your Subject'
                id='subject'
                className='rounded-md border border-gray-900 p-2'
              />
            </div>
            {/* Enter phone number */}
            <div className='mb-5 flex flex-col md:mb-0'>
              <label
                htmlFor='phone'
                className='mb-2 inline-block font-manrope text-[20px] font-[500] tracking-wide md:text-[20px]'
              >
                Phone
              </label>
              <input
                type='text'
                placeholder='Enter Your Phone Number'
                id='phone'
                className='rounded-md border border-gray-900 p-2'
              />
            </div>
            {/* Enter body of message */}
            <div className='col-span-2 row-span-3 mb-5 flex flex-col md:mb-0'>
              <label
                htmlFor='message'
                className='mb-2 inline-block font-manrope text-[20px] font-[500] tracking-wide md:text-[20px]'
              >
                Message
              </label>
              <textarea
                placeholder='Write Your Message Here'
                id='message'
                className='h-[200px] rounded-md border border-gray-900 p-2 md:h-full'
              ></textarea>
            </div>
            {/* Image displayed to the side of large screens */}
            <Image
              src='https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='call us'
              width={200}
              height={200}
              className='object-auto col-start-3 col-end-4 row-span-full hidden h-full w-full rounded-md md:block'
            />
          </div>
          <div className='my-6 flex flex-col items-center justify-between md:w-[60%] md:flex-row'>
            <div>
              <input
                type='radio'
                id='agree'
              />
              <label htmlFor='agree' className='text-[20px] font-manrope font-[500] '>
                {' '}
                I agree to Terms of Service and Privacy Policy.
              </label>
            </div>
            <button className='mt-2 text-[20px] font-[500] font-manrope h-[50px] w-[40%] rounded-full bg-gray-900 text-white md:mt-0 md:w-[20%]'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
