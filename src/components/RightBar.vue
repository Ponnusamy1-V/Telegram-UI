<template>
    <LeftBar :leftbardata="leftbardata" class="left-bar-list" :class="{ 'stretch-left-bar': !message.contact_name }">
    </LeftBar>
    <div class="message-space" @loadMessage="renderMessages">
        <div v-if="message.contact_name">
            <TopBar :image="message.image" :contact_name="message.contact_name" last_seen="12:45"></TopBar>
            <div id="chat-space">
                <div v-if="message.messages" style="width: 100%; height: 130px;"></div>
                <MessageBar v-for="message in message.messages" :key="message" :message="message"></MessageBar>

            </div>
            <InputArea :message="message" />
        </div>
        <div v-else class="select-a-chat">
            <div class="select-a-chat-message">
                Select a chat to start conversation
            </div>
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
                    contact_name: "Ponnusamy",
                    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
                    messages: [
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: true,
                            timestamp: "10:45"
                        },
                        {
                            message: "Hi",
                            self: false,
                            timestamp: "10:46"
                        },
                        {
                            message: "How are you?",
                            self: true,
                            timestamp: "10:46"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: false,
                            timestamp: "10:47"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: true,
                            timestamp: "10:45"
                        },
                        {
                            message: "Hi",
                            self: false,
                            timestamp: "10:46"
                        },
                        {
                            message: "How are you?",
                            self: true,
                            timestamp: "10:46"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: false,
                            timestamp: "10:47"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: true,
                            timestamp: "10:45"
                        },
                        {
                            message: "Hi",
                            self: false,
                            timestamp: "10:46"
                        },
                        {
                            message: "How are you?",
                            self: true,
                            timestamp: "10:46"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: false,
                            timestamp: "10:47"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: true,
                            timestamp: "10:45"
                        },
                        {
                            message: "Hi",
                            self: false,
                            timestamp: "10:46"
                        },
                        {
                            message: "How are you?",
                            self: true,
                            timestamp: "10:46"
                        },
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: false,
                            timestamp: "10:47"
                        }
                    ]
                },
                {
                    contact_name: "Ponnusamy",
                    image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg",
                    messages: [
                        {
                            message: "If position: absolute; or position: fixed; - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor. If position: relative; - the right property sets the right edge of an element to a unit to the left/right of its normal position.",
                            self: true,
                            timestamp: "10:45"
                        },
                        {
                            message: "Hi",
                            self: false,
                            timestamp: "10:46"
                        },
                        {
                            message: "How are you?",
                            self: true,
                            timestamp: "10:46"
                        }
                    ]
                },
                {
                    contact_name: "Shankar",
                    image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
                    messages: [

                    ]
                }
            ]
        }
    },
    methods: {
        async renderMessages(message) {
            await this.emptyMessage()
            this.message = message
        },
        addNewMessage(message) {
            if (!this.message.messages) {
                this.message.messages = []
            }
            this.message.messages.push(message)
        },
        async emptyMessage() {
            document.getElementById("chat-space")?.remove()
            this.message = {}
        }
    },
    created() {
        this.emitter.on('emptyMessage', this.emptyMessage);
        this.emitter.on('loadMessage', this.renderMessages);
        this.emitter.on('addNewMessage', this.addNewMessage);
    },
    unmounted() {
        this.emitter.off('emptyMessage', this.emptyMessage);
        this.emitter.off('loadMessage', this.renderMessages);
        this.emitter.off('addNewMessage', this.addNewMessage);
    }
}
</script>

<style>
.left-bar-list {
    max-width: var(--left-width);
    height: 100vh;
    min-width: var(--left-width);
    user-select: none;
}

@media screen and (width >=1000px) {
    #chat-space {
        width: var(--right-width) !important;
    }
}

@media screen and (width < 1000px) {
    .bottom-area {
        min-width: 100%;
        max-width: 100%;
    }

    #chat-space {
        width: 100% !important;
    }

    .left-bar-list {
        display: none;
    }

    .resizer {
        visibility: hidden;
    }

    .select-a-chat {
        visibility: hidden;
    }

    .stretch-left-bar {
        min-width: 100%;
        display: unset;
    }

    .chat-input-area {
        width: 100%;
    }

    .bottom-area {
        width: 100%;
    }

    .bottom-area-container {
        min-width: 95% !important;
    }

    .top-bar {
        min-width: 100%;
        max-width: 100%;
    }
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
    color: white;
}

#chat-space {
    bottom: 0;
    overflow-y: scroll;
    position: fixed;
    bottom: 60px;
    margin: 1px;
    padding-top: 10px;
    max-height: 100%;
    width: var(--right-width);
}

.select-a-chat-message {
    user-select: none;
    position: absolute;
    top: 50%;
    left: 69%;
    background: rgb(56, 55, 55);
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px !important;
    padding-top: 2px;
    padding-right: 2px;
    word-wrap: break-word;
    font-weight: 600;
    transform: translateX(-50%) translateY(-50%);

}

.select-a-chat {
    width: 100%;
}
</style>