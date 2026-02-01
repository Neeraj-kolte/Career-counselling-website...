
// const user = {
//   id: 1,
//   name: 'John Doe',
//   email: 'john@example.com'
// };

// updateBtn.addEventListener('click', async () => {
//   const quizType = quizSelect.value;

//   const res = await fetch('http://localhost:3000/api/profile/update-profile', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       userId: user.id,
//       quizType: quizType
//     })
//   });

//   const data = await res.json();

//   resultSection.innerHTML = `
//     <h3>Career Interests:</h3>
//     <ul>${data.careerInterests.map(interest => <li>${interest}</li>).join('')}</ul>
//     <p><strong>Assigned Expert:</strong> ${data.assignedExpert}</p>
//   `;
// });