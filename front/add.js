document.getElementById('addsubForm').addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();
  });

async function submitForm() {
    const name = document.getElementById('nameSub').value;
    const description = document.getElementById('descriptionSub').value;
  
    const data = {
      name: name,
      description: description
    };
  
    try {
      const res = await fetch('http://localhost:4000/api/drinks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'http://localhost:4000'
        },
        body: JSON.stringify(data)
      });
  
      // Check if the response was successful
      if (res.ok) {
        const result = await res.json();
        console.log('Result Data:', result);
        alert(`Data posted successfully!`);
      } else {
        console.error('Error:', res.status, res.statusText);
        alert(`Error: ${res.status} - ${res.statusText}`);
      }
    } catch (err) {
      console.error('Error:', err);
      alert(`Error: ${err.message}`);
    }
    return false;
  }

  async function getData() {
    try {
      const res = await fetch('http://localhost:4000/api/drinks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'http://localhost:4000/api/drinks'
        }
      });

      // Check if the response was successful
      if (res.ok) {
        const result = await res.json();
        console.log('Result Data:', result);
        alert(`Data retrieved successfully!`);
      } 
    } catch (err) {
      console.error('Error:', err);
    //   alert(`Error: ${err.message}`);
    }
  }
  