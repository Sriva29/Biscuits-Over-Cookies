import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();
  const [businessPlans, setBusinessPlans] = useState([]);

  useEffect(() => {
    const fetchBusinessPlans = async () => {
      if (user?.userId) {
        try {
          const response = await axios.get(`http://localhost:5000/api/business-plans/user/${user.userId}`);
          setBusinessPlans(response.data);
        } catch (error) {
          console.error('Error fetching business plans:', error);
        }
      }
    };

    fetchBusinessPlans();
  }, [user?.userId]);

  const deleteBusinessPlan = async (planId) => {
    try {
      await axios.delete(`http://localhost:5000/api/business-plans/${planId}`);
      setBusinessPlans(businessPlans.filter(plan => plan._id !== planId)); // Remove the plan from the state
    } catch (error) {
      console.error('Error deleting business plan:', error);
    }
  };

  return (
    <div className="container text-left">
      <h2>Saved Plans</h2>
      {businessPlans.map((plan) => (
        <div key={plan._id} className="rounded bg-light p-4 mb-4">
          <div className="d-flex mb-3 justify-content-between">
            <div>
              <h3>{plan.description}</h3>
            </div>
            <div>
              <a href={`http://localhost:5000/api/business-plans/pdf/${plan._id}`} target="_blank" rel="noopener noreferrer">
                View
              </a>
              <button onClick={() => deleteBusinessPlan(plan._id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfilePage;
