<template>
    <LeftBar :leftbardata="leftbardata" class="left-bar-list"></LeftBar>
    <div v-if="message.contact_name" class="message-space" @loadMessage="renderMessages">
        <TopBar :image="message.image" :contact_name="message.contact_name" last_seen="12:45"></TopBar>
        <div class="chat-space">
            <div v-if="message.messages" style="width: 100%; height: 130px;"></div>
            <MessageBar v-for="message in message.messages" :key="message" :message="message"></MessageBar>
            <InputArea />
        </div>
    </div>
    <div v-else class="select-a-chat">
        <div class="select-a-chat-message">
            Select a chat to start conversation
        </div>
    </div>
</template>

<script>
import LeftBar from './LeftBar.vue'
import TopBar from './MessageArea/TopBar.vue'
import MessageBar from './MessageArea/Message.vue'
import InputArea from './MessageArea/InputArea.vue'


export default {
    name: "MessageSpace",
    components: { TopBar, LeftBar, MessageBar, InputArea },
    data() {
        return {
            message: {},
            leftbardata: [
                {
                    message: "Hello, how are you?",
                    contact_name: "Ponnusamy",
                    time: "20:45",
                    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
                    messages: [
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: true,
                            timestamp: "10:45 AM"
                        },
                        {
                            message: "Hi",
                            self: false,
                            timestamp: "10:46 AM"
                        },
                        {
                            message: "How are you?",
                            self: true,
                            timestamp: "10:46 AM"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: false,
                            timestamp: "10:47 AM"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: true,
                            timestamp: "10:45 AM"
                        },
                        {
                            message: "Hi",
                            self: false,
                            timestamp: "10:46 AM"
                        },
                        {
                            message: "How are you?",
                            self: true,
                            timestamp: "10:46 AM"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: false,
                            timestamp: "10:47 AM"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: true,
                            timestamp: "10:45 AM"
                        },
                        {
                            message: "Hi",
                            self: false,
                            timestamp: "10:46 AM"
                        },
                        {
                            message: "How are you?",
                            self: true,
                            timestamp: "10:46 AM"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: false,
                            timestamp: "10:47 AM"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: true,
                            timestamp: "10:45 AM"
                        },
                        {
                            message: "Hi",
                            self: false,
                            timestamp: "10:46 AM"
                        },
                        {
                            message: "How are you?",
                            self: true,
                            timestamp: "10:46 AM"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: false,
                            timestamp: "10:47 AM"
                        }
                    ]
                },
                {
                    message: "Hello",
                    contact_name: "Ponnusamy",
                    time: "23:45",
                    image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg",
                    messages: [
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: true,
                            timestamp: "10:45 AM"
                        },
                        {
                            message: "Hi",
                            self: false,
                            timestamp: "10:46 AM"
                        },
                        {
                            message: "How are you?",
                            self: true,
                            timestamp: "10:46 AM"
                        }
                    ]
                },
                {
                    message: "Hiii",
                    contact_name: "Shankar",
                    time: "22:45",
                    image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
                }
            ]
        }
    },
    methods: {
        renderMessages(message) {
            this.message = message
        },
        emptyMessage() {
            this.message = {}
        }
    },
    created() {
        this.emitter.on('emptyMessage', this.emptyMessage);
        this.emitter.on('loadMessage', this.renderMessages);
    },
    unmounted() {
        this.emitter.off('emptyMessage');
        this.emitter.off('loadMessage', this.renderMessages);
    }
}
</script>

<style>
.left-bar-list {
    max-width: 30%;
    height: 100vh;
    min-width: 30%;
}

.message-space {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.24);
    overflow-y: scroll;
    overflow-x: scroll;
    font-size: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
}
body {
    background: rgb(192, 228, 195);
}
.chat-space {
    bottom: 0;
    overflow-y: scroll;
    position: fixed;
    bottom: 60px;
    margin: 1px;
    padding-top: 10px;
    max-height: 100%;
}

.select-a-chat-message {
    width: 100%;
    font-size: 150%;
    position: absolute;
    top: 50%;
    left: 69%;
    transform: translateX(-50%) translateY(-50%);

}
.select-a-chat {
    width: 100%;
    background: rgb(245, 240, 200);
}
</style>