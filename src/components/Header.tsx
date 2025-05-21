import React from 'react';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const showGoalsHeader = location.pathname === '/goals';
  
  return (
    <header className="px-4 py-4">
      {showGoalsHeader ? (
        <div className="w-full text-center font-medium text-gray-500 uppercase tracking-wide text-sm">
          OBJETIVOS
        </div>
      ) : (
        <div className="w-full text-center">
          {/* Logo removed */}
        </div>
      )}
    </header>
  );
};

export default Header;