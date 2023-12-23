import React from "react";

function SecretForm() {
  return (
    <div className="p-6 flex h-screen flex-col justify-center gap-4">
      <h1 className="border-b-2 pb-2 font-semibold">Secret Santa Gift Form</h1>
      <div className="flex flex-col gap-4">
        <p className=" text-sm font-extralight text-zinc-400">
          Complete the following form in order to receive your gift. Please be
          sure to use your real information.
          <br />
          <b>THIS IS NOT A SCAM, I AM YOUR COUSIN.</b>
        </p>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Complete Name
          </label>
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Complete Name..."
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email..."
          />
        </div>
        <div className="mb-4 inline-block relative w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="product"
          >
            Product
          </label>
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>AirPods Pro (2.ª generación)</option>
            <option>Other gift because I bought it one month ago :D</option>
            <option>None</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 top-8 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <a href="/error" className=" border-2 border-zinc-600 rounded-lg p-2 text-zinc-600 hover:bg-[#101010] hover:text-white font-bold transition-all text-center">
          Continue
        </a>
      </div>
    </div>
  );
}

export default SecretForm;
