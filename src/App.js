import { formatMes, getInvestiments } from './data/bd';

export default function App() {
  const bdInvestiments = getInvestiments();

  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            Projeto de API financeira
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <ul>
            {bdInvestiments.map(investment => {
              const { id, description, percentualFinal, reports } = investment;
              return (
                <li
                  className="shadow-md m-3 p-2 hover:bg-gray-0"
                  key={investment.id}
                >
                  <h3 className="text-center font-semibold text-xl bg-gray-200">
                    {investment.description}
                  </h3>
                  <h4 className="text-center font-semibold text-lg border bg-gray-200">
                    Rendimento Total: {investment.Total.toFixed(2)}(
                    {investment.percentualFinal.toFixed(2)}%)
                  </h4>
                  <ul>
                    {reports.map(({ month, year, value, id, percentual }) => {
                      return (
                        <li
                          key={id}
                          className="flex flex-row items-center justify-between border-2 hover:bg-gray-100"
                        >
                          <span className="font-mono">{formatMes(month)}</span>
                          <span className="flex-1 ml-4 font-mono">
                            R${value.toFixed(2)}
                          </span>
                          <span className=" font-mono">
                            {percentual.toFixed(2)}%
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
