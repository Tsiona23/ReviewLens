import { Search } from "lucide-react";


export const SearchBar = () => {

  return (

    <div
      id="app-url-input"
      className="
      flex
      items-center
      gap-3
      p-2
      rounded-2xl
      border
      border-gray-800
      bg-gray-950
      max-w-xl
      "
    >

      <Search className="ml-3 text-blue-300"/>


      <input
        type="text"
        placeholder="Paste app store URL..."
        className="
        flex-1
        bg-transparent
        outline-none
        text-white
        placeholder:text-gray-500
        px-2
        "
      />


      <button
        className="
        px-6
        py-3
        rounded-xl
        bg-blue-300
        text-black
        font-semibold
        hover:bg-blue-200
        transition
        "
      >
        Analyze
      </button>


    </div>

  );
};