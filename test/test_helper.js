import jsdom from 'jsdom';
import jquery from 'jquery';

//Set up test environment in command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

//build renderComponent


//build for simulating events


//set up chai-jquery
