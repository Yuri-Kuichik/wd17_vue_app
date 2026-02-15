<script>
import BaseLayout from '@/components/BaseLayout.vue';
import VueSpinner from '@/components/VueSpinner.vue';
import { usePostStore } from '@/stores/posts';

export default {
    setup() {
        const postStore = usePostStore();
        return {
            postStore
        }
    },

    created() {
        const postId = this.$route.params.id;
        this.postStore.getPost(postId);
    },
}
</script>

<template>
    <BaseLayout>
        <div class="post-container">
            <VueSpinner v-if="postStore.loading" />
            <article v-else-if="postStore.postData" class="post-content">
                <h3 class="post-title">
                    {{ postStore.postData.title }}
                </h3>

                <div class="post-date__wrapper">
                    <span class="post-date">{{ new Date(postStore.postData.date).toLocaleDateString() }}</span>
                </div>

                <div class="post-image__wrapper">
                    <img :src="postStore.postData.image" :alt="postStore.postData.title" class="post-image">
                </div>
                <div class="post-text">
                    <p>
                        {{ postStore.postData.text }}
                    </p>
                </div>
            </article>
        </div>
    </BaseLayout>
</template>

<style scoped>
.post-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
    min-height: 100vh;
}

.post-title {
    font-size: 36px;
    color: #2c3e50;
    margin-bottom: 10px;
    line-height: 1.2;
}

.post-date__wrapper {
    margin-bottom: 30px;
}

.post-date {
    color: #888;
    font-size: 14px;
}

.post-image__wrapper {
    width: 30%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
}

.post-image {
    width: 100%;
    display: block;
    object-fit: cover;
    max-height: 500px;
}

.post-text {
    font-size: 20px;
    line-height: 1.8;
    color: #34495e;
    white-space: pre-line;
}
</style>