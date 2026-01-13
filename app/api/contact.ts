import axios from "axios";
import { ContactType } from "../_types/contact";

const API_URL = 'http://localhost:3001';

export const getContact = async (userId: string) => {
    const response = await axios.get(`${API_URL}/contacts?userId=${userId}`);
    return response.data;
}

export const getContactById = async (id: string) => {
    try{
        console.log("getContactById - fetching id:", id);
        const response = await axios.get(`${API_URL}/contacts/${id}`);
        console.log("getContactById - status:", response.status, "data:", response.data);
        return response.data;
    }catch(err:any){
        // If contact not found, return null so caller can handle it gracefully
        if (axios.isAxiosError(err) && err.response?.status === 404){
            console.warn("getContactById - contact not found for id:", id);
            return null;
        }
        console.error("getContactById - unexpected error for id:", id, err);
        throw err;
    }
} 

export const createContact = async (contact: ContactType) => {
    const response = await axios.post(`${API_URL}/contacts`, contact);
    return response.data;
}

export const updateContact = async (contact: ContactType, id: string) => {
    const response = await axios.put(`${API_URL}/contacts/${id}`, contact);
    return response.data;
}

export const deleteContact = async (id: string) => {
    const response = await axios.delete(`${API_URL}/contacts/${id}`);
    return response.data;
}