import React, { useState } from 'react';
import { TrendingUp, Plus, Share2 } from 'lucide-react';
import PortfolioStats from './PortfolioStats';
import CoinHolding from './CoinHolding';
import AddCoinsModal from './AddCoinsModal';
import CoinDetailModal from './CoinDetailModal';

interface Holding {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  value: number;
  price: number;
  change24h: number;
  icon: string;
}

const Portfolio: React.FC = () => {
  const [timeframe, setTimeframe] = useState('24h');
  const [isAddCoinsModalOpen, setIsAddCoinsModalOpen] = useState(false);
  const [isCoinDetailModalOpen, setIsCoinDetailModalOpen] = useState(false);
  const [selectedHolding, setSelectedHolding] = useState<Holding | null>(null);
  
  // Start with some initial holdings for demo purposes
  const [holdings, setHoldings] = useState<Holding[]>([
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      amount: 0.75,
      value: 32250,
      price: 43000,
      change24h: 3.2,
      icon: '₿'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      amount: 6.5,
      value: 14625,
      price: 2250,
      change24h: 2.8,
      icon: 'Ξ'
    }
  ]);

  const handleAddCoin = (coin: any, amount: number) => {
    console.log('Adding coin:', coin, 'Amount:', amount); // Debug log
    
    const existingHoldingIndex = holdings.findIndex(h => h.id === coin.id);
    
    if (existingHoldingIndex >= 0) {
      // Update existing holding
      const updatedHoldings = [...holdings];
      const existingHolding = updatedHoldings[existingHoldingIndex];
      existingHolding.amount += amount;
      existingHolding.value = existingHolding.amount * coin.price;
      setHoldings(updatedHoldings);
      console.log('Updated existing holding:', existingHolding); // Debug log
    } else {
      // Add new holding
      const newHolding: Holding = {
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        amount: amount,
        value: amount * coin.price,
        price: coin.price,
        change24h: coin.change24h,
        icon: coin.icon
      };
      setHoldings(prevHoldings => [...prevHoldings, newHolding]);
      console.log('Added new holding:', newHolding); // Debug log
    }
  };

  const handleUpdateAmount = (coinId: string, newAmount: number) => {
    const updatedHoldings = holdings.map(holding => {
      if (holding.id === coinId) {
        return {
          ...holding,
          amount: newAmount,
          value: newAmount * holding.price
        };
      }
      return holding;
    }).filter(holding => holding.amount > 0); // Remove holdings with 0 amount
    
    setHoldings(updatedHoldings);
    
    // Update selected holding if it's the one being modified
    if (selectedHolding?.id === coinId) {
      const updatedHolding = updatedHoldings.find(h => h.id === coinId);
      setSelectedHolding(updatedHolding || null);
      if (!updatedHolding) {
        setIsCoinDetailModalOpen(false);
      }
    }
  };

  const handleCoinClick = (holding: Holding) => {
    setSelectedHolding(holding);
    setIsCoinDetailModalOpen(true);
  };

  const handleShareOnFarcaster = () => {
    window.open('https://farcaster.xyz/', '_blank');
  };

  const portfolioData = {
    totalValue: holdings.reduce((sum, holding) => sum + holding.value, 0),
    change24h: holdings.reduce((sum, holding) => sum + (holding.value * holding.change24h / 100), 0),
    changePercent24h: holdings.length > 0 
      ? (holdings.reduce((sum, holding) => sum + (holding.value * holding.change24h / 100), 0) / holdings.reduce((sum, holding) => sum + holding.value, 0)) * 100
      : 0,
    holdings: holdings
  };

  const timeframes = ['1h', '24h', '7d', '30d'];

  return (
    <div className="space-y-6">
      {/* Portfolio Header */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Portfolio Overview</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setIsAddCoinsModalOpen(true)}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>Add Coins</span>
            </button>
            <button 
              onClick={handleShareOnFarcaster}
              className="flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        <PortfolioStats
          totalValue={portfolioData.totalValue}
          change24h={portfolioData.change24h}
          changePercent24h={portfolioData.changePercent24h}
        />

        <div className="flex space-x-2 mt-6">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                timeframe === tf
                  ? 'bg-white/20 text-white'
                  : 'text-blue-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Holdings */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Your Holdings</h3>
          <span className="text-blue-200 text-sm">{holdings.length} coins</span>
        </div>
        
        {holdings.length > 0 ? (
          <div className="space-y-4">
            {portfolioData.holdings.map((holding) => (
              <CoinHolding 
                key={holding.id} 
                holding={holding} 
                onClick={() => handleCoinClick(holding)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No coins in your portfolio</h3>
            <p className="text-blue-200 mb-6 max-w-md mx-auto">
              Start building your crypto portfolio by adding your first coins. Track performance and share your wins with the Farcaster community!
            </p>
            <button 
              onClick={() => setIsAddCoinsModalOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 font-semibold"
            >
              Add Your First Coins
            </button>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button 
          onClick={() => setIsAddCoinsModalOpen(true)}
          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105"
        >
          <Plus className="w-6 h-6 mb-2 mx-auto" />
          <span className="font-semibold block">Add More Coins</span>
        </button>
        <button 
          onClick={handleShareOnFarcaster}
          className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-4 rounded-xl hover:from-purple-700 hover:to-violet-700 transition-all transform hover:scale-105"
        >
          <Share2 className="w-6 h-6 mb-2 mx-auto" />
          <span className="font-semibold block">Share Portfolio</span>
        </button>
      </div>

      {/* Add Coins Modal */}
      <AddCoinsModal
        isOpen={isAddCoinsModalOpen}
        onClose={() => setIsAddCoinsModalOpen(false)}
        onAddCoin={handleAddCoin}
      />

      {/* Coin Detail Modal */}
      <CoinDetailModal
        isOpen={isCoinDetailModalOpen}
        onClose={() => setIsCoinDetailModalOpen(false)}
        holding={selectedHolding}
        onUpdateAmount={handleUpdateAmount}
      />
    </div>
  );
};

export default Portfolio;