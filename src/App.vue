<script setup>
  import { ref } from "vue";

  import CodeView from "./components/CodeView.vue";
  import CommentList from "./components/CommentList.vue";
  import CommentForm from "./components/CommentForm.vue";
  
  import CodeSnippet from "./model/CodeSnippet";
  import Comment from "./model/Comment";

  const code = `function foo( bar ) {
  console.log( bar );
  console.log( bar + bar );
}

foo(2);

console.log( 'done' );
`;

  const codeSnippet = new CodeSnippet( code );

  const comment = ref( new Comment( codeSnippet, "hansjovis" ) );

  function onLineSelected( lineNumber ) {
    comment.value.lineStart = lineNumber;
    comment.value.lineEnd = lineNumber;
  }
</script>

<template>
  <main>
    <CodeView 
      :code="codeSnippet" 
      @lineSelected="onLineSelected" 
    />
    <CommentForm 
      :comment="comment"
    />
    <CommentList />
  </main>
</template>

<style scoped>

</style>
