<template>
    <div class="contact" @click="changeMessages">
        <div class="contact-image">
            <ImageView :image="message.image" :contact="message.contact_name" />
        </div>
        <div class="contact-first-row">
            <div class="contact-name">
                {{ message.contact_name }}
            </div>
            <div class="contact-message-details">
                <div class="contact-message">
                    {{ message.message }}
                </div>
                <div class="contact-message-time">
                    {{ message.time }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageView from "./ImageView.vue";

export default {
    name: "MessageContact",
    components: { ImageView },
    props: { message: Object },
    data() {
        return {}
    },
    methods: {
        changeMessages() {
            this.emitter.emit('loadMessage', this.message)
        }
    }
}
</script>

<style>
.contact {
    width: 100%;
    display: flex;
    padding: 10px;
    border-radius: 5px;
    background: #403e3e4d;
    border-bottom: 1px solid grey;
    cursor: pointer;
    box-sizing: border-box;
}

.contact-first-row {
    display: flex;
    width: 100%;
    padding-left: 10px;
    flex-wrap: wrap;
}

.contact-name {
    width: 100%;
    font-weight: bold;
    text-align: left;
}

.contact-image {
    height: 100%;
    text-align: center;
}

.contact-message-details {
    font-size: 80%;
    opacity: 0.75;
    display: flex;
    width: 100%;
}

.contact-message {
    text-align: left;
    width: 50%;
}

.contact-message-time {
    width: 50%;
    text-align: right;
}
</style>