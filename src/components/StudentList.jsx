import './StudentList.css';
import Student from './Student';

const StudentList = () => {
  const headingClass = 'student-list__heading';
  const listClass = 'student-list';
  
  return (
    <section>
      <h2 className={headingClass}>Student List</h2>
      <ul className={listClass}>
        <li><Student name='Riley' email='riley@email.com'></Student></li>
        <li><Student name='Maille' email='maille@email.com'></Student></li>
        <li><Student name='Bixby' email='bixby@dog.com'></Student></li>
      </ul>
    </section>
  );
};

export default StudentList;