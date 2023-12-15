import axios from "axios";
import { notify } from "./Notify";
import { URL_ADD_STUDENT_TO_CONVERSTAION, URL_ADD_STUDENT_TO_HIRE, URL_DEL_STUDENT_TO_CONVERSTAION } from "./backend-links";



const res = async (URL: string, studentId: string) => {
    await axios.patch(`${URL}`,
        { "studentId": studentId },
        { withCredentials: true }
    );
};

export const handleReserveClick = async (studentId: string) => {
    // Logika rezerwacji rozmowy
    try {
        await res(URL_ADD_STUDENT_TO_CONVERSTAION, studentId);
        notify('Kurstan dodany do rozmowy');
    } catch (error) {
        console.error('Błąd podczas dodawania kursanta do rozmowy:', error);
        notify('Kurstan nie został dodany do rozmowy');
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
        notify('Kurstan nie został usunięty z listy do rozmowy');
    };
};

export const handleHired = (studentId: string) => {
    // Logika obsługi zatrudnienia
    try {
        res(URL_ADD_STUDENT_TO_HIRE, studentId);
        notify('Kurstan zatrudniony');
    } catch (error) {
        console.error('Błąd podczas zatrudniania kursanta', error);
        notify('Kurstan nie został zatrudniony, spróbuj ponownie');
    };
};