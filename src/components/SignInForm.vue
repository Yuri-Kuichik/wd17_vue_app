<script>
    export default{
        data() {
            return {
                email: '',
                password: '',
                emailErrorMsg: '',
                passwordErrorMsg: '',
                loading: false,
                resData: null
            }
        },  
        
        methods: {
            async sendForm() {
                this.loading = true

                let data = {
                    email: this.email,
                    password: this.password
                }

                let res = await fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                console.log(res)

                this.resData = await res.json()

                this.loading = false
            }
        }
    }

</script>

<template>
    <div>
        <form class="sign-in-form">
            <h2>Sign In form</h2>
            
        </form>
    </div>
</template>

<style lang="scss" scoped>
.sign-in-form {
    &_button {
        margin-top: 1rem;
        width: 100%;
    }
}
</style>