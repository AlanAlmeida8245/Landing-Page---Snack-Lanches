

const Modal = ({ snack, onClose }) => {
    if (!snack) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div className="bg-white p-5 rounded-md max-w-md">
          <button className="absolute top-3 right-3" onClick={onClose}>
            Fechar
          </button>
          <h2 className="text-xl font-medium">{snack.name}</h2>
          <p>{snack.description}</p>
          <p className="font-bold mt-2">Preço: R${snack.price.toFixed(2)}</p>
          <img src={snack.image} alt={snack.name} className="mt-3" />
        </div>
      </div>
    );
  };
  
  export default Modal