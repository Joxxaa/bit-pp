function inputData() {
    let subject = subjectIn.value;
    let student = studentIn.value;
    let grade = gradeIn.value;
    return [subject, student,grade]; 
}

function validateData(subject, student, grade) {
    if (subject === "Subject") {
        alert("Please, choose subject from list!");
    }
    else if (student.split(" ").length < 2) {
        alert("Please, provide both name and lastname!");
    }
    else if (grade === "Grade") {
        alert("Please, choose grade from list!");
    } else return [subject, student,grade];
}
var studentsPassed = 0;
var studentsFailed = 0;
function updateExamList(exam) {
    var ex = `<p class="student_results" >${exam.getExamInfo()} <span>${
        exam.grade
      }</span></p><hr/>`;
    if (exam.grade > 5) {
        window.document.getElementById("passedList").insertAdjacentHTML("beforeend", ex);
        studentsPassed++;
    } else {
        window.document.getElementById("failedList").insertAdjacentHTML("beforeend", ex);
        studentsFailed++;
    }
}

// const updateStatistics = function () {
//     numberOfStudentsPassed.textContent = `${studentsPassed}`;
  
//     numberOfStudentsFailed.textContent = `${studentsFailed}`;
  
//     totalNumberOfStudents.textContent = `${studentsPassed + studentsFailed}`;
  
//     percentage.textContent = `${(
//       (studentsFailed / (studentsFailed + studentsPassed)) *
//       100
//     ).toFixed(0)}%`;
//   };
/* <p>Total students: <strong id="totalStudents">0</strong></p>
            <div id="passed">PASSED <strong id="passedStudents">0</strong></div>
            <p id="percentage">0%</p>
            <div id="failed">FAILED <strong id="failedStudents">0</strong></div> */

function updateExamStats() {
    window.document.getElementById("passedStudents").textContent = `${studentsPassed}`;
    window.document.getElementById("failedStudents").textContent = `${studentsFailed}`;
    window.document.getElementById("totalStudents").textContent =`${studentsPassed + studentsFailed}`;
    window.document.getElementById("percentage").textContent = `${(
        (studentsFailed / (studentsPassed + studentsFailed)) * 100).toFixed(0)
    }%`;
}
            


