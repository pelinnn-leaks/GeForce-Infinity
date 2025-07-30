import { User } from "firebase/auth";

export const defaultConfig: Config = {
    userAgent: "",
    autofocus: true,
    automute: true,
    notify: true,
    rpcEnabled: true,
    informed: true,
    accentColor: "",
    inactivityNotification: true,
};

export interface Config {
    userAgent: string;
    autofocus: boolean;
    automute: boolean;
    notify: boolean;
    rpcEnabled: boolean;
    informed: boolean;
    accentColor: string;
    inactivityNotification: boolean;
}

export interface UserContext {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
