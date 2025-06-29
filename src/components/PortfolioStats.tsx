import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface PortfolioStatsProps {
  totalValue: number;
  change24h: number;
  changePercent24h: number;
}

const PortfolioStats: React.FC<PortfolioStatsProps> = ({
  totalValue,
  change24h,
  changePercent24h,
}) => {
  const isPositive = change24h >= 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-center md:text-left">
        <p className="text-blue-200 text-sm mb-1">Total Portfolio Value</p>
        <p className="text-3xl font-bold text-white">
          ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
      </div>
      <div className="text-center">
        <p className="text-blue-200 text-sm mb-1">24h Change</p>
        <div className={`flex items-center justify-center space-x-2 ${
          isPositive ? 'text-green-400' : 'text-red-400'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-5 h-5" />
          ) : (
            <TrendingDown className="w-5 h-5" />
          )}
          <span className="text-xl font-bold">
            ${Math.abs(change24h).toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>
      <div className="text-center md:text-right">
        <p className="text-blue-200 text-sm mb-1">24h Change %</p>
        <div className={`flex items-center justify-center md:justify-end space-x-2 ${
          isPositive ? 'text-green-400' : 'text-red-400'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-5 h-5" />
          ) : (
            <TrendingDown className="w-5 h-5" />
          )}
          <span className="text-xl font-bold">
            {isPositive ? '+' : ''}{changePercent24h.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioStats;