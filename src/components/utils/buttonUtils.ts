import axios from "axios";
import { notify, notifyError } from "./Notify";
import { URL_ADD_STUDENT_TO_CONVERSTAION, URL_ADD_STUDENT_TO_HIRE, URL_DEL_STUDENT_TO_CONVERSTAION } from "./backend-links";

const res = async (URL: string, studentId: string) => {
    const data = {
        studentId: studentId
    };

    console.log('Sending PATCH request with data:', data);

    try {
        const response = await axios.patch(URL, {
            studentId: studentId
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true 
        });

        console.log('Odpowiedź z backendu:', response.data);

    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            // Teraz TypeScript wie, że error jest instancją AxiosError
            console.error('Błąd związany z Axios:', error.response?.data);
        } else if (error instanceof Error) {
            // Error jest ogólnym błędem JavaScript
            console.error('Ogólny błąd:', error.message);
        } else {
            // Błąd nie jest typu Error
            console.error('Nieoczekiwany błąd:', error);
        }
    }
    
};




//URL_ADD_STUDENT_TO_CONVERSTAION = "http://localhost:3001/hr-profile/choose-student"

export const handleReserveClick = async (studentId: string) => {
    // Logika rezerwacji rozmowy
    try {
        await res(URL_ADD_STUDENT_TO_CONVERSTAION, studentId);
        notify('Kurstan dodany do rozmowy');
    } catch (error) {
        console.error('Błąd podczas dodawania kursanta do rozmowy:', error);
        notifyError('Kurstan nie został dodany do rozmowy');
    };
};

export const handleShowCV = (studentId: string) => {

};

export const handleNoInterest = (studentId: string) => {
    // Logika obsługi braku zainteresowania
    try {
        res(URL_DEL_STUDENT_TO_CONVERSTAION, studentId);
        notify('Kurstan usunięty z listy do rozmowy');
    } catch (error) {
        console.error('Błąd podczas usuwania kursanta z listy do rozmowy', error);
        notifyError('Kurstan nie został usunięty z listy do rozmowy');
    };
};

export const handleHired = (studentId: string) => {
    // Logika obsługi zatrudnienia
    try {
        res(URL_ADD_STUDENT_TO_HIRE, studentId);
        notifyError('Kurstan zatrudniony');
    } catch (error) {
        console.error('Błąd podczas zatrudniania kursanta', error);
        notifyError('Kurstan nie został zatrudniony, spróbuj ponownie');
    };
};