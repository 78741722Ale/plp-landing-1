<template>
    <div id="site_footer">
        <!-- Container principale -->
        <div class="container-xl p-0 flex_cent h-100">
            <div class="row h_85 bordo p-0 d-flex justify-content-start align-items-center flex-nowrap flex-column w-100">
                <!-- Section Name -->
                <div class="col-3 p-1 mb-5 bg_altro">Section name goes here</div>    
                <!-- Title&Subtitle -->
                <div class="col-9 p-4 mb-5 bg_altro">
                    <h2>Footer Title goes here</h2>
                </div>  
                <!-- Call To Action -this is a component, even for Footer site -->
                <div class="col-6 p-3 flex_cent h-50 mb-5">
                    <form class="h-100 w-75 bg_altro flex_cent flex-column" action="#">
                        <!-- Call to action Title -->
                        <h5 class="mb-5">Call to action title goes here</h5>
                        <!-- Name goes Here -->
                        <input type="text" class="form-control mb-3 w-75 p-2" id="exampleFormControlInput1" placeholder="Name goes Here">
                        <!-- Email goes Here -->
                        <input type="email" class="form-control mb-3 w-75 p-2" id="exampleFormControlInput1" placeholder="Email goes Here">
                        <!-- Button Call To Action -->
                        <button class="btn-primary p-1 w-75">Call to action</button>
                    </form>
                </div>
                <!-- Copy Text -->
                <div class="col-3 mt-5 p-1 bg_altro">Copy Text Goes Here</div>   
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteFooter"
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>