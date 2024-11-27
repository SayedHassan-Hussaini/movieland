'use client';
import { logout } from '@/actions/logout';
import { Loader } from 'lucide-react';
import { useState } from 'react';

const LogoutPage = () => {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    try {
      setLoading(true);
    } catch (error) {
      setLoading(false);
    }
    await logout();
  };
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h3 className="text-2xl font-bold tracking-tight">
        So you are leaving us?
      </h3>
      <p className="text-sm text-muted-foreground">Wish to see you soon</p>
      <button  className="mt-4" onClick={handleLogout}>
        {!loading ? (
          'Logout'
        ) : (
          <Loader className="my-0.5 h-5 w-5 animate-spin" />
        )}
      </button>
    </main>
  );
};

export default LogoutPage;
