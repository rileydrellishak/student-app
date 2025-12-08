import PropTypes from 'prop-types';
import './Student.css';
import { useState } from 'react';

const Student = (props) => {
  const [isPresent, setIsPresent] = useState(false);
  
  const togglePresence = () => {
    setIsPresent(!isPresent);
  };

  const nameColor = isPresent ? 'present': 'absent';

  return (
    <div>
      <ul>
        <li className={nameColor}>Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={togglePresence}>Toggle if {props.name} is present</button>
    </div>
  );
};

Student.PropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Student;