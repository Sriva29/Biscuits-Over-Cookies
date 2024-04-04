import React from 'react';

const ProfilePage = () => {
  return (
    <div className="container text-left">
      {/* Heading */}
      <h2 style={{ color: 'black', borderBottom: '2px solid #008080', paddingBottom: '20px', marginBottom: '30px', marginTop: '30px', fontSize: '20px' }}>
        Saved Plans
      </h2>
      {/* First Plan */}
      <div className="rounded bg-light p-4 mb-4">
        {/* Left Column */}
        <div className="d-flex mb-3">
          <div className="flex-grow-1" style={{ marginRight: '20px' }}>
          <h3 style={{ color: '#008080' }}>
            Coffee Import 
            <span style={{ marginLeft: '20px' }}>
                <img src="https://i.imgur.com/hULRuh1.png" alt="Save" style={{ maxWidth: '15px' }}/>
            </span> 
            </h3>
            <p style={{ marginBottom: '2px' }}>From: Columbia</p>
        <p style={{ marginBottom: '30px'}}>To: Canada</p>
        <p>This business plan proposes importing Colombian coffee to Canada, targeting a first-year budget of $150,000. It focuses marketing strategies aimed at a 20% market penetration within the first two years, projecting revenues of $500,000 by year three, emphasizing sustainability and quality.</p>
      </div>
          {/* Right Column */}
          <div>
            <img src="https://i.imgur.com/YO3ixVb.png" alt="Plan 1" className="img-fluid" style={{ maxWidth: '200px' }} />
          </div>
        </div>
      </div>

      {/* Second Plan */}
      <div className="rounded bg-light p-4 mb-4">
        {/* Left Column */}
        <div className="d-flex mb-3">
          <div className="flex-grow-1" style={{ marginRight: '20px' }}>
          <h3 style={{ color: '#008080' }}>
            Coffee Import 
            <span style={{ marginLeft: '20px' }}>
                <img src="https://i.imgur.com/hULRuh1.png" alt="Save" style={{ maxWidth: '15px' }}/>
            </span> 
            </h3>
            <p style={{ marginBottom: '2px' }}>From: Columbia</p>
        <p style={{ marginBottom: '30px'}}>To: Canada</p>
        <p>This business plan proposes importing Colombian coffee to Canada, targeting a first-year budget of $150,000. It focuses marketing strategies aimed at a 20% market penetration within the first two years, projecting revenues of $500,000 by year three, emphasizing sustainability and quality.</p>
      </div>
          {/* Right Column */}
          <div>
            <img src="https://i.imgur.com/YO3ixVb.png" alt="Plan 1" className="img-fluid" style={{ maxWidth: '200px' }} />
          </div>
        </div>
      </div>

      {/* Third Plan */}
      <div className="rounded bg-light p-4 mb-4">
        {/* Left Column */}
        <div className="d-flex mb-3">
          <div className="flex-grow-1" style={{ marginRight: '20px' }}>
          <h3 style={{ color: '#008080' }}>
            Coffee Import 
            <span style={{ marginLeft: '20px' }}>
                <img src="https://i.imgur.com/hULRuh1.png" alt="Save" style={{ maxWidth: '15px' }}/>
            </span> 
            </h3>
            <p style={{ marginBottom: '2px' }}>From: Columbia</p>
        <p style={{ marginBottom: '30px'}}>To: Canada</p>
        <p>This business plan proposes importing Colombian coffee to Canada, targeting a first-year budget of $150,000. It focuses marketing strategies aimed at a 20% market penetration within the first two years, projecting revenues of $500,000 by year three, emphasizing sustainability and quality.</p>
      </div>
          {/* Right Column */}
          <div>
            <img src="https://i.imgur.com/YO3ixVb.png" alt="Plan 1" className="img-fluid" style={{ maxWidth: '200px' }} />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default ProfilePage;
