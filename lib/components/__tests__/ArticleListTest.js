import React from 'react';
import ArticleList from '../ArticleList';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const testProps = {
  articles: {
    a: {id: 'a', title: 'Foobar', body: 'Fake body',
      date: 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)'},
    b: {id: 'b', title: 'Foobar', body: 'Fake body',
      date: 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)'},
  }
};

describe('ArticleList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList {...testProps} />
    );
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
