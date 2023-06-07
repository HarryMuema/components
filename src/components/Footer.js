import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer m-[20px]">
        <div className="footer-float-wrapper bg-red-600 text-center w-[100%] h-[400px] p-[24px] rounded-3xl flex justify-center flex-col mb-[40px]">
          <h1 className="float-title text-white font-bold text-[24px] leading-[140%]  inline-block align-middle mb-[60px]">
            Leave the Acquisition we deliver the best of everything all your
            software needs and talent
          </h1>
          <button className="call-to-action bg-black text-white font-bold text-[15px] rounded-full py-[16px] px-[32px] ">
            Book a call with us now
          </button>
        </div>
        <div className="footer-content place-content-center">
          <h1 className="logo text-black font-bold text-[36px] mb-[0px]">
            <span className="text-red-600">Young</span>Tal
          </h1>
          <p className="logo-content text-slate-400 text-[16px] font-normal mb-[30px] ">
            Lorem ipsum dolor sit amet consectetur. Sed volutpat orci eleifend
            semper justo .
          </p>
          <button className="call-to-action border-2 border-red-600 text-red-600 font-bold text-[15px] rounded-full py-[16px] px-[32px] mb-[40px]">
            Book a call with us now
          </button>
          <h3 className="link-title font-bold text-[16px] text-black mb-[20px]  ">
            Quick links
          </h3>
          <ul className="quick-links flex justify-between flex-col">
            <li>
              <a href="#" className="link">
                Services
              </a>
            </li>
            <li>
              <a href="#1" className="link">
                Talent
              </a>
            </li>
            <li>
              <a href="#2" className="link">
                About us
              </a>
            </li>
            <li>
              <a href="#3" className="link">
                Contact us
              </a>
            </li>
            <li>
              <a href="#4" className="link">
                Case studies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer
