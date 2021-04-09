import React, { useEffect, useState } from "react";

export default function InvoiceTable() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/invoices")
      .then((response) => response.json())
      .then((result) => setInvoices(result));
  }, []);

  return (
    <div className="invoices">
      <h2>Invoices</h2>
      <table className="invoiceTable">
        <thead>
          <tr>
            <th>Create</th>
            <th>No</th>
            <th>Supply</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.date_created}</td>
              <td className="invoiceNumber">{`INV-${invoice.number}`}</td>
              <td>{invoice.date_supplied}</td>
              <td>{invoice.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
