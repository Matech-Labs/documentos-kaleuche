import { getData } from "../googleDrive";
import Home from "../../components/Home/Home";
import jsonData from "../fileParse/page";

const page = async () => {
  const response = await jsonData();

  return <Home data={response} />;
};

export const getStaticProps = async () => {
  const data = await getData();
  return {
    props: {
      data,
    },
  };
};

export default page;
