import React from 'react';
import { FaUserTie, FaUserFriends, FaUser, FaHeart } from 'react-icons/fa';
import './UserStatistics.css';

const UserStatistics = () => {
  const stats = [
    {
      title: "Total Groom and Bride Biodatas",
      icon: <FaUserFriends />,
      count: "50,000+",
    },
    {
      title: "Total Groom Biodatas",
      icon: <FaUserTie />,
      count: "25,000+",
    },
    {
      title: "Total Bride Biodatas",
      icon: <FaUser />,
      count: "25,000+",
    },
    {
      title: "Total Successful Marriages",
      icon: <FaHeart />,
      count: "10,000+",
    },
  ];

  return (
    <div className="user-statistics py-5">
      <h2 className="text-center mb-4">Heavenlymatch User Statistics</h2>
      <div className="stats-row">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <h3 className="stat-count">{stat.count}</h3>
            <p className="stat-title">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStatistics;
