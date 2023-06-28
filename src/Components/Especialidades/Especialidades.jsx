<link href="https://unpkg.com/pattern.css" rel="stylesheet"></link>

import { IoFastFood } from "react-icons/io5"
import {MdOutlineDeliveryDining} from "react-icons/md"
import {SiIfood} from "react-icons/si"


export default function Especialidades() {
  return (
    <div className="mt-10">
        
      <section className="text-gray-200 bg-gray-800 w-full">
        <div className="max-w-6xl mx-auto px-5 py-24 w-full">
          
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-700 p-4 transform translate-x-6 -translate-y-6">
                
                    <div className="flex justify-center">
                        <IoFastFood className="w-12 h-12 mt-2"/>
                    </div>
             
                  <div className="flex-grow">
                    <h2 className="text-xl title-font font-medium mb-3 text-orange-400 text-center">Sabores Autênticos</h2>
                    <p className="leading-relaxed text-sm text-justify">Experimente nossos lanches com sabores autênticos que vão te surpreender. Nossos chefs criam combinações deliciosas e inovadoras que vão além do comum. Cada mordida é uma explosão de sabores que você não vai encontrar em nenhum outro lugar.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-700 p-4 transform translate-x-6 -translate-y-6">
                  <div className="flex justify-center">
                  <MdOutlineDeliveryDining className="h-12 w-12"/>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl title-font font-medium mb-3 text-orange-400 text-center">Delivery Rápido e Confiável </h2>
                    <p className="leading-relaxed text-sm text-justify">
                    Desfrute da conveniência do nosso serviço de delivery rápido e confiável. Com uma equipe dedicada e um sistema eficiente, garantimos que seu pedido chegará fresco e quentinho à sua porta em tempo recorde. Satisfaça sua fome sem sair de casa, no menor tempo possível de espera e com localização em tempo real do entregador

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-700 p-4 transform translate-x-6 -translate-y-6">
                  <div className="flex justify-center">
                    <SiIfood className="h-12 w-12"/>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl title-font font-medium mb-3 text-orange-400 text-center">Ingredientes Frescos e Locais</h2>
                    <p className="leading-relaxed text-sm text-justify">
                    Utilizamos ingredientes frescos e de origem local para garantir a qualidade e o sabor excepcional de nossos lanches. Apoiamos produtores locais e selecionamos cuidadosamente cada ingrediente para oferecer uma experiência gastronômica única. Delicie-se com lanches feitos com ingredientes de primeira linha.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
}
