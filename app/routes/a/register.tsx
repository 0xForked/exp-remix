export default function Index() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Create an Account</h2>

        <form className="max-w-lg border rounded-lg mx-auto">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label htmlFor="email" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Email</label>
              <input name="email" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>

            <div>
              <label htmlFor="name" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Name</label>
              <input name="name" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>

            <div>
              <label htmlFor="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Password</label>
              <input name="password" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>

            <div>
              <label htmlFor="dob" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Date of Birth</label>
              <input name="dob" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="date"/>
            </div>

            <div>
              <label htmlFor="gender" className="block text-gray-800 text-sm sm:text-base mb-2">I'm</label>
              <select id="country" name="country" autoComplete="country-name" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2">
                <option>Want to keep it secret!</option>
                <option>a Male</option>
                <option>a Female</option>
              </select>
            </div>

            <div className="flex items-start py-2">
              <div className="flex items-center h-5">
                <input id="offers" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="offers" className="font-medium text-gray-700">
                Agrement
                </label>
                <p className="text-gray-500">
                  By registering, I agree with your <a href="#" className='text-blue-500 hover:underline hover:text-indigo-600 active:text-indigo-700 transition duration-100'>ToS</a> and Developer can use my data as long as They want! 🤣
                </p>
              </div>
            </div>
           
            <button className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Register</button>
          </div>

          <div className="flex justify-center items-center bg-gray-100 p-4">
            <p className="text-gray-500 text-sm text-center">
              Have an account? <a href="/a/login" className="hover:underline hover:text-indigo-600 active:text-indigo-700 transition duration-100">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
