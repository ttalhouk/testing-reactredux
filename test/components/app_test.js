import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// 'describe' groups similar tests
describe('App', () => {
  // // 'it' tests a single attribute of a target
  // it('shows the correct text', () => {
  //   // create an instance of 'App'
  //   const component = renderComponent(App);
  //   // 'expect' makes an assertion about the target
  //   expect(component).to.contain('React simple starter');
  // });

  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
