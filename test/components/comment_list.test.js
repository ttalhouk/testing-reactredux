import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  beforeEach(() => {
    const props = { comments: [
      'New Comment',
      'Another New Comment',
      'Third Comment'
    ]};
    component = renderComponent(CommentList, null, props);
  });

  it('has a class of comment-list', () => {
    expect(component).to.have.class('comment-list');
  });

  it('shows and LI for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment provided', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Another New Comment');
    expect(component).to.contain('Third Comment');
  });

});
