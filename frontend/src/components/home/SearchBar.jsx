import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "../ui/Button";

export const SearchBar = () => {
  const [appUrl, setAppUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedUrl = appUrl.trim();
    if (!trimmedUrl) return;
    navigate(`/results?url=${encodeURIComponent(trimmedUrl)}`);
  };

  return (

    <form
      onSubmit={handleSubmit}
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

      <label htmlFor="app-url" className="sr-only">Paste app store URL</label>
      <Search className="ml-3 text-blue-300"/>


      <input
        id="app-url"
        value={appUrl}
        onChange={(event) => setAppUrl(event.target.value)}
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


      <Button type="submit" className="py-3 px-6">
        Analyze
      </Button>
    </form>

  );
};