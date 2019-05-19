<template>
  <div>
    <h1>Character List</h1>
    <button @click="loadAllCharacters">Load</button>
    <p>{{ characters }}</p>
  </div>
</template>

<script>
import { getAllCharacters } from '@/utils/helpers';

export default {
  data() {
    return {
      characters: []
    };
  },
  methods: {
    loadAllCharacters() {
      getAllCharacters().then(data => (this.characters = data));
    }
  }
};
</script>

<style lang="scss" scoped></style>
