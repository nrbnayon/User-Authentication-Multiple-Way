import Banner from "../../Components/Banner/Banner";
import BGImg from "../../assets/wave.svg";

const Home = () => {
  return (
    <div className="flex relative flex-col justify-center items-center min-h-[calc(100vh-135px)]">
      <Banner />
      <img src={BGImg} className="w-full absolute bottom-0" />
    </div>
  );
};

export default Home;
