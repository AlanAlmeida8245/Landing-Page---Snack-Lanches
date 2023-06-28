import Image from "../../assets/fastfood.webp";
import "./style.css";

export default function ImageHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
      <div className="mt-5 md:ml-7">
        <h1 className="text-orange-400 text-6xl m-5 text-center mt-6">
          Bem-Vindo
        </h1>
        <p className="text-center text-white font-medium m-5">
          Bem-vindo à nossa lanchonete de fast food! Aqui, combinamos sabor e
          rapidez para oferecer hambúrgueres suculentos, batatas crocantes e
          milkshakes refrescantes. Nossa equipe está pronta para proporcionar
          uma experiência memorável, com um ambiente acolhedor e opções para
          todos os paladares. Então, entre, escolha seu lanche favorito e
          prepare-se para uma festa gastronômica!
        </p>
        <div className="flex justify-center">
          <button className="border border-orange-400 text-white p-2 rounded">
            Saiba Mais...
          </button>
        </div>
      </div>
      <div className="image-back flex justify-center">
        <img src={Image} alt="" className="w-full md:w-96" />
      </div>
    </div>
  );
}
