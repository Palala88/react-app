import React from "react";
import InvoiceTable from "./InvoiceTable";
import { useHistory } from "react-router";

export default function InvoiceList() {
  const history = useHistory();

  const routeChange = () => {
    let path = `create`;
    history.push(path);
  };

  return (
    <div>
      <div className="article">
        <h1>Invoices</h1>
      </div>
      <div className="invoices">
        <h2>Actions</h2>
        <button onClick={routeChange}>Add new</button>
      </div>
      <InvoiceTable />
    </div>
  );
}
