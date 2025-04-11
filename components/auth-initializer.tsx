"use client";

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthInit } from '@/hooks/useAuthInit';
import { useRecoilValue } from 'recoil';
import { authState, userSelector } from '@/store/auth';

export function AuthInitializer() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading, error } = useRecoilValue(authState);
  const userStateValue = useRecoilValue(userSelector);
  
  // Initialize auth state
  useAuthInit();
  
  // Handle auth state changes
  useEffect(() => {
    if (!loading) {
      if (error) {
        console.error('Auth error:', error);
      }
      
      // Only redirect if we're explicitly on login or register page and user is logged in
      if ((pathname === '/login' || pathname === '/register') && userStateValue) {
        router.push('/dashboard');
      }
    }
  }, [loading, error, userStateValue, router, pathname]);
  
  return null;
} 