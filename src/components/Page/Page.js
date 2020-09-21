import React from 'react';
import './Page.css';

const Page = ({ children }) => {
  return (
    <page className="page">
      { children }
    </page>
  )
}

export default Page;