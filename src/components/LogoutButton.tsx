
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton: React.FC = () => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({
            returnTo: window.location.origin,
        });
    };

    return (
        <button onClick={handleLogout} className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
            <span className="inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:bg-gray-50"> Log Out</a>
            </span>
        </button>
    );
};