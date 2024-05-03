import { Link } from "react-router-dom";

type BlogCardProps = {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

const BlogCard = ({ authorName, title, content, publishedDate }: BlogCardProps) => {
    return (
        <div className="mt-4">
            <div className="flex items-center">
                <div className="w-4 h-4 bg-slate-400 rounded-full flex items-center justify-center p-3">
                    {authorName[0].toUpperCase()}
                </div>
                <div className="ml-2 text-black text-lg">
                    {authorName}
                </div>
                <div className="ml-4 text-slate-500">
                    {publishedDate}
                </div>
            </div>
            <Link to={'/blog/1'}>
                <div>
                    <div className=" font-bold text-2xl">
                        {title}
                    </div>
                    <div className="mt-2 text-md text-slate-800">
                        {content.slice(0, 100) + "..."}
                    </div>
                    <div className=" mt-3 text-md text-slate-600">
                        {`${Math.ceil(content.length / 100)} min read`}
                    </div>
                    <div className=" h-0.5 w-full bg-slate-300"></div>
                </div>
            </Link>

        </div>
    )
}

export default BlogCard