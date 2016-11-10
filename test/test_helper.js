import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// set up testing environment to test like a browser in the command line
global.document = jsdom.jsdom('<!doctype><html><body></body></html>');
global.window = global.document.defaultView;
// overwrite $ to uses test dom from jsdom
const $ = _$(global.window);

// build 'renderComponent' helper that can render given react ComponentClass
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  return $(ReactDOM.findDOMNode(componentInstance)); // produces html &
  // wraps it in a jquery element to be able to use chai-jquery methods
}

// build helper for simulating events .simulate functionality

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};
// this creates $('element').simulate(event handler)
// $('element') can be referenced by this keyword in simulate function


// setup chai-jquery
chaiJquery(chai, chai.util, $);

// export statements
export { expect, renderComponent };
