<script>
export default {
  name: 'PostList',
  data() {
    return {
      posts: [],
      loading: false,
      error: null
    }
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('ru-RU', options);
    },
    
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await fetch(
          'https://studapi.teachmeskills.by/blog/posts/?author__course_group=15&limit=5'
        );
        
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        this.posts = data.results || [];
        
      } catch (err) {
        this.error = 'Не удалось загрузить посты. Попробуйте позже.';
        console.error('Ошибка загрузки:', err);
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

<template>
  <div class="post-list">
    <div v-if="loading" class="loading">
      <VueSpinner />
    </div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>

    <div v-else class="posts">
      <article 
        v-for="post in posts" 
        :key="post.id" 
        class="post-card"
      >
        <h3>{{ post.title }}</h3>
        <p class="date">{{ formatDate(post.date) }}</p>
        <p class="description">{{ post.description }}</p>
        <p class="lesson">Урок №{{ post.lesson_num }}</p>
        <img 
          v-if="post.image" 
          :src="post.image" 
          :alt="post.title"
          class="post-image"
        >
      </article>
    </div>
  </div>
</template>

<style scoped>
.post-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.loading {
  display: flex;
  justify-content: center;
  padding: 40px;
}

.error {
  text-align: center;
  padding: 40px;
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
}

.posts {
  display: grid;
  gap: 24px;
}

.post-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-card h3 {
  margin-top: 0;
  color: #333;
  font-size: 24px;
}

.post-card .date {
  color: #666;
  font-size: 14px;
  margin: 8px 0;
}

.post-card .description {
  color: #444;
  line-height: 1.6;
  margin: 12px 0;
}

.post-card .lesson {
  color: #0066cc;
  font-weight: 500;
  margin: 8px 0;
}

.post-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 16px;
}
</style>