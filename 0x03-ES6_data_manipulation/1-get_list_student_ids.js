export default function getListStudentsIds(getListStudents) {
  if (Array.isArray(getListStudents) === false) {
    return [];
  }
  const Ids = getListStudents.map((res) => res.id);
  return Ids;
}
