import React from 'react';
import { shallow } from 'enzyme';

import Page from '../newswelcome';


describe('Welcome Page', () => {
  it('is defined', () => {
    const app = shallow(<Page serverState={{}} />);
    expect(app).toBeDefined();
  });
});
