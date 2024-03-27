import AllBook from "../components/AllBook";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="mx-auto mt-1 lg:mt-5 container px-5 lg:px-10">
      <Banner></Banner>
      <AllBook></AllBook>
    </div>
  );
};

export default Home;
