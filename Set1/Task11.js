// Task 11: Return pass or fail status using student details.
function getPassFailStatus(name, rollNumber, marks) {
  const passingMarks = 40;

  if (marks >= passingMarks) {
    return `${name} (Roll No: ${rollNumber}) has passed.`;
  }

  return `${name} (Roll No: ${rollNumber}) has failed.`;
}

const result = getPassFailStatus("Rohan Mehta", 102, 91);

console.log(result);

/*
Expected Output:
Rohan Mehta (Roll No: 102) has passed.
*/
