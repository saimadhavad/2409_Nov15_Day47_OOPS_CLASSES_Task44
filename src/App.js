import './App.css';
import SecondaryEducationMarksheet from './classes/SecondaryEducationMarksheet';
import TenthStudentMarksheet from './components/TenthStudentMarksheet';

function App() {

    let SEMS = new SecondaryEducationMarksheet("Sai Madhava",91,92,93,94,95,96 );
    SEMS.hindiMarks = 14;
    SEMS.classSEMSCalculateResult();
    
    let SEMS2 = new SecondaryEducationMarksheet("Sai",95,96,97,98,99,100);
    // SEMS2.hindiMarks = 14;
    SEMS2.classSEMSCalculateResult();

  return (
    <div className="App">
      <h1>COMPONENTS / CLASSES - Tenth Student Marksheet /Secondary Education Marksheet </h1>
    <div>

      {/* USING COMPONENTS */}
        <TenthStudentMarksheet name="Sai Madhava" teluguMarks="91" hindiMarks="92"
        englishMarks="93" mathsMarks="94"
        scienceMarks="95" socialMarks="96"></TenthStudentMarksheet>
        <TenthStudentMarksheet name="Sai" teluguMarks="95" hindiMarks="96"
        englishMarks="97" mathsMarks="98"
        scienceMarks="99" socialMarks="100"></TenthStudentMarksheet>
    </div>
    </div>
  );
}

export default App;
