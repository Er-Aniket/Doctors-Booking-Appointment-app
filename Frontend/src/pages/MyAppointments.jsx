import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-6 bg-gray-50 flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-6">
      <p className="text-xl font-bold mb-4 sm:mb-0 text-center">My Appointments</p>
      <div className="space-y-4 w-full">
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index} className="appointment-item p-4 bg-white shadow-md rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-28 sm:h-28 mb-4 sm:mb-0 sm:mr-6">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600 mb-2">{item.speciality}</p>
                <p className="text-sm font-medium text-gray-500">Address:</p>
                <p className="text-sm">{item.address?.line1}</p>
                <p className="text-sm mb-2">{item.address?.line2}</p>
                <p className="text-sm">
                  <span className="font-semibold">Date & Time:</span> 25, July, 2024 | 8:30 PM
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-4 sm:mt-0 ">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Pay Online
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
