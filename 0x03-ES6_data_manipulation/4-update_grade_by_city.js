export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  const gradeStudent = getListStudents
    .filter((listStudent) => listStudent.location === city)
    .map((listStudent) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === listStudent.id,
      );
      return gradeObj
        ? { ...listStudent, grade: gradeObj.grade }
        : { ...listStudent, grade: 'N/A' };
    });
  return gradeStudent;
}
