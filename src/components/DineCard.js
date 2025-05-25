export default function DineCard({RestData}){
    return(
        <div className="max-w-sm flex-none">
            <a target="_blank" href={RestData.cta.link}>
            <div className="relative">
                <img className="w-80 h-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + RestData?.info?.mediaFiles[0]?.url}></img>
                <div className="absolute bg-gradient-to-t from-black h-10 bottom-0 left-0 right-0"></div>
                <p className="absolute bottom-3 font-bold left-4 text-xl text-white">{RestData?.info?.name}</p>
                <p className="absolute bottom-3 font-bold right-4 text-xl text-white">{RestData?.info?.rating?.value}</p>
            </div>
            </a>
        </div>
    )
}