import React, { useState } from 'react';
import { useAuth } from './AuthProvider';
import LoginScreen from './LoginScreen';
import Header from './Header';
import Portfolio from './Portfolio';
import MarketOverview from './MarketOverview';
import TrendingCoins from './TrendingCoins';
import SocialFeed from './SocialFeed';
import WalletConnection from './WalletConnection';

const MainApp: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('portfolio');

  if (!user?.isAuthenticated) {
    return <LoginScreen />;
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'portfolio':
        return <Portfolio />;
      case 'market':
        return <MarketOverview />;
      case 'trending':
        return <TrendingCoins />;
      case 'social':
        return <SocialFeed />;
      case 'wallet':
        return <WalletConnection />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {renderActiveTab()}
      </main>
    </div>
  );
};

export default MainApp;