import React from 'react'
import "./style.css"
import { useHistory } from 'react-router-dom';

const SubGetStarted = props => {
  const history = useHistory();
    return (
      <div className="font-open-sans">
        <div className="SubGetStarted-upperCurve">
          <div className="SubGetStarted-content">
            <p className="SubGetStarted-title">
              Ready to Get Started
            </p>
            <p className="SubGetStarted-subtitle ">
              Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio
              tincidunt maximus. Pellentesque tempus gravida viverra.
            </p>
            <button className="SubGetStarted-btn " onClick={() => history.push('/create')}>
              Start my website. It's free
            </button>
          </div>
        </div>
        <div className="SubGetStarted-lowerCurve"></div>
      </div>
    );
}

export default SubGetStarted
