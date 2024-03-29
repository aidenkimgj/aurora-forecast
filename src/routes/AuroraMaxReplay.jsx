import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { add } from '../store';

const AuroraMaxReplay = () => {
  const [video, setVideo] = useState('');
  const [lastDay, setLastDay] = useState('');
  const page = 'AuroraMax Replay';
  const dispatch = useDispatch();

  const initialVideo = () => {
    const now_date = moment().format('YYYY-MM-DD HH:mm:ss');
    const currentYear = now_date.substring(0, 4);
    const currentMonth = now_date.substring(5, 7);
    let currentDay = now_date.substring(8, 10) - 1;
    const month = ['01', '03', '05', '07', '08', '10', '12'];

    if (currentDay < 10) {
      currentDay = `0${currentDay}`;
    }

    if (currentDay === '00') {
      if (month.some(month => month === currentMonth)) {
        currentDay = '31';
      } else if (currentMonth === '02') {
        currentDay = '28';
      } else {
        currentDay = '30';
      }
    }

    const lastDate = `${currentYear}-${currentMonth}-${currentDay}`;
    console.log(lastDate);
    setLastDay(lastDate);
    console.log(lastDay, 'lastday');

    const data = `https://data.phys.ucalgary.ca/sort_by_project/AuroraMAX/rt-movies/mp4/${currentYear}/${currentMonth}/${currentDay}/auroramaxHD_${currentYear}${currentMonth}${currentDay}_720p.mp4`;

    setVideo(data);

    if (
      currentMonth === '05' ||
      currentMonth === '06' ||
      currentMonth === '07' ||
      currentMonth === '08'
    ) {
      alert('No videos in May, June, July, early August');
    }
  };

  const getDay = e => {
    e.preventDefault();
    const chooseDate = e.target.value;
    const year = chooseDate.substring(0, 4);
    const month = chooseDate.substring(5, 7);
    const day = chooseDate.substring(8, 10);
    getVideo(year, month, day);
  };

  const getVideo = (year, month, day) => {
    const data = `https://data.phys.ucalgary.ca/sort_by_project/AuroraMAX/rt-movies/mp4/${year}/${month}/${day}/auroramaxHD_${year}${month}${day}_720p.mp4`;
    setVideo(data);
  };

  useEffect(() => {
    initialVideo();
    dispatch(add(page));
  }, []);
  return (
    <>
      <h3>AuroraMax Replay</h3>
      <form onChange={getDay}>
        <label
          style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '30px' }}
        >
          Choose a date: &nbsp;
        </label>
        <input type="date" name="date" min="2012-09-10" max={lastDay} />
      </form>
      <div className="video-detail col-md-12 mt-5 pb-5">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" id="video" src={video} />
        </div>
      </div>
    </>
  );
};

export default AuroraMaxReplay;
