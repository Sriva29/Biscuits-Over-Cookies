import React, { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    // Define the function to fetch data
    const fetchData = async () => {
      try {
        // Replace 'http://localhost:5000/api/data' with your actual backend endpoint
        const response = await fetch('http://localhost:5000/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Could not fetch data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our site!</p>
    </div>
  );
}

export default HomePage;
