import { useEffect, useState } from "react";

function Posts(props: any) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch('http://localhost:4001/v1/api/posts/');
  
        if(res.ok) {
          const data: any = await res.json();
          setData(data);
          setError(null);
        } else {
          if (res.status === 400) throw new Error("Bad Request");
          if (res.status === 404) throw new Error("Not Found");
        }
      } catch(err: any) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(null);
      }
    }

    getPosts();
  }, []);



  return (
    <section>
      <h2>
        All your posts
      </h2>

      {loading && <div>A moment please...</div>}
      {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}

      <ul>
        {data &&
          data.map(({ id, title, content, isPublished }) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>
                {content}
              </p>
              <small>Published: {isPublished.toString()}</small>
            </li>
          ))}
      </ul>

    </section>
  )
}

export default Posts;
