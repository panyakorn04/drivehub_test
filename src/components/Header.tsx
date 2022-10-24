import logo from "../logo.svg";
import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";

type Props = {}

const Header = (props: Props) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user);
    return (
        <div className="mx-auto max-w-7xl px-4 pt-2 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                    <div className="flex w-full items-center justify-between md:w-auto">
                        <a href="#">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                            <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex md:space-x-10">
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Product</a>

                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Features</a>

                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Company</a>
                </div>
                {!isAuthenticated && (
                    <>
                        <LoginButton />
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <img className="inline-block h-10 w-10 rounded-full" src={user?.picture} alt={user?.name} />
                        <h2>{user?.name}</h2>
                        <LogoutButton />
                    </>
                )}
            </nav>
        </div>
    )
}

export default Header