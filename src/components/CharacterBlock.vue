<template>
  <div class="character-block">
    <div class="character-display">
      <h3 class="character">永</h3>
    </div>
    <div class="character-information">
      <p>things</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterBlock'
};
</script>

<style lang="postcss" scoped>
.character-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid green;
  width: auto;
}
.character {
  font-size: 10rem;
}
</style>
