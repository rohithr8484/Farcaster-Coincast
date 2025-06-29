import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share, TrendingUp, TrendingDown } from 'lucide-react';

const SocialFeed: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const feedData = [
    {
      id: 1,
      user: {
        username: 'cryptowhale',
        displayName: 'Crypto Whale',
        pfp: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=50&h=50&fit=crop&auto=compress',
        fid: 12345
      },
      content: 'Just added more $SOL to my bag! The ecosystem is getting stronger every day. 🚀',
      timestamp: '2m ago',
      likes: 24,
      comments: 8,
      recasts: 12,
      coin: {
        symbol: 'SOL',
        change: 5.2,
        price: 28.45
      },
      type: 'trade'
    },
    {
      id: 2,
      user: {
        username: 'defibuilder',
        displayName: 'DeFi Builder',
        pfp: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=50&h=50&fit=crop&auto=compress',
        fid: 23456
      },
      content: 'BTC looking strong above $43k. Next resistance at $45k. What are your thoughts?',
      timestamp: '15m ago',
      likes: 45,
      comments: 23,
      recasts: 18,
      coin: {
        symbol: 'BTC',
        change: 2.1,
        price: 43000
      },
      type: 'analysis'
    },
    {
      id: 3,
      user: {
        username: 'ethdev',
        displayName: 'ETH Developer',
        pfp: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=50&h=50&fit=crop&auto=compress',
        fid: 34567
      },
      content: 'New Ethereum upgrade looking promising. Gas fees should decrease significantly! ⚡',
      timestamp: '1h ago',
      likes: 89,
      comments: 34,
      recasts: 56,
      coin: {
        symbol: 'ETH',
        change: -1.5,
        price: 2250
      },
      type: 'news'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Posts', count: 156 },
    { id: 'trades', label: 'Trades', count: 23 },
    { id: 'analysis', label: 'Analysis', count: 45 },
    { id: 'news', label: 'News', count: 12 }
  ];

  return (
    <div className="space-y-6">
      {/* Feed Header */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">Social Feed</h2>
        <div className="flex space-x-2 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                selectedFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'text-blue-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{filter.label}</span>
              <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{filter.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Feed Posts */}
      <div className="space-y-4">
        {feedData.map((post) => {
          const isPositive = post.coin.change >= 0;
          return (
            <div key={post.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              {/* User Info */}
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={post.user.pfp}
                  alt={post.user.displayName}
                  className="w-10 h-10 rounded-full border-2 border-white/20"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-white font-medium">{post.user.displayName}</h4>
                    <span className="text-blue-200 text-sm">@{post.user.username}</span>
                    <span className="text-blue-200 text-sm">•</span>
                    <span className="text-blue-200 text-sm">{post.timestamp}</span>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  post.type === 'trade' 
                    ? 'bg-green-500/20 text-green-400'
                    : post.type === 'analysis'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-purple-500/20 text-purple-400'
                }`}>
                  {post.type}
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <p className="text-white leading-relaxed">{post.content}</p>
              </div>

              {/* Coin Info */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {post.coin.symbol[0]}
                  </div>
                  <div>
                    <p className="text-white font-medium">{post.coin.symbol}</p>
                    <p className="text-blue-200 text-sm">
                      ${post.coin.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
                <div className={`flex items-center space-x-1 ${
                  isPositive ? 'text-green-400' : 'text-red-400'
                }`}>
                  {isPositive ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="font-medium">{isPositive ? '+' : ''}{post.coin.change.toFixed(2)}%</span>
                </div>
              </div>

              {/* Engagement */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-blue-200 hover:text-red-400 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-blue-200 hover:text-blue-400 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-blue-200 hover:text-green-400 transition-colors">
                    <Repeat2 className="w-5 h-5" />
                    <span>{post.recasts}</span>
                  </button>
                </div>
                <button className="text-blue-200 hover:text-white transition-colors">
                  <Share className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
          Load More Posts
        </button>
      </div>
    </div>
  );
};

export default SocialFeed;