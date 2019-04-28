
import { configure } from '@storybook/vue';
import './story-styles.css';
import '../src/assets/styles/main.css';

const req = require.context('../src', true, /.stories\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
