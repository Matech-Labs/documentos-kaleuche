import { getData } from "../googleDrive"
import Home from '../../components/Home/Home'
import FileList from "/components/FileList";

const page = async () => {
  const data = await getData()
  console.log(data)
  // console.log('cuantos archivos hay?', data.length)
  
  return (
    <Home data={data}/>
  )
}

export const getStaticProps = async () => {
  const data = await getData();
  return {
    props: {
      data,
    },
  };
};

export default page