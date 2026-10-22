
const tableData = document.getElementById("studentTable");



const formSubmit = document.getElementById("studentForm");

function handleSubmit(event){
    // event.preventDefault();

const studentname = document.getElementById("name").value;
const rollno = document.getElementById("rollno").value;
const course = document.getElementById("course").value;
const marks = document.getElementById("marks").value;

console.log(studentname);
console.log(rollno);
console.log(course);
console.log(marks);

// tableData.innerText = studentname; //
// tableData.innerText = rollno;
// tableData.innerText = course;
// tableData.innerText = marks;
  const row = document.createElement("tr");
  let grade;

if (marks > 50) {
    grade = "A+";
} else {
    grade = "B";
}
  

    row.innerHTML= `
        <td>${rollno}</td>
        <td>${studentname}</td>
        <td>${course}</td>
        <td>${marks}</td>
        <td>${grade}</td>

          `;

    tableData.appendChild(row);

}