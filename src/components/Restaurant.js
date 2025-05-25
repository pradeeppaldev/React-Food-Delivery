import { useEffect, useState } from "react";
import RestCard from "./RestCard";

export default function Restaurant() {
    const [RestData, setRestData] = useState([]);
    useEffect(() => {

        async function fetchData() {

        const proxyServer = "https://thingproxy.freeboard.io/fetch/";
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.0748&lng=72.8856&carousel=true&third_party_vendor=1"

        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();
        setRestData(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchData();
    },[]);

    // console.log(RestData);

    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                RestData.map((restInfo) => <RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
            }
        </div>
    );

}
 