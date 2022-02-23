import React from 'react';
import { DismissableInput } from '../DismissableInput';

export interface ILearningSearchData {
  keyword?: string;
}

interface IProps {
  data: ILearningSearchData;
  setData: (data: ILearningSearchData) => void;
}

export const LearningSearchBox: React.FC<IProps> = ({ data, setData }) => {
  return (
    <div className="search-box-input d-flex flex-row">
      <DismissableInput
        text={data.keyword ? data.keyword : ''}
        setText={text => setData({ ...data, keyword: text })}
        placeholder="Search skills, subjects, or software"
        className="w-100"
      />
    </div>
  );
};
