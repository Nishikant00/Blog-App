import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
    <>
    <div className="not-found">
    <h1>Error : 404</h1>
    <p>Sorry! The Page Was Not Found</p>
    <Link to='/'>Go Back To Home</Link> 
    </div>
    </>
    );
}
 
export default NotFound;