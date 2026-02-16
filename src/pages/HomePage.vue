<script>
import BaseButton from '@/components/BaseButton.vue';
import PostList from '@/components/PostList.vue';
export default {
  components: {
    PostList
  },

  data() {
    return {
      posts: [],
      searchText: '',
      baseUrl: 'https://studapi.teachmeskills.by',
      limit: 'limit=6',
    }
  },

  created() {
    this.getPosts();
  },

  methods: {
    async getPosts() {
      
      const queryParams = `?author__course_group=15&${this.limit}${ this.searchText ? `&search=${ this.searchText }` : '' }`
      const url = `${this.baseUrl}/blog/posts/${queryParams}`
      const response = await fetch(url);
      const data = await response.json();
      this.posts = data.results;
    },

    changeSearchText(value) {
      this.searchText = value
    }
  },
}
</script>

<template>
  <BaseLayout>
    <div class="search-line">
      <BaseInput
        @change-value="changeSearchText"
        placeholder="Input search text"
        class="search-input"
        name="search-input"
      />
      <BaseButton
        text="Search"
        size="s"
        class="search-button"
        @click="getPosts"
      />
    </div>
    <PostList :posts />
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
