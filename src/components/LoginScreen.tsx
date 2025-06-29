import React from 'react';
import { useAuth } from './AuthProvider';
import { Coins, TrendingUp, Users, Zap } from 'lucide-react';

const LoginScreen: React.FC = () => {
  const { login, isLoading } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="relative">
            <Coins className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">CoinCast</h1>
          <p className="text-blue-200 text-lg">Your crypto portfolio meets Farcaster</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="space-y-6 mb-8">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span className="text-white">Track your crypto portfolio</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-blue-400" />
              <span className="text-white">Share trades with Farcaster community</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-white">Connect Solana wallet seamlessly</span>
            </div>
          </div>

          <button
            onClick={login}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Connecting...
              </div>
            ) : (
              'Connect with Farcaster'
            )}
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-blue-200 text-sm">
            Powered by Farcaster Frame SDK
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;