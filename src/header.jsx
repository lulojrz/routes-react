import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid"> 
          <Link to={"/"}><h3 className="link">Shop</h3></Link>
         
        
   
        </div>
      </nav>

      
    </>
  );
};

export default Header;
