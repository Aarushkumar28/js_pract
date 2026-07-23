// Task 6: Create an array of student records and print each student's details.
const students = [
  { rollNumber: 101, name: "Ananya Sharma", marks: 84, section: "A" },
  { rollNumber: 102, name: "Rohan Mehta", marks: 91, section: "A" },
  { rollNumber: 103, name: "Priya Nair", marks: 76, section: "B" },
  { rollNumber: 104, name: "Karan Singh", marks: 68, section: "B" },
];

for (const student of students) {
  console.log(
    `Roll No: ${student.rollNumber}, Name: ${student.name}, Marks: ${student.marks}, Section: ${student.section}`
  );
}

/*
Expected Output:
Roll No: 101, Name: Ananya Sharma, Marks: 84, Section: A
Roll No: 102, Name: Rohan Mehta, Marks: 91, Section: A
Roll No: 103, Name: Priya Nair, Marks: 76, Section: B
Roll No: 104, Name: Karan Singh, Marks: 68, Section: B
*/
