<script>
import BaseLayout from '@/components/BaseLayout.vue';
import PostList from '@/pages/PostList.vue';
export default {
  components: {
    BaseLayout,
    PostList
  },

  data() {
    return {
      
    }
  }
}
</script>

<template>
  <BaseLayout>
    <PostList />
  </BaseLayout>  
</template>

<style scoped>
</style>
