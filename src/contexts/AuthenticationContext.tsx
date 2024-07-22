import React, { createContext, useEffect, useState } from "react";
import { UserProfile } from "../models/User";
import { useNavigate } from "react-router";
import { loginAPI, registerAPI } from "../services/AuthenticationService";
import { toast } from "react-toastify";
import axios from "axios";

type UserContextType = {
    user: UserProfile | null,
    token: string | null,
    registerUser: (email: string, username: string, password: string) => void,
    loginUser: (username: string, password: string) => void,
    logout: () => void,
    isLoggedIn: () => boolean
};

type Props = {
    children: React.ReactNode
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if(user && token)
        {
            setUser(JSON.parse(user));
            setToken(token);

            axios.defaults.headers.common["Authorization"] = "Bearer " + token; 
        }

        setIsReady(true);
    }, []);


    const registerUser = async (email: string, username: string, password: string) => {
        await registerAPI(email, username, password).then((response) => {
            if(response)
            {
                localStorage.setItem("token", response?.data.token);
                const userObj = {
                    username: response?.data.username,
                    email: response?.data.email
                };
                localStorage.setItem("user", JSON.stringify(userObj));
                
                setToken(response?.data.token!);
                setUser(userObj!);
                toast.success("Login Success!");

                navigate("/search");
            }
        })
        .catch((error) => toast.warning("Server error occured"));
    }


    const loginUser = async (username: string, password: string) => {
        await loginAPI(username, password).then((response) => {
            if(response)
            {
                localStorage.setItem("token", response?.data.token);
                const userObj = {
                    username: response?.data.username,
                    email: response?.data.email
                };
                localStorage.setItem("user", JSON.stringify(userObj));
                
                setToken(response?.data.token!);
                setUser(userObj!);
                toast.success("Login Success!");

                navigate("/search");
            }
        })
        .catch((error) => toast.warning("Server error occured"));
    }


    const isLoggedIn = () => {
        return !!user;
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setToken("");
        setUser(null);
        navigate("/");
    }

    return (
        <UserContext.Provider value={{loginUser, user, token, logout, isLoggedIn, registerUser}}>
            {isReady ? children : null}
        </UserContext.Provider>
    )
}

export const useAuth = () => React.useContext(UserContext);