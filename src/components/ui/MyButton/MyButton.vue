<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped lang="scss">
@import 'MyButton.module.scss';
</style>