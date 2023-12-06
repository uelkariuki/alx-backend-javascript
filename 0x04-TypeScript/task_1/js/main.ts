interface Teacher {
  readonly firstname: string;
  readonly lastname: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

let printTeacher: printTeacherFunction = function (
  firstname: string,
  lastname: string
) {
  return `${firstname[0]}. ${lastname}`;
};

//Example: console.log(printTeacher('John', 'Doe')); // prints J. Doe

interface printTeacherFunction {
  (firstname: string, lastname: string): string;
}

interface StudentClassConstructor {
  new (firstname: string, lastname: string): StudentClass;
}

interface StudentClassInterface {
  firstname: string;
  lastname: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstname: string;
  lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return `${this.firstname}`;
  }
}
