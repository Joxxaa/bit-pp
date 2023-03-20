function Exam(subject, nameValue, lastnameValue, grade) {
    this.subject = new Subject(subject);
    this.student = new Student(nameValue, lastnameValue);
    this.grade = grade;
}

Exam.prototype.getExamInfo = function () {
    return this.subject.getSubjectName() + " - " + this.student.getStudentData();
}

Exam.prototype.isPassed = function () {
    if (this.grade > 5) {
        return true;
    } else {
        return false;
    }
}