// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [sub1, setSub1] = useState(null);
  const [sub2, setSub2] = useState(null);
  const [sub3, setSub3] = useState(null);
  const [sub4, setSub4] = useState(null);
  const [sub5, setSub5] = useState(null);
  const [sub6, setSub6] = useState(null);
  const [sub7, setSub7] = useState(null);
  const grades = ['O', 'A+', 'A', 'B', 'B+', 'F']; // Add more grades as needed
  const [res, setRes] = useState(null);


  const [sem1, setSem1] = useState('');
  const [sem2, setSem2] = useState('');
  const [sem3, setSem3] = useState('');
  const [sem4, setSem4] = useState('');
  const [sem5, setSem5] = useState('');

  const [cgpa, setcgpa] = useState(null); 

  const handleSemesterSubmit = () => {
    const semesters = [sem1, sem2, sem3, sem4, sem5];
    const validSemesters = semesters.filter((sem) => sem !== null && sem !== '');
  
    if (validSemesters.length === 0) {
      alert('Please fill at least one semester to calculate CGPA');
      return;
    }
  
    const sumSem = validSemesters.reduce((acc, sem) => acc + parseFloat(sem), 0);
    const res = sumSem / validSemesters.length;
    setcgpa(res.toFixed(2)); // Display CGPA with two decimal places
  };
  
  const handleSemCheck = () => {
    const semesters = [sem1, sem2, sem3, sem4, sem5];
    for (const sem of semesters) {
      if (sem === '' || sem === null) {
        alert('Please fill all the fields');
        return;
      }
    }
    handleSemesterSubmit();
  };
  
  const handleCheck = () => {
    for (const sub of [sub1, sub2, sub3, sub4, sub5, sub6, sub7]) {
      if(sub===null || sub===""){
        alert("Please fill all fields");
        return;
      }
    }
    handleSubmit();
  }
  const handleSubmit = () => {
    // Map grades to corresponding numerical values
    const gradeValues = {
      'O': 10,
      'A+': 9,
      'A': 8,
      'B': 7,
      'B+': 6,
      'F': 0,
    };
  
    // Define credits for each subject
    const credits = {
      sub1: 3,  // Adjust as needed
      sub2: 3,
      sub3: 3,
      sub4: 3,
      sub5: 3,
      sub6: 3,
      sub7: 2,
    };
  
    // Calculate sum of numerical values * credits for all subjects
    let gradeSum = 0;
    let creditSum = 0;
  
    // Loop through each subject
    let i=1;
    for (const sub of [sub1, sub2, sub3, sub4, sub5, sub6, sub7]) {
      // If the user got an 'F', don't consider that subject for GPA
      
      if (sub !== 'F') {
        gradeSum += gradeValues[sub] * credits[`sub${i}`];
        creditSum += credits[`sub${i}`];
      }
      i++;
    }
  
    // Calculate GPA as the weighted average
    const gpa = gradeSum / creditSum;
  
    // Set the result in state
    setRes(gpa.toFixed(2)); // Display GPA with two decimal places
  };
  
  
  return (
    <div className="App">
      <div><h1>IT Department</h1></div>
      
      <div className='main-container'>

        <div className='left-section'>
          <h1>GPA Calculator</h1>
        <form>
          <div>
            <label htmlFor="gradeSub1">Computer Networks:</label>
            <select
              id="gradeSub1"
              onChange={(e) => setSub1(e.target.value)}
              value={sub1}
            >
              <option value="">Select Grade</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="gradeSub2">Fullsatck Web Development:</label>
            <select
              id="gradeSub2"
              onChange={(e) => setSub2(e.target.value)}
              value={sub2}
            >
              <option value="">Select Grade</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="gradeSub3">Distributed Computing:</label>
            <select
              id="gradeSub3"
              onChange={(e) => setSub3(e.target.value)}
              value={sub3}
            >
              <option value="">Select Grade</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="gradeSub4">Embedded System & IOT:</label>
            <select
              id="gradeSub4"
              onChange={(e) => setSub4(e.target.value)}
              value={sub4}
            >
              <option value="">Select Grade</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="gradeSub5">UI & UX Design:</label>
            <select
              id="gradeSub5"
              onChange={(e) => setSub5(e.target.value)}
              value={sub5}
            >
              <option value="">Select Grade</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="gradeSub6">Software Testing & Automation:</label>
            <select
              id="gradeSub6"
              onChange={(e) => setSub6(e.target.value)}
              value={sub6}
            >
              <option value="">Select Grade</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="gradeSub7">Fullsatck Web Development Lab:</label>
            <select
              id="gradeSub7"
              onChange={(e) => setSub7(e.target.value)}
              value={sub7}
            >
              <option value="">Select Grade</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <button type="button" onClick={handleCheck}>
            Submit
          </button>
        </form>
        {res !== null && (
          <div>
            <h2>GPA: {res}</h2>
          </div>
        )}
        </div>
      
      
        <div className="right-section">
          <h1>CGPA Calculator</h1>
          <form>
        
            <div>
              <label htmlFor="semester1">Semester 1:</label>
              <input
                type="number"
                id="semester1"
                name="semester1"
                value={sem1}
                onChange={(e) => setSem1(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="semester2">Semester 2:</label>
              <input
                type="number"
                id="semester2"
                name="semester2"
                value={sem2}
                onChange={(e) => setSem2(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="semester3">Semester 3:</label>
              <input
                type="number"
                id="semester3"
                name="semester3"
                value={sem3}
                onChange={(e) => setSem3(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="semester4">Semester 4:</label>
              <input
                type="number"
                id="semester4"
                name="semester4"
                value={sem4}
                onChange={(e) => setSem4(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="semester5">Semester 5:</label>
              <input
                type="number"
                id="semester5"
                name="semester5"
                value={sem5}
                onChange={(e) => setSem5(e.target.value)}
              />
            </div>
        

            <button type="button" onClick={handleSemCheck}>
              Calculate CGPA
            </button>
          </form>
          {cgpa !== null && (
          <div>
            <h2>CGPA: {cgpa}</h2>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
