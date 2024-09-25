// document.getElementById('addpicForm').addEventListener('submit', async (event) => {
//     event.preventDefault(); // Prevent the default form submission

//     const formData = new FormData();
//     const fileInput = document.getElementById('addPictureUpload');
//     const drinkId = document.getElementById('drinkId').value;

//     // Check if a file has been selected
//     if (fileInput.files.length > 0) {
//         formData.append('addPictureUpload', fileInput);
//     }
//     formData.append('drinkId', drinkId);

//     try {
//         const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}/pictures`, {
//             method: 'POST',
//             body: formData,
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log('Success:', result);
//         // Handle success (e.g., show a success message)

//     } catch (error) {
//         console.error('Error uploading image:', error);
//         // Handle error (e.g., show an error message)
//     }
// });



document.getElementById('addpicForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData();
    const fileInput = document.getElementById('addPictureUpload');
    const drinkId = document.getElementById('drinkId').value;

    // Check if a file has been selected
    if (fileInput.files.length > 0) {
        formData.append('addPictureUpload', fileInput.files[0]); // Append the file, not the input element
    }
    formData.append('drinkId', drinkId);

    try {
        const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}/pictures`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);
        // Handle success (e.g., show a success message)

    } catch (error) {
        console.error('Error uploading image:', error);
        // Handle error (e.g., show an error message)
    }
});