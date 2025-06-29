import React from 'react';
import { TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react';

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

interface CoinHoldingProps {
  holding: Holding;
  onClick?: () => void;
}

const CoinHolding: React.FC<CoinHoldingProps> = ({ holding, onClick }) => {
  const isPositive = holding.change24h >= 0;

  return (
    <div 
      className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {holding.icon}
        </div>
        <div>
          <h4 className="text-white font-semibold group-hover:text-blue-200 transition-colors">{holding.name}</h4>
          <p className="text-blue-200 text-sm">
            {holding.amount.toLocaleString('en-US', { minimumFractionDigits: 4 })} {holding.symbol}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-white font-semibold">
          ${holding.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
        <div className={`flex items-center justify-end space-x-1 text-sm ${
          isPositive ? 'text-green-400' : 'text-red-400'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{isPositive ? '+' : ''}{holding.change24h.toFixed(2)}%</span>
        </div>
      </div>

      <button 
        className="p-2 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
        onClick={(e) => {
          e.stopPropagation();
          // Handle menu actions
        }}
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CoinHolding;