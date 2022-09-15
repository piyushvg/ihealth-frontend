import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { notificationPanelHandler } from '../../redux/reducer/commonSlice';

import grid_ico from '../../assets/img/grid_ico.svg';
import clndr_ico from '../../assets/img/clndr_ico.svg';
import flter_ico from '../../assets/img/flter_ico.svg';
import wht_tmr from '../../assets/img/wht_tmr.svg';
import gry_attchd from '../../assets/img/gry_attchd.svg';
import gry_plus from '../../assets/img/gry_plus.svg';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './style.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const MyHealth = () => {
  const dispatch = useDispatch();

  const [isShowFilter, setIsShowFilter] = useState(false);
  const [viewType, setViewType] = useState('grid');
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, 'days').toDate(),
      title: 'Some title',
    },
  ]);

  useEffect(() => {
    if (viewType === 'cal') {
      dispatch(notificationPanelHandler(false));
    } else {
      dispatch(notificationPanelHandler(true));
    }
    return () => {
      dispatch(notificationPanelHandler(true));
    };
  }, [dispatch, viewType]);

  const onChangeViewType = (type) => {
    setViewType(type);
  };

  const onEventResize = (data) => {
    const { start, end } = data;
    events[0].start = start;
    events[0].end = end;
    setEvents([...events]);
  };

  const onEventDrop = (data) => {
    const { start, end } = data;
    events[0].start = start;
    events[0].end = end;
    setEvents([...events]);
  };

  return (
    <div>
      <div className="w100_mg0">
        <div className="tabb_tap">
          <a className="actv">Activities</a>
          <a>Care programs</a>
          <a>Care plans</a>
          <a>My care team</a>
          <a>Inbox</a>
          <a>Get care</a>
        </div>
      </div>
      <div className="w100 mflx flx_clum">
        <div className="f28">Activities dashboard</div>
        <div className="lftx">
          <div className="grid" onClick={() => setIsShowFilter(!isShowFilter)}>
            {viewType === 'grid' ? 'Grid' : 'Calendar'} view{' '}
            <i className="down_arw"></i>
            {isShowFilter ? (
              <div className="drp_dwn">
                <div
                  className={`optn ${viewType === 'grid' ? 'optn_slctd' : ''}`}
                  onClick={() => onChangeViewType('grid')}
                >
                  <span>Grid view</span>{' '}
                  <img src={grid_ico} className="grid_ico" />
                </div>
                <div
                  className={`optn ${viewType === 'cal' ? 'optn_slctd' : ''}`}
                  onClick={() => onChangeViewType('cal')}
                >
                  <span>Calendar view</span>{' '}
                  <img src={clndr_ico} className="clndr_ico" />
                </div>
              </div>
            ) : null}
          </div>
          <div className="flter_ico">
            <img src={flter_ico} />
          </div>
        </div>
      </div>

      {viewType === 'grid' ? (
        <div className="w100 mflx flx_clum">
          <div className="today">
            <div className="sec_tab">
              <div>Today (2) </div>
              <div className="bdr_brng"></div>
            </div>
            <div className="sec_box_tab">
              <div className="sing_tab">
                <div className="mflx alngcntr">
                  <div className="brng_bx">
                    <span className="wht_tmr">
                      <img src={wht_tmr} />
                    </span>
                    Today
                  </div>
                  <div className="attchd">
                    <span className="gry_attchd">
                      <img src={gry_attchd} />
                    </span>
                    01
                  </div>
                  <div className="add_atchd">
                    <span className="gry_plus">
                      <img src={gry_plus} />
                    </span>
                  </div>
                </div>
                <div className="f16_600">Mental health profile</div>
                <div className="f12_400">Understanding depression </div>
              </div>

              <div className="sing_tab">
                <div className="mflx alngcntr">
                  <div className="brng_bx">
                    <span className="wht_tmr">
                      <img src={wht_tmr} />
                    </span>
                    Today
                  </div>
                  <div className="attchd">
                    <span className="gry_attchd">
                      <img src={gry_attchd} />
                    </span>
                    01
                  </div>
                  <div className="add_atchd">
                    <span className="gry_plus">
                      <img src={gry_plus} />
                    </span>
                  </div>
                </div>
                <div className="f16_600">Mental health profile</div>
                <div className="f12_400">Understanding depression </div>
              </div>

              <div className="sing_tab">
                <div className="mflx alngcntr">
                  <div className="brng_bx">
                    <span className="wht_tmr">
                      <img src={wht_tmr} />
                    </span>
                    Today
                  </div>
                  <div className="attchd">
                    <span className="gry_attchd">
                      <img src={gry_attchd} />
                    </span>
                    01
                  </div>
                  <div className="add_atchd">
                    <span className="gry_plus">
                      <img src={gry_plus} />
                    </span>
                  </div>
                </div>
                <div className="f16_600">Mental health profile</div>
                <div className="f12_400">Understanding depression </div>
              </div>
            </div>
          </div>
          <div className="upcoming">
            <div className="sec_tab">
              <div>Upcoming (4) </div>
              <div className="bdr_yllw"></div>
            </div>
            <div className="sec_box_tab">
              <div className="sing_tab">
                <div className="mflx alngcntr">
                  <div className="yellw_bx">
                    <span className="wht_tmr">
                      <img src={wht_tmr} />
                    </span>
                    10/22/22
                  </div>
                  <div className="attchd">
                    <span className="gry_attchd">
                      <img src={gry_attchd} />
                    </span>
                    01
                  </div>
                  <div className="add_atchd">
                    <span className="gry_plus">
                      <img src={gry_plus} />
                    </span>
                  </div>
                </div>
                <div className="f16_600">Mental health profile</div>
                <div className="f12_400">Understanding depression </div>
              </div>

              <div className="sing_tab">
                <div className="mflx alngcntr">
                  <div className="yellw_bx">
                    <span className="wht_tmr">
                      <img src={wht_tmr} />
                    </span>
                    10/02/22
                  </div>
                  <div className="attchd">
                    <span className="gry_attchd">
                      <img src={gry_attchd} />
                    </span>
                    01
                  </div>
                  <div className="add_atchd">
                    <span className="gry_plus">
                      <img src={gry_plus} />
                    </span>
                  </div>
                </div>
                <div className="f16_600">Mental health profile</div>
                <div className="f12_400">Understanding depression </div>
              </div>

              <div className="sing_tab">
                <div className="mflx alngcntr">
                  <div className="yellw_bx">
                    <span className="wht_tmr">
                      <img src={wht_tmr} />
                    </span>
                    02/01/22
                  </div>
                  <div className="attchd">
                    <span className="gry_attchd">
                      <img src={gry_attchd} />
                    </span>
                    01
                  </div>
                  <div className="add_atchd">
                    <span className="gry_plus">
                      <img src={gry_plus} />
                    </span>
                  </div>
                </div>
                <div className="f16_600">Mental health profile</div>
                <div className="f12_400">Understanding depression </div>
              </div>
              <div className="sing_tab">
                <div className="mflx alngcntr">
                  <div className="yellw_bx">
                    <span className="wht_tmr">
                      <img src={wht_tmr} />
                    </span>
                    02/12/21
                  </div>
                  <div className="attchd">
                    <span className="gry_attchd">
                      <img src={gry_attchd} />
                    </span>
                    01
                  </div>
                  <div className="add_atchd">
                    <span className="gry_plus">
                      <img src={gry_plus} />
                    </span>
                  </div>
                </div>
                <div className="f16_600">Mental health profile</div>
                <div className="f12_400">Understanding depression </div>
              </div>
            </div>
          </div>
          <div className="past">
            <div className="sec_tab">
              <div>Past (3) </div>
              <div className="bdr_green"></div>
            </div>
            <div className="sec_box_tab">
              <div className="sing_tab">
                <div className="mflx alngcntr">
                  <div className="green_bx">
                    <span className="wht_tmr">
                      <img src={wht_tmr} />
                    </span>
                    Complete
                  </div>
                  <div className="attchd">
                    <span className="gry_attchd">
                      <img src={gry_attchd} />
                    </span>
                    01
                  </div>
                  <div className="add_atchd">
                    <span className="gry_plus">
                      <img src={gry_plus} />
                    </span>
                  </div>
                </div>
                <div className="f16_600">Mental health profile</div>
                <div className="f12_400">Understanding depression </div>
              </div>

              <div className="sing_tab">
                <div className="mflx alngcntr">
                  <div className="green_bx">
                    <span className="wht_tmr">
                      <img src={wht_tmr} />
                    </span>
                    Complete
                  </div>
                  <div className="attchd">
                    <span className="gry_attchd">
                      <img src={gry_attchd} />
                    </span>
                    01
                  </div>
                  <div className="add_atchd">
                    <span className="gry_plus">
                      <img src={gry_plus} />
                    </span>
                  </div>
                </div>
                <div className="f16_600">Mental health profile</div>
                <div className="f12_400">Understanding depression </div>
              </div>

              <div className="sing_tab">
                <div className="mflx alngcntr">
                  <div className="green_bx">
                    <span className="wht_tmr">
                      <img src={wht_tmr} />
                    </span>
                    Complete
                  </div>
                  <div className="attchd">
                    <span className="gry_attchd">
                      <img src={gry_attchd} />
                    </span>
                    01
                  </div>
                  <div className="add_atchd">
                    <span className="gry_plus">
                      <img src={gry_plus} />
                    </span>
                  </div>
                </div>
                <div className="f16_600">Mental health profile</div>
                <div className="f12_400">Understanding depression </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <DnDCalendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: '100vh' }}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          resizable
        />
      )}
    </div>
  );
};
export default MyHealth;
