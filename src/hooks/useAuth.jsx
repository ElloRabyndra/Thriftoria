import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

// Context untuk Authentication
const AuthContext = createContext();

// Custom hook untuk menggunakan AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load users dan check authentication saat aplikasi dimuat
  useEffect(() => {
    try {
      // Load users dari localStorage
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      setUsers(storedUsers);

      // Cek apakah user sudah login sebelumnya
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        setUser(currentUser);
      }
    } catch (error) {
      console.error("Error loading data from localStorage", error);
      setUsers([]);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Function untuk register user baru
  const register = (userData) => {
    try {
      const { email, password } = userData;
      const newUser = { 
        id: Date.now(),
        email: email.toLowerCase(), 
        password 
      };

      // Update users list
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      
      // Save ke localStorage
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      
      return { success: true, message: "Registration successful!" };
    } catch (error) {
      return { success: false, message: "Registration failed!" };
    }
  };

  // Function untuk login
  const login = (credentials) => {
    try {
      const { email, password } = credentials;
      
      // Cari user berdasarkan email dan password
      const foundUser = users.find(
        (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password
      );

      if (foundUser) {
        const userSession = {
          id: foundUser.id,
          email: foundUser.email
        };
        
        setUser(userSession);
        localStorage.setItem("currentUser", JSON.stringify(userSession));
        
        return { success: true, message: "Login successful!", user: userSession };
      } else {
        return { success: false, message: "Invalid credentials!" };
      }
    } catch (error) {
      return { success: false, message: "Login failed!" };
    }
  };

  // Function untuk logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  // Function untuk check apakah email sudah terdaftar
  const isEmailRegistered = (email) => {
    return users.some(user => user.email.toLowerCase() === email.toLowerCase());
  };

  // Function untuk validasi password
  const validatePassword = (email, password) => {
    const foundUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());
    return foundUser && foundUser.password === password;
  };

  const value = {
    user,
    users,
    isLoading,
    isAuthenticated: !!user,
    register,
    login,
    logout,
    isEmailRegistered,
    validatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};