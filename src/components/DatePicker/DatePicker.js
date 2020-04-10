import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import getAppoint from '../../images/Mask Group 1.png';


const DatePicker = (props) => {
    //console.log(props);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Calendar
                            onChange={dt => props.handlePickDate(dt)}
                            value={props.date}
                            minDate={new Date()}
                            maxDate={new Date(2020,12,31)}
                            minDetail={'year'}
                        ></Calendar>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={getAppoint} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatePicker;