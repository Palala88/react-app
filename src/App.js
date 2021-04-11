import React from "react";
import InvoiceList from "./components/main/InvoiceList";
import CreateInvoice from "./components/create/CreateInvoice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditInvoice from "./components/edit/EditInvoice";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edit/:id">
          <EditInvoice />
        </Route>
        <Route path="/create">
          <CreateInvoice />
        </Route>
        <Route path="/">
          <InvoiceList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
