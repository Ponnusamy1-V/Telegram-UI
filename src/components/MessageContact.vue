<template>
    <div class="contact" @click="changeMessages($event)">
        <div class="contact-image">
            <ImageView :image="message.image" :contact="message.contact_name" />
        </div>
        <div class="contact-first-row">
            <div class="contact-name">
                {{ message.contact_name }}
            </div>
            <div class="contact-message-details">
                <div class="contact-message">
                    {{ message.messages?.[message.messages.length -1]?.message }}
                </div>
                <div class="contact-message-time">
                    {{ message.messages?.[message.messages.length -1]?.timestamp }}
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
        changeMessages(event) {
            let sel = document.getElementsByClassName("selected-chat")
            for (let idx = 0; idx < sel.length; idx++) {
                if (sel[idx]!=event.target){
                sel[idx].classList.remove("selected-chat")
                }
            }
            event.target?.closest('.contact')?.classList?.add('selected-chat')
            this.emitter.emit('loadMessage', this.message)
        }
    }
}
</script>

<style>
.selected-chat {
    background: rgb(118, 106, 200) !important;
}

.contact {
    width: 100%;
    display: flex;
    padding: 10px;
    border-radius: 5px;
    background: rgb(44, 44, 44);
    /* background: linear-gradient(to bottom, rgb(44, 44, 44) 0%, rgb(20, 20, 20) 100%); */
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
    width: 100%;
    align-items: center;
    max-height: 15px;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
}

.contact-message-time {
    text-align: right;
    z-index: 1;
}
</style>