async function fetchData() {
    try {
        const response = await fetch('http://localhost:4000/api/drinks?offset=1&length=10'); // Your API endpoint

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON from the response
        
        // Returning the data object instead of displaying it
        return data.items.map(dt => ({
            name: dt.name || 'N/A',
            description: dt.description || 'N/A',

        }));
        
    } catch (error) {
        console.error('Error fetching data:', error); // Handle any errors
        return null; // Return null in case of an error
    }
}

// Call the function and handle the returned data
fetchData().then(drinks => {
    // console.log(drinks[0].id); // Log the data object to the console
    document.getElementById('card1name').innerHTML = `${drinks[0].name}`
    document.getElementById('card1des').innerHTML = `${drinks[0].description}`


});
