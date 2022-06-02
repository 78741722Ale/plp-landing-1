<template>
    <!-- Components -->
    <div id="site_main">
        <!-- Image component (add a reason to..) -->
        <ImageComponent />
        <!-- App Download component (provide a reason to..) -->
        <AppComponent />
        <!-- Media Player component (provide a reason to watch..) -->
        <PlayerComponent />
        <!-- Reference component (Include a short..) -->
        <ReferenceComponent />
    </div>
</template>

<script>
/* Import components of Sitemain */
import ImageComponent from '@/components/main/ImageComponent.vue'
import AppComponent from '@/components/main/AppComponent.vue'
import PlayerComponent from '@/components/main/PlayerComponent.vue'
import ReferenceComponent from '@/components/main/ReferenceComponent.vue'


export default {
    name: "SiteMain",
    /* Components */
    components: {
        ImageComponent,
        ReferenceComponent,
        PlayerComponent,
        AppComponent
    }    
}
</script>

<style lang="scss" scoped>
/* Import of stylesheet */
@import '@/assets/sass/partials/main.scss';
</style>