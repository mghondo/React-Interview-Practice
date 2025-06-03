import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup, Dropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DutSimulation = () => {
  const initialFormData = {
    company: '',
    drivers: '',
    packageId: '',
    mNumber: '',
    productSku: '',
    productName: '',
    type: '',
    subType: '',
    strain: '',
    daysSupply: '',
    weight: '',
    flowerEquivalent: '',
    thc: '',
    thcUnit: '%',
    cbd: '',
    cbdUnit: '%',
    expirationDate: '',
    cost: '',
    price: '', // New field for Price
    itemDetails: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [activeTab, setActiveTab] = useState('main'); // State to manage active tab

  const handleInputChange = (field, value) => {
    setFormData(prev => {
      const newFormData = {
        ...prev,
        [field]: value
      };
      // Calculate Price as twice the Cost whenever Cost changes
      if (field === 'cost') {
        const costValue = parseFloat(value) || 0;
        newFormData.price = costValue > 0 ? (costValue * 2).toFixed(2) : '';
      }
      return newFormData;
    });
  };

  const handleTypeChange = (value) => {
    setFormData(prev => {
      const newUnits = value === 'Flower' ? { thcUnit: '%', cbdUnit: '%' } : { thcUnit: 'mg', cbdUnit: 'mg' };
      return {
        ...prev,
        type: value,
        subType: '', // Reset subType when Type changes
        ...newUnits
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You can add API submission logic here
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const generateRandomSku = () => {
    const randomSku = Math.floor(100000000 + Math.random() * 900000000).toString();
    setFormData(prev => ({
      ...prev,
      productSku: randomSku
    }));
  };

  const typeOptions = ['Flower', 'Tincture', 'Topical', 'Edible', 'Vape', 'Unspecified'];

  const subTypeOptions = {
    Flower: ['Ground', 'Mids', 'Full Flower'],
    Edible: ['Gummies', 'Drinks', 'Chocolate', 'Syrup']
  };

  return (
    <div className="container mt-4">
      <h2>Contact Form</h2>
      <Form onSubmit={handleSubmit}>
        <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)} className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="main">Main</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="productOuter">Product Outer</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="productInner">Product Inner</Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="border rounded p-3 mb-3">
          {activeTab === 'main' && (
            <>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Company:</Form.Label>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Enter Company"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Drivers:</Form.Label>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    id="drivers"
                    name="drivers"
                    value={formData.drivers}
                    onChange={(e) => handleInputChange('drivers', e.target.value)}
                    placeholder="Enter Drivers"
                  />
                </Col>
              </Form.Group>
            </>
          )}

          {activeTab === 'productOuter' && (
            <>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Package ID:</Form.Label>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    id="packageId"
                    name="packageId"
                    value={formData.packageId}
                    onChange={(e) => handleInputChange('packageId', e.target.value)}
                    placeholder="Enter Package ID"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>M Number:</Form.Label>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    id="mNumber"
                    name="mNumber"
                    value={formData.mNumber}
                    onChange={(e) => handleInputChange('mNumber', e.target.value)}
                    placeholder="Enter M Number"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Expiration Date:</Form.Label>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    id="expirationDate"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={(e) => handleInputChange('expirationDate', e.target.value)}
                    placeholder="MM/DD/YYYY"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Flower Equivalent:</Form.Label>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    id="flowerEquivalent"
                    name="flowerEquivalent"
                    value={formData.flowerEquivalent}
                    onChange={(e) => handleInputChange('flowerEquivalent', e.target.value)}
                    placeholder="Enter Flower Equivalent"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Cost:</Form.Label>
                <Col xs={10}>
                  <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                      type="number"
                      step="0.01"
                      min="0"
                      id="cost"
                      name="cost"
                      value={formData.cost}
                      onChange={(e) => handleInputChange('cost', e.target.value)}
                      placeholder="Enter Cost (e.g., 10.99)"
                    />
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Price:</Form.Label>
                <Col xs={10}>
                  <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                      type="number"
                      step="0.01"
                      min="0"
                      id="price"
                      name="price"
                      value={formData.price}
                      readOnly
                      placeholder="Price (2x Cost)"
                    />
                  </InputGroup>
                </Col>
              </Form.Group>
            </>
          )}

          {activeTab === 'productInner' && (
            <>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Product Name:</Form.Label>
                <Col xs={10}>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    id="productName"
                    name="productName"
                    value={formData.productName}
                    onChange={(e) => handleInputChange('productName', e.target.value)}
                    placeholder="Enter Product Name"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Product SKU:</Form.Label>
                <Col xs={2}>
                  <Button variant="outline-primary" onClick={generateRandomSku}>
                    Generate
                  </Button>
                </Col>
                <Col xs={8}>
                  <Form.Control
                    type="text"
                    id="productSku"
                    name="productSku"
                    value={formData.productSku}
                    onChange={(e) => handleInputChange('productSku', e.target.value)}
                    placeholder="Enter Product SKU or Generate"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Type:</Form.Label>
                <Col xs={10}>
                  <Form.Select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={(e) => handleTypeChange(e.target.value)}
                  >
                    <option value="">Select Type</option>
                    {typeOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>

              {(formData.type === 'Flower' || formData.type === 'Edible') && (
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column xs={2}>Sub-Type:</Form.Label>
                  <Col xs={10}>
                    <Form.Select
                      id="subType"
                      name="subType"
                      value={formData.subType}
                      onChange={(e) => handleInputChange('subType', e.target.value)}
                    >
                      <option value="">Select Sub-Type</option>
                      {subTypeOptions[formData.type].map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </Form.Select>
                  </Col>
                </Form.Group>
              )}

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Strain:</Form.Label>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    id="strain"
                    name="strain"
                    value={formData.strain}
                    onChange={(e) => handleInputChange('strain', e.target.value)}
                    placeholder="Enter Strain"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Days Supply:</Form.Label>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    id="daysSupply"
                    name="daysSupply"
                    value={formData.daysSupply}
                    onChange={(e) => handleInputChange('daysSupply', e.target.value)}
                    placeholder="Enter Days Supply"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Weight:</Form.Label>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    placeholder="Enter Weight"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>THC:</Form.Label>
                <Col xs={10}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      id="thc"
                      name="thc"
                      value={formData.thc}
                      onChange={(e) => handleInputChange('thc', e.target.value)}
                      placeholder="Enter THC"
                    />
                    <Dropdown>
                      <Dropdown.Toggle id="thc-unit" variant="outline-secondary">
                        {formData.thcUnit}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleInputChange('thcUnit', '%')}>
                          %
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleInputChange('thcUnit', 'mg')}>
                          mg
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>CBD:</Form.Label>
                <Col xs={10}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      id="cbd"
                      name="cbd"
                      value={formData.cbd}
                      onChange={(e) => handleInputChange('cbd', e.target.value)}
                      placeholder="Enter CBD"
                    />
                    <Dropdown>
                      <Dropdown.Toggle id="cbd-unit" variant="outline-secondary">
                        {formData.cbdUnit}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleInputChange('cbdUnit', '%')}>
                          %
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleInputChange('cbdUnit', 'mg')}>
                          mg
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Form.Group>

              {/* <Form.Group as={Row} className="mb-3">
                <Form.Label column xs={2}>Item Details:</Form.Label>
                <Col xs={10}>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    id="itemDetails"
                    name="itemDetails"
                    value={formData.itemDetails}
                    onChange={(e) => handleInputChange('itemDetails', e.target.value)}
                    placeholder="Enter Item Details"
                  />
                </Col>
              </Form.Group> */}
            </>
          )}
        </div>

        <div className="d-flex justify-content-center gap-2">
          <Button type="submit" variant="primary">
            Submit
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default DutSimulation;