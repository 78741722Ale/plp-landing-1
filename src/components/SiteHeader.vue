<template>
    <div id="site_header">
        <!-- Container principale -->
        <div class="container-xl p-0 flex_cent h-100 bordo">
            <div class="row h_80 p-0 w-100 bordo flex-column d-flex justify-content-start align-items-center">
                <!-- BrandName -->
                <div class="col-3 bg_try p-2 mb-5">Brand name goes here</div>
                <!-- Title&Subtitle -->
                <div class="col-10 bg_try p-3 mb-5">
                    <h1>Title goes here</h1>
                    <h5>Subtitles goes here</h5>
                </div>
                <!-- Call To Action -this is a component, even for Footer site -->
                <div class="col-6 flex_cent h-50 bg_try">
                    <form class="h-100 w-75 flex_cent flex-column bordo" action="#">
                        <!-- Call to action Title -->
                        <h5 class="mb-5 mt-5">Call to action title goes here</h5>
                        <!-- Name goes Here -->
                        <input type="text" class="form-control mb-3 w-75 p-2" id="exampleFormControlInput1" placeholder="Name goes Here">
                        <!-- Email goes Here -->
                        <input type="email" class="form-control mb-3 w-75 p-2" id="exampleFormControlInput1" placeholder="Email goes Here">
                        <!-- Button Call To Action -->
                        <button class="btn-primary p-1 w-75">Call to action</button>
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