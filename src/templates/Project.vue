<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.project.title }}</h1>
      <div class="markdown-body">
        <VueRemarkContent />
      </div>
    </div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Project ($id: ID!) {
  project(id: $id) {
    title
    excerpt
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title
    };
  }
};
</script>

<style src="../css/github-markdown.css" />
