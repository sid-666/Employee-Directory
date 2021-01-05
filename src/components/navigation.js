
import React from "react";
import "../styles/navigation.css";

function Navigation({ onSearch, searchTerm, handleSortByName, handleSortByDept }) { // The two props coming down from the Navigation Component
    return (
        <div className="nav">
            <div className="category">
                <button onClick={handleSortByName} className="name">Name</button>
                <button onClick={handleSortByDept} className="department">Dept</button>
            </div>
            <form>
                <input
                    value={searchTerm} // value attribute here keeps what you type in sync
                    onChange={onSearch} // the onChange is the event listening attribute that uses the onSearch prop method let state know there was a change
                    className="shadow pl-5 rounded w-full py-1"
                    type="text"
                    placeholder="search employee" />
            </form>
        </div>
    )
}

export default Navigation;