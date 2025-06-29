import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MarketOverview: React.FC = () => {
  const marketData = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 43000,
      change24h: 2.1,
      icon: '₿'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 2250,
      change24h: -1.5,
      icon: 'Ξ'
    },
    {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      price: 28,
      change24h: 5.2,
      icon: '◎'
    },
    {
      id: 'base',
      name: 'Base',
      symbol: 'BASE',
      price: 1.50,
      change24h: 12.7,
      icon: '🔵'
    },
    {
      id: 'degen',
      name: 'Degen',
      symbol: 'DEGEN',
      price: 0.08,
      change24h: 15.3,
      icon: '🎩'
    },
    {
      id: 'higher',
      name: 'Higher',
      symbol: 'HIGHER',
      price: 0.0608,
      change24h: -2.1,
      icon: '⬆️'
    }
  ];

  const globalStats = {
    totalMarketCap: '1.67T',
    totalVolume: '89.2B',
    btcDominance: 50.4,
    fearGreedIndex: 72
  };

  return (
    <div className="space-y-6">
      {/* Global Market Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
          <p className="text-blue-200 text-sm mb-1">Market Cap</p>
          <p className="text-2xl font-bold text-white">${globalStats.totalMarketCap}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
          <p className="text-blue-200 text-sm mb-1">24h Volume</p>
          <p className="text-2xl font-bold text-white">${globalStats.totalVolume}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
          <p className="text-blue-200 text-sm mb-1">BTC Dominance</p>
          <p className="text-2xl font-bold text-white">{globalStats.btcDominance}%</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
          <p className="text-blue-200 text-sm mb-1">Fear & Greed</p>
          <p className="text-2xl font-bold text-green-400">{globalStats.fearGreedIndex}</p>
        </div>
      </div>

      {/* Market Overview */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Market Overview</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left text-blue-200 font-medium py-3 px-2">Coin</th>
                <th className="text-right text-blue-200 font-medium py-3 px-2">Price</th>
                <th className="text-right text-blue-200 font-medium py-3 px-2">24h %</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((coin) => {
                const isPositive = coin.change24h >= 0;
                return (
                  <tr key={coin.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {coin.icon}
                        </div>
                        <div>
                          <p className="text-white font-medium">{coin.name}</p>
                          <p className="text-blue-200 text-sm">{coin.symbol}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-right py-4 px-2">
                      <p className="text-white font-semibold">
                        ${coin.price < 1 ? coin.price.toFixed(4) : coin.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </p>
                    </td>
                    <td className="text-right py-4 px-2">
                      <div className={`flex items-center justify-end space-x-1 ${
                        isPositive ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {isPositive ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        <span className="font-medium">{isPositive ? '+' : ''}{coin.change24h.toFixed(2)}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;