import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'reactstrap';
import GaugeChart from 'react-gauge-chart';

const Aurora = React.memo(({ location }) => {
  const [info, setInfo] = useState();
  const getAuroraForecast = async (latitude, longitude) => {
    console.log(location.lat, 'lati');
    console.log(longitude, 'long');
    const data = await axios.get(
      `https://api.auroras.live/v1/?type=ace&lat=${latitude}&long=${longitude}&data=all`
    );
    const threedays = await axios.get(
      `https://api.auroras.live/v1/?type=ace&lat=${latitude}&long=${longitude}&data=threeday`
    );
    const probability = await axios.get(
      `https://api.auroras.live/v1/?type=ace&lat=${latitude}&long=${longitude}&data=probability`
    );
    console.log('data all', data);
    console.log('data threeday', threedays);
    console.log('data probability', probability);
    setInfo(data);
  };

  useEffect(() => {
    getAuroraForecast(location.lat, location.lng);
  }, [location]);

  return (
    <>
      <div className="aurora-forecast">
        <h1>Aurora Forecast</h1>
        <Row className="current-aurora">
          <Col>
            <h4>BZ</h4>
            <GaugeChart
              id="gauge-chart1"
              nrOfLevels={10}
              arcPadding={0.1}
              cornerRadius={3}
              arcsLength={[10, 20, 30]}
            />
          </Col>
          <Col>
            <h4>Density</h4>
            <GaugeChart
              id="gauge-chart1"
              nrOfLevels={10}
              arcPadding={0.1}
              cornerRadius={3}
              formatTes
            />
          </Col>
          <Col>
            <h4>Speed</h4>
            <GaugeChart
              id="gauge-chart1"
              nrOfLevels={10}
              arcPadding={0.1}
              cornerRadius={3}
              formatTes
            />
          </Col>
        </Row>

        <h4>Probability</h4>

        <Row>
          <Col>
            <h5>Local</h5>
          </Col>
          <Col>
            <h5>Highest</h5>
          </Col>
        </Row>

        <h4>Three Day Kp Forecast</h4>

        <Row>
          <Col>history</Col>
          <Col>hello</Col>
          <Col>nice</Col>
        </Row>
      </div>
    </>
  );
});

export default Aurora;
