import Home from "../components/Home/Home";
import createJSONData from "./fileParse/createJSONData";

const HomePage = async () => {
  const jsonData = await createJSONData();

  return <Home data={jsonData} />;
};

export default HomePage;
