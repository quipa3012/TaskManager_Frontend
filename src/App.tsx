import { useEffect, useState } from "react";
import axiosClient from "./api/axiosClient";

function App() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    axiosClient
      .get("/api/docs")
      .then(() => setMessage("Backend connected successfully! 🚀"))
      .catch(() => setMessage("Failed to connect backend ❌"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Task Manager Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
