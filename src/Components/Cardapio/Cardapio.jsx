

import { Food } from "./Food";
import InfoSnack from "./InfoSnack";
import { useState } from "react";
import { Dock } from "react-dock";

export default function Cardapio(){

    const [selectSnack, setSelectSnack] = useState(null)
   

    const scrollToElement = (e) => {
      e.preventDefault();
    
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
    
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const lanches = [
        {
          id: 0,
          name: "Cheeseburger",
          image: "https://thumbs.dreamstime.com/b/fast-food-real%C3%ADstico-do-hamburger-do-vetor-90515161.jpg",
          price: 12.99,
          description: "Um hambúrguer suculento com queijo derretido, acompanhado de alface, tomate e molho especial. Um clássico que nunca decepciona!"
        },
        {
          id: 1,
          name: "Sanduíche Vegano",
          image: "https://apartamento702.com.br/wp-content/uploads/2016/01/natalie1.jpg",
          price: 10.99,
          description: "Uma opção deliciosa para os amantes de alimentos à base de plantas. Este sanduíche vegano é recheado com proteína vegetal, salada fresca e molho vegano."
        },
        {
            id: 2,
          name: "Batatas Rústicas",
          image: "https://cdn.shopify.com/s/files/1/0666/9536/4926/products/Batata-Rustica_800x.webp?v=1666361766",
          price: 4.99,
          description: "Batatas cortadas em formato rústico, temperadas com ervas finas e assadas até ficarem crocantes por fora e macias por dentro. O acompanhamento perfeito para qualquer lanche!"
        },
        {
            id: 3,
            name: "Pizza de Pepperoni",
            image: "https://www.viksburger.com.br/wp-content/uploads/2019/03/pepperoni-pizza.jpg",
            price: 18.99,
            description: "Uma deliciosa pizza de pepperoni com massa fina e crocante, generosamente coberta com queijo derretido e fatias suculentas de pepperoni."
          },
          {
            id: 4,
            name: "Fritas, Cheddar e Bacon",
            image: "https://guararapesonline.com.br/shoppingguararapes/2021/03/Batata-com-Cheddar-e-Bacon.png",
            price: 8.99,
            description: "Batatas fritas crocantes cobertas com cheddar derretido e pedaços de bacon crocante. Uma combinação irresistível de sabores salgados e cremosos!"
          }
      ];

      const sobremesas = [
        {
          name: "Sundae de Chocolate",
          image: "https://d2umxhib5z7frz.cloudfront.net/Brasil/63475%20DLV.png?1645024615288",
          price: 6.99,
          description: "Um sundae indulgente com sorvete de baunilha cremoso, cobertura de chocolate, chantilly e uma cereja no topo. Uma tentação para os amantes de chocolate!"
        },
        {
          name: "Milkshakes",
          image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/951/518/products/9978485706-310303-310304-310305-c039604af6e15dd96e16397657260982-1024-1024.jpg",
          price: 7.99,
          description: "Um milkshake refrescante e cremoso de morango, feito com sorvete de baunilha e pedaços suculentos de morango. Uma doce recompensa para qualquer ocasião!"
        },
        {
          name: "Brownie de Caramelo",
          image: "https://docepedia.com/wp-content/uploads/2018/09/brownie-de-caramelo.d.jpg",
          price: 5.99,
          description: "Um delicioso brownie de chocolate com pedaços de caramelo derretido por cima. A combinação perfeita de textura macia e sabor indulgente!"
        }
      ];

      const SelectFood = (name, price, description, image) => {
        setSelectSnack({
                name: name,
                price: price,
                description: description,
                image: image
            });
           
            setVisible(true)
      };
      

    return (
        <section>
  <div className="">
    <div className="mb-10">
      <h1 className="text-white text-6xl text-center">Cardapio</h1>
      <p className="text-orange-400 font-medium text-center">
        Confira nossos principais lanches e guloseimas <span className="text-white">(Clique no item)</span>
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="">
        <h2 className="text-3xl text-white font-medium text-start ml-10">
          Lanches
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 m-5">
          {lanches.map((lanche) => (
            <a href="#lanche" onClick={scrollToElement}>
              <Food
                image={lanche.image}
                name={lanche.name}
                onClick={() =>
                  SelectFood(
                    lanche.name,
                    lanche.price,
                    lanche.description,
                    lanche.image
                  )
                }
              />
            </a>
          ))}
        </div>
        <h2 className="text-3xl text-white font-medium text-start ml-10">
          Sobremesas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 m-5">
          {sobremesas.map((sobremesa) => (
            <Food
              image={sobremesa.image}
              name={sobremesa.name}
              onClick={() =>
                SelectFood(
                  sobremesa.name,
                  sobremesa.price,
                  sobremesa.description,
                  sobremesa.image
                )
                
              }
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mx-5"id="lanche" >
        <InfoSnack snack={selectSnack} />
      </div>
    </div>
  </div>
  
  
  
</section>

    )
}