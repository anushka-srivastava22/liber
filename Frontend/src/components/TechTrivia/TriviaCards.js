import { useEffect, useState } from "react";
import TriviaCard from "./TriviaCard";
import Trivia from "./Trivia.json"

export default function TriviaCards()
{
    const [renderTriviaCards, setRenderTriviaCards] = useState();

    useEffect(() => {
      setRenderTriviaCards(
        Object.keys(Trivia).map(e => {
            // return (JSON.stringify(Courses[e]))
            return <TriviaCard triviaDetail={Trivia[e]} title={e}/>
        })
      )
    }, [])

    return (
        <>
            {renderTriviaCards}
        </>
    )
}