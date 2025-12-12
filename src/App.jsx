import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import { useState } from 'react';

const initialStudentData = [
  {   
    id: 1,
    nameData: 'Riley',
    emailData: 'riley@email.com',
    isPresentData: false,
  },
  {
    id: 2,
    nameData: 'Maille',
    emailData: 'maille@email.com',
    isPresentData: false,
  },
  {
    id: 3,
    nameData: 'Bixby',
    emailData: 'bixby@dog.com',
    isPresentData: true,
  }
];

function App() {
  const [studentData, setStudentData] = useState(initialStudentData);

    const toggleStudentPresence = (studentId) => {
    setStudentData(students => {
      return students.map(student => {
        if (student.id === studentId) {
          return { ...student, isPresentData: !student.isPresentData };
        } else {
          return student;
        }
      });
    });
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo numStudents={studentData.length}></ClassInfo>
      <StudentList students={studentData} onStudentPresenceToggle={toggleStudentPresence}></StudentList>
    </main>
  );
}

export default App;
