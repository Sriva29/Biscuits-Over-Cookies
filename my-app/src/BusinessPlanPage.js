import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const BusinessPlanPage = () => {
  const [businessPlan, setBusinessPlan] = useState('');
  const location = useLocation();
  const { searchTerm } = location.state || {}; // Accessing searchTerm passed as state

  useEffect(() => {
    const fetchAndAnalyzeData = async () => {
      if (searchTerm) {
        try {
          const response = await fetch(`http://localhost:5000/api/trade-data/${encodeURIComponent(searchTerm)}`);
          const data = await response.json();
          const bestOption = analyzeData(data);
          await generateBusinessPlan(bestOption);
        } catch (error) {
          console.error('Error fetching or analyzing data:', error);
        }
      }
    };

    fetchAndAnalyzeData();
  }, [searchTerm]); // Rerun the effect if searchTerm changes

  // Analyzes the fetched data to find the best option based on a criterion
  const analyzeData = (data) => {
    // Simple analysis: find the option with the highest quantity
    return data.reduce((prev, current) => (prev.quantity > current.quantity) ? prev : current);
  };

  const generateBusinessPlan = async (bestOption) => {
    const prompt = `Generate a business plan for importing ${bestOption.commodity} from ${bestOption.country}, focusing on the quantity of ${bestOption.quantity} and an investment of ${bestOption.value}.`;

    try {
      const response = await axios.post('https://api.openai.com/v4/completions', {
        model: 'text-davinci-003', // Update to the latest model available
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        }
      });

      if (response.data.choices && response.data.choices.length > 0) {
        setBusinessPlan(response.data.choices[0].text);
      }
    } catch (error) {
      console.error('Error generating business plan:', error);
      setBusinessPlan('Failed to generate business plan.');
    }
  };

  return (
    <div>
      <h1>Business Plan</h1>
      {businessPlan ? <p>{businessPlan}</p> : <p>Loading...</p>}
    </div>
  );
};

export default BusinessPlanPage;
