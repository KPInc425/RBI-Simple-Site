import Footer from "./shared/Footer";
import Header from "./shared/Header"

const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};

export default MainLayout;
