export default function NotFound() {
  return (
    <>
      <main className="grid w-screen h-screen place-items-center bg-white dark:bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* Error Code */}
          <p className="text-2xl font-semibold text-red-600 dark:text-red-400">
            404
          </p>

          {/* Title */}
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
            Page not found
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          {/* Actions */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-gradient-to-r from-red-600 to-black px-3.5 py-2.5 text-sm font-semibold !text-white shadow-md hover:from-red-500 hover:to-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all"
            >
              Go back home
            </a>

          </div>
        </div>
      </main>
    </>
  );
}
