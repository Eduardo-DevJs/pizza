import { formatCurrencyBRL } from "../utils/formatCurrency";

interface ModalProps {
  handleCloseModal: () => void;
  description: string;
  img: string;
  name: string;
  price: number;
  sizes: string[];
}

const Modal = ({
  handleCloseModal,
  description,
  name,
  img,
  sizes,
  price,
}: ModalProps) => {

  return (
    <div className="flex items-center justify-center fixed inset-0 bg-black h-screen bg-opacity-50 z-50">
      <div className="flex flex-col items-center md:flex-row gap-8 bg-white h-screen md:h-fit rounded p-10 relative">
        <img className="h-52 w-52 md:h-96 md:w-96" src={img} alt={name} />
        <div className="flex flex-col justify-between gap-5 items-start">
          <div>
            <h1 className="text-xl md:text-3xl font-semibold text-left">
              {name}
            </h1>
            <p className="text-slate-500 text-xl max-w-96 font-normal leading-7 mt-5">
              {description}
            </p>
          </div>

          <div className="mt-5">
            <h1 className="uppercase text-xl text-slate-600">tamanho</h1>
            <ul className="bg-zinc-200 mt-2 flex p-2 gap-10 rounded-md">
              <li className="text-base">
                <span className="font-bold mr-2">PEQUENA</span> {sizes[0]}
              </li>
              <li className="text-base">
                <span className="font-bold mr-2">MÉDIO</span> {sizes[1]}
              </li>
              <li className="text-base">
                <span className="font-bold mr-2">GRANDE</span> {sizes[2]}
              </li>
            </ul>
          </div>

          <div>
            <h1 className="uppercase text-xl text-slate-600">preço</h1>
            <span className="text-3xl font-semibold">
              {formatCurrencyBRL(price)}
            </span>
          </div>

          <div className="flex items-center pb-5 gap-5">
            <button className="bg-green-600 text-white font-bold uppercase p-2 rounded">
              Adicionar ao carrinho
            </button>
            <button onClick={handleCloseModal} className="text-xl">
              Cancelar
            </button>
          </div>
        </div>

        <button
          onClick={handleCloseModal}
          className="hidden md:block absolute right-2 top-2 bg-red-500 text-white w-16 h-8 text-center font-semibold rounded-full"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
