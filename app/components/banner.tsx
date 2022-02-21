export default function displayBanner({titleText, hasFutureClick, futureClickText, futureClickLink}: {
  titleText: string,
  hasFutureClick: boolean,
  futureClickText?: string,
  futureClickLink?: string,
}) {
  return (
    <div className="bg-white pt-6 sm:pt-8 lg:pt-12">
      {/* <!-- banner - start --> */}
      <div className="max-w-screen-2xl px-4 md:px-8 pb-4 mx-auto">
        <div className="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center bg-indigo-500 rounded-lg shadow-lg relative sm:gap-3 px-4 sm:pr-8 ms:px-8 py-3">
          <div className="order-1 sm:order-none w-11/12 sm:w-auto max-w-screen-sm inline-block text-white text-sm md:text-base mb-2 sm:mb-0">{titleText}</div>

          {hasFutureClick ? (
            <a href={ futureClickLink } className="order-last sm:order-none w-full sm:w-auto inline-block bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 focus-visible:ring ring-indigo-300 text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap rounded-lg outline-none transition duration-100 px-4 py-2">{futureClickText}</a>
          ) : null}
          

          {/* <!-- close button - start --> */}
          <div className="order-2 sm:order-none w-1/12 sm:w-auto flex justify-end items-start sm:absolute sm:right-0 sm:mr-2 xl:mr-3">
            <button type="button" className="text-white hover:text-indigo-100 active:text-indigo-200 transition duration-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 xl:w-6 h-5 xl:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* <!-- close button - end --> */}
        </div>
      </div>
      {/* <!-- banner - end --> */}
    </div>
  );
}