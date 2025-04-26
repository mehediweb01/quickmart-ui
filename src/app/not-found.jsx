import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 bg-black/80">
      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-cyan-400">
        Not Found
      </h1>
      <Link
        href="/"
        className="px-4 py-3 bg-gradient-to-r from-cyan-900 to-transparent text-cyan-500 font-bold text-xl sm:text-2xl rounded-md hover:shadow-md hover:shadow-emerald-400 transition-all duration-300 hover:text-green-600 "
      >
        Go to Home page
      </Link>
    </div>
  );
};

export default NotFound;
