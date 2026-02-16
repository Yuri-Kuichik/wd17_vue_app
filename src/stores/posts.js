import { defineStore } from 'pinia'

export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [],
    postData: null,
    searchText: '',
    loading: false,
    baseUrl: 'https://studapi.teachmeskills.by',
    limit: 'limit=6',
  }),

  actions: {
    async getPosts() {
      this.loading = true
      const queryParams = `?author__course_group=15&${this.limit}${this.searchText ? `&search=${this.searchText}` : ''}`
      const url = `${this.baseUrl}/blog/posts/${queryParams}`
      const response = await fetch(url);
      const data = await response.json();
      this.posts = data.results;
      this.loading = false
    },

    async getPost(id) {
      this.loading = true
      const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`);
      this.postData = await response.json();
      this.loading = false
    }
  },
})
