// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {dept,deptNames, semester} from './Sem3_dept'
const Sem3 = () => {
  const [department, setDept] = useState({});
  const [deptName, setD] = useState("Select Department");
  const grades = ['O', 'A+', 'A', 'B+', 'B', 'C', 'RA']; 
  const [res, setRes] = useState(null);
  const subs = Object.keys(department)
  const subMark = new Array(subs.length);

  const semMark = new Array(semester.length);
  const [sem1, setSem1] = useState('');

  const [cgpa, setcgpa] = useState(null); 

  const handleSemesterSubmit = () => {
    // const semesters = [sem1];//, sem2, sem3, sem4];
    const validSemesters = semMark.filter((sem) => sem !== null && sem !== '');

    if (validSemesters.length === 0) {
      alert('Please fill at least one semester to calculate CGPA');
      return;
    }

    const sumSem = validSemesters.reduce((acc, sem) => acc + parseFloat(sem), 0);
    const res = sumSem / validSemesters.length;
    setcgpa(res.toFixed(2)); // Display CGPA with two decimal places
  };

const handleSemCheck = () => {
  // const semesters = [sem1,];// sem2, sem3, sem4];
  for (const sem of semMark) {
    if (sem === '' || sem === null) {
      alert('Please fill all the fields');
      return;
    } else if(0>sem && sem>10){
      alert("Please enter Valid Data");
    }
  }
  handleSemesterSubmit();
};

  const handleCheck = () => {
    for (const sub of subMark) {
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
      'B+': 7,
      'B': 6,
      'C': 5,
      'RA': 0,
    };
  
    // Define credits for each subject
    
  
    // Calculate sum of numerical values * credits for all subjects
    let gradeSum = 0;
    let creditSum = 0;
  
    // Loop through each subject
    let i=0;
    for (const sub of subMark) {
      // If the user got an 'F', don't consider that subject for GPA
      
      if (sub !== 'RA') {
        gradeSum += gradeValues[sub] * department[subs[i]];
        creditSum += department[subs[i]]; //credits[`sub${i}`];
        console.log(department[subs[i]]);
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
  
      <div><h1>Chennai Institute Of Technology</h1></div>
      <form>
        <div>
          <label htmlFor="dept">Branch:</label>
          <select id='dept' onChange={(e)=> {setDept(dept[e.target.value]); setD(e.target.value)}} value={deptName}>
          <option value="Select Department">Select Department</option>
          {deptNames.map((d)=> (
            <option key={d} value={d}>{d}</option>
          ))}
          </select>
        </div>
      </form>
      
      <div className='main-container'>

        <div className='left-section'>
          <h1>GPA Calculator</h1>
        <form>
          {subs.map((sub, ind) => (<div key={ind}>
            <label htmlFor={`gradeSub${ind}`}>{sub}</label>
            <select
              id={`gradeSub${ind}`}
              onChange={(e) => subMark[ind]=e.target.value}
              value={subMark[ind]}
            >
              <option value="">Select Grade</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>))}

          
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
            
            {semester.map((sem, ind) => (<div key = {ind}>
              <label htmlFor={sem}>{sem}:</label>
              <input
                type="number"
                id={sem}
                name={sem}
                value={semMark[ind]}
                onChange={(e) => semMark[ind]=e.target.value}
              />
            </div>))}
            

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

export default Sem3;
