import { MouseEvent } from "react";
import { formatCurrencyBRL } from "../utils/formatCurrency";

interface ItemProps {
  title: string;
  description: string;
  img: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  price: number;
}

export default function Item({
  title,
  description,
  price,
  img,
  onClick,
}: ItemProps) {
  return (
    <li className="flex bg-white rounded-md shadow-md p-5 flex-col justify-between gap-2 items-center">
      <img className="max-w-52 " src={img} alt="pizza 1" />
      <span className="text-xl font-semibold text-zinc-500">
        {formatCurrencyBRL(price)}
      </span>
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="text-center leading-normal text-slate-600">{description}</p>
      <button
        onClick={onClick}
        className="bg-sky-600 hover:bg-sky-500 transition-colors rounded-md font-bold w-full uppercase p-2 text-white"
      >
        mais informações
      </button>
    </li>
  );
}
