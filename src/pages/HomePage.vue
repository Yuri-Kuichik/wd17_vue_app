<script>
export default {
  provide: {
    message: 'привет!'
  },

  data() {
    return {
      isVisibleModal: false
    }
  },

  methods: {
    showModalWindow() {
      this.isVisibleModal = !this.isVisibleModal
    },

    closeModalWindow() {
      this.isVisibleModal = !this.isVisibleModal
    }
  }
}

</script>

<template>
  <BaseLayout>
    <h2>Post list</h2>
    <BaseButton 
        text="Go to Login page"
        @click="$router.push('/login')"
      />

    <BaseModal 
      v-if="isVisibleModal"
      @close="closeModalWindow"
    >
      <template v-slot:header>Title</template>
      <template v-slot:description>There will be a PostList component here</template>
      <template v-slot:actiions>
        <BaseButton 
          text="Open window"
          @click="showModalWindow"
        />
      </template>
    </BaseModal>
    
    <!-- There will be a PostList component here -->
    
  </BaseLayout>
  
</template>
