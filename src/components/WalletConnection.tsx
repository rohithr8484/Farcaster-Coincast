import React, { useState } from 'react';
import { Wallet, CheckCircle, AlertCircle, Copy, ExternalLink } from 'lucide-react';

const WalletConnection: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockAddress = '7xKhsj9Z2CqhWZrfmQ5oPb4vZrG6qEd8fKqR5jWsNmKp';
      setWalletAddress(mockAddress);
      setIsConnected(true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
  };

  const solanaTokens = [
    {
      name: 'Solana',
      symbol: 'SOL',
      balance: 12.5,
      value: 350,
      mint: 'So11111111111111111111111111111111111111112'
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
      balance: 1250,
      value: 1250,
      mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
    },
    {
      name: 'Serum',
      symbol: 'SRM',
      balance: 45.2,
      value: 135.6,
      mint: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Wallet Connection */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Wallet className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Solana Wallet</h2>
          </div>
          {isConnected && (
            <div className="flex items-center space-x-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Connected</span>
            </div>
          )}
        </div>

        {!isConnected ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wallet className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Connect Your Solana Wallet</h3>
            <p className="text-blue-200 mb-6">
              Connect your Solana wallet to view your tokens and make transactions
            </p>
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isConnecting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Connecting...</span>
                </div>
              ) : (
                'Connect Wallet'
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
              <div>
                <p className="text-blue-200 text-sm mb-1">Wallet Address</p>
                <p className="text-white font-mono text-sm">
                  {walletAddress.slice(0, 8)}...{walletAddress.slice(-8)}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={copyAddress}
                  className="p-2 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-2 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
            <button
              onClick={disconnectWallet}
              className="w-full bg-red-600/20 text-red-400 py-2 rounded-lg hover:bg-red-600/30 transition-colors"
            >
              Disconnect Wallet
            </button>
          </div>
        )}
      </div>

      {/* Solana Tokens */}
      {isConnected && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-6">Your Solana Tokens</h3>
          <div className="space-y-4">
            {solanaTokens.map((token) => (
              <div key={token.symbol} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {token.symbol[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{token.name}</h4>
                    <p className="text-blue-200 text-sm">{token.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">
                    {token.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })} {token.symbol}
                  </p>
                  <p className="text-blue-200 text-sm">
                    ${token.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      {isConnected && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105">
            <Wallet className="w-6 h-6 mb-2 mx-auto" />
            <span className="font-semibold block">Send Tokens</span>
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105">
            <AlertCircle className="w-6 h-6 mb-2 mx-auto" />
            <span className="font-semibold block">Swap Tokens</span>
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-4 rounded-xl hover:from-purple-700 hover:to-violet-700 transition-all transform hover:scale-105">
            <ExternalLink className="w-6 h-6 mb-2 mx-auto" />
            <span className="font-semibold block">View on Explorer</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnection;