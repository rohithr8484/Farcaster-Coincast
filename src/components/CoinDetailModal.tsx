import React from 'react';
import { X, TrendingUp, TrendingDown, ExternalLink, Share2, Plus, Minus } from 'lucide-react';

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

interface CoinDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  holding: Holding | null;
  onUpdateAmount?: (coinId: string, newAmount: number) => void;
}

const CoinDetailModal: React.FC<CoinDetailModalProps> = ({ 
  isOpen, 
  onClose, 
  holding,
  onUpdateAmount 
}) => {
  if (!isOpen || !holding) return null;

  const isPositive = holding.change24h >= 0;

  // Mock additional data that would come from an API
  const additionalData = {
    marketCap: holding.id === 'bitcoin' ? '843B' : 
               holding.id === 'ethereum' ? '270B' :
               holding.id === 'solana' ? '12.5B' : '2.1B',
    volume24h: holding.id === 'bitcoin' ? '28.5B' : 
               holding.id === 'ethereum' ? '15.2B' :
               holding.id === 'solana' ? '2.1B' : '425M',
    high24h: holding.price * 1.08,
    low24h: holding.price * 0.92,
    allTimeHigh: holding.price * (holding.id === 'bitcoin' ? 1.6 : 2.2),
    allTimeLow: holding.price * 0.15,
    circulatingSupply: holding.id === 'bitcoin' ? '19.7M' :
                      holding.id === 'ethereum' ? '120.4M' :
                      holding.id === 'solana' ? '467M' : '1.2B'
  };

  const handleQuickAdjust = (adjustment: number) => {
    const newAmount = Math.max(0, holding.amount + adjustment);
    if (onUpdateAmount) {
      onUpdateAmount(holding.id, newAmount);
    }
  };

  const handleShareOnFarcaster = () => {
    window.open('https://farcaster.xyz/', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-indigo-900/90 backdrop-blur-lg rounded-2xl border border-white/20 w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {holding.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{holding.name}</h2>
              <p className="text-blue-200">{holding.symbol}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleShareOnFarcaster}
              className="p-2 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
              <ExternalLink className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Price Section */}
          <div className="p-6 border-b border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-blue-200 text-sm mb-2">Current Price</p>
                <p className="text-4xl font-bold text-white mb-2">
                  ${holding.price < 1 ? holding.price.toFixed(6) : holding.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <div className={`flex items-center space-x-2 ${
                  isPositive ? 'text-green-400' : 'text-red-400'
                }`}>
                  {isPositive ? (
                    <TrendingUp className="w-5 h-5" />
                  ) : (
                    <TrendingDown className="w-5 h-5" />
                  )}
                  <span className="text-lg font-semibold">
                    {isPositive ? '+' : ''}{holding.change24h.toFixed(2)}% (24h)
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-blue-200 text-sm">24h High</p>
                    <p className="text-white font-semibold">
                      ${additionalData.high24h.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">24h Low</p>
                    <p className="text-white font-semibold">
                      ${additionalData.low24h.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Your Holdings */}
          <div className="p-6 border-b border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Your Holdings</h3>
            <div className="bg-white/10 rounded-xl p-4 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-blue-200 text-sm mb-1">Amount</p>
                  <p className="text-2xl font-bold text-white">
                    {holding.amount.toLocaleString('en-US', { minimumFractionDigits: 4 })} {holding.symbol}
                  </p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm mb-1">Total Value</p>
                  <p className="text-2xl font-bold text-white">
                    ${holding.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm mb-1">24h P&L</p>
                  <p className={`text-2xl font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {isPositive ? '+' : ''}${(holding.value * holding.change24h / 100).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>

              {/* Quick Adjust */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-blue-200 text-sm mb-3">Quick Adjust Holdings</p>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuickAdjust(-0.1)}
                    className="flex items-center space-x-1 bg-red-600/20 text-red-400 px-3 py-2 rounded-lg hover:bg-red-600/30 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                    <span>-0.1</span>
                  </button>
                  <button
                    onClick={() => handleQuickAdjust(-1)}
                    className="flex items-center space-x-1 bg-red-600/20 text-red-400 px-3 py-2 rounded-lg hover:bg-red-600/30 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                    <span>-1</span>
                  </button>
                  <div className="flex-1 text-center">
                    <span className="text-white font-medium">{holding.amount.toFixed(4)} {holding.symbol}</span>
                  </div>
                  <button
                    onClick={() => handleQuickAdjust(1)}
                    className="flex items-center space-x-1 bg-green-600/20 text-green-400 px-3 py-2 rounded-lg hover:bg-green-600/30 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>+1</span>
                  </button>
                  <button
                    onClick={() => handleQuickAdjust(0.1)}
                    className="flex items-center space-x-1 bg-green-600/20 text-green-400 px-3 py-2 rounded-lg hover:bg-green-600/30 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>+0.1</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Market Stats */}
          <div className="p-6 border-b border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Market Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-blue-200 text-sm mb-1">Market Cap</p>
                <p className="text-white font-semibold">${additionalData.marketCap}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-blue-200 text-sm mb-1">24h Volume</p>
                <p className="text-white font-semibold">${additionalData.volume24h}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-blue-200 text-sm mb-1">All Time High</p>
                <p className="text-white font-semibold">
                  ${additionalData.allTimeHigh.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-blue-200 text-sm mb-1">Circulating Supply</p>
                <p className="text-white font-semibold">{additionalData.circulatingSupply}</p>
              </div>
            </div>
          </div>

          {/* Price Chart Placeholder */}
          <div className="p-6 border-b border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Price Chart (7 Days)</h3>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
              <div className="w-full h-48 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                  <p className="text-blue-200">Interactive price chart would be displayed here</p>
                  <p className="text-blue-200 text-sm mt-1">Integration with charting library like TradingView</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Buy More</span>
              </button>
              <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-4 rounded-xl hover:from-red-700 hover:to-pink-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <Minus className="w-5 h-5" />
                <span>Sell</span>
              </button>
              <button 
                onClick={handleShareOnFarcaster}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Share2 className="w-5 h-5" />
                <span>Share on Farcaster</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetailModal;