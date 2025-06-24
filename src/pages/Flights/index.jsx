import FlightSearch from "./flightsearch";
import Reviews from "./reviews";
import PopularDestinations from "./populardestinations";
import End from "./end";
export default function Flights(){
    return(
       <div>
        <FlightSearch/>
        <Reviews/>
        <PopularDestinations/>
        <End/>
       </div>
    )
}