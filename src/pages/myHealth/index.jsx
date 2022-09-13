import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import grid_ico from '../../assets/img/grid_ico.svg';
import clndr_ico from '../../assets/img/clndr_ico.svg';
import flter_ico from '../../assets/img/flter_ico.svg';
import wht_tmr from '../../assets/img/wht_tmr.svg';
import gry_attchd from '../../assets/img/gry_attchd.svg';
import gry_plus from '../../assets/img/gry_plus.svg';

import './style.css';

const MyHealth = () => {
  const { t } = useTranslation();

  const [isShowFilter, setIsShowFilter] = useState(false);

  return (
    <div>
      <div class="w100_mg0">
        <div class="tabb_tap">
          <a class="actv">Activities</a>
          <a>Care programs</a>
          <a>Care plans</a>
          <a>My care team</a>
          <a>Inbox</a>
          <a>Get care</a>
        </div>
      </div>
      <div class="w100 mflx flx_clum">
        <div class="f28">Activities dashboard</div>
        <div class="lftx">
          <div class="grid" onClick={() => setIsShowFilter(!isShowFilter)}>
            Grid view <i class="down_arw"></i>
            {isShowFilter ? (
              <div class="drp_dwn">
                <div class="optn">
                  <span>Grid view</span> <img src={grid_ico} class="grid_ico" />
                </div>
                <div class="optn optn_slctd">
                  <span>Calendar view</span>{' '}
                  <img src={clndr_ico} class="clndr_ico" />
                </div>
              </div>
            ) : null}
          </div>
          <div class="flter_ico">
            <img src={flter_ico} />
          </div>
        </div>
      </div>

      <div class="w100 mflx flx_clum">
        <div class="today">
          <div class="sec_tab">
            <div>Today (2) </div>
            <div class="bdr_brng"></div>
          </div>
          <div class="sec_box_tab">
            <div class="sing_tab">
              <div class="mflx alngcntr">
                <div class="brng_bx">
                  <span class="wht_tmr">
                    <img src={wht_tmr} />
                  </span>
                  Today
                </div>
                <div class="attchd">
                  <span class="gry_attchd">
                    <img src={gry_attchd} />
                  </span>
                  01
                </div>
                <div class="add_atchd">
                  <span class="gry_plus">
                    <img src={gry_plus} />
                  </span>
                </div>
              </div>
              <div class="f16_600">Mental health profile</div>
              <div class="f12_400">Understanding depression </div>
            </div>

            <div class="sing_tab">
              <div class="mflx alngcntr">
                <div class="brng_bx">
                  <span class="wht_tmr">
                    <img src={wht_tmr} />
                  </span>
                  Today
                </div>
                <div class="attchd">
                  <span class="gry_attchd">
                    <img src={gry_attchd} />
                  </span>
                  01
                </div>
                <div class="add_atchd">
                  <span class="gry_plus">
                    <img src={gry_plus} />
                  </span>
                </div>
              </div>
              <div class="f16_600">Mental health profile</div>
              <div class="f12_400">Understanding depression </div>
            </div>

            <div class="sing_tab">
              <div class="mflx alngcntr">
                <div class="brng_bx">
                  <span class="wht_tmr">
                    <img src={wht_tmr} />
                  </span>
                  Today
                </div>
                <div class="attchd">
                  <span class="gry_attchd">
                    <img src={gry_attchd} />
                  </span>
                  01
                </div>
                <div class="add_atchd">
                  <span class="gry_plus">
                    <img src={gry_plus} />
                  </span>
                </div>
              </div>
              <div class="f16_600">Mental health profile</div>
              <div class="f12_400">Understanding depression </div>
            </div>
          </div>
        </div>
        <div class="upcoming">
          <div class="sec_tab">
            <div>Upcoming (4) </div>
            <div class="bdr_yllw"></div>
          </div>
          <div class="sec_box_tab">
            <div class="sing_tab">
              <div class="mflx alngcntr">
                <div class="yellw_bx">
                  <span class="wht_tmr">
                    <img src={wht_tmr} />
                  </span>
                  10/22/22
                </div>
                <div class="attchd">
                  <span class="gry_attchd">
                    <img src={gry_attchd} />
                  </span>
                  01
                </div>
                <div class="add_atchd">
                  <span class="gry_plus">
                    <img src={gry_plus} />
                  </span>
                </div>
              </div>
              <div class="f16_600">Mental health profile</div>
              <div class="f12_400">Understanding depression </div>
            </div>

            <div class="sing_tab">
              <div class="mflx alngcntr">
                <div class="yellw_bx">
                  <span class="wht_tmr">
                    <img src={wht_tmr} />
                  </span>
                  10/02/22
                </div>
                <div class="attchd">
                  <span class="gry_attchd">
                    <img src={gry_attchd} />
                  </span>
                  01
                </div>
                <div class="add_atchd">
                  <span class="gry_plus">
                    <img src={gry_plus} />
                  </span>
                </div>
              </div>
              <div class="f16_600">Mental health profile</div>
              <div class="f12_400">Understanding depression </div>
            </div>

            <div class="sing_tab">
              <div class="mflx alngcntr">
                <div class="yellw_bx">
                  <span class="wht_tmr">
                    <img src={wht_tmr} />
                  </span>
                  02/01/22
                </div>
                <div class="attchd">
                  <span class="gry_attchd">
                    <img src={gry_attchd} />
                  </span>
                  01
                </div>
                <div class="add_atchd">
                  <span class="gry_plus">
                    <img src={gry_plus} />
                  </span>
                </div>
              </div>
              <div class="f16_600">Mental health profile</div>
              <div class="f12_400">Understanding depression </div>
            </div>
            <div class="sing_tab">
              <div class="mflx alngcntr">
                <div class="yellw_bx">
                  <span class="wht_tmr">
                    <img src={wht_tmr} />
                  </span>
                  02/12/21
                </div>
                <div class="attchd">
                  <span class="gry_attchd">
                    <img src={gry_attchd} />
                  </span>
                  01
                </div>
                <div class="add_atchd">
                  <span class="gry_plus">
                    <img src={gry_plus} />
                  </span>
                </div>
              </div>
              <div class="f16_600">Mental health profile</div>
              <div class="f12_400">Understanding depression </div>
            </div>
          </div>
        </div>
        <div class="past">
          <div class="sec_tab">
            <div>Past (3) </div>
            <div class="bdr_green"></div>
          </div>
          <div class="sec_box_tab">
            <div class="sing_tab">
              <div class="mflx alngcntr">
                <div class="green_bx">
                  <span class="wht_tmr">
                    <img src={wht_tmr} />
                  </span>
                  Complete
                </div>
                <div class="attchd">
                  <span class="gry_attchd">
                    <img src={gry_attchd} />
                  </span>
                  01
                </div>
                <div class="add_atchd">
                  <span class="gry_plus">
                    <img src={gry_plus} />
                  </span>
                </div>
              </div>
              <div class="f16_600">Mental health profile</div>
              <div class="f12_400">Understanding depression </div>
            </div>

            <div class="sing_tab">
              <div class="mflx alngcntr">
                <div class="green_bx">
                  <span class="wht_tmr">
                    <img src={wht_tmr} />
                  </span>
                  Complete
                </div>
                <div class="attchd">
                  <span class="gry_attchd">
                    <img src={gry_attchd} />
                  </span>
                  01
                </div>
                <div class="add_atchd">
                  <span class="gry_plus">
                    <img src={gry_plus} />
                  </span>
                </div>
              </div>
              <div class="f16_600">Mental health profile</div>
              <div class="f12_400">Understanding depression </div>
            </div>

            <div class="sing_tab">
              <div class="mflx alngcntr">
                <div class="green_bx">
                  <span class="wht_tmr">
                    <img src={wht_tmr} />
                  </span>
                  Complete
                </div>
                <div class="attchd">
                  <span class="gry_attchd">
                    <img src={gry_attchd} />
                  </span>
                  01
                </div>
                <div class="add_atchd">
                  <span class="gry_plus">
                    <img src={gry_plus} />
                  </span>
                </div>
              </div>
              <div class="f16_600">Mental health profile</div>
              <div class="f12_400">Understanding depression </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyHealth;
