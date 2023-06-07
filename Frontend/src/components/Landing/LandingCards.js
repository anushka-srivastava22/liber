import { useEffect, useState } from "react";
import LandingCard from "./LandingCard";
import LandingCardDetails from "./LandingCardDetails.json"

export default function LandingCards()
{
    const [renderLandingCards, setRenderLandingCards] = useState();

    useEffect(() => {
      setRenderLandingCards(
        Object.keys(LandingCardDetails).map(e => {
            // return (JSON.stringify(Courses[e]))
            return <LandingCard id={e} LandingCardDetail={LandingCardDetails[e]} title={e}/>
        })
      )
    }, [])

    return (
        <>
            {renderLandingCards}
        </>
    )
}