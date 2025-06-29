import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: User | null;
  login: () => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing authentication
    const savedUser = localStorage.getItem('farcaster_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async () => {
    setIsLoading(true);
    try {
      // Simulate Farcaster authentication
      const mockUser: User = {
        fid: 12345,
        username: 'cryptotrader',
        displayName: 'Crypto Trader',
        pfpUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=150&h=150&fit=crop&auto=compress',
        isAuthenticated: true,
      };
      
      setUser(mockUser);
      localStorage.setItem('farcaster_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Authentication failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('farcaster_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;