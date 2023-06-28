
import Logo from "./Foto-de-Perfil-Alternativo.png"
import {FaFacebookSquare} from "react-icons/fa"
import {FaTiktok} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"

export default function Footer()
{
    return (
        
<footer className="rounded-lg shadow bg-gray-900 mt-20">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between space-y-6">
         
            <div className="max-sm:text-center">
                <h1 className="text-white text-5xl">Snack <span className="text-orange-400">Lanches</span></h1>
                <b className="text-white">Fazendo sua refeição mais feliz <span className="text-orange-400">:)</span></b>
            </div>

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white  sm:mb-0 max-sm:flex max-sm:justify-center">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 "> <FaFacebookSquare className="text-orange-400"/> Instagram</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6"><FaTiktok className="text-orange-400"/> Tik Tok</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 "><FaInstagramSquare className="text-orange-400"/>Facebook</a>
                </li>
            </ul>
        </div>

    
    </div>
</footer>


    )
}

