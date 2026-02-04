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

        computed: {
            isDisabledButton() {
                const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/
                return this.password.length < 6 || !EMAIL_REGEXP.test(this.email) || !this.username;
            }
        }
    }
</script>

<template>
    <div class="registration-form-wrapper">
        <form class="sign-in-form">
            <h2>Registration form</h2>
            <BaseInput 
                label="Name"  
                name="name" 
                placeholder="Enter your name" 
                :error-message="emailErrorMsg" 
                @change-value="changeVal"
            />
            <BaseInput 
                label="Email"  
                name="email" 
                placeholder="Enter your email" 
                :error-message="emailErrorMsg" 
                @change-value="changeVal"
            />
            <BaseInput 
                label="Password" 
                name="password" 
                placeholder="Enter your password" 
                :error-message="passwordErrorMsg"
                @change-value="changeVal"
            />
            <BaseButton 
                class="sign-in-form_button"
                @click.prevent="sendForm"
                :is-disabled="!username && !password && !email"
            />

        </form>
    </div>
</template>

<style lang="scss" scoped>
.registration-form {
    &_button {
        margin-top: 1rem;
    }
}
</style>