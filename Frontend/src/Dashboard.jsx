import React from 'react';

const Dashboard = ({ username }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, {username}!</h2>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default Dashboard;
