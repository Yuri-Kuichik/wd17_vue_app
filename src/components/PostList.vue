<script>
import { usePostStore } from '@/stores/posts';

export default {
    setup() {
        const postStore = usePostStore();
        return {
            postStore
        }
    },

    methods: {
        openPostPage(postId) {
            this.$router.push({ name: 'post', params: { id: postId } })
        },
    },
}
</script>

<template>
    <div class="container">
        <ul class="list">
            <li v-for="post in postStore.posts" :key="post.id" class="card" @click="openPostPage(post.id)">
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
    padding: 10px;
}

.card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
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
    align-items: start;
    justify-content: start;
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
    text-align: start;
}

.description {
    font-size: 18px;
    color: #555;
    line-height: 1.6;
    max-height: 90px;
    overflow: hidden;
    text-align: start;
}
</style>