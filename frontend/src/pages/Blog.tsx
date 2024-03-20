import { useParams } from "react-router-dom"

const Blog = () => {
  const { id } = useParams();
  return (
    <div>
      Blog no {id}
    </div>
  )
}

export default Blog