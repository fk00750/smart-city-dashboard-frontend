import style from "../index.module.css";

const WeatherCard = ({ data }) => {
    const date = new Date(data.dt * 1000);
    const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="flex items-center justify-center h-full">
            <div
                className={`flex flex-col ${style.weather_card_gradient} rounded-lg p-4 w-full max-w-xs`}
            >
                <div className="font-bold text-xl text-white">{data.name}</div>
                <div className="text-sm text-gray-300">{formattedDate}</div>
                <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                    <svg
                        className="w-32 h-32"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        ></path>
                    </svg>
                </div>
                <div className="flex flex-row items-center justify-center mt-6">
                    <div className="font-medium text-6xl text-white">
                        {Math.round(data.main.temp)}°F
                    </div>
                    <div className="flex flex-col items-center ml-6">
                        <div className="text-white">{data.weather[0].main}</div>
                        <div className="mt-1">
                            <span className="text-sm text-white">
                                <i className="far fa-long-arrow-up"></i>
                            </span>
                            <span className="text-sm font-light text-gray-300">
                                {Math.round(data.main.temp_max)}°F
                            </span>
                        </div>
                        <div>
                            <span className="text-sm text-white">
                                <i className="far fa-long-arrow-down"></i>
                            </span>
                            <span className="text-sm font-light text-gray-300">
                                {Math.round(data.main.temp_min)}°F
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-6">
                    <div className="flex flex-col items-center">
                        <div className="font-medium text-sm text-white">Wind</div>
                        <div className="text-sm text-gray-300">{data.wind.speed} m/s</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-medium text-sm text-white">Humidity</div>
                        <div className="text-sm text-gray-300">{data.main.humidity}%</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-medium text-sm text-white">Visibility</div>
                        <div className="text-sm text-gray-300">
                            {data.visibility / 1000} km
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard