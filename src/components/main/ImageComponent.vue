<template>
    <div id="image_component">
        <!-- Container  -->
        <div :class="container_class">
            <div :class="row_class">
                <!-- Section Name -->
                <div class="col-3 p-1">
                    <h6 class="mb-0">{{section_title}}</h6>
                </div>
                <!-- Title&Subtitle -->
                <div class="col-12 h-25 mb-5 flex_cent flex-column">
                    <!-- Title -->
                    <h2 class="w_60 mt-1 mb-0 pb-3">{{title}}</h2>
                    <!-- Subtitle -->
                    <span class="w-100">{{subtitle}}</span>
                </div>
                <!-- Three Cards -->
                <div class="col-12 h_60 p-0">
                    <!-- Sono da Ripetere (le col) in V-for -->
                    <div :class="row_card_class">
                        <!-- First - da Ripetere (le col) in V-for -->
                        <div v-for="(element, index) in card_component" :key="index" :class="single_card_class">
                            <!-- Upper Zone - image -->
                            <div class="col-12 h-75 p-0 m-0">
                                <img :src="element.img" :alt="element.desc">
                            </div>
                            <!-- Under Zone - Text -->
                            <div :class="card_under_zone">
                                <!-- Title -->
                                <h5>{{element.title}}</h5>
                                <!-- Subtitle -->
                                <span>{{element.subtitle}}</span>
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
    name:"ImageComponent",
    data() {
        return {
            /* Dynamic class */
            container_class: "container-xl p-0 flex_cent h-100",
            row_class: "row h_85 image_zone w-100",
            row_card_class :"row-cols-3 gap-4 w-100 h-100 flex_cent m-0 p-0",
            single_card_class : "col-auto card_zone w_32 h-100 p-0 flex-column flex-cent",
            card_under_zone : "col-12 pb-3 h-25 flex-column d-flex justify-content-end align-items-start",
            /* Dynamic content */
            section_title : "Image",
            title:"Add a reason to look at these images",
            subtitle:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ea facilis vero, minima doloribus quia reprehenderit modi rerum inventore aliquam quam velit ut perspiciatis fugiat accusamus iste sapiente vel? Quidem molestiae veritatis rerum dicta laboriosam cumque quisquam cum delectus ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio vel repellendus dolorem assumenda maiores dignissimos?",
            /* Array */
            card_component : 
            [   
                /* First Card */
                {
                    img: require("@/assets/img/card_img.jpg"),
                    desc: "Card Image",
                    title: "Add a catchy headline",
                    subtitle: "Saggitis non lectus et"
                },
                /* Second Card */
                {
                    img: require("@/assets/img/card_img.jpg"),
                    desc: "Card Image",
                    title: "Add a catchy headline",
                    subtitle: "Saggitis non lectus et"
                },
                /* Third Card */
                {
                    img: require("@/assets/img/card_img.jpg"),
                    desc: "Card Image",
                    title: "Add a catchy headline",
                    subtitle: "Saggitis non lectus et"
                },
            ]
        }
    },
}
</script>

<style lang="scss">
/* Import of stylesheet */
@import '@/assets/sass/partials/main.scss';
</style>