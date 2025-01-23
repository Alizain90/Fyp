import React from 'react'
import React from 'react';
import Headers from '../components/Header';
import Footer from '../components/footer';
import OngoingProjects from '../components/Ongoingprojects';
import ChatMessage from '../components/ChatMessage';
import Stats from '../components/Stats';
import Proposal from '../components/Proposal';
import BuyerDashboardSlider from './BuyerDashboardSlider'
import '../styles/BuyerDashboard.css'; // Add a CSS file for styling

const BuyerMainDashboard = () => {
    return (
        <div className="dashboard-container">
          <div className="header-section">
            <Headers />
          </div>
          <div className="slider-section">
            <BuyerDashboardSlider/>
          </div>
          <div className="content-container">
            <div className="proposal-column">
              <Proposal />
            </div>
            <div className="stats-column">
              <Stats heading="Project Completed" number={2} />
              <Stats heading="Pending Proposals" number={3} />
              <Stats heading="New Messages" number={5} />
            </div>
          </div>
          <div className="chat-section">
            <ChatMessage />
          </div>
          <div className="projects-section">
            <OngoingProjects />
          </div>
          <div className="footer-section">
            <Footer />
          </div>
        </div>
      );
    };

export default BuyerMainDashboard
