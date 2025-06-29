import React, { useState } from 'react';
import { X, Search, Plus, TrendingUp, TrendingDown } from 'lucide-react';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  icon: string;
}

interface AddCoinsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCoin: (coin: Coin, amount: number) => void;
}

const AddCoinsModal: React.FC<AddCoinsModalProps> = ({ isOpen, onClose, onAddCoin }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
  const [amount, setAmount] = useState('');

  const availableCoins: Coin[] = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 43000,
      change24h: 3.2,
      icon: '₿'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 2250,
      change24h: 2.8,
      icon: 'Ξ'
    },
    {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      price: 28,
      change24h: 8.4,
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
    },
    {
      id: 'chainlink',
      name: 'Chainlink',
      symbol: 'LINK',
      price: 20.377,
      change24h: -0.8,
      icon: '⬡'
    },
    {
      id: 'uniswap',
      name: 'Uniswap',
      symbol: 'UNI',
      price: 8.45,
      change24h: 4.2,
      icon: '🦄'
    },
    {
      id: 'aave',
      name: 'Aave',
      symbol: 'AAVE',
      price: 95.50,
      change24h: 6.1,
      icon: '👻'
    },
    {
      id: 'compound',
      name: 'Compound',
      symbol: 'COMP',
      price: 45.20,
      change24h: -1.5,
      icon: '🏛️'
    }
  ];

  const filteredCoins = availableCoins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCoinSelect = (coin: Coin) => {
    setSelectedCoin(coin);
    setAmount('1'); // Set default amount
  };

  const handleAddCoin = () => {
    if (selectedCoin && amount && parseFloat(amount) > 0) {
      onAddCoin(selectedCoin, parseFloat(amount));
      // Reset form
      setSelectedCoin(null);
      setAmount('');
      setSearchTerm('');
      onClose();
    }
  };

  const handleQuickAdd = (coin: Coin) => {
    onAddCoin(coin, 1); // Add 1 unit by default
    onClose();
  };

  const resetModal = () => {
    setSelectedCoin(null);
    setAmount('');
    setSearchTerm('');
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-lg rounded-2xl border border-white/20 w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <h2 className="text-2xl font-bold text-white">Add Coins to Portfolio</h2>
          <button
            onClick={handleClose}
            className="p-2 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-6 border-b border-white/20">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200 w-5 h-5" />
            <input
              type="text"
              placeholder="Search coins by name or symbol..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto max-h-[50vh]">
          {!selectedCoin ? (
            /* Coin Selection */
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Select a coin to add</h3>
              <div className="space-y-3">
                {filteredCoins.map((coin) => {
                  const isPositive = coin.change24h >= 0;
                  
                  return (
                    <div
                      key={coin.id}
                      className="flex items-center justify-between p-4 rounded-xl border bg-white/5 border-white/10 hover:bg-white/10 transition-all group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                          {coin.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{coin.name}</h4>
                          <p className="text-blue-200 text-sm">{coin.symbol}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-white font-semibold">
                            ${coin.price < 1 ? coin.price.toFixed(4) : coin.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </p>
                          <div className={`flex items-center justify-end space-x-1 text-sm ${
                            isPositive ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {isPositive ? (
                              <TrendingUp className="w-3 h-3" />
                            ) : (
                              <TrendingDown className="w-3 h-3" />
                            )}
                            <span>{isPositive ? '+' : ''}{coin.change24h.toFixed(2)}%</span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleQuickAdd(coin)}
                            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1.5 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all text-sm font-medium"
                          >
                            Quick Add
                          </button>
                          <button
                            onClick={() => handleCoinSelect(coin)}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1.5 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all text-sm font-medium"
                          >
                            Customize
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {filteredCoins.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-blue-200">No coins found matching "{searchTerm}"</p>
                </div>
              )}
            </div>
          ) : (
            /* Amount Input */
            <div className="p-6">
              <div className="mb-6">
                <button
                  onClick={() => setSelectedCoin(null)}
                  className="text-blue-200 hover:text-white transition-colors text-sm mb-4"
                >
                  ← Back to coin selection
                </button>
                
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {selectedCoin.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedCoin.name}</h3>
                    <p className="text-blue-200">{selectedCoin.symbol} • ${selectedCoin.price < 1 ? selectedCoin.price.toFixed(4) : selectedCoin.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    Amount of {selectedCoin.symbol} to add
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount..."
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                    step="any"
                    min="0"
                    autoFocus
                  />
                </div>
                
                {/* Quick Amount Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => setAmount('0.1')}
                    className="px-3 py-2 bg-white/10 text-blue-200 rounded-lg hover:bg-white/20 hover:text-white transition-all text-sm"
                  >
                    0.1
                  </button>
                  <button
                    onClick={() => setAmount('1')}
                    className="px-3 py-2 bg-white/10 text-blue-200 rounded-lg hover:bg-white/20 hover:text-white transition-all text-sm"
                  >
                    1
                  </button>
                  <button
                    onClick={() => setAmount('10')}
                    className="px-3 py-2 bg-white/10 text-blue-200 rounded-lg hover:bg-white/20 hover:text-white transition-all text-sm"
                  >
                    10
                  </button>
                  <button
                    onClick={() => setAmount('100')}
                    className="px-3 py-2 bg-white/10 text-blue-200 rounded-lg hover:bg-white/20 hover:text-white transition-all text-sm"
                  >
                    100
                  </button>
                </div>
                
                {amount && parseFloat(amount) > 0 && (
                  <div className="p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl border border-purple-400/30">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-blue-200 text-sm">Total Investment</p>
                        <p className="text-white font-bold text-2xl">
                          ${(parseFloat(amount) * selectedCoin.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-200 text-sm">You'll own</p>
                        <p className="text-white font-bold text-lg">
                          {parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 4 })} {selectedCoin.symbol}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer with Add Button */}
        {selectedCoin && (
          <div className="p-6 border-t border-white/20 bg-white/5">
            <button
              onClick={handleAddCoin}
              disabled={!amount || parseFloat(amount) <= 0}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 font-semibold text-lg"
            >
              <Plus className="w-5 h-5" />
              <span>Add {selectedCoin.symbol} to Portfolio</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCoinsModal;