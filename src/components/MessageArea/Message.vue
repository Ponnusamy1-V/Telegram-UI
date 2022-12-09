<template>
    <div class="message-box-display" :class="{ 'message-box-display-right': message.self }">
        <div v-if="message.self" class="message-info-from">

        </div>
        <div v-if="!message.self" class="chat-end chat-start">
            <svg width="9" height="20" xmlns="http://www.w3.org/2000/svg"><defs><filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="#000" filter="url(#a)"></path><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="rgb(33, 33, 33)" class="corner"></path></g></svg>
        </div>
        <div class="message-box" :class="{ 'from-message': message.self }">
            <div class="message-area">
                {{ message.message }}
            </div>
            <div class="message-timestamp">
                {{ message.timestamp }}
            </div>
        </div>
        <div v-if="message.self" class="chat-end">
            <svg width="9" height="20" xmlns="http://www.w3.org/2000/svg"><defs><filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="#000" filter="url(#a)"></path><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="rgb(118, 106, 200)" class="corner"></path></g></svg>
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
    border-radius: 5px 5px 10px 0px;
    max-width: 45%;
    color: rgb(255, 255, 255);
    background: rgb(33, 33, 33);
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: content-box;
}

.from-message {
    background: rgb(118, 106, 200);
    border-radius: 5px 5px 0px 10px !important;
}

.message-timestamp {
    user-select: none;
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

.chat-end {
	bottom: 0;
	position: sticky;
	justify-content: end;
	display: flex;
	flex-direction: column;
    margin-bottom: -3px;
    margin-left: -1px;
    z-index: 1;
}

.chat-start {
    transform: rotateY(180deg);
    margin-right:-1px;
}
</style>