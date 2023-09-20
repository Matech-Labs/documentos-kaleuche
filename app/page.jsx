import Home from "../components/Home/Home";
import jsonData from "./fileParse/page";

const HomePage = async () => {
  const response = await jsonData();

  return <Home data={response} />;
};

export default HomePage;
