"use client";
import { isLoggedIn } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function BookingLayout({ children }: { children: React.ReactNode }) {
    const userLoggedIn = isLoggedIn();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!userLoggedIn) {
          router.push("/login");
        }
        setIsLoading(true);
      }, [router, isLoading, userLoggedIn]);
  return (
    <div>{children}</div>
  )
}

export default BookingLayout