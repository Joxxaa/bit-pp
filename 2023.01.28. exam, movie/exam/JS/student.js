function Student(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}

    Student.prototype.getStudentData = function () {
        return this.name + " " + this.lastname;
}