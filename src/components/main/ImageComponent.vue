<template>
    <div id="image_component">
        <!-- Container principale -->
        <div class="container-xl p-0 flex_cent h-100">
            <div class="row h_85 p-0 d-flex justify-content-start align-items-center flex-nowrap flex-column w-100">
                <!-- Section Name -->
                <div class="col-3 p-1">
                    <h6 class="mb-0">Image</h6>
                </div>
                <!-- Title&Subtitle -->
                <div class="col-12 h-25 mb-5 flex_cent flex-column">
                    <!-- Title -->
                    <h2 class="w_60 mb-0 pb-3">Add a reason to look at these images</h2>
                    <!-- Subtitle -->
                    <span class="w-100">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ea facilis vero, minima doloribus 
                        quia reprehenderit modi rerum inventore aliquam quam velit ut perspiciatis fugiat accusamus iste 
                        sapiente vel? Quidem molestiae veritatis rerum dicta laboriosam cumque quisquam cum delectus ipsam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio vel repellendus dolorem assumenda maiores dignissimos?
                    </span>
                </div>
                <!-- Three Cards -->
                <div class="col-12 h_60 p-0">
                    <!-- Sono da Ripetere (le col) in V-for -->
                    <div class="row-cols-3 gap-4 w-100 h-100 flex_cent m-0 p-0">
                        <!-- First - da Ripetere (le col) in V-for -->
                        <div class="col-auto card_zone w_32 h-100 p-0 flex-column flex-cent">
                            <!-- Upper Zone - image -->
                            <div class="col-12 h-75 p-0 m-0">
                                <img src="https://picsum.photos/200" alt="Image">
                            </div>
                            <!-- Under Zone - Text -->
                            <div class="col-12 pb-2 h-25 flex-column d-flex justify-content-end align-items-start">
                                <h5>Add a catchy headline</h5>
                                <span>Saggitis non lectus et</span>
                            </div>
                        </div>
                        <!-- Second -->
                        <div class="col-auto card_zone w_32 h-100 p-0 flex-column flex-cent">
                            <!-- Upper Zone - image -->
                            <div class="col-12 h-75 p-0 m-0">
                                <img src="https://picsum.photos/200" alt="Image">
                            </div>
                            <!-- Under Zone - Text -->
                            <div class="col-12 pb-2 h-25 flex-column d-flex justify-content-end align-items-start">
                                <h5>Add a catchy headline</h5>
                                <span>Saggitis non lectus et</span>
                            </div>
                        </div>                        
                        <!-- Third -->
                        <div class="col-auto card_zone w_32 h-100 p-0 flex-column flex-cent">
                            <!-- Upper Zone - image -->
                            <div class="col-12 h-75 p-0 m-0">
                                <img src="https://picsum.photos/200" alt="Image">
                            </div>
                            <!-- Under Zone - Text -->
                            <div class="col-12 pb-2 h-25 flex-column d-flex justify-content-end align-items-start">
                                <h5>Add a catchy headline</h5>
                                <span>Saggitis non lectus et</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ImageComponent"
}
</script>

<style lang="scss">
/* Import of stylesheet */
@import '@/assets/sass/partials/main.scss';
</style>