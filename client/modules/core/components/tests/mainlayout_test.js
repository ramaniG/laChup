const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Component from '../mainlayout';

describe('test', () => {
  it('should display the post title', () => {
    const el = shallow(<Component />);
    expect(el).not.to.be.null;
  });
});
