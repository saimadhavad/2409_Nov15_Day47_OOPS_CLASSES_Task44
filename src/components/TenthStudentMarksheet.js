import React from 'react'

function TenthStudentMarksheet(props) {
  return (
        <div>
            <h2>{`${props.name} ${props.teluguMarks} ${props.hindiMarks} ${props.englishMarks}
            ${props.mathsMarks} ${props.scienceMarks} ${props.socialMarks}`}</h2>
        </div>
  )
}

export default TenthStudentMarksheet
