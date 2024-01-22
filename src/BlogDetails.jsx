import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id}=useParams();
    const {data:blog,isPending,error}=useFetch(`http://localhost:8000/blogs/${id}`)
    const Navigate=useNavigate();
    const handleDel=()=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
        method:'DELETE'
        }).then(()=>Navigate('/'))
    }
    return ( 
        <div className="blog-details">
        {isPending ? <h1>Loading...</h1>:null}
        {error ?<div>{error}</div>:null}
        {blog? 
        <article>
            <h1>{blog.title}</h1>
            <p>Written by {blog.author},</p>
            <div>{blog.body}</div>
            <button onClick={handleDel}>Delete Blog</button>
        </article>:null}

        </div>
     );
}
 
export default BlogDetails;