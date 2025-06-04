import BlogBlock from "../components/blog/BlogBlock";
import BlogGrid from "../components/blog/BlogGrid";

export default function BlogRoute() { 
    return (
        <div className="bg-gradient-to-b from-[#9effca] to-[#60cee5]">
            <BlogGrid />
            <BlogBlock />
        </div>
    );
}