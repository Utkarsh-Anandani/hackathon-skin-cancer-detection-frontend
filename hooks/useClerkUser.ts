'use client';
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function useClerkUser() {
    const { user } = useUser();
    const router = useRouter();

    if(!user) {
        router.push('/sign-in');
    }

    return user;
}