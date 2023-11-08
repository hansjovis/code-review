<script setup>
    import useCommentStore from '../stores/comment-store';

    const store = useCommentStore();

    const comments = store.comments;
</script>

<template>
    <h2>Comments</h2>
    <ul>
        <li v-for="comment in comments">
            <article class="comment">
                <pre class="code"><code>{{ comment.snippet }}</code></pre>
                <p>{{ comment.comment }}</p>
            </article>
        </li>
    </ul>
</template>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
    }

    .comment {
        border: 1px solid gray;
        margin-block: 1em;
    }

    .comment p {
        padding: 1em;
    }
</style>