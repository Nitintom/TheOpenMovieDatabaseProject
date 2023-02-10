import "./App.css";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";

function App() {
  const [search, setSearch] = useState({});
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1767bdc4").then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      }
    );
  }, []);

  return (
    <>
      <div className="App">
        <Navbar search={search} setSearch={setSearch} setData={setData} />
        <Container>
          <MainContent data={data} />
        </Container>
      </div>
    </>
  );
}

export default App;
