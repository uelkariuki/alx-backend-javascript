export default function getStudentsByLocation(getListStudents, city) {
  const resultFiltered = getListStudents.filter(
    (getListStudent) => getListStudent.location === city,
  );
  return resultFiltered;
}
