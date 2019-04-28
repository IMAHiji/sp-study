<template>
  <div class="card character-block">
    <div class="character-card-character">
      <span>永</span>
    </div>
    <div class="card-content is-centered">
      <div class="media">
        <div class="media-content ">
          <p class="character-card-pinyin">yǒng</p>
          <p class="character-card-english">forever</p>
        </div>
      </div>

      <div class="character-description">
        <p>Content stuff goes here, buttons, etc.</p>
        <p>
          Now is the time for all good men to come to the aid of their country and fight for their
          right to be free men.
        </p>
      </div>
      <div class="character-card-actions">
        <button class="character-card-buttons">Action 1</button>
        <button class="character-card-buttons">Action 2</button>
        <button class="character-card-buttons">Action 3</button>
      </div>
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
  font-family: 'Noto Sans';
  max-height: 550px;
  @apply max-w-md p-5 rounded overflow-hidden shadow-lg flex flex-col justify-center;
}
.character-card-character {
  font-size: 10rem;
  @apply w-full;
}
.character-card-pinyin {
  font-size: 2rem;
  @apply my-4;
}
.character-card-actions {
  @apply flex justify-around;
}
.character-card-buttons {
  @apply font-bold py-2 px-4 rounded bg-blue text-white my-6;
}
.character-card-buttons:hover {
  @apply bg-blue-dark;
}
</style>
