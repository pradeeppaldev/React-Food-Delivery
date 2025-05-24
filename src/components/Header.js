export default function Header(){
    return(
        <header className="bg-[#FF5200] font-serif">
            <div className="flex justify-content-between container mx-auto py-8">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                <div className="text-white text-base font-bold flex gap-10 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with Us</a>
                    <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="">Get the App</a>
                    <a className="border border-black bg-black py-3 px-4 rounded-2xl" target="_blank" href="">Sign In</a>
                </div>
            </div>

            <div className="pt-16 pb- relative8">
                <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="text-5xl text-white font-bold max-w-[60%] text-center container mx-auto">
                    Order Food & Groceries. Discover best Restaurants. Swiggy it!
                </div>
                <div className=" max-w-[70%] container mx-auto flex gap-5 mt-5">
                    <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl" placeholder="Delhi, India"></input>
                    <input className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for Restaurants & Items"></input>
                </div>
            </div>

            <div className="max-w-[80%] container mx-auto">
                
            </div>
        </header>
    )
}