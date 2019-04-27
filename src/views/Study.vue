<template>
  <div class="study-container">
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

<style lang="scss" scoped>
.study-container {
  display: flex;
  flex-direction: column;
}
</style>
