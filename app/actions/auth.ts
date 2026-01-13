
"use server";



import React from 'react';
import { UserType } from '../_types/user';
import axios from "axios";
   import { redirect } from "next/navigation";
import { deleteSession, setSession } from '../_lib/session';


const API_URL = 'http://localhost:3001';
export const loginAction = async (formData: FormData) => {
    console.log('loginAction formData:', Object.fromEntries(formData.entries()));
    try {
        const email = String(formData.get('email') ?? '');
        const password = String(formData.get('password') ?? '');
        const response = await axios.get(`${API_URL}/users?email=${formData.get('email')}&password=${formData.get('password')}`);
        const data = response.data;
        const user: UserType | undefined = Array.isArray(data) ? data[0] : data;
        if (!user) throw new Error("Invalid Credentials");
        await setSession({id: user.id, email: user.email, name: user.name});
       
    } catch (error: any) {
        // Allow Next.js redirect to bubble up unchanged so framework can handle it
        if (error?.message === 'NEXT_REDIRECT' || error?.name === 'Redirect') {
            throw error;
        }
        console.error('loginAction error:', error);
        throw new Error(error?.message ?? "Failed to login");
    }
     redirect("/");
}


export const logoutAction = async() => {
    await deleteSession();
    redirect("/login");
};

