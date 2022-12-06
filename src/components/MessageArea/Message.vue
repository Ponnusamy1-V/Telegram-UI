<template>
    <div class="message-box-display" :class="{ 'message-box-display-right': message.self }">
        <div v-if="message.self" class="message-info-from">

        </div>
        <div class="message-box" :class="{ 'from-message': message.self }">
            <div class="message-area">
                {{ message.message }}
            </div>
            <div class="message-timestamp">
                {{ message.timestamp }}
            </div>
        </div>
        <div v-if="!message.self" class="message-info-to">

        </div>
    </div>
</template>

<script>
export default {
    name: "MessageBar",
    props: { message: Object },
    mounted() {
        let e=document.getElementsByClassName('message-box-display')
        let y=e.length
        let r=e[y-1]
        r.scrollIntoView()
    }
}
</script>

<style>
.message-box-display {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 7px;
    display: flex;
}

.message-box {
    border-radius: 10px;
    max-width: 45%;
    color: black;
    background: rgb(187, 196, 187);
    box-shadow: 2px 2px 2px 2px #888888;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: content-box;
}

.from-message {
    background: rgb(86, 189, 91);
}

.message-timestamp {
    width: 100%;
    text-align: right;
    height: 10px;
    font-size: 60%;
    opacity: 0.9;
}

.message-area {
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    text-align: left;
}

.message-box-display-right {
    justify-content: flex-end;
}
</style>