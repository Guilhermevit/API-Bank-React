export default function Transacao({ children: transacao = null }) {
  if (!transacao) {
    return <div> Sem Transações </div>;
  }
  return (
    <div className="border p-2 m-2 flex flex-row space-x-2">
      <li className="border p-1 m-1">{transacao.investmentId}</li>
      <ul>
        <li>Mes: {transacao.month}</li>
        <li>Ano: {transacao.year}</li>
        <li>Valor: {transacao.value}</li>
      </ul>
    </div>
  );
}
