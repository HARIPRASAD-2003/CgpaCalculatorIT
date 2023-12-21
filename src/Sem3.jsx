// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {dept,deptNames, semester} from './Sem3_dept'
const Sem3 = () => {
  const [department, setDept] = useState({});
  const [deptName, setD] = useState("Select Department");
  const grades = ['O', 'A+', 'A', 'B+', 'B', 'C', 'RA']; 
  const [res, setRes] = useState(null);
  let subs = Object.keys(department)
  const [subMark, setSubMark] = useState(new Array(department.length).fill(0));

  const [semMark, setSemMark] = useState(new Array(semester.length).fill(-1));

  const [cgpa, setcgpa] = useState(null); 

  
  const handleSemesterSubmit = () => {
    let validSemesters = semMark.filter((sem) => sem !== null && sem !== '');

    if (validSemesters.length === 0) {
      alert('Please fill at least one semester to calculate CGPA');
      return;
    }

    let sumSem = validSemesters.reduce((acc, sem) => acc + parseFloat(sem), 0);
    let ress = sumSem / validSemesters.length;
    setcgpa(ress.toFixed(2));
  };

const handleSemCheck = () => {
  
  for (let i=0; i<semMark.length; i++) {
    const sem = semMark[i];
    if (sem === -1 || sem === null) {
      alert('Please fill all the fields');
      return;
    } else if(0>sem || sem>10){
      alert("Please enter Valid Data");
      return;
    }
  }
  handleSemesterSubmit();
};

  const handleCheck = () => {
    console.log(subMark, Object.keys(department).length);
    if(subMark.length!==Object.keys(department).length){
      alert('Please fill all the fields');
      return;
    };
    for (let i=0; i<subMark.length; i++) {
      const sub = subMark[i];
      console.log(sub);
      if (sub === 0 || sub === null || sub==='') {
        alert('Please fill all the fields');
        return;
      }
    }
    handleSubmit();
  }
  const handleSubmit = () => {
    let gradeValues = {
      'O': 10,
      'A+': 9,
      'A': 8,
      'B+': 7,
      'B': 6,
      'C': 5,
      'RA': 0,
    };
    let gradeSum = 0;
    let creditSum = 0;
  
    for (let i=0; i<subMark.length; i++) {
      let sub = subMark[i];
      if (sub !== "RA") {
        gradeSum += gradeValues[sub] * department[subs[i]];
        creditSum += department[subs[i]];
        console.log(sub);
      }
    }
  
    let gpa = gradeSum / creditSum;
  
    setRes(gpa.toFixed(2));
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
              onChange={(e) => setSubMark((prevSubMark) => {
                const newSubMark = [...prevSubMark];
                newSubMark[ind] = e.target.value;
                return newSubMark;
              })}
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
                value={semMark[ind]<0?null:semMark[ind]}
                onChange={(e) => setSemMark((prevSemMark) => {
                  const newSemMark = [...prevSemMark];
                  newSemMark[ind] = e.target.value;
                  return newSemMark;
                })}
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
