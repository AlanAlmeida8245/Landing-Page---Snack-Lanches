
export function Food({image, name, onClick})
{
    return (
        <div className="p-1 m-2 space-y-2 hover:cursor-pointer" onClick={onClick}>
            <img src={image} alt="" className="w-20 h-20 rounded mx-auto hover:scale-110 transition-all"/>
            <h2 className=" text-orange-400 text-center font-medium">{name}</h2>
        </div>
    )
}