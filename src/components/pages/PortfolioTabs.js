import React, { useState } from 'react';
import SingleWork from './SingleWork';
import portfolio_data from '../portfolio_data';

const { software, design } = portfolio_data;

const PortfolioTabs = () => {
  const [data, setData] = useState(software);

  const software_ = data[0] === software[0] ? 'active-tab' : '';
  const design_ = data[0] === design[0] ? 'active-tab' : '';

  const active_tab = data[0] === software[0] ? 'software' : 'design';

  return (
    <>
      <div className="tabs">
        <button onClick={() => setData(software)} id="software" className={`${software_} active`}>
          SOFTWARE DEVELOPMENT
        </button>
        <button onClick={() => setData(design)} id="design" className={`${design_} active`}>
          DESIGN
        </button>
      </div>
      <div className="tabcontent">
        <section className="port_box">
          {data.length === 0 ? (
            <div className="empty-page">
              <h1>{active_tab} is empty</h1>
              <div className="skeleton"></div>
            </div>
          ) : (
            data.map((eachItem, index) => (
              <SingleWork key={index} eachItem={eachItem} active_tab={active_tab} index={index} />
            ))
          )}
        </section>
      </div>
    </>
  );
};

export default PortfolioTabs;
