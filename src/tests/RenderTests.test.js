import React from 'react';
import ReactDOM from 'react-dom';
import AdvertPanel from "../components/advert/AdvertPanel";
import AdvertForm from "../components/advert/AdvertForm";

it('AdvertPanel renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdvertPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});