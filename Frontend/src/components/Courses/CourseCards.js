import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Courses from "./Courses.json"

export default function CourseCards()
{
    const [renderCourseCards, setRenderCourseCards] = useState();

    useEffect(() => {
      setRenderCourseCards(
        Object.keys(Courses).map(e => {
            // return (JSON.stringify(Courses[e]))
            return <CourseCard courseDetail={Courses[e]} title={e}/>
        })
      )
    }, [])

    return (
        <>
            {renderCourseCards}
        </>
    )
}