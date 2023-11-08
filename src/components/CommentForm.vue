<script setup>
  import { ref } from "vue";
  import Comment from "../model/Comment";

  const { comment } = defineProps({
    comment: Comment
  });

  const suggestChange = ref( false );
</script>

<template>
  <form>
    <header>
      <h2>Add Comment</h2>
    </header>
    <div class="content">
        <input type="hidden" name="lineNrStart" :value="comment.lineNumberRange.start">

        <label for="lineNrEnd">Line number end</label>
        <input type="number" name="lineNrEnd" v-model="comment.lineNumberRange.end">

        <label for="code">Original Code</label>
        <output id="code" name="code" :rows="comment.nrOfLines" readonly style="resize: none;">
          <pre class="code"><code>{{ comment.snippet }}</code></pre>
        </output>

        <label for="comment">Comment</label>
        <textarea id="comment" name="comment" type="text" style="resize: vertical;" v-model="comment.comment"></textarea>

        <div class="checkbox-field">
          <input type="checkbox" name="suggest-change" id="suggest-change" v-model="suggestChange">
          <label for="suggest-change">Suggest a change</label>
        </div>

        <label v-if="suggestChange" for="suggestion">Suggestion</label>
        <textarea v-if="suggestChange"  class="code" id="suggestion" name="suggestion" style="resize: vertical;" v-model="comment.suggestedChange"></textarea>
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

  .checkbox-field {
    grid-column: 2;
  }

  .checkbox-field label {
    margin-inline-start: 0.5em;
  }

  form .content {
    display: grid;
    grid-template-columns: max-content 1fr;
  }
</style>