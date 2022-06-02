<template>
    <div id="site_header">
        <!-- Container principale -->
        <div :class="container_class">
            <div :class="row_class">
                <!-- BrandName -->
                <div class="col-3 p-1 mb-4">
                    <h3 class="mb-0">{{brand_name}}</h3> 
                </div>
                <!-- Title&Subtitle -->
                <div class="col-10 p-3 mb-3">
                    <h1>{{hero_title}}</h1>
                    <span>{{hero_subtitle}}</span>
                </div>
                <!-- Call To Action -->
                <div class="col-6 p-5 flex_cent h-50">
                    <!-- Call to action component, avaiable even for the footer site -->
                    <CTA />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* Import of Components */
import CTA from '@/components/CTA.vue'

export default {
    name: "SiteHeader",
    components: {
        CTA,
    },
    data() {
        return {
            /* Header Classes */
            container_class : "container-xl p-0 flex_cent h-100",
            row_class : "row h-100 p-0 w-100 flex-column flex_cent",
            /* Header Content */
            brand_name : "BrandName",
            hero_title : "What's your main value proposition?",
            hero_subtitle : "Suspendisse eget condimentum mi. Aenean vehicula risus quis hendrerit pulvinar",

        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';


</style>