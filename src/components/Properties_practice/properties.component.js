// import React from 'react'
import { useState } from "react";
import GridComponent from "./grid.component";

const PropertiesComponent = () => {
    const [products] = useState([{Name:"TV", Price:45000.33, Stock:"Available", Qty:3}, {Name:"Shoe", Price: 5000.33, Stock:"Out of Stock", Qty:4}]);
  return (
    <div className="container-fluid">
            <GridComponent theme="yellow" title="Employee Grid" fields={["Name", "Designation", "Salary"]} data={[{Name:"John", Designation:"Manager", Salary:45000.44},{Name:"David", Designation:"Developer", Salary:23000.44}]} />
            <GridComponent theme="green" title="Products Grid" fields={["Name","Price","Stock", "Qty"]} data={products} />
    </div>
  )
}

export default PropertiesComponent