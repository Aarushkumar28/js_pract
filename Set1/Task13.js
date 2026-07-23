// Task 13: Use template literals to print a formatted student summary.
const student = {
  rollNumber: 103,
  name: "Priya Nair",
  className: "5th Semester",
  course: "Node & Express JS",
  marks: 86,
  status: "Passed",
};

const studentSummary = `Student Summary:
Name: ${student.name}
Roll Number: ${student.rollNumber}
Class: ${student.className}
Course: ${student.course}
Marks: ${student.marks}
Status: ${student.status}`;

console.log(studentSummary);

/*
Expected Output:
Student Summary:
Name: Priya Nair
Roll Number: 103
Class: 5th Semester
Course: Node & Express JS
Marks: 86
Status: Passed
*/
