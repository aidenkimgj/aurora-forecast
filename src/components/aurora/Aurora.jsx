import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'reactstrap';
import ReactSpeedometer from 'react-d3-speedometer';

const Aurora = React.memo(({ location }) => {
  const [info, setInfo] = useState('');
  const [probability, setProbability] = useState('');
  const [firstday, setFirstday] = useState();
  const [secondDay, setSecondDay] = useState();
  const [thirdDay, setThirdDay] = useState();
  const [middleLatitude, setMiddleLatitude] = useState();
  const [highLatitude, setHighLatitude] = useState();

  const getAuroraForecast = async (latitude, longitude) => {
    console.log(location.lat, 'lati');
    console.log(longitude, 'long');
    const { data } = await axios.get(
      `https://api.auroras.live/v1/?type=ace&lat=${latitude}&long=${longitude}&data=all`
    );
    const {
      data: { values },
    } = await axios.get(
      `https://api.auroras.live/v1/?type=ace&lat=${latitude}&long=${longitude}&data=threeday`
    );
    const {
      data: { calculated },
    } = await axios.get(
      `https://api.auroras.live/v1/?type=ace&lat=${latitude}&long=${longitude}&data=probability`
    );
    console.log('data all', data);
    console.log('data threeday', values);
    console.log('data probability', calculated);
    setInfo(data);
    setProbability(calculated);
    getThreeday(values);
    getHighestNowcast();
  };

  const getThreeday = threeday => {
    let arr0;
    let arr1;
    let arr2;

    threeday.forEach((element, index) => {
      switch (index) {
        case 0:
          arr0 = element;
          break;
        case 1:
          arr1 = element;
          break;
        case 2:
          arr2 = element;
          break;
        default:
          throw new Error('Something is Wrong!');
      }
    });

    //  for (let i = 0; i < threeday.length; i++) {
    //   switch (i) {
    //     case 0:
    //       arr0 = threeday[i];
    //       break;
    //     case 1:
    //       arr1 = threeday[i];
    //       break;
    //     case 2:
    //       arr2 = threeday[i];
    //       break;
    //     default:
    //       new Error('Something Wrong');
    //   }
    // }

    setFirstday(arr0);
    setSecondDay(arr1);
    setThirdDay(arr2);
    console.log('arr0', arr0);
    console.log('arr1', arr1);
    console.log('arr2', arr2);
  };

  const getHighestNowcast = async () => {
    const data = await axios.get(
      `https://services.swpc.noaa.gov/text/sgarf.txt`
    );
    const chunkDataIdx = data.data.indexOf('A.  Middle Latitudes');
    const chunkData = data.data.slice(chunkDataIdx);
    const activeM = chunkData.slice(43, 45);
    const minorM = chunkData.slice(74, 76);
    const severeM = chunkData.slice(105, 107);
    const activeH = chunkData.slice(155, 157);
    const minorH = chunkData.slice(186, 188);
    const severeH = chunkData.slice(217, 219);

    const middleLat = [activeM, minorM, severeM];
    const highLat = [activeH, minorH, severeH];

    setMiddleLatitude(middleLat);
    setHighLatitude(highLat);
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
            <div className="gauge-chart">
              <ReactSpeedometer
                needleHeightRatio={0.8}
                needleColor="#9ba3a0"
                maxValue={20}
                customSegmentStops={[-20, -15, -10, 0, 20]}
                segmentColors={['#FF471A', '#F6961E', '#ECDB23', '#6AD72D']}
                minValue={-20}
                value={parseInt(info.bz)}
                width={250}
                height={200}
              />
            </div>
          </Col>
          <Col>
            <h4>Density</h4>
            <div className="gauge-chart">
              <ReactSpeedometer
                needleHeightRatio={0.8}
                needleColor="#9ba3a0"
                maxValue={20}
                minValue={0}
                customSegmentStops={[0, 4, 10, 15, 20]}
                segmentColors={['#6AD72D', '#ECDB23', '#F6961E', '#FF471A']}
                value={parseFloat(info.density)}
                width={250}
                height={200}
              />
            </div>
          </Col>
          <Col>
            <h4>Speed</h4>
            <div className="gauge-chart">
              <ReactSpeedometer
                needleHeightRatio={0.8}
                needleColor="#9ba3a0"
                minValue={200}
                customSegmentStops={[200, 350, 500, 700, 1000]}
                segmentColors={['#6AD72D', '#ECDB23', '#F6961E', '#FF471A']}
                value={parseInt(info.speed)}
                width={250}
                height={200}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Current Kp</h4>
            <div className="gauge-chart">
              <ReactSpeedometer
                needleHeightRatio={0.8}
                needleColor="#9ba3a0"
                maxValue={10}
                segments={5}
                // startColor="limegreen"
                // endColor="red"
                segmentColors={[
                  '#6AD72D',
                  '#AEE228',
                  '#ECDB23',
                  '#F6961E',
                  '#FF471A',
                ]}
                value={parseInt(info.kp)}
                width={250}
                height={200}
              />
            </div>
          </Col>
          <Col>
            <h4>Kp 1 hour</h4>
            <div className="gauge-chart">
              <ReactSpeedometer
                needleHeightRatio={0.8}
                needleColor="#9ba3a0"
                maxValue={10}
                segments={5}
                // startColor="limegreen"
                // endColor="red"
                segmentColors={[
                  '#6AD72D',
                  '#AEE228',
                  '#ECDB23',
                  '#F6961E',
                  '#FF471A',
                ]}
                value={parseInt(info.kp1hour)}
                width={250}
                height={200}
              />
            </div>
          </Col>
          <Col>
            <h4>Kp 4 hours</h4>
            <div className="gauge-chart">
              <ReactSpeedometer
                needleHeightRatio={0.8}
                needleColor="#9ba3a0"
                maxValue={10}
                segments={5}
                // startColor="limegreen"
                // endColor="red"
                segmentColors={[
                  '#6AD72D',
                  '#AEE228',
                  '#ECDB23',
                  '#F6961E',
                  '#FF471A',
                ]}
                value={parseInt(info.kp4hour)}
                width={250}
                height={200}
              />
            </div>
          </Col>
        </Row>

        <h4>Probability</h4>

        <Row>
          <Col>
            <h5>Local</h5>
            <label style={{ color: probability.colour }}>
              {probability.value}%
            </label>
          </Col>
          <Col>
            <h5>High latitude</h5>
            <h6>Active &nbsp; &nbsp;&nbsp;{highLatitude[0]}%</h6>
            <h6>Minor &nbsp;&nbsp;&nbsp;&nbsp;{highLatitude[1]}%</h6>
            <h6>Severe &nbsp;&nbsp;&nbsp;{highLatitude[2]}%</h6>
          </Col>
          <Col>
            <h5>Middle latitude</h5>
            <h6>Active &nbsp; &nbsp;&nbsp;{middleLatitude[0]}%</h6>
            <h6>Minor &nbsp;&nbsp;&nbsp;&nbsp;{middleLatitude[1]}%</h6>
            <h6>Severe &nbsp;&nbsp;&nbsp;{middleLatitude[2]}%</h6>
          </Col>
        </Row>

        <h4>Three Day Kp Forecast</h4>

        <Row>
          <Col></Col>
          <Col>hello</Col>
          <Col>nice</Col>
        </Row>
      </div>
    </>
  );
});

export default Aurora;
