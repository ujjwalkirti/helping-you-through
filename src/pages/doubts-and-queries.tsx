import QueryForm from "@/components/DoubtsandQueries/QueryForm";
import Head from "next/head";
import React from "react";

function DoubtsAndQueries() {
  return (
    <section>
      <Head>
        <title>Queries and Doubts - Get All your questions answered!</title>
      </Head>
      <div>
        <p
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "30px",
            color: "green",
          }}
        >
          Queries and Doubts
        </p>
      </div>
      <div>
        {/* Image */}
        <QueryForm />
      </div>
    </section>
  );
}

export default DoubtsAndQueries;
