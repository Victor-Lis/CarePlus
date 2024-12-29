export default function Disclaimer() {
 return (
  <div className="w-full bg-primary-strong selection:bg-secondary-strong/15 px-6 py-5 flex flex-col gap-y-5 rounded-tl rounded-tr border-x-4 border-t-4 border-primary-strong my-7">
    <h2 className="text-secondary-strong text-3xl">Atenção!</h2>
    <p className="text-secondary text-xl">Esta aplicação tem como objetivo simular um site para uma empresa de absorventes e cuidados femininos.</p>
    <p className="text-secondary text-xl">Os produtos apresentados são fictícios ou de outras marcas, usados apenas como exemplos, e, portanto, não podem ser adquiridos.</p>
  </div>
 );
}