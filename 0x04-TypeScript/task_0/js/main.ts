interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
}
let student1: Student = {
  firstname: 'John',
  lastname: 'Doe',
  age: 21,
  location: 'Nairobi',
};
let student2: Student = {
  firstname: 'Jane',
  lastname: 'Doe',
  age: 24,
  location: 'Mombasa',
};
let studentsList: Student[] = [student1, student2];

let table = document.createElement('table');
table.innerHTML = `
<thead>
  <tr>
    ${['Firstname','Location']
      .map(
        (text) => `<th>${text}
	</th>`
      )
      .join('')}
  </tr>

</thead>
<tbody>
  ${studentsList.map(student => `
  <tr>
    <td>${student.firstname}</td>
	<td>${student.location}</td>
  </tr>`).join('')}
</tbody>
`;

document.body.appendChild(table);
