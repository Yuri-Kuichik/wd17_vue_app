<script>
    export default{
        data() {
            return {
                username: '',
                password: '',
                email: '',
                course_group: 15,
                emailErrorMsg: '',
                passwordErrorMsg: ''
            }
        },

        methods: {
            changeVal(val) {
                console.log(val)
            },
            sendForm() {
                let data = {
                    email: this.email,
                    password: this.password,
                    username: this.username,
                    course_group: 15,
                }

                console.log(data)
            }
        },
    }
</script>

<template>
    <div class="registration-form-wrapper">
        <form class="sign-in-form">
            <h2>Registration form</h2>
            

        </form>
    </div>
</template>

<style lang="scss" scoped>
  .sign-in-form {
    &_button {
        margin-top: 1rem;
    }
  }
</style>