import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import { Dropdown } from 'react-bootstrap';
import {
  JobSearchBox,
  PeopleSearchBox,
  LearningSearchBox,
  IJobSearchData,
  IPeopleSearchData,
  ILearningSearchData,
} from './SearchBox';

import './style.scss';

const switchers: string[] = ['Jobs', 'People', 'Learning'];

export const SearchBar: React.FC<any> = () => {
  const [selectedTab, selectTab] = useState<string>('Jobs');
  const [searchData, setSearchData] = useState<
    IJobSearchData | IPeopleSearchData | ILearningSearchData
  >({});

  return (
    <>
      <section className="search-bar show-on-desktop">
        <Dropdown className="tab-switcher">
          <Dropdown.Toggle variant="outline">
            <span>{selectedTab}</span>
            <i aria-hidden="true" className="caret-down-icon">
              <SVG src="/media/svg/icons/caret-down-icon.svg" />
            </i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {switchers.map((switcher, index) => (
              <Dropdown.Item
                key={index}
                active={switcher === selectedTab}
                onClick={() => selectTab(switcher)}
              >
                {switcher}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        {selectedTab === 'Jobs' ? (
          <JobSearchBox
            data={searchData as IJobSearchData}
            setData={setSearchData}
          />
        ) : selectedTab === 'People' ? (
          <PeopleSearchBox
            data={searchData as IPeopleSearchData}
            setData={setSearchData}
          />
        ) : (
          <LearningSearchBox
            data={searchData as ILearningSearchData}
            setData={setSearchData}
          />
        )}
        <button className="search-btn">
          <i>
            <SVG src="/media/svg/icons/search-icon.svg" />
          </i>
        </button>
      </section>
      {/* <section className="search-bar show-on-mobile">
        <div className="search-input w-100">
          <input
            placeholder="Search Jobs, People and Learnings"
            autoComplete="off"
            onFocus={() => {}}
          />
        </div>
      </section> */}
    </>
  );
};
