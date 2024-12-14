export default function NotFound() {
  return (
    <div className="flex grow flex-col items-center justify-center px-5 text-center">
      <p className="animate-slideInFromTop font-corinthia text-7xl text-white xl:text-9xl">
        Oops!
      </p>
      <h1 className="mb-7 mt-5 text-6xl font-extrabold text-gray-800">404</h1>

      <p className="animate-slideInFromBottom text-xl font-thin text-white xl:text-5xl">
        The page you’re looking for doesn’t exist.
      </p>
    </div>
  );
}
