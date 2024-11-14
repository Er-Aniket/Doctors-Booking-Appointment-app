import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { currencySymbol } = useContext(AppContext);

  const daysOfWeeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(null); // Add state to store selected time

  const fetchDocInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]); // Clear slots
    
    let today = new Date();
    
    for (let i = 0; i < 7; i++) {
      // Get date with incrementing index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i); // Increment by `i` days

      // Set end time of the date
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeslots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        // Add slot to array
        timeslots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        // Increment time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots(prev => [...prev, timeslots]); // Append the slots for each day
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return docInfo && (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt={`${docInfo.name}`} />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="verified doctor icon" />
          </p>
      
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs-rounded-full'>{docInfo.experience} </button>
          </div>
     
          <div className="flex items-center gap-1 text-lg font-medium text-gray-900 mt-3 ">
            <p>About</p>
            <img src={assets.info_icon} alt="info icon" />
          </div>
          <p className='text-sm text-gray-500 max-w-[700px] mt-0 text-justify mb-4'>{docInfo.about}</p>
          <p className=' text-gray-900'>
            Appointment fee: <span>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {docSlots.length > 0 && docSlots.map((item, index) => (
            <div 
              key={index} 
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-300'}`} 
              onClick={() => setSlotIndex(index)} // Click to set active slot
            >
              <p>{item[0] && daysOfWeeks[item[0].dateTime.getDay()]}</p>
              <p>{item[0] && item[0].dateTime.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Time slots for selected day */}
        {docSlots.length > 0 && docSlots[slotIndex] && (
          <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
            {docSlots[slotIndex].map((item, index) => (
              <p 
                key={index}
                onClick={() => setSlotTime(item.time)} 
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} 
              >
                {item.time.toLowerCase()}
              </p>
            ))}
          </div>
        )}
        <div>
        <div className=''> 
          <button className=' bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
        </div>
      </div>
      {/* listing Realted Doctors */}
       <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
      </div>
    </div>
  );
};

export default Appointment;
