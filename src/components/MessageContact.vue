<template>
    <div class="contact" @click="changeMessages">
        <div class="contact-image">
            <ImageView :image="image" :contact="contact_name" />
        </div>
        <div class="contact-first-row">
            <div class="contact-name">
                {{ contact_name }}
            </div>
            <div class="contact-message-details">
                <div class="contact-message">
                    {{ message }}
                </div>
                <div class="contact-message-time">
                    {{ time }}
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
    props: { contact_name: String, time: String, message: String, image: String },
    data() {
        return {}
    },
    methods: {
        changeMessages() {
            this.emitter.emit('loadMessage', { contact_name: this.contact_name, time: this.time, message: this.message, image: this.image })
        }
    }
}
</script>

<style>
.contact {
    width: 100%;
    display: flex;
    padding: 10px;
    border-radius: 3px;
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