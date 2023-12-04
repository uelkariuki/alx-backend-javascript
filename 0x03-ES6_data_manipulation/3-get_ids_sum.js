export default function getStudentIdSum(getListStudents) {
  const sumOfIds = getListStudents.reduce((acc, obj) => acc + obj.id, 0);
  return sumOfIds;
}
