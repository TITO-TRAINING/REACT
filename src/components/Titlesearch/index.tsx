import React from 'react';
import Search from '../Search';
import Wellcome from '../Wellcome';
import avt from '../../assets/images/avt.png';

function Tittlesearch() {
  return (
    <div className="container row mb-5 pt-5">
      <div className="col-md-7">
        <Wellcome text="Blog" imageAvatar={avt} />
      </div>
      <div className="col-md-5 align-self-center d-flex justify-content-end">
        <Search />
      </div>
    </div>
  );
}

export default Tittlesearch;
