<template>
    <div v-if="(image && contact_name)" class="top-bar">
        <div class="icon-display-area">
            <fa icon="arrow-left" size="xl" @click="emptyMessageArea"/>
        </div>
        <ImageView :image="image" :contact="contact_name" />
        <div class="message-area-top-bar">
            <div class="contact-name-display">
                {{ contact_name }}
                <div class="last-seen-status">
                    <div class="online-status" v-if="online">Online</div>
                    <div class="online-status" v-else-if="last_seen">Last Seen at {{ last_seen }}</div>
                </div>
            </div>
            <div class="top-bar-right-space">

            </div>
        </div>
    </div>
</template>

<script>
import ImageView from "../ImageView.vue";

export default {
    name: "TopBar",
    components: { ImageView },
    props: { image: String, contact_name: String, last_seen: String, online: Boolean },
    methods: {
        emptyMessageArea() {
            this.emitter.emit('emptyMessage');
        }
    }
}
</script>

<style>
.top-bar {
    border-radius: 5%;
    min-width: 70%;
    max-width: 70%;
    height: 60px;
    z-index: 1;
    position: fixed;
    top: 0;
    background: rgb(240, 247, 145);
    display: flex;
    padding-top: 4px;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;
}

.icon-display-area {
    height: inherit;
    display: flex;
    flex-direction: column;
    margin-left: 7px;
    margin-right: 7px;
    justify-content: center;
}

.message-area-top-bar {
    display: flex;
    width: 100%;
}

.contact-name-display {
    font-weight: bold;
    font-size: 130%;
    text-align: left;
    padding-left: 10px;
}

.last-seen-status {
    font-weight: normal;
    font-size: 70%;
    opacity: 0.75;
    word-wrap: normal;
}

.top-bar-right-space {
    display: flex;
    height: 100%;
    width: 100%;
}

.online-status {
    width: 100%;
    padding-right: 100px;
}
</style> 