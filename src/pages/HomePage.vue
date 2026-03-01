<script>
import PostList from '../components/PostList.vue'

export default {
  components: {
    PostList
  },
  data() {
    return {
      count: 0,
      currentButtton: '',
      arrData: [
        {
          userName: 'Alex',
          status: 'admin',
          id: 1,
        },
        {
          userName: 'Anton',
          status: 'regular',
          id: 2,
        },
        {
          userName: 'Ivan',
          status: 'regular',
          id: 3,
        }
      ]
      
    }
  },

  methods: {
    increment() {
      this.count++
      this.currentButtton = '+'
    },

    decrement() {
      this.count--
      this.currentButtton = '-'      
    }
  }
}
</script>

<template>
  <button
    class="btn"
    v-bind:class="{active: this.currentButtton === '-'}"
    @click="decrement"
  >
    Вы уменьшили меня на 1 {{ count }} раз.
  </button>
  <button
    class="btn"
    v-bind:class="{active: this.currentButtton === '+'}"
    @click="increment"
  >
    Вы увеличили меня на 1 {{ count }} раз.
  </button>

  <h2 v-show="count < 6">Слишком мало</h2>
  <h2 v-show="count > 5 && count < 11">Средне</h2>
  <h2 v-show="count > 10">Слишком много</h2>

  <section>
    <div v-for="user in arrData">
      <h2>User Name: {{ user.userName }}</h2>
      <p>User status: {{ user.status }}</p>
    </div>
  </section>

  <BaseLayout>
    <h2>Post list</h2>
    
      <PostList />
    
  </BaseLayout>
  
</template>
