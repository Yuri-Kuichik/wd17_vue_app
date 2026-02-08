<script>
export default {
    data() {
        return {
            posts: [],
        }
    },
    
    mounted() {
        this.getPosts();
    },

    methods: {
        async getPosts() {
            const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?author__course_group=15&limit=5');
            const data = await response.json();
            this.posts = data.results;
        }
    },
}
</script>

<template>
    <div class="container">
        <ul class="list">
            <li v-for="post in posts" :key="post.id" class="card">
                <div class="img__wrapper">
                    <img :src="post.image" :alt="post.title" class="img">
                </div>
                <div class="content">
                    <span class="date">{{ new Date(post.date).toLocaleDateString() }}</span>
                    <h3 class="title">{{ post.title }}</h3>
                    <p class="description">{{ post.description }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    padding: 20px 0;
}

.list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    list-style: none;
    padding: 0;
}

.card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
}

.card:hover {
    transform: translateY(-5px);
}

.img__wrapper {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.date {
    font-size: 12px;
    color: #888;
    margin-bottom: 8px;
}

.title {
    margin: 0 0 12px 0;
    font-size: 22px;
    color: #2c3e50;
    line-height: 1.4;
}

.description {
    font-size: 18px;
    color: #555;
    line-height: 1.6;
    max-height: 90px;
    overflow: hidden;
}
</style>