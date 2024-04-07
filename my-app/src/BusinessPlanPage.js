import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { PDFViewer, BlobProvider} from '@react-pdf/renderer';
import BusinessPlanPDF from './BusinessPlanPDF';


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
  }, [searchTerm]); //this re-runs when searchTerm changes

  const analyzeData = (data) => {
    // This is the simplest analysis. It takes the data from the api and finds the country that exports the largest quantity of the commodity
    return data.reduce((prev, current) => (prev.quantity > current.quantity) ? prev : current);
  };

  const generateBusinessPlan = async (bestOption) => {
    const messages = [
      {
        role: 'system',
        content: 'You are an AI assistant with over 40 years of business experience. You are a business plan creating machine that creates accurate and concise business plans. Remember to just generate the business plan and not talk to the user.'
      },
      {
        role: 'user',
        content: `I want to start an import business. I want to import ${bestOption.product} from ${bestOption.country}. Can you help me create a business plan?`
      },
    ];
  
    try {
      const response = await axios.post('http://localhost:5000/generate-plan', {
        messages,
        model: 'gpt-3.5-turbo', 
      });
  
      if (response.data.choices && response.data.choices.length > 0) {
        setBusinessPlan(response.data.choices[0].message.content); 
      }
    } catch (error) {
      console.error('Error generating business plan:', error);
      setBusinessPlan('Failed to generate business plan.');
    }
  };
  
  return (
    <div>
      <h1>View Business Plan</h1>
      <PDFViewer style={{ width: '100%', height: '90vh' }}>
        <BusinessPlanPDF businessPlan={businessPlan} />
      </PDFViewer>
      <BlobProvider document={<BusinessPlanPDF businessPlan={businessPlan} />}>
    {({ blob, url, loading, error }) => {
      if (loading) {
        return <div>Loading document...</div>;
      }
      if (error) {
        console.error(error);
        return <div>Failed to generate document</div>;
      }
      return <a href={url} download="BusinessPlan.pdf">Download Business Plan</a>;
    }}
  </BlobProvider>
    </div>
  );
};

export default BusinessPlanPage;
