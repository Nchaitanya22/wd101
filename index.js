document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const table = document.getElementById('dataTable');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const dob = document.getElementById('dob').value;
      const termsAccepted = document.getElementById('terms').checked;
  
      
      const dobDate = new Date(dob);
      const today = new Date();
      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 55);
      const maxAgeDate = new Date();
      maxAgeDate.setFullYear(maxAgeDate.getFullYear() - 18); 
  
      if (dobDate < minAgeDate || dobDate > maxAgeDate) {
        alert('Date of birth should be between 18 and 55 years ago.');
        return;
      }
  
      
      const newRow = table.insertRow(-1);
      const cells = [
        newRow.insertCell(0),
        newRow.insertCell(1),
        newRow.insertCell(2),
        newRow.insertCell(3),
        newRow.insertCell(4),
      ];
  
      cells[0].innerText = name;
      cells[1].innerText = email;
      cells[2].innerText = password;
      cells[3].innerText = dob;
      cells[4].innerText = termsAccepted ? 'Yes' : 'No';
  
      
      form.reset();
    });
  });
  