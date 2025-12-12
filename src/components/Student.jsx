import PropTypes from 'prop-types';
import './Student.css';

const Student = (props) => {

  const attendanceButtonClicked = () => {
    props.onPresenceToggle(props.id);
  };
  
  const nameColor = props.isPresent ? 'present': 'absent';

  return (
    <div id={props.id}>
      <ul>
        <li className={nameColor}>Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={attendanceButtonClicked}>Toggle if {props.name} is present</button>
    </div>
  );
};

Student.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool.isRequired,
  onPresenceToggle: PropTypes.func.isRequired,
}).isRequired;

export default Student;