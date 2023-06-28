import Logo from "./Logo-Alternativo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Dock } from "react-dock";
import {AiFillCloseSquare} from "react-icons/ai"

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setVisible] = useState(false)

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 w-full">
      <img src={Logo} alt="" width="130px" />

      <ul className="hidden md:flex space-x-5 m-5 text-white hover:cursor-pointer">
        <li
          className={`relative ${
            activeIndex === 0 ? "with-line" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          Inicio
        </li>
        <li
          className={`relative ${
            activeIndex === 1 ? "with-line" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          Cardapio
        </li>
        <li
          className={`relative ${
            activeIndex === 2 ? "with-line" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          Contato
        </li>
        <li
          className={`relative ${
            activeIndex === 3 ? "with-line" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          Sobre
        </li>
      </ul>

      <button className="hidden md:block bg-orange-400 rounded m-5 p-2 mr-10 text-white font-bold">
        Fazer Pedido
      </button>

      <div className="md:hidden m-5 hover:cursor-pointer" onClick={() => setVisible(true)}>
        <GiHamburgerMenu className="text-white w-8 h-8" />
      </div>

      <style jsx>{`
        .with-line::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background-color: orange;
          transform: scaleX(0);
          transition: transform 0.3s ease-in-out;
        }

        .with-line:hover::after {
          transform: scaleX(1);
        }
      `}</style>

        <Dock position='right' isVisible={isVisible} fluid={true} className="bg-gray-800 h-full">
      
            <div className="bg-gray-800 h-full">
              <div className="text-right p-5" onClick={() => setVisible(false)}>
                <AiFillCloseSquare className="h-12 w-12 text-red-500 hover:cursor-pointer hover:text-red-600"/>
                </div>
                <ul className=" p-5 space-y-4 text-white hover:cursor-pointer">
                  <li className="hover:border-2 border-orange-400 p-2">Inicio</li>
                  <li className="hover:border-2 border-orange-400 p-2">Cardápio</li>
                  <li className="hover:border-2 border-orange-400 p-2">Contato</li>
                  <li className="hover:border-2 border-orange-400 p-2">Sobre</li>
                </ul>

                <div className=" flex justify-center">
                  <button className=" bg-orange-400 rounded m-5 p-2 text-white font-bold">
                  Fazer Pedido
                    </button>
                </div>
            </div>
       
            
         
          </Dock>
    </nav>
  );
}
