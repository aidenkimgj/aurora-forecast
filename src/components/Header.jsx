import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';

const Header = () => {
  const { page } = useSelector(state => state);

  return (
    <div id="page-header" className="mb-3">
      <Row>
        <Col md="6" sm="auto" className="text-center m-auto">
          <h1>{page}</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
