<script>
import RegistrationForm from'@/components/RegistrationForm.vue';
import SignInForm from'@/components/SignInForm.vue';

export default {
    components: {
        RegistrationForm,
        SignInForm
    },

    data: () => {
        return {
            activeComponentName: 'SignInForm'
        }
    },

    methods: {
        changeActiveComponent(name) {
            this.activeComponentName = name
        }
    },

    computed: {
        isActiveSignInForm() {
            return this.activeComponentName === 'SignInForm'
        }
    }
}

</script>

<template>
    <BaseLayout>
        <div class="login-page">
            <div class="form-switch">
                <span 
                    :class="{active: isActiveSignInForm}" 
                    @click="changeActiveComponent('SignInForm')"
                >
                    Sign In Form
                </span>
                <span 
                    :class="{active: !isActiveSignInForm}"
                    @click="changeActiveComponent('RegistrationForm')"
                >
                    Registration Form
                </span>
            </div>
            <KeepAlive>
                <component 
                    :is="isActiveSignInForm ? 'SignInForm' : 'RegistrationForm'" 
                    class="form-wrapper"
                />
            </KeepAlive>
        </div>
    </BaseLayout>
</template>

<style scoped>
.login-page {
    padding: 40px 32px;
    border: 1px solid rgb(207, 214, 220);
    border-radius: 24px;
    box-shadow: rgba(100, 100, 100, 0.4) 0px 8px 20px;
}

.form-switch {
    display: flex;
    gap: 12px;
    border-bottom: solid 1px rgba(0, 0, 0, .12);

    span {
        cursor: pointer;
        padding: 12px 16px;
        border-bottom: solid 1px transparent;

        &.active {
            border-bottom: solid 2px rgb(253, 211, 42);
        }
    }
}

.form-wrapper {
    padding: 2rem;
    max-width: 480px;
    border-radius: 8px;
    flex-grow: 1;
}

</style>