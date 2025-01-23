import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Slider.css";


export default function BuyerDashboardSlider() {
  const [user, setUser] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      // Redirect to login if no user is found
      window.location.href = '/';
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="welcome-container">
      <h1 className="welcome-heading">
      <h2>Welcome to your Dashboard, {user.firstName } , {user.email}!</h2>      </h1>
      <div className="content-container">
        {/* Text visibility controlled by isParagraph */}
        <div
          className={`content text-slide ${isParagraph ? "visible" : "hidden"}`}
        >
          <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>Field Domain: {user.fieldDomain}</p>
    <p>Interests: {user.interests}</p>
    <p>Your unique slug: {slug}</p>
        </div>
        {/* List visibility controlled by isParagraph */}
        <div
          className={`content list-slide ${!isParagraph ? "visible" : "hidden"}`}
        >
          <p>This is another paragraph that will alternate in and out.</p>
        </div>
      </div>
    </div>
   
   
    {/* Add more user info as needed */}
  </div>
  )
}
