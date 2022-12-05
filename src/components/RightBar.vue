<template>
    <LeftBar class="left-bar-list"></LeftBar>
    <div class="message-space" @loadMessage="renderMessages">
        <TopBar :image="message.image" :contact_name="message.contact_name" last_seen="12:45"></TopBar>
    </div>
</template>

<script>
import LeftBar from './LeftBar.vue'
import TopBar from './MessageArea/TopBar.vue'


export default {
    name: "MessageSpace",
    components: { TopBar, LeftBar },
    data() {
        return {
            message: "Default"
        }
    },
    methods: {
        renderMessages(message) {
            this.message = message
        }
    },
    created() {
        this.emitter.on('loadMessage', this.renderMessages)
    },
    unmounted() {
        this.emitter.off('loadMessage', this.renderMessages)
    }
}
</script>

<style>
.left-bar-list {
    width: 35%;
    height: 100vh;
    min-width: 22rem;
}

.message-space {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.24);
    overflow-y: scroll;
}
</style>