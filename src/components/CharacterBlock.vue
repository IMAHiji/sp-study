<template>
  <div class="card character-block">
    <div class="card-image character">
      <span>永</span>
    </div>
    <div class="card-content is-centered">
      <div class="media">
        <div class="media-content ">
          <p class="title is-4">yǒng</p>
          <p class="subtitle is-6">forever</p>
        </div>
      </div>

      <div class="content">
        <p>Content stuff goes here, buttons, etc.</p>
        <p>
          Now is the time for all good men to come to the aid of their country and fight for their
          right to be free men.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterBlock'
};
</script>

<style lang="css" scoped>
.character-block {
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  max-width: 500px;
}
.character {
  font-size: 10rem;
}
</style>
