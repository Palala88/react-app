import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export default function InvoiceTable() {
  const [invoices, setInvoices] = useState([]);

  const history = useHistory();

  function edit(id) {
      let path = `edit/${id}`;
      history.push(path);
  }

  function remove(id) {
    fetch(`http://localhost:3004/invoices/${id}`, {
      method: "DELETE",
    }).then(() =>
      fetch("http://localhost:3004/invoices")
        .then((response) => response.json())
        .then((result) => setInvoices(result))
    );
  }
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.date_created}</td>
              <td className="invoiceNumber">{`INV-${invoice.number}`}</td>
              <td>{invoice.date_supplied}</td>
              <td>{invoice.comment}</td>
              <td className="action-row">
                <button className="edit-btn" onClick={() => edit(invoice.id)}>
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button
                  className="remove-btn"
                  onClick={() => remove(invoice.id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
