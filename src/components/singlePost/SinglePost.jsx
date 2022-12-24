import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Ali</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          placeat iusto delectus quae, saepe explicabo ea nisi, animi deleniti
          quisquam iure velit accusamus. Culpa ab voluptatem debitis deleniti
          nostrum blanditiis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          placeat iusto delectus quae, saepe explicabo ea nisi, animi deleniti
          quisquam iure velit accusamus. Culpa ab voluptatem debitis deleniti
          nostrum blanditiis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          placeat iusto delectus quae, saepe explicabo ea nisi, animi deleniti
          quisquam iure velit accusamus. Culpa ab voluptatem debitis deleniti
          nostrum blanditiis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          placeat iusto delectus quae, saepe explicabo ea nisi, animi deleniti
          quisquam iure velit accusamus. Culpa ab voluptatem debitis deleniti
          nostrum blanditiis!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
