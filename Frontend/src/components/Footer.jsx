import React from 'react';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:flex-row  gap-14 my-10 mt-40 text-sm'>
        <div className='flex-1'>
          <img className='mb-5 w-40' src='logo.svg' alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 text-justify'>
           
Prescripto is a user-friendly doctor appointment booking website that simplifies healthcare access. Users can browse doctors, view profiles, check availability, and book consultations seamlessly, enhancing convenience and streamlining medical appointment management.
          </p>
        </div>
        <div className='flex-1'>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='flex-1'>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>aniket.mishra.er@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='py-5 text-sm text-center'>Copyright 2040@ Prescripto - All Right Reserved</p>
    </div>
  );
};

export default Footer;
