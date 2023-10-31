<script setup>
  import CodeSnippet from '../model/CodeSnippet';

  const props = defineProps( {
    code: CodeSnippet
  } );

  const emit = defineEmits( [ 'lineStartChange', 'lineEndChange' ] );

  function updateLineNumberStart( { target } ) {
    const lineNumber =  Number.parseInt( target.dataset.lineNr );
    emit( 'lineStartChange', lineNumber );
  }

  function updateLineNumberEnd( { target } ) {
    const lineNumber = Number.parseInt( target.dataset.lineNr );
    emit( 'lineEndChange', lineNumber );
  }
</script>

<template>
  <div class="code">
    <fieldset class="line-numbers">
      <legend class="visually-hidden">Line number start</legend>
      <label v-for="lineNumber in code.nrOfLines">
        <input name="start" type="radio" :data-line-nr="lineNumber" @click="updateLineNumberStart">
        {{ lineNumber }}
      </label>
    </fieldset>
    <fieldset class="line-numbers">
      <legend class="visually-hidden">Line number end</legend>
      <label v-for="lineNumber in code.nrOfLines">
        <input name="end" type="radio" :data-line-nr="lineNumber" @click="updateLineNumberEnd">
        {{ lineNumber }}
      </label>
    </fieldset>
    <pre><code>{{ code.code }}</code></pre>
  </div>
</template>

<style scoped>
  .code {
    display: grid;
    grid-template-columns: max-content max-content 1fr;
  }

  fieldset {
    border: none;
    padding: 0;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .line-numbers {
    display: flex;
    flex-direction: column;
  }

  .line-numbers label {
    display: block;
    font-size: 13px;
    padding: 0 4px;
    height: 24px;
    min-width: 64px;
  }

  pre {
    background-color: black;
    color: white;
    padding-inline: 1em;
    margin-block: 0;
    font-size: 1em;
    line-height: 24px;
  }
</style>