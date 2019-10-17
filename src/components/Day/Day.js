import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
  render() {

    const currentDate = new Date().getDay();
    const currentDay = () => {
      switch (currentDate) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
      }
    };

    return (
        <div>
          <p>Today is: {currentDay()}</p>
        </div>
    );
  }
}

export default Day;
