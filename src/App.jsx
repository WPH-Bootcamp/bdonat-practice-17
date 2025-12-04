import { useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Card
        title="React Fundamentals"
        description="Belajar dasar-dasar React dari nol"
        count={likes}
      />
      <button
        onClick={handleLike}
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Tambah Like
      </button>
    </div>
  );
}
