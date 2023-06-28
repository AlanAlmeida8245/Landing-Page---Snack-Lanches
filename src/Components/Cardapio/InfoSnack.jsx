

export default function infoSnack({snack})
{

    if (!snack) {
        return null;
      }

    return(
        <div className="text-white  flex items-center bg-gray-800 max-sm:mt-10 max-sm:mb-10">
              <div className="m-5">
                    <img src={snack.image} alt="" className="rounded-full" width="300px"/>
                </div>
            <div className="space-y-3">
                    <h1 className="text-5xl  font-medium">{snack.name}</h1>
                    <p className="text-orange-400">{snack.description}</p>
                    <p className="font-medium text-2xl">R$ {snack.price}</p>
                    <div className="space-x-2 space-y-3">
                        <button className="bg-orange-400 rounded  p-2  text-white font-bold">Comprar</button>
                        <button className="bg-gray-700 rounded  p-2  text-white font-bold">Saber Mais</button>
                    </div>
                </div>
        </div>
    )
}
