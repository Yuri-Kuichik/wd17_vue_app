<script>
</script>

<template>
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