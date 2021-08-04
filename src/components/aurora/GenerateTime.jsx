import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import dateFormat from 'dateformat';
import { Col, Row } from 'reactstrap';

const GenerateTime = ({ time }) => {
  const [utcPeriod, setUtcPeriod] = useState('');
  const [localPeriod, setLocalPeriod] = useState('');
  const [value, setValue] = useState('');
  const [color, setColor] = useState('');

  const offset = useSelector(state => state.offset);

  console.log(time, '넘어온 타임');

  const generateTime = time => {
    const basicStartTime = new Date(time.start);
    const stadardOffset = basicStartTime.getTimezoneOffset() * 60 * 1000;
    const utcStart = Date.parse(time.start) + stadardOffset;
    const utcEnd = Date.parse(time.end) + stadardOffset;
    const data = time.value;
    const style = time.value === '3' ? 'green' : time.colour;
    const periodUtc = `${dateFormat(
      new Date(utcStart),
      'HH'
    )}:00 ~ ${dateFormat(new Date(utcEnd), 'HH')}:00 ${dateFormat(
      new Date(utcStart),
      'mmm dd yyyy'
    )}`;
    const periodLocal = `${dateFormat(
      new Date(utcStart + offset * 1000),
      'HH'
    )}:00 ~ ${dateFormat(
      new Date(utcEnd + offset * 1000),
      'HH'
    )}:00 ${dateFormat(new Date(utcStart + offset * 1000), 'mmm dd yyyy')}`;

    console.log(new Date(utcStart), 'utc start 시간');
    console.log(new Date(utcEnd), 'utc End 시간');
    console.log(new Date(utcStart + offset * 1000), '현지시간 start');
    console.log(new Date(utcEnd + offset * 1000), '현지시간 end');

    setUtcPeriod(periodUtc);
    setLocalPeriod(periodLocal);
    setColor(style);
    setValue(data);
  };

  useEffect(() => {
    console.log('hello');
    generateTime(time);
  }, [time]);

  return (
    <>
      <div className="threedays_kp">
        {time.now ? (
          <div className="threedays_ture">
            <Row>
              <span>{utcPeriod} UTC</span>
            </Row>
            <Row>
              <span>{localPeriod} Local</span>
            </Row>
            <Row>
              <span style={{ color: color }}>{value}</span>
            </Row>
          </div>
        ) : (
          <div className="threedays_false">
            <Row>
              <span>{utcPeriod} UTC</span>
            </Row>
            <Row>
              <span>{localPeriod} Local</span>
            </Row>
            <Row>
              <span style={{ color: color }}>{value}</span>
            </Row>
          </div>
        )}
      </div>
    </>
  );
};

export default GenerateTime;
