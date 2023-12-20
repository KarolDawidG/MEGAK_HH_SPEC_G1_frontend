import axios from "axios";
import { notify, notifyError } from "./Notify";
import { URL_ADD_STUDENT_TO_CONVERSTAION, URL_ADD_STUDENT_TO_HIRE, URL_DEL_STUDENT_TO_CONVERSTAION } from "./backend-links";



const res = async (URL: string, studentId: string) => {
    await axios.patch(`${URL}`,
        { studentId, },
        { withCredentials: true }
    );
};

export const handleReserveClick = async (studentId: string) => {
    // Logika rezerwacji rozmowy
    console.log(studentId)
    try {
        const resUser = await res(URL_ADD_STUDENT_TO_CONVERSTAION, studentId);
        notify('Kurstan dodany do rozmowy');
    } catch (error) {
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
        notifyError('Kurstan nie został usunięty z listy do rozmowy');
    };
};

export const handleHired = (studentId: string) => {
    // Logika obsługi zatrudnienia
    try {
        res(URL_ADD_STUDENT_TO_HIRE, studentId);
        notifyError('Kurstan zatrudniony');
    } catch (error) {
        notifyError('Kurstan nie został zatrudniony, spróbuj ponownie');
    };
};