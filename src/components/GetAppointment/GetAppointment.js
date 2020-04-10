import React, { useState } from 'react';
import './GetAppointment.css';
import DatePicker from '../DatePicker/DatePicker';
import AppointmentItem from '../AppointmentItem/AppointmentItem';

const GetAppointment = () => {

    const [date, setDate] = useState(new Date());

    //console.log(props.date);
    const handlePickDate = dt => {
        setDate(dt)
    }
    return (
        <div className="getAppointment">
            <div className="container getAppointment">
                <h2 class="text-center">Appointment</h2>
                <div>
                    <DatePicker 
                        date={date} 
                        handlePickDate={handlePickDate}
                    ></DatePicker>
                </div>
                <div>
                    <AppointmentItem
                        date={date}
                    ></AppointmentItem>
                </div>
                

            </div>
        </div>
        
    );
};

export default GetAppointment;


