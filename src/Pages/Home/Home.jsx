import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import BGImg from "../../assets/wave.svg";

const Home = () => {
  // const secretKey =
  //   import.meta.env.VITE_REACT_APP_SECRET_KEY || "default_secret_key";
  // console.log(secretKey);
  return (
    <div className="flex relative flex-col justify-center items-center min-h-[calc(100vh-135px)]">
      <Helmet>
        <title>User Authentication | Home</title>
      </Helmet>
      <Banner />
      <img src={BGImg} className="w-full absolute bottom-0" alt="Background" />
    </div>
  );
};

export default Home;
