export default function Header({ children, size }) {
  let fontSize = 'text-xl';

  if (size === 'large') {
    fontSize = 'text-2xl';
  }

  return (
    <header>
      <div className="bg-yellow-200 mx-auto p-4">
        <h1 className={`text-center font-semibold ${fontSize}`}>{children}</h1>
      </div>
    </header>
  );
}
