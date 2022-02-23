import React from 'react';
import { DismissableInput } from '../DismissableInput';

export interface IJobSearchData {
  keyword?: string;
  location?: string;
}

interface IProps {
  data: IJobSearchData;
  setData: (data: IJobSearchData) => void;
}

export const JobSearchBox: React.FC<IProps> = ({ data, setData }) => {
  return (
    <div className="search-box-input d-flex flex-row">
      <DismissableInput
        text={data.keyword ? data.keyword : ''}
        setText={text => setData({ ...data, keyword: text })}
        placeholder="Search job titles or companies"
        className="w-50"
      />
      <DismissableInput
        text={data.location ? data.location : ''}
        setText={text => setData({ ...data, location: text })}
        placeholder="Location"
        className="w-50"
      />
    </div>
  );
};
