import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './index.scss';

EventTime.propTypes = {
    times: PropTypes.array,
};

EventTime.defaultProps = {
    times: []
}

function EventTime(props) {

    const {times} = props;
    const renderTimes = () =>{
        return times.map(time =>{
            return (
                <div className="col">
                    <div className="time-item">
                        <span className = "number">{time.startTime}:00</span>
                        <span className = "notify">{renderNotify()}</span>
                    </div>
                </div>
            );
        })
    }

    const today = new Date("Sat Jul 17 2021 23:25:43");
    console.log(today.getDate())

    const renderNotify = (startTime, endTime) => {
        // chua xu ly
        return "Sap dien ra";
    }

    return (
        <div className = "event-time-content">
            <div className="row">
                {renderTimes()}
            </div>
        </div>
    );
}

export default EventTime;