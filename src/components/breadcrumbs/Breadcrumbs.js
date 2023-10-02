import React from 'react';
import arrow from '../../icons/arrow.svg'

const Breadcrumbs = ({ items }) => {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <img src={arrow} alt="Arrow" />}
          {index === items.length - 1 ? (
            <span>{item.text}</span>
          ) : (
            <a href={item.link}>{item.text}</a>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
