import BlogBlock from "../components/blog/BlogBlock";
import BlogGrid from "../components/blog/BlogGrid";
import BannerText from "../components/home/BannerText";

export default function BlogRoute() { 
    return (
        <div className="bg-gradient-to-b from-[#9effca] to-[#60cee5]">
            <BlogGrid />
            <BannerText />
            <BlogBlock />
        </div>
    );
}