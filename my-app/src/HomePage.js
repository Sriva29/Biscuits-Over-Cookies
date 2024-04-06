// src/HomePage.js
import React from 'react';

function HomePage() {
  // This state holds the search term.
  const [searchTerm, setSearchTerm] = useState('');

  // Handler for changing the input field
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Validate the search term (e.g., not more than 30 characters and up to 3 words)
    if (searchTerm.length > 30 || searchTerm.split(' ').length > 3) {
      alert('Search term must be within 30 characters and up to 3 words.');
      return;
    }

  // Make the API call with the search term, specifying the full URL
  fetch(`http://localhost:5000/api/trade-data/${encodeURIComponent(searchTerm)}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Process the data
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our site!</p>
    </div>
  );
}

export default HomePage;
