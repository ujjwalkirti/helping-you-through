import QueryForm from "@/components/DoubtsandQueries/QueryForm";
import React from "react";

function DoubtsAndQueries() {
  return (
    <section>
      <div>
        <p style={{"textAlign":"center" , "fontWeight":"bolder" , "fontSize":"30px" ,"color":"green"}}>Queries and Doubts</p>
      </div>
      <div>
        {/* Image */}
        <QueryForm />
      </div>
    </section>
  );
}

export default DoubtsAndQueries;
