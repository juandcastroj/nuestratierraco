import BlogBlock from "../components/BlogBlock";
import BlogGrid from "../components/BlogGrid";

export default function BlogRoute() { 
    return (
        <div className="bg-gradient-to-b from-[#9effca] to-[#60cee5]">
            <BlogGrid />
            <BlogBlock />
        </div>
    );
}