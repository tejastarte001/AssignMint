"use client";

import type { User } from '@/types';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const MOCK_USERS = {
  teacher: {
    uid: 'teacher-123',
    email: 'teacher@assign.mint',
    displayName: 'Dr. Evelyn Reed',
    role: 'teacher' as const,
  },
  student: {
    uid: 'student-456',
    email: 'student@assign.mint',
    displayName: 'Alex Johnson',
    role: 'student' as const,
  },
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (role: 'teacher' | 'student', redirect?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      const storedUserRole = localStorage.getItem('userRole') as 'teacher' | 'student' | null;
      if (storedUserRole && MOCK_USERS[storedUserRole]) {
        setUser(MOCK_USERS[storedUserRole]);
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
    setLoading(false);
  }, []);

  const login = (role: 'teacher' | 'student', redirect: string = '/dashboard') => {
    setLoading(true);
    setTimeout(() => {
      const userToLogin = MOCK_USERS[role];
      setUser(userToLogin);
      try {
        localStorage.setItem('userRole', role);
      } catch (error) {
         console.error("Could not access localStorage:", error);
      }
      setLoading(false);
      router.push(redirect);
    }, 500);
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('userRole');
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
    router.push('/login');
  };

  useEffect(() => {
    if (!loading) {
      const isAuthPage = pathname === '/login' || pathname === '/signup';
      const isHomePage = pathname === '/';
      
      if (!user && !isAuthPage && !isHomePage) {
        router.push('/login');
      }
    }
  }, [user, loading, pathname, router]);


  if (loading) {
     return (
        <div className="flex h-screen w-full items-center justify-center bg-background">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
