import React, { useState } from "react";

const RadioBox = ({ prices, handleFilters }) => {
    const [value, setValue] = useState(0);

    const handleChange = event => {
        handleFilters(event.target.value);
        setValue(event.target.value);
    };

    return prices.map((p, i) => (
        <div key={i} className="mt-2 ml-2" style={{color:"#4D4D4D",fontWeight:"bold"}}>
            <input
                onChange={handleChange}
                value={`${p._id}`}
                name={p}
                type="radio"
                className="mr-2 ml-4"
            />
            <label className="ml-2 form-check-label">{p.name}</label>
        </div>
    ));
};

export default RadioBox;