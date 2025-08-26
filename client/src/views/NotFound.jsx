import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <main className="relative isolate min-h-screen">
        <img
          alt=""
          src="/register.jpg"
          className="absolute inset-0 -z-10 h-screen w-full object-cover object-top dark:hidden"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8 flex flex-col justify-center h-screen">
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-white/70 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/"
              className="text-sm/7 font-semibold text-white hover:text-white/90"
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
