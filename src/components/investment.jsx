import Transacao from './Transacao';

export default function Investment({ children: investment = [] }) {
  return (
    <div className="border p-2">
      <h3 className="text-center font-semibold">
        {investment.length} Transações
      </h3>

      {investment.map(investment => {
        return <Transacao key={investment.id}>{investment}</Transacao>;
      })}
    </div>
  );
}
