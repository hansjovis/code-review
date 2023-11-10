<script setup>
  import CodeSnippet from '../model/CodeSnippet';

  const props = defineProps( {
    code: CodeSnippet
  } );

  const emit = defineEmits( [ 'lineSelected' ] );

  function selectLine( { target } ) {
    const lineNumber =  Number.parseInt( target.dataset.lineNr );
    emit( 'lineSelected', lineNumber );
  }
</script>

<template>
  <div class="code-view">
    <fieldset class="line-numbers">
      <legend class="visually-hidden">Line number start</legend>
      <label v-for="lineNumber in code.nrOfLines">
        <input :id="`L${lineNumber}`" class="visually-hidden" name="start" type="radio" :data-line-nr="lineNumber" @click="selectLine">
        <span>{{ lineNumber }}</span>
      </label>
    </fieldset>
    <pre class="code"><code>{{ code.code }}</code></pre>
  </div>
</template>

<style scoped>
  .code-view {
    display: grid;
    grid-template-columns: max-content 1fr;
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

  .line-numbers label span {
    display: block;
    font-size: 13px;
    padding: 0 4px;
    height: 24px;
    min-width: 64px;
  }
  .line-numbers label:hover {
    background-color: aqua;
  }

  .line-numbers label input[type=radio]:checked + span {
    display: block;
    background-color: aqua;
  }
</style>