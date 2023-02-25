import React from 'react'



export default function Footer() {
  return (
    <div className="bg-dark-top font-inter py-5">
      <footer data-aos="zoom-in" className='container text-white-100 mx-auto lg:px-20 font-russo px-5'>
        <div className="lg:flex items-baseline justify-between font-russo py-12">

          <div className="flex flex-col gap-y-6">

            <div className="space-y-3">

              <h3 className='text-xl tracking-widest font-russo font-semibold text-yellow-100 uppercase mb-6'>
                Contact
              </h3>

              <h2 className='md:text-4xl text-2xl font-russo font-bold text-white-100'>
                Get in touch
              </h2>

            </div>
            <p className='text-white-50 lg:w-9/12 font-inter'>
              We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly
            </p>

            <div className='flex gap-6 items-center'>
              <a href='https://twitter.com/betshiba_erc20'>
                <i class="fa fa-twitter fa-2x text-white-100" aria-hidden="true"></i>
              </a>

              <a href='https://t.me/betshibaportal'>
                <i class="fa fa-telegram fa-2x text-white-100" aria-hidden="true"></i>

              </a>

              <a href='mailto:betshibateam@gmail.com'>
                <i class="fa fa-envelope fa-2x text-white-100" aria-hidden="true"></i>
              </a>
            </div>

          </div>

          <div className="lg:mt-0 mt-12">
            <div className="sm:flex block items-center gap-x-6">

              <div className=" font-inter">
                <div className="mb-3">
                  <label htmlFor="f-name" className="text-white-100 font-inter text-xl font-semibold">
                    Your Name
                  </label>
                </div>
                <input type="text" placeholder="Type your name here" id="name" required="" className="p-3 border-2 rounded-sm bg-blue-100 ring-0" />
              </div>

              <div className="w-full sm:mt-0 mt-5  font-inter">
                <div className="mb-3">
                  <label htmlFor="date" className="text-white-100 font-inter text-xl font-semibold">
                    Your Email
                  </label>
                </div>
                <input type="email" placeholder="Type your email here" id="email" required="" className="p-3 border-2 rounded-sm bg-blue-100 ring-0" />
              </div>

            </div>

            <div className="mt-5 font-inter">
              <div className="mb-3">
                <label htmlFor="message" className="text-white-100 text-xl font-semibold">
                  Your Message
                </label>
              </div>
              <textarea rows='5' placeholder="Leave your question or comment here" id="message" required="" className="p-3 border-2 rounded-sm bg-blue-100 w-full" />
            </div>

            <button type='submit' className="rounded-sm lg:w-64 bg-gradient text-white-100 uppercase tracking-wider font-semibold px-3 py-3 mt-6">
              Send message
            </button>
          </div>

        </div>

        <p className='py-5 uppercase text-white-50 text-right'> BETSHIBA {new Date().getFullYear()} - All rights reserved.</p>

      </footer>
    </div>

  )
}
