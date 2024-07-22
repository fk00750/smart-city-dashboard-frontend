import { IoArrowForwardCircleOutline } from "react-icons/io5";
import style from "../index.module.css";

const NewsHeadlineCard = ({ article }) => (
    <div
        className={`${style.news_card_gradient} shadow-md rounded-lg p-4 flex flex-col justify-between`}
    >
        <div>
            <h2 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h2>
            <p className="text-gray-200 mb-2">
                {article.author ? `By ${article.author}` : "Author unknown"}
            </p>
        </div>
        <div className="mt-4">
            <p className="text-gray-500 text-sm">
                {new Date(article.publishedAt).toLocaleString()}
            </p>
            <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline mt-2 inline-block"
            >
                Read more
            </a>
        </div>
    </div>
);

const NewsHeadlineCardGrid = ({ articles }) => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((article, index) => (
                    <NewsHeadlineCard key={index} article={article} />
                ))}
                <div
                    className={`${style.news_card_gradient} relative flex justify-center items-center shadow-md p-4 rounded-lg`}
                >
                    <div className="flex flex-col items-center justify-between w-full">
                        <h1 className="text-lg font-semibold text-white">READ MORE</h1>
                        <div className="text-green-500 hover:text-green-600 transition-colors">
                            <IoArrowForwardCircleOutline className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsHeadlineCardGrid