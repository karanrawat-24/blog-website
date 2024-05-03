import BlogCard from "../components/BlogCard"

const Blogs = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-ful">
      <div className=" w-3/6">
        <BlogCard authorName={"karan"} publishedDate={"1/02/2024"} content={"this is the tempoaray blog"} title={"My first Blog "} />
        <BlogCard authorName={"karan"} publishedDate={"1/02/2024"} content={"this is the tempoaray blog"} title={"My first Blog "} />
        <BlogCard authorName={"karan"} publishedDate={"1/02/2024"} content={"this is the tempoaray blog"} title={"My first Blog "} />
        <BlogCard authorName={"karan"} publishedDate={"1/02/2024"} content={"this is the tempoaray blog"} title={"My first Blog "} />
        <BlogCard authorName={"karan"} publishedDate={"1/02/2024"} content={"this is the tempoaray blog"} title={"My first Blog "} />
        <BlogCard authorName={"karan"} publishedDate={"1/02/2024"} content={"this is the tempoaray blog"} title={"My first Blog "} />
        <BlogCard authorName={"karan"} publishedDate={"1/02/2024"} content={"this is the tempoaray blog"} title={"My first Blog "} />
      </div>

    </div>
  )
}

export default Blogs