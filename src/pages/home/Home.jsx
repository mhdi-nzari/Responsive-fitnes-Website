import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import "./home.css";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <Programs></Programs>
      <Values />
      <FAQs />
      <Testimonials/>
  
    </>
  );
};

export default Home;
