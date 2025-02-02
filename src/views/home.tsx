import { useState } from "react";

function Home() {
  const [selectedPage, setSelectedPage] = useState("home");

  const renderContent = () => {
    if (selectedPage === "home") {
      return (
        <p style={{ backgroundColor: "blue", height: "100vh" }}>
          Welcome to the Home page!
        </p>
      );
    } else if (selectedPage === "planning") {
      return <p>Here is the Planning page.</p>;
    } else {
      return <p>Select a page from the appbar.</p>;
    }
  };

  return (
    <>
      <div style={{ height: "100vh" }}>
        <div
          style={{
            height: "50px",
            textAlign: "center",
            lineHeight: "50px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#333",
            color: "white",
          }}
        >
          <div className="row">
            <p
              className="col"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedPage("home")}
            >
              Home
            </p>
            <p
              className="col"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedPage("planning")}
            >
              Planning
            </p>
          </div>
        </div>
        <div style={{ padding: "20px" }}>{renderContent()} </div>
      </div>
    </>
  );
}

export default Home;
