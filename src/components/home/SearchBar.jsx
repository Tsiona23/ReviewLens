import { Search } from "lucide-react";
import { Button } from "../ui/Button";

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
        text-gray-300
        placeholder:text-gray-500
        focus:border-blue-300
        focus:ring-1
        px-2
        "
      />


      <Button className="py-3 px-6">
        Analyze
      </Button>
    </div>

  );
};