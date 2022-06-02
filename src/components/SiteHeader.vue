<template>
    <div id="site_header">
        <!-- Container principale -->
        <div class="container-xl p-0 flex_cent h-100">
            <div class="row h-100 p-0 w-100 flex-column flex_cent">
                <!-- BrandName (completo ma non statico) -->
                <div class="col-3 p-1 mb-4">
                    <h3 class="mb-0">BrandName</h3> 
                </div>
                <!-- Title&Subtitle -->
                <div class="col-10 p-3 mb-3">
                    <h1>What's your main value proposition?</h1>
                    <span>Suspendisse eget condimentum mi. Aenean vehicula risus quis hendrerit pulvinar</span>
                </div>
                <!-- Call To Action -->
                <div class="col-6 p-5 flex_cent h-50">
                    <!-- this is a component, even for Footer site -->
                    <form class="h-100 w-75 flex_cent flex-column" action="#">
                        <!-- Call to action Title -->
                        <h5 class="mb-5 w-75 mt-1">Let your visitor know what they're getting.</h5>
                        <!-- Name goes Here -->
                        <input type="text" class="form-control mb-3 p-2" placeholder="Name">
                        <!-- Email goes Here -->
                        <input type="email" class="form-control mb-4 p-2" placeholder="Email">
                        <!-- Button Call To Action -->
                        <button class="p-2">Call to action</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteHeader"
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';

</style>