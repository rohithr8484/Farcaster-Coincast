import React from 'react';
import { Flame, TrendingUp, Users, MessageSquare } from 'lucide-react';

const TrendingCoins: React.FC = () => {
  const trendingCoins = [
    {
      id: 'pepe',
      name: 'Pepe',
      symbol: 'PEPE',
      price: 0.00000123,
      change24h: 45.2,
      socialScore: 95,
      mentions: 12500,
      icon: '🐸'
    },
    {
      id: 'dogecoin',
      name: 'Dogecoin',
      symbol: 'DOGE',
      price: 0.08,
      change24h: 12.4,
      socialScore: 88,
      mentions: 8900,
      icon: '🐕'
    },
    {
      id: 'shiba',
      name: 'Shiba Inu',
      symbol: 'SHIB',
      price: 0.000009,
      change24h: 8.7,
      socialScore: 82,
      mentions: 7200,
      icon: '🐕'
    },
    {
      id: 'chainlink',
      name: 'Chainlink',
      symbol: 'LINK',
      price: 20.377,
      change24h: -2.1,
      socialScore: 75,
      mentions: 4500,
      icon: '⬡'
    }
  ];

  const socialInsights = [
    {
      coin: 'Bitcoin',
      sentiment: 'Bullish',
      castCount: 450,
      topInfluencer: '@cryptowhale',
      trend: 'up'
    },
    {
      coin: 'Ethereum',
      sentiment: 'Neutral',
      castCount: 320,
      topInfluencer: '@ethdev',
      trend: 'stable'
    },
    {
      coin: 'Solana',
      sentiment: 'Bullish',
      castCount: 280,
      topInfluencer: '@solbuilder',
      trend: 'up'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Trending Header */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-3 mb-4">
          <Flame className="w-8 h-8 text-orange-400" />
          <h2 className="text-2xl font-bold text-white">Trending on Farcaster</h2>
        </div>
        <p className="text-blue-200">
          Discover the most talked-about cryptocurrencies in the Farcaster community
        </p>
      </div>

      {/* Trending Coins */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trendingCoins.map((coin, index) => {
          const isPositive = coin.change24h >= 0;
          return (
            <div key={coin.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{coin.icon}</span>
                    <div>
                      <h3 className="text-white font-bold">{coin.name}</h3>
                      <p className="text-blue-200 text-sm">{coin.symbol}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full text-xs font-medium">
                    <Flame className="w-3 h-3" />
                    <span>#{index + 1}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">
                    ${coin.price < 0.01 ? coin.price.toFixed(8) : coin.price.toFixed(2)}
                  </p>
                  <div className={`flex items-center space-x-1 text-sm ${
                    isPositive ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp className="w-3 h-3" />
                    <span>{isPositive ? '+' : ''}{coin.change24h.toFixed(1)}%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <div>
                    <p className="text-xs text-blue-200">Social Score</p>
                    <p className="text-white font-medium">{coin.socialScore}/100</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <div>
                    <p className="text-xs text-blue-200">Mentions</p>
                    <p className="text-white font-medium">{coin.mentions.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
                View Details
              </button>
            </div>
          );
        })}
      </div>

      {/* Social Insights */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-6">Social Insights</h3>
        <div className="space-y-4">
          {socialInsights.map((insight, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                <div>
                  <h4 className="text-white font-medium">{insight.coin}</h4>
                  <p className="text-blue-200 text-sm">
                    {insight.castCount} casts • Top: {insight.topInfluencer}
                  </p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                insight.sentiment === 'Bullish' 
                  ? 'bg-green-500/20 text-green-400'
                  : insight.sentiment === 'Bearish'
                  ? 'bg-red-500/20 text-red-400'
                  : 'bg-gray-500/20 text-gray-400'
              }`}>
                {insight.sentiment}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;