
let totalGrades = 0; 
let studentCount = 0; 

document.getElementById("StudentForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const grade = parseFloat(document.getElementById("grade").value);

    const table = document.getElementById("StudentTable").querySelector("tbody");
    const newRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = lastName;

    const gradeCell = document.createElement("td");
    gradeCell.textContent = grade;

    
    newRow.appendChild(nameCell);
    newRow.appendChild(lastNameCell);
    newRow.appendChild(gradeCell);

    
    table.appendChild(newRow);

    
    totalGrades += grade; 
    studentCount++; 
    const average = (totalGrades / studentCount).toFixed(2); 
    document.getElementById("promedioCurso").textContent = `Promedio general del curso: ${average}`;

    
    document.getElementById("StudentForm").reset();
});
