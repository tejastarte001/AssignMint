"use client";

import { useState } from 'react';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, User, School } from 'lucide-react';
import Link from 'next/link';

interface AuthFormProps {
  type: 'login' | 'signup';
}

export default function AuthForm({ type }: AuthFormProps) {
  const { login } = useAuth();
  const [loadingRole, setLoadingRole] = useState<'teacher' | 'student' | null>(null);

  const handleLogin = (role: 'teacher' | 'student') => {
    setLoadingRole(role);
    login(role);
  };

  const title = type === 'login' ? 'Welcome Back!' : 'Create an Account';
  const description = type === 'login'
    ? 'Choose your role to sign in to your dashboard.'
    : 'Select your role to get started with AssignMint.';

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-sm font-medium text-muted-foreground">For demo purposes, please select a role to continue:</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Button
            size="lg"
            variant="outline"
            className="h-20 flex-col gap-2"
            onClick={() => handleLogin('teacher')}
            disabled={!!loadingRole}
          >
            {loadingRole === 'teacher' ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <School className="h-6 w-6 text-accent" />
            )}
            <span className="font-semibold">I am a Teacher</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-20 flex-col gap-2"
            onClick={() => handleLogin('student')}
            disabled={!!loadingRole}
          >
            {loadingRole === 'student' ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <User className="h-6 w-6 text-accent" />
            )}
            <span className="font-semibold">I am a Student</span>
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground pt-4">
          {type === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <Button variant="link" asChild className="p-0 h-auto">
            <Link href={type === 'login' ? '/signup' : '/login'}>
              {type === 'login' ? 'Sign up' : 'Log in'}
            </Link>
          </Button>
        </p>
      </CardContent>
    </Card>
  );
}
