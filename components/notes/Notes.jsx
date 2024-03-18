import notesData from "@/data/notesData";
const Notes = () =>{
    return(
        <div className="alert alert-primary mb-0">
            <i className="icon-newsletter me-3 text-20 fw-600"></i>
            <span className="text-20 fw-600">
                Notes
            </span>
               <p>
                   Our standard itinerary might differ slightly due to unpredictable happenings and events out of our control. Factors such as flight cancellation/delay, unfavorable weather, natural calamities, newly implemented government rules, political affairs, trekkers’ health condition, etc., are possible. Evaluating the situation’s possible solutions allow the trekking to resume as much as possible based on the best alternatives. In these times, we look for your cooperation and flexibility.
                </p>

            <a href="#">Show Less</a>
        </div>
    )
}
export default Notes;