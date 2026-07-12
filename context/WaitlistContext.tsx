'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { api } from '@/lib/axios';



export interface WaitlistJoinPayload {
  name: string;
  email: string;
}

export interface WaitlistEntry {
  id?: string;
  name: string;
  email: string;
  position?: number;
  createdAt?: string;
}

type WaitlistStatus = 'idle' | 'loading' | 'success' | 'error';

interface WaitlistContextValue {
  status: WaitlistStatus;
  error: string | null;
  entry: WaitlistEntry | null;
  joinWaitlist: (payload: WaitlistJoinPayload) => Promise<WaitlistEntry>;
  reset: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue | undefined>(undefined);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<WaitlistStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [entry, setEntry] = useState<WaitlistEntry | null>(null);

  const joinWaitlist = useCallback(async (payload: WaitlistJoinPayload) => {
    setStatus('loading');
    setError(null);

    try {
      const response = await api.post<WaitlistEntry>('/waitlist/join', payload);
      const result = response.data ?? payload;
      setEntry(result);
      setStatus('success');
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to join the waitlist.';
      setError(message);
      setStatus('error');
      throw err;
    }
  }, []);

  const reset = useCallback(() => {
    setStatus('idle');
    setError(null);
    setEntry(null);
  }, []);

  const value = useMemo(
    () => ({ status, error, entry, joinWaitlist, reset }),
    [status, error, entry, joinWaitlist, reset]
  );

  return <WaitlistContext.Provider value={value}>{children}</WaitlistContext.Provider>;
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error('useWaitlist must be used inside a <WaitlistProvider>');
  }
  return ctx;
}