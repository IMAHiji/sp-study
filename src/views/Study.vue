<template>
  <div class="study-container container">
    <CharacterBlock></CharacterBlock>
  </div>
</template>

<script>
import CharacterBlock from '@/components/CharacterBlock';

export default {
  components: {
    CharacterBlock
  }
};
</script>

<style lang="postcss" scoped>
.study-container {
  @apply flex justify-center h-screen;
}
</style>
