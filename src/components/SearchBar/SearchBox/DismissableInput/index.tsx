import React, { useState } from 'react';
import SVG from 'react-inlinesvg';

import './style.scss';

interface IProps {
  text: string;
  setText: (text: string) => void;
  placeholder?: string;
  className?: string;
  [key: string]: any;
}

export const DismissableInput: React.FC<IProps> = ({
  text,
  setText,
  placeholder,
  className,
  ...props
}) => {
  const [elem, setElem] = useState<HTMLElement | null>(null);

  return (
    <div className={'dismissable-input ' + (!!className ? className : '')}>
      <input
        className="text-input"
        placeholder={placeholder}
        autoComplete="off"
        maxLength={500}
        ref={elem => setElem(elem)}
        value={text}
        onChange={e => setText(e.target.value)}
        {...props}
      />
      <button
        className="clear-btn position-absolute px-3"
        hidden={!text}
        onClick={() => {
          setText('');
          elem?.focus();
        }}
      >
        <i>
          <SVG src="/media/svg/icons/dismiss-icon.svg" />
        </i>
      </button>
    </div>
  );
};
