import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App'

//fonts mui roboto
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeConfig } from '../imports/ui/config/ThemeConfig';


Meteor.startup(() => {
  render(<ThemeConfig><App /></ThemeConfig>, document.getElementById('react-target'));
});
