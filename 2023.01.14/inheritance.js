function Person(name, surname) {
    this.name = name,
    this.surname = surname;
}
function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this. department = department;
}

Developer.prototype.getSpecialization = function () {
    return this.specialization;
}

Manager.prototype.getDepartment = function () {
    return this.department;
}

Manager.prototype.changeDepartment = function (department) {
    this.department = department;
}
// var aca = new Developer("Aleksandar", "Bozilovic", 
//                         "JS programer", 250000, "JavaScript");
// console.log(aca);
// var stefan = new Manager("Stefan", "Bozilovic", "Team manager",
//                             320000, "Java department");
// console.log(stefan);         
// console.log(aca.getSpecialization());
// stefan.changeDepartment("MySQL base");
// console.log(stefan.getDepartment());

////////////////////////////////////////////////////////////////
function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
    isCCLicence.call(this);
    like.call(this);
    showStars.call(this);
}

function MobileApp(name, platforms, licence,stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
    isCCLicence.call(this);
    like.call(this);
    showStars.call(this);
}

WebApp.prototype.getData() = function () {
    return this.name + ", " + this.url + ", " + this.technologies
    + ", " + this.licence + ", " + this.stars;
}

WebApp.prototype.isReactBased() = function () {
    if (this.technologies == "react") {
        return true;
    }
}

MobileApp.prototype.getData() = function () {
    return this.name + ", " + this.platforms 
    + ", " + this.licence + ", " + this.stars;
}

MobileApp.prototype.forAndroid() = function () {
    if (this.platforms == "android") {
        return true;
    }
}

function isCCLicence() {
    if (this.licence == "creatice commons") {
        return true;
    }
}

function like() {
    this.stars++;
    return ;
}

function showStars() {
    return this.stars;
}
