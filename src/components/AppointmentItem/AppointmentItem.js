import React, { useEffect, useState } from 'react';
import './AppointmentItem.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import PatientInfo from '../PatientInfo/PatientInfo';
import ScheduleCard from '../ScheduleCard/ScheduleCard';


const AppointmentItem = (props) => {

    ///console.log(props);
    const [services, setServices] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [appointmentInfo, setAppointmentInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        fetch('http://localhost:4200/services')
        .then(res => res.json())
        .then(data => {
            setIsLoading(false)
            setServices(data)
        })
    },[])


    const openModal = (title,time,space,startTime) => {
        setAppointmentInfo({title,time,space,startTime,date: props.date})
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const viewDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <div>
            <div className='mb-5'>
                <h3 className="text-info text-center" style={{margin:'40px 0'}}>
                    Available Appointments on {props.date.toLocaleDateString(undefined, viewDate)}
                </h3>

                {isLoading && <CircularProgress className='mt-3' disableShrink>
                    </CircularProgress>}
                <div className="row">
                    {
                        services.map(el => <div 
                            key={el._id} 
                            className="col-md-4 d-flex text-center justify-content-center">
                            <ScheduleCard
                                title={el.title}
                                time={el.time}
                                space={el.space}
                                startTime={el.startTime}
                                date={props.date}
                                openModal={openModal}
                            ></ScheduleCard>
                        </div>)
                    }
                </div>
                <PatientInfo
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                    appointmentInfo={appointmentInfo}
                ></PatientInfo>
            </div>
        </div>
    );
};

export default AppointmentItem;