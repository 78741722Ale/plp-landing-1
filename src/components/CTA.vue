<template>
    <form :class="form_class" action="#">
        <!-- Title -->
        <h5 class="mb-5 w-75 mt-1">{{form_tilte}}</h5>
        <!-- Name -->
        <input type="text" class="form-control mb-3 p-2" :placeholder="form_text">
        <!-- Email -->
        <input type="email" class="form-control mb-4 p-2" :placeholder="form_email">
        <!-- Button -->
        <button class="p-2">{{form_btn}}</button>
    </form>
</template>

<script>
export default {
    name: 'CTAcomponent',
    data() {
        return {
            /* Class */
            form_class : "h-100 w-75 flex_cent flex-column",
            /* Content */
            form_tilte : "Let your visitor know what they're getting.",
            form_text : "Name",
            form_email : "Email",
            form_btn : "Call to action",
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';

</style>