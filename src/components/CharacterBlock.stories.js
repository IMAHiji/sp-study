import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import CharacterBlock from './CharacterBlock.vue';

storiesOf('Character Block', module).add('Character Block', () => ({
  components: { CharacterBlock },
  template: '<character-block />'
}));
