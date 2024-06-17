import axios from "axios";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const getBlog = async () => {
    const data = await axios.get(
      `https://public-api.wordpress.com/wp/v2/sites/info871d8137d4a.wordpress.com/posts/`
    );
    console.log(data.data);
    setBlogs(data.data);
  };

  useEffect(() => {
    getBlog();
  }, []);
  return (
    <>
      <article className="pageBody">
        <h2>Blog</h2>
        {/* <div className="homeText"> */}
        {blogs.map((e, i) => (
          <section key={i} className="blogItem">
            <a href={e.link} target="_blank">
              <h3>{parse(e.title.rendered)}</h3>
            </a>
            <time className="time">{new Date(e.date).toDateString()}</time>
            <div>
              <img
                src={e.jetpack_featured_media_url}
                alt={`Blog post image for ${parse(e.title.rendered)}`}
              />
              <div className="blogText">{parse(e.content.rendered)}</div>
            </div>
          </section>
        ))}
        {/* </div> */}
      </article>
    </>
  );
};

export default Blog;
