<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  components: {
    BaseLayout
  },

  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <BaseLayout>
    <h2>Count is: {{ count }}</h2>
    <button 
      class="btn" 
      @click="count++"
    >
      Click me
    </button>
  </BaseLayout>
  
</template>
