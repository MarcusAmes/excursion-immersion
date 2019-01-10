import 'rc-calendar/assets/index.css';
import React, { Component } from 'react';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import moment from 'moment';

const format = 'MM-DD-YYYY hh:mm a';
const now = moment();

const timePickerElement = <TimePickerPanel 
    showSecond={false}
    defaultValue={now}
    format={'hh:mm a'}
    use12Hours
    onAmPmChange={()=> null}
    />;

class CalendarPicker extends Component {
  state = {
    checked: 0
  }

  onChange = (value) => {
    this.setState({
      value
    });
    this.props.onChange({target: {name: this.props.name, value: moment(value).format()}}); 
  }

  render() {  
    if(this.state.checked < 4 && this.props.value) {
      this.setState({value: moment(this.props.value), checked: this.state.checked + 1})
    }
    
    const state = this.state;
    const calendar = (<Calendar
      dateInputPlaceholder="please input"
      format={format}
      timePicker={timePickerElement}
      defaultValue={state.value}
      showDateInput
      inputReadOnly
    />);
    return (
      <div style={{ width: "100%"}}>
        <div style={{
          position: 'relative',
          display: 'block',
          width: "100%"
        }}>
          <DatePicker
            animation="slide-up"
            calendar={calendar}
            value={state.value}
            onChange={this.onChange}>
            {
              ({ value }) => {
                return (
                  <span tabIndex="0">
                    <input
                      placeholder="Pick a time"
                      style={{ width: "100%", borderRadius: "4px", border: "1px solid lightgrey", padding: "7px" }}
                      readOnly
                      tabIndex="-1"
                      className="ant-calendar-picker-input ant-input"
                      value={value && (value.format(format) || '')}
                    />
                  </span>
                );
              }
            }
          </DatePicker>
        </div>
      </div>
    );
  }
}

export default CalendarPicker