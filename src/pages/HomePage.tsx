import Navbar from "@/scenes/navbar";
import Slides from "@/scenes/slides";
import Footer from "@/scenes/footer";


type Props = {};

const HomePage = () => {
  return (
    <div>
      <Navbar searchButtonNeeded={true} backToHome={false}></Navbar>
      <Slides />
      <Footer />
    </div>
  );
};

export default HomePage;
