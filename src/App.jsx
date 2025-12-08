import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  const studentData = [
    {
        nameData: 'Riley',
        emailData: 'riley@email.com'
    },
    {
        nameData: 'Maille',
        emailData: 'maille@email.com'
    },
    {
        nameData: 'Bixby',
        emailData: 'bixby@dog.com'
    }
  ];

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo numStudents={studentData.length}></ClassInfo>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}

export default App;
