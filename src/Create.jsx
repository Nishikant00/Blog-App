import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const [isPending,setIsPending]=useState(false);
    const Navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author}
        setIsPending(true);
        fetch(`http://localhost:8000/blogs`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('Added a new blog')
            setIsPending(false);
            Navigate('/')
        })
    }
    return (
        <div className="create-blog">
            <h1>Create a new blog.</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e)=>{
                    setBody(e.target.value)
                }}/>
                <label>Blog Author:</label>
                <select value={author} onChange={(e)=>{
                    setAuthor(e.target.value)
                }}>
                <option value="mario">Mario</option>
                <option value="yoshi">Yoshi</option>
                </select>
                {isPending ? <button disabled>Adding Blog</button>:<button>Add Blog</button>}
            </form>
        </div>
    );
}
 
export default Create;