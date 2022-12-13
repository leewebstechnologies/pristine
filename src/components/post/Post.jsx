import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        deleniti officia minus nisi tenetur cupiditate qui explicabo labore
        repudiandae impedit sint beatae minima dicta eaque itaque corrupti, odit
        iure vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dignissimos deleniti officia minus nisi tenetur cupiditate qui explicabo
        labore repudiandae impedit sint beatae minima dicta eaque itaque
        corrupti, odit iure vitae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dignissimos deleniti officia minus nisi tenetur
        cupiditate qui explicabo labore repudiandae impedit sint beatae minima
        dicta eaque itaque corrupti, odit iure vitae.
      </p>
    </div>
  );
};

export default Post;
