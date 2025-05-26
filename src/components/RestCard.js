import { Link } from "react-router";

export default function RestCard({restInfo}){
    return(
        <Link to={"/city/delhi/" + restInfo?.info.id}>
        <div className="max-w-[280px] mb-5 transform transition duration-200 hover:scale-95">
            <img className="w-full max-w-sm h-40 object-cover rounded-xl mx-auto" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo.info.cloudinaryImageId}></img>
            <div className="w-[95%] mx-auto mt-3">
                <div className="font-bold text-lg">{restInfo?.info?.name}</div>
                <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                    <span className="text-lg">{restInfo?.info?.avgRating}</span>
                    <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
                </div>
                <div className="text-gray-500 text-base">{restInfo?.info?.cuisines.join(" ")}</div>
            </div>
        </div>
        </Link>
    )
}