interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  //   getToWork(): string {
  // 	return 'Getting a coffee break'
  //   }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(
  salary: number | string
): DirectorInterface | TeacherInterface {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}
// console.log(createEmployee(200));

// console.log(createEmployee(1000));

// console.log(createEmployee('$500'));

function isDirector(
  employee: DirectorInterface | TeacherInterface
): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks != undefined;
}
function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
//console.log(executeWork(createEmployee(200)));
//Getting to work
//console.log(executeWork(createEmployee(1000)));
//Getting to director tasks

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}
//console.log(teachClass('Math'));
//Teaching Math
//console.log(teachClass('History'));
//Teaching History
