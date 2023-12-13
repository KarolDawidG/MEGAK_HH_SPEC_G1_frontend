import { useEffect } from 'react';
import { validateGithub } from "../components/utils/validation";

interface UseAvatarEffectProps {
    github: string;
    setAvatarSrc: React.Dispatch<React.SetStateAction<string>>;
}

export const useAvatarEffect = ({ github, setAvatarSrc }: UseAvatarEffectProps): void => {
    useEffect(() => {
        const fetchAvatar = async (): Promise<void> => {
            try {
                if (github && (await validateGithub(github))) {
                    const avatarLink = `https://github.com/${github}.png`;
                    setAvatarSrc(avatarLink);
                } else {
                    setAvatarSrc('/default_user_icon');
                }
            } catch (error) {
                console.error('Błąd podczas pobierania linku do avatara', error);
                setAvatarSrc('/default_user_icon');
            }
        };

        fetchAvatar();
    }, [github, setAvatarSrc]);
};