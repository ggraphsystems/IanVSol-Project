import { route } from "./RoutesNavBar"

export default function NavDesktop (){
    return (   
        <nav className="hidden text-white md:flex items-center justify-center relative px-10 sm:px-15 md:px-20 lg:px-35 2xl:px-50 py-6">
            <div className="flex-1">
                <h1 className="cursor-pointer text-3xl font-bold sm:pl-2">Ian V Sol</h1>
            </div>
            <div className="flex-1 flex justify-center">
                <ul className="justify-center ml-2 lg:ml-15 flex gap-5">
                    {route.map(({title, href}) => (
                        <li key={href}> 
                            <a className="text-neutral-200 hover:scale-105 hover:text-white transition-transform" href={href}>
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1"></div>
            <button className="bg-white text-black p-3 rounded-2xl hover:bg-purple-500 hover:scale-105 hover:text-white transition-transform active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600">
                Contact
            </button>
            
        </nav> 
    )
}