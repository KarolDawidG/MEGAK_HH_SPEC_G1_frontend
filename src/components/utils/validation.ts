import { notify } from "./Notify";
import axios from 'axios';

    // Walidacja url
    export const validatePortfolioUrls = (portfolioUrls: string) => {
    let urls = portfolioUrls.split('\n')
    const pattern = new RegExp('^(https?:\/\/)?([\\w-]+\\.)*[\\w-]+\\.[\\w-]+(\/[-\\w .\/?%&=]*)?$'); 
     //poprawiona wersja - weryfikowalem na https://regexr.com/
    //const pattern = new RegExp('https?://([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w.-]*');
    return (portfolioUrls ==="" || urls.every(x=>pattern.test(x))); // dodana opcja - portfolio może być puste, dla projektu zaliczeniowe obsluguje to formularz ustawiony jako required.
    };

    // walidacja email
    export const validateEmail = (email: string) => {
        const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        return regex.test(email);
    };

    // walidacja phone-number
    export const validatePhone = (phone: string) => {
        //const pattern = /^[0-9]{3,45}$/;      //dopuszcza liczbe ktora ma 45 cyfr
        const pattern = /^[5,6,7,8]\d{8}$/;     //pierwsza cyfra musi zawierac sie w przedziale od 5 do 8, kolejne - lacznie 8, od 0 do 9
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
    // wstepnie uproscilem te funkcje
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

    // export const validateGithub = async (github: string) => {
    //     try {
    //         const response = await axios.get(`https://api.github.com/users/${github}`, {
    //             validateStatus: (status: number) => {
    //                 return (status >= 200 && status < 300) || status == 404
    //             }
    //         });

    //         if (response.status === 200) {
    //             console.log("Status 200");
    //         }
    //         else {
    //             notify("Nie znaleziono użytkownika.");
    //         }

    //     } catch (error) {
    //         console.error('Błąd logowania', error);
    //     }
    // }