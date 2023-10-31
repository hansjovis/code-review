<script setup>
  import Comment from "../model/Comment";

  const { comment } = defineProps({
    comment: Comment
  });
</script>

<template>
  <form>
    <header>
      <h2>Add Comment</h2>
    </header>
    <div class="content">
        <label for="code">Original Code</label>
        <textarea id="code" name="code" :rows="comment.nrOfLines" readonly style="resize: none;">{{ comment.snippet }}</textarea>

        <label for="comment">Comment</label>
        <textarea id="comment" name="comment" type="text" style="resize: vertical;" v-model="comment.comment"></textarea>

        <label for="suggestion">Suggested Change</label>
        <textarea id="suggestion" name="suggestion" style="resize: vertical;" v-model="comment.suggestedChange"></textarea>
    </div>
    <footer>
      <button type="submit">Add Comment</button>
    </footer>
  </form>
</template>

<style scoped>
  form {
    padding: 8px;
    margin-block-start: 8px;
    border: 1px solid gray;
  }

  form label {
    padding-inline-end: 1em;
  }

  form .content {
    display: grid;
    grid-template-columns: max-content 1fr;
  }
</style>