<script>
import BaseButton from '@/components/BaseButton.vue';
import PostList from '@/components/PostList.vue';
import VueSpinner from '@/components/VueSpinner.vue';
import { usePostStore } from '@/stores/posts';

export default {
  components: {
    PostList
  },

  data() {
    return {
    }
  },

  setup() {
    const postStore = usePostStore();
    return {
      postStore
    }
  },

  created() {
    this.postStore.getPosts();
  },

  methods: {
    changeSearchText(value) {
      this.postStore.searchText = value
    }
  },
}
</script>

<template>
  <BaseLayout>
    <div class="search-line">
      <BaseInput @change-value="changeSearchText" placeholder="Input search text" class="search-input"
        name="search-input" />
      <BaseButton text="Search" size="s" class="search-button" @click="postStore.getPosts" />
    </div>
    <VueSpinner v-if="postStore.loading" />
    <PostList v-else />
  </BaseLayout>
</template>

<style scoped>
.search-line {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
}

.search-input {
  width: 100%;
}

.search-button {
  margin-bottom: 5px;
}
</style>
