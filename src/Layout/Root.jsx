import { Outlet } from "react-router-dom";
// import NavBar from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";
import Nav from "../Pages/Shared/Nav";
const Root = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="h-16">
          <Nav />
        </div>
        <div className="min-h-[calc(100vh-135px)]">
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
