import GeneralHeader from "./Header";

const TimelineText = () => {
    return (
        <ol>
            <li>Project Proposal - 10/11</li>
            <li>Paper reviews - 10/27</li>
            <li>Train model PSPNET - 11/10</li>
            <li>Train model SINET - 11/10</li>
            <li>Test/Evaluation models - 11/24</li>
            <li>Complete final report - 12/5 to allow 5 days of extra time in case issues arise</li>
            <li>Final report due - 12/10</li>
        </ol>
    )
}


const Timeline = () => {
    return (
        <div className="App">
        <GeneralHeader />
            <div className="timelineList">
                <TimelineText />
            </div>
        </div>
    )
}

export default Timeline;