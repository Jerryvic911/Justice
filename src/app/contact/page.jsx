import React from 'react';
import Image from 'next/image';

export default function Contact() {
  return (
    <main>
      <section>
        <div>
          <h1>contact us</h1>
          <span>
            Get in Touch We are Here to Listen, Help, and Support — Reach Out
            Today.
          </span>
        </div>
        <Image
          src='https://images.pexels.com/photos/2789781/pexels-photo-2789781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='FAQ image'
          width={500}
          height={500}
          className=''
        />
      </section>
      <section>
        <div>
          <h3>Send us a message</h3>
          <span>
            Fill the form and our team will get back to you as quickly as we
            can.
          </span>
        </div>
        <form>
          <div>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                placeholder='Enter Your Name'
                id='name'
              />
            </div>
            <div>
              <label htmlFor='email'>E-mail</label>
              <input
                type='text'
                placeholder='Enter Your E-mail'
                id='email'
              />
            </div>
            <div>
              <label htmlFor='subject'>Subject</label>
              <input
                type='text'
                placeholder='Your Subject'
                id='subject'
              />
            </div>
            <div>
              <label htmlFor='phone'>Phone</label>
              <input
                type='text'
                placeholder='Enter Your Phone Number'
                id='phone'
              />
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea
                placeholder='Write Your Message Here'
                id='message'
              ></textarea>
            </div>
            <Image
              src='https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='call us'
              width={200}
              height={200}
            />
          </div>
          <div>
            <input
              type='radio'
              id='agree'
            />
            <label htmlFor='agree'>
              {' '}
              I agree to Terms and Service and Privacy Policy.
            </label>
            <button>Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
}
