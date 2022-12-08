<template>
    <div class="left-bar">
        <div class="left-contact-list">
            <div v-for="contact in leftbardata.concat(leftbardata).concat(leftbardata).concat(leftbardata)"
                :key="contact" class="contact-items">
                <MessageContact class="message-contact" :message="contact" />
            </div>
        </div>
        <div class="resizeable-bar"></div>
    </div>
</template>

<script>
import MessageContact from "./MessageContact.vue"

export default {
    name: "LeftBar",
    components: {
        MessageContact
    },
    props: { leftbardata: Object },
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
    overflow-y: scroll;
    display: flex;
    flex-wrap: nowrap;
}

.left-bar .contact-items {
    min-width: 100%;
}

.left-contact-list {
    flex-wrap: wrap;
}

.resizeable-bar {
    display: block;
    background: rgb(33, 33, 33);
    cursor: col-resize;
    min-width: 1mm;
    overflow-y: scroll;
}

.resizeable-bar:hover {
    min-width: 2mm;
}

.left-bar::-webkit-scrollbar {
    display: none;
}

.left-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.message-contact {
    width: 100%;
}
</style>
<style scoped>
.contact-items *:hover {
    background-color: rgb(43, 42, 53);
}
</style>