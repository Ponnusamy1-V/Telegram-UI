<template>
    <div class="left-bar">
        <div v-for="contact in leftbardata.concat(leftbardata).concat(leftbardata).concat(leftbardata)" :key="contact" class="contact-items">
            <MessageContact class="message-contact" :message="contact" />
        </div>
    </div>
</template>

<script>
import MessageContact from "./MessageContact.vue"

export default {
    name: "LeftBar",
    components: {
        MessageContact
    },
    props: {leftbardata: Object},
    data() {
        return {
        }
    }
}
</script>

<style>
.left-bar {
    height: 100%;
    width: 100%;
    background: rgb(230, 253, 230);
    overflow-y: scroll;
}

.message-contact {
    width: 100%;
}
</style>
<style scoped>
.contact-items *:hover {
    background-color: rgb(215, 238, 215);
}
</style>