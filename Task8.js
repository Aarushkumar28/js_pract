// Task 8: Add a new student and find the student with the highest marks.
const students = [
  { rollNumber: 101, name: "Ananya Sharma", marks: 84 },
  { rollNumber: 102, name: "Rohan Mehta", marks: 91 },
  { rollNumber: 103, name: "Priya Nair", marks: 76 },
  { rollNumber: 104, name: "Karan Singh", marks: 68 },
];

// Adding a new student record using push().
students.push({ rollNumber: 105, name: "Neha Kapoor", marks: 96 });

let highestScoringStudent = students[0];

for (const student of students) {
  if (student.marks > highestScoringStudent.marks) {
    highestScoringStudent = student;
  }
}

console.log("Student with Highest Marks:");
console.log(`Roll No: ${highestScoringStudent.rollNumber}`);
console.log(`Name: ${highestScoringStudent.name}`);
console.log(`Marks: ${highestScoringStudent.marks}`);

/*
Expected Output:
Student with Highest Marks:
Roll No: 105
Name: Neha Kapoor
Marks: 96
*/
