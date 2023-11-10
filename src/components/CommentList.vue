<script setup>
    import useCommentStore from '../stores/comment-store';

    const store = useCommentStore();

    const comments = store.comments;
</script>

<template>
    <h2>Comments</h2>
    <article v-for="comment in comments" class="comment">
        <details>
            <summary>
                <a :href="`/users/${comment.author}`">@{{ comment.author }}</a> added a comment for line {{ comment.lineNumberRange.start }}.
                <menu>
                    <button>Edit</button>
                    <button>Remove</button>
                </menu>
            </summary>
            <pre class="code"><code>{{ comment.snippet }}</code></pre>
            <p>{{ comment.comment }}</p>
        </details>
    </article>
</template>

<style scoped>
    .comment {
        position: relative;
        border: 1px solid gray;
        margin-block: 1em;
    }

    .comment summary {
        padding: 0.5em;
        cursor: default;
    }

    .comment menu {
        position: absolute;
        top: 0;
        right: 0;
    }

    .comment p {
        padding: 1em;
    }
</style>