import { notify } from "./Notify";
import axios from 'axios';

// Walidacja url
export const validatePortfolioUrls = (portfolioUrls: string) => {
    let urls = portfolioUrls.split('\n')
    const pattern = new RegExp('^(https?:\/\/)?([\\w-]+\\.)*[\\w-]+\\.[\\w-]+(\/[-\\w .\/?%&=]*)?$');
    return (portfolioUrls === "" || urls.every(x => pattern.test(x)));
};

// walidacja email
export const validateEmail = (email: string) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return regex.test(email);
};

// walidacja phone-number
export const validatePhone = (phone: string) => {
    const pattern = /^[5,6,7,8]\d{8}$/;
    return (phone === "" || pattern.test(phone));
};

// Walidacja expected salary
export const validateExpectedSalary = (expectedSalary: string) => {
    const regex = /^\d{1,6}(?:\.\d{0,2})?$/;
    return regex.test(expectedSalary);
};

// Walidacja monthsOfCommercialExp
export const validatemonthsOfCommercialExp = (monthsOfCommercialExp: number) => {
    if (monthsOfCommercialExp >= 0) {
        console.log("Ilość msc podana poprawnie");
        return true
    } else {
        notify("Liczba miesiecy nie może być <0")
        return false
    }
};

// walidacja github user 
export const validateGithub = async (github: string) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${github}`);

        if (response.status !== 200) {
            console.log("Nie znaleziono użytkownika.");
            notify("Nie znaleziono użytkownika.");
        }
    } catch (error) {
        console.error('Błąd logowania', error);
    }
}