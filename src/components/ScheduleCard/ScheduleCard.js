import React from 'react';

const ScheduleCard = (props) => {
    return (
        <div>
            <div className="card" style={{width: "350px"}}>
                <div className="card-body">
                    <h5 className="card-title text-info">{props.title}</h5>
                    <p className="card-text"><strong>{props.time}</strong></p>
                    <p className="card-text"><strong>{props.space}</strong></p>
                    <button className="btn btn-info" 
                        onClick={()=>props.openModal(props.title,props.time,props.startTime)}>Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScheduleCard;
