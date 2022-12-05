<template>
    <div class="profile-image">
        <img @click="hideImage()" :src="image" alt="img">
    </div>
    <div v-if="showimage" @click.self="hideImage()" class="imageview-background">
        <div class="image-view-area">
            <div class="imageview-contact-name">
                {{ contact }}
            </div>
            <img class="image-display" :src="image">
        </div>
    </div>
</template>

<script>
export default {
    name: "ImageView",
    props: { contact: String, image: String },
    data() {
        return {
            showimage: false
        }
    },
    methods: {
        hideImage() {
            this.showimage = !this.showimage
        }
    }
}
</script>

<style>
.image-display {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}

.profile-image {
    border: 1px solid rgba(0, 0, 0, 0.288);
    border-radius: 50%;
    width: 49px;
    height: 49px;
    overflow: hidden;

}

.profile-image img {
    width: 100%;
    height: 100%;
}

.imageview-background {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    background: rgba(5, 5, 5, 0.9) !important;
    z-index: 1
}

.image-view-area {
    left: 25%;
    right: 25%;
    top: 20%;
    bottom: 20%;
    position: fixed;
}

.imageview-contact-name {
    color: white;
    text-align: left;
    padding-left: 1rem;
    font-size: 150%;
}
</style>