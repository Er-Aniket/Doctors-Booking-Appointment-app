import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Edwart Vincent',
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: '57th cross, Richmond',
      line2: 'circle, church Road, London',
    },
    gender: 'Male',
    dob: '2000-01-20',
  });

  const handleChange = (key, value) => {
    setUserData((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddressChange = (lineKey, value) => {
    setUserData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [lineKey]: value,
      },
    }));
  };

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded'src={userData.image} alt="Profile" />
      {
        isEdit ? (
          <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
            type='text'
            value={userData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        ) : (
          <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
        )
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          {
            isEdit ? (
              <input  className='bg-gray-100 max-w-52'
                type='email'
                value={userData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            ) : (
              <p className='text-blue-400'>{userData.email}</p>
            )
          }
          
          
          <p className='font-medium'>Phone:</p>
          {
            isEdit ? (
              <input  className='bg-gray-100 max-w-52'
                type='text'
                value={userData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            ) : (
              <p className='text-blue-400'>{userData.phone}</p>
            )
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit ? (
              <div>
                <input className='bg-gray-50'
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) => handleAddressChange('line1', e.target.value)}
                />
                <br />
                <input className='bg-gray-50 '
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) => handleAddressChange('line2', e.target.value)}
                />
              </div>
            ) : (
              <p className='text-gray-500 text-blue-400'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )
          }
        </div>
      </div>
      <div>
  <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
  <div className='grid grid-cols-[1fr_3fr]  text-neutral-700'>
  <p className='font-medium mt-3 mb-3'>Gender:</p>
  {
    isEdit ? (
      <select className='max-w-28'
        onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
        value={userData.gender}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    ) : (
      <p className='text-gray-400' >{userData.gender}</p>
    )
  }
  <p className='font-medium mb-3 mt-2'>Birthday:</p>
  {
    isEdit ? (
      <input className='bg-gray-100 max-w-28'
        type='date'
        onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
        value={userData.dob}
      />
    ) : (
      <p>{userData.dob}</p>
    )
  }
  </div>
</div>
<div className='mt-10'>
  {
    isEdit ? (
      <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(false)}>Save information</button>
    ) : (
      <button className='border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
    )
  }
</div>

    </div>
  );
};

export default MyProfile;
