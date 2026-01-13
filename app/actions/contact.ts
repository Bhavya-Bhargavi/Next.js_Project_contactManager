"use server";


import { revalidatePath } from "next/cache";
import { createContact, deleteContact, updateContact } from "../api/contact";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";


export const createContactAction = async (
    PrevState:any,
    formData: FormData) => {
        if (!formData){
            return {error: "No form data provided"};
        }
        const user = await getSession();
        const newContact: ContactType = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            userId: user?.id,
        }
        try{
            await createContact(newContact);
            revalidatePath("/contact");
            return {success: true};
        } catch(error){
        console.error("Failed to create contact:", error);
        throw error;
    }
    }

export const updateContactAction = async (
    PrevState:any,
    formData: FormData) => {
    if (!formData){
        return {error: "No form data provided"};
    }
    const user = await getSession();
    const id = formData.get("id") as string;
    console.log("updateContactAction - received id:", id);
    const updatedContact: ContactType = {
        id: formData.get("id") as string,
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        userId: user?.id,
    }
    console.log("updateContactAction - updatedContact:", updatedContact);
    try{
        await updateContact(updatedContact, id);
        console.log("updateContactAction - update successful for id:", id);
        revalidatePath("/contact");
        return {success: true};
    } catch(error){
        console.error("Failed to update contact:", error);
        throw error;
    }
} 

export const deleteContactAction = async (
    PrevState:any,
    formData: FormData) => {
    // Implementation for deleting a contact will go here
    const id = formData.get("id") as string;
    try{
        await deleteContact(id);
        revalidatePath("/contact");
        return {success: true};
    }catch(error){
        console.error("Failed to delete contact:", error);
        throw error;
    }
}   
