export default function RestCard({restInfo}){
    return(
        <img className="w-54 h-38" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo.info.cloudinaryImageId}></img>
    )
}