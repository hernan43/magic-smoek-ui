'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, logout } from '@/lib/auth';

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Protected Content</h2>
            <p className="text-gray-600">
              This is a protected route. You can only see this if you're authenticated.
            </p>
            
            {data && (
              <pre className="mt-4 bg-gray-100 p-4 rounded">
                {JSON.stringify(data, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}