<template>
    <div class="chat-input-area" contenteditable="true" v-on:keypress.ctrl.enter="insertNewMessage"
        placeholder="Type a message..." oninput="if(this.innerHTML.trim()==='<br>')this.innerHTML=''" />
</template>

<script>
export default {
    name: "InputArea",
    data() {
        return {
            newMessage: ""
        }
    },
    methods: {
        getNow() {
            const today = new Date();
            return today.getHours() + ":" + today.getMinutes()
        },
        insertNewMessage($event) {
            this.newMessage = $event?.target?.innerText || ""
            let message = {
                message: this.newMessage,
                self: true,
                timestamp: this.getNow()
            }
            this.emitter.emit('addNewMessage', message);
            document.getElementsByClassName("chat-input-area")[0].innerText = ""
        }
    },
    mounted() {
        document.getElementsByClassName("chat-input-area")[0].focus()
    }
}
</script>

<style>
.chat-input-area {
    min-width: var(--input-bar-width);
    max-width: var(--input-bar-width);
    border-radius: 10px;
    min-height: 50px;
    max-height: 150px;
    text-align: left;
    font-size: 120%;
    padding: 18px;
    word-wrap: break-word;
    margin-bottom: 5px;
    z-index: 1;
    position: fixed;
    bottom: 0;
    background: rgb(33, 33, 33);
    justify-content: center;
    overflow: scroll;
    box-sizing: border-box;
}

[contenteditable][placeholder]:empty:before {
    content: attr(placeholder);
    position: absolute;
    color: gray;
    background-color: transparent;
}
</style>