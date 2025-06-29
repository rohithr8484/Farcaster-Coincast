import React from 'react';
import { Coins } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <Coins className="w-16 h-16 text-yellow-400 mx-auto animate-bounce" />
          <div className="absolute inset-0 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl animate-pulse mx-auto"></div>
        </div>
        <h1 className="text-4xl font-bold text-white mt-6 mb-2">CoinCast</h1>
        <p className="text-blue-200 text-lg">Loading your crypto universe...</p>
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;