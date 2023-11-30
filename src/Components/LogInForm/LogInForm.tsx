import {FormEvent, useContext, useState} from "react";
import AuthContext from "../../context/AuthProvider.tsx";

export const LogInForm = () => {

    const {setAuth} = useContext(AuthContext);

    const [userData, setUserData] = useState({
    email: '',
    password: '',
    });
    const [success, setSuccess] = useState(false); // Może się przyda gdy będziemy chcieli wyświetlać różne widoki w zależności gdy ktoś jest zalogowany lub nie

    const sendForm = async (e: FormEvent)=> {
        e.preventDefault();

        try {
            // Tu połączenie z API backendowym w celu autoryzacji
            console.log(success) // <- tylko po to by webstorm nie podkreślał na czerwono zmiennej, która nie jest użyta
            console.log(userData);
            setSuccess(true);
            setAuth()
            setUserData({
                email: '',
                password: ''
            })
        } catch (err) {

        }

    }



    return <>
        <form onSubmit={sendForm}>
            <label htmlFor="email">
                <input
                    type="text"
                    id="email"
                    onChange={(e)=> setUserData({
                        ...userData,
                        email: e.target.value
                    })}
                    value={userData.email}
                    required
                    placeholder="E-mail"
                />
            </label>
            <label htmlFor="password">
                <input
                    type="password"
                    id="password"
                    onChange={(e)=> setUserData({
                        ...userData,
                        password: e.target.value
                    })}
                    value={userData.password}
                    required
                    placeholder="Hasło"
                />
            </label>
            <button type="submit">Zaloguj</button>

        </form>
    </>
}
