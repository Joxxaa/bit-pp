

let subjectIn = document.getElementById("subjects");
let studentIn = document.getElementById("student");
let gradeIn = document.getElementById("grades");


var butt = window.document.getElementById("butt");
butt.addEventListener("click", function () {
    var [subject, student, grade] = inputData();
    let exam = new Exam(
        subject,
        student.split(" ")[0],
        student.split(" ")[1],
        grade
    );
    validateData(subject, student, grade);
    updateExamList(exam);
    updateExamStats();
}
);