import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import EditInventory from "./components/farm-inventory/edit.component";
import InventoryList from "./components/farm-inventory/list.component";
import CreateInventory from "./components/farm-inventory/create.component";

export default function App () {
    return (<Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
           Farm Inventory app
        </Link>
      </Container>
    </Navbar>
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/farm-inventory/create" element={<CreateInventory />} />
            <Route path="/farm-inventory/edit/:id" element={<EditInventory />} />
            <Route exact path='/' element={<InventoryList />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>); 
}