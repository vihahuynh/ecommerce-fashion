import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Announcement />
      {props.children}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
