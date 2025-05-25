export default function GroceryCard({foodData}){
    return (
  <div className="flex-none items-center">
    <a href={foodData?.action.link}>
      <img
      
        className="w-40 h-50 object-cover mb-2"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}
        alt={foodData?.action?.text}
      />
    </a>
    <h2 className="text-center">{foodData?.action?.text}</h2>
  </div>
);

}