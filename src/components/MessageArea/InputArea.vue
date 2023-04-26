<template>
    <div class="bottom-area">
        <div class="bottom-area-container">
            <div class="emoji-selection">
                <fa icon="fa fa-smile" class="smile-icon" size="xxl" />
            </div>
            <div class="chat-input-area no-scrollbar" contenteditable="true" v-on:keypress.ctrl.enter="insertNewMessage"
                placeholder="Type a Message..." oninput="if(this.innerHTML.trim()==='<br>')this.innerHTML=''" />
            <div class="send-messgae-btn" @click="insertNewMessage">
                <fa icon="fa fa-paper-plane" size="xl" />
            </div>
        </div>
    </div>
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
        insertNewMessage() {
            this.newMessage = document.getElementsByClassName("chat-input-area")[0].innerText || ""
            if (!this.newMessage || !this.newMessage?.trim()) {
                document.getElementsByClassName("chat-input-area")[0].innerText = ""
                return
            }
            let message = {
                message: this.newMessage?.trim(),
                self: true,
                timestamp: this.getNow()
            }
            this.emitter.emit('addNewMessage', message);
            document.getElementsByClassName("chat-input-area")[0].innerText = ""
            document.getElementsByClassName("chat-input-area")[0].focus()
        }
    },
    mounted() {
        document.getElementsByClassName("chat-input-area")[0].focus()
    }
}
</script>

<style>
.bottom-area {
    min-height: 50px;
    max-height: 150px;
    display: flex;
    min-width: var(--right-width);
    max-width: var(--right-width);
    /* z-index: 1; */
    position: fixed;
    bottom: 0;
    margin-bottom: 5px;
    margin-left: 2%;
}

.bottom-area-container {
    min-width: var(--input-bar-width);
    max-width: var(--input-bar-width);
    min-height: inherit;
    max-height: inherit;
    display: flex;
    gap: 10px;
    align-items: flex-end;
}

.chat-input-area {
    border-radius: 10px;
    width: 100%;
    max-height: inherit;
    min-height: 60px;
    text-align: left;
    font-size: 120%;
    padding: 18px;
    word-wrap: break-word;
    background: rgb(33, 33, 33);
    justify-content: center;
    overflow-y: scroll;
    box-sizing: border-box;
}

[contenteditable][placeholder]:empty:before {
    content: attr(placeholder);
    position: absolute;
    color: gray;
    background-color: transparent;
}

.send-messgae-btn,
.emoji-selection {
    cursor: pointer;
    min-width: 50px;
    display: flex;
    justify-content: center;
    color: wheat;
    min-height: 50px;
    box-sizing: border-box;
    background: rgb(33, 33, 33);
    border-radius: 50%;
    align-items: center;
    margin-bottom: 5px;
}

.send-messgae-btn:hover,
.emoji-selection:hover {
    font-size: 130%;
    transition: 0.25s;
    color: rgb(118, 106, 200);
}

.smile-icon {
    background: wheat;
    border-radius: 50%;
    font-size: 1.75rem;
    padding: 0.125rem;
    color: rgb(33, 33, 33);
}

.emoji-selection:hover .smile-icon {
    transition: 0.25s;
    background: rgb(118, 106, 200);
}
</style>