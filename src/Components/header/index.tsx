import bgPizza from "../../../public/images/pizzaCapa.jpg";

export default function Header() {
  return (
    <header
      className="h-[400px]"
      style={{ backgroundImage: `url(${bgPizza})`, backgroundSize: "cover" }}
    ></header>
  );
}
