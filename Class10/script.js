function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10;

    this.printStudents = function () {
        this.students.forEach(student => {
            console.log(`${student.firstName} ${student.lastName}`);
        });
    }
    this.printSubjects = function () {
        this.subjects.forEach(subject => {
            console.log(subject.title);
        });
    }
}

function Subject(title, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;

    this.overrideClasses = function (numberOfClasses) {
        if (numberOfClasses > 3) {
            this.numberOfClasses = numberOfClasses;
        } else {
            console.log("Subject can't have less than 3 classes.");
        }
    }
}

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = function (academy) {
        this.academy = academy;
        academy.students.push(this);
    }

    this.startSubject = function (subject) {
        if (this.academy?.contains(subject)) {
            if (this.currentSubject !== null) {
                this.completedSubjects.push(this.currentSubject);
            }
            currentSubject = subject;
            subject.students.push(this);
        } else {
            console.log("Invalid subject.");
        }
    }
}