namespace Subjects {
  export class Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }
    get getTeacher(): Teacher {
      return this.teacher;
    }

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
	

  }
}
