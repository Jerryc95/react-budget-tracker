import React, { useState} from "react";

const EditBudget = (props) => {
    const [budgetValue, setBudgetValue] = useState(props.budget);

    return (
        <>
        <div>
            <input
                required='required'
                type="text"
                className="form control mr-3"
                value={budgetValue}
                onChange={(event)=> setBudgetValue(event.target.value)}
            />
            <button type="button" className="btn btn-primary" onClick={()=>props.handleBudgetClick(budgetValue)}>Update</button>
        </div>
        </>
    )
}

export default EditBudget;