import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import studentData from './data.js';

function App() {
  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo numStudents={studentData.length}></ClassInfo>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}

export default App;
