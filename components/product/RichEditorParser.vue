<!-- eslint-disable max-len -->
<template>
  <div class="rich-editor">{{ content }}</div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

const content = ref("");

const props = defineProps({
  editorContent: {
    type: String,
    required: true,
  },
});

onBeforeMount(() => {
  content.value = parseMarkdown(props.editorContent);
});

// This function take a string that contains markdown and return as html
const parseMarkdown = (content: string) => {
  const markdown = require("markdown-it")({
    html: true,
    linkify: true,
    typographer: true,
  });
  const result = markdown.render(content);
  return result;
};
</script>

<style scoped lang="scss">
.rich-editor {
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  ul {
    list-style: disc;
    margin: 1rem 0;
    padding-left: 1rem;
  }

  ol {
    list-style: decimal;
    margin: 1rem 0;
    padding-left: 1rem;
  }

  li {
    margin: 0.5rem 0;
  }

  p {
    margin: 1rem 0;
  }

  a {
    color: #4d7c0f;
    text-decoration: none;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
    color: #a3e635;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    border-left: 0.25rem solid #ddd;
    margin: 1rem 0;
    padding-left: 1rem;
  }
}
</style>
