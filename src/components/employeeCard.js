import React from "react";

 function EmployeeCard({ name, image, dept, email, phone}) { // object destructured for readability
    return (
        <div className="card">
            <img
                style={{ maxWidth: "60px"}}
                className="rounded-full shadow-md border border-gray-300"
                src={image}
                alt="employee"
            />
            <p className="font-bold text-md">{name}</p>
            <p>{dept}</p>
            <p className="text-blue-500">{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default EmployeeCard;