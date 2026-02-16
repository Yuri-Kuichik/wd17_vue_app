<script>
import BaseLayout from '@/components/BaseLayout.vue';
import VueSpinner from '@/components/VueSpinner.vue';

export default {
    data() {
        return {
            postData: null,
        }
    },

    async created() {
        await this.getPost();
    },

    methods: {
        async getPost() {
            if(this.$route.params.id){
                const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${this.$route.params.id}`);
            const data = await response.json();
            this.postData = data;
            }            
        }
    },
}
</script>

<template>
    <BaseLayout>
        <div class="post-container">
            <VueSpinner v-if="!postData" />
            <article v-else class="post-content">
                <h3 class="post-title">
                    {{ postData.title }}
                </h3>

                <div class="post-date__wrapper">
                    <span class="post-date">{{ new Date(postData.date).toLocaleDateString() }}</span>
                </div>

                <div class="post-image__wrapper">
                    <img :src="postData.image" :alt="postData.title" class="post-image">
                </div>
                <div class="post-text">
                    <p>
                        {{ postData.text }}
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