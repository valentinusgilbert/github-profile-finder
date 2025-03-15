import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./searchInput.scss";

export default function SearchInput() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (username.trim() === "") {
      setError("Fill username github you want to see");
    } else {
      setError("");
      router.push(`/profile/${username}`);
    }
  };

  return (
    <div className="search">
      <div className="search__field">
        <input
          type="text"
          placeholder="@username_github"
          className="search__input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="search__button" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      {error && <span className="search__error">{error}</span>}
    </div>
  );
}
