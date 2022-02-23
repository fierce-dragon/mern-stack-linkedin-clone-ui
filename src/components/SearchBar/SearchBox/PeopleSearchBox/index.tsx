import React from 'react';
import { DismissableInput } from '../DismissableInput';

export interface IPeopleSearchData {
  firstName?: string;
  lastName?: string;
}

interface IProps {
  data: IPeopleSearchData;
  setData: (data: IPeopleSearchData) => void;
}

export const PeopleSearchBox: React.FC<IProps> = ({ data, setData }) => {
  return (
    <div className="search-box-input d-flex flex-row">
      <DismissableInput
        text={data.firstName ? data.firstName : ''}
        setText={text => setData({ ...data, firstName: text })}
        placeholder="First Name"
        className="w-50"
      />
      <DismissableInput
        text={data.lastName ? data.lastName : ''}
        setText={text => setData({ ...data, lastName: text })}
        placeholder="Last Name"
        className="w-50"
      />
    </div>
  );
};
