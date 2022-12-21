<template>
    <div class="left-bar">
        <div class="left-contact-list">
            <div v-for="contact in leftbardata"
                :key="contact" class="contact-items">
                <MessageContact class="message-contact" :message="contact" />
            </div>
        </div>
        <div class="resizer" id="dragMe"></div>
    </div>
</template>
<script>
import MessageContact from "./MessageContact.vue"
import $ from 'jquery'
export default {
    name: "LeftBar",
    components: {
        MessageContact
    },
    props: { leftbardata: Object },
    data() {
        return {
            minLeftWidth: 25,
            maxLeftWidth: 55,
            resizer: "",
            leftSide: "",
            rightSide: "",
            rightSide1: "",
            root: "",
            x: 0,
            y: 0,
        }
    }
    ,
    mounted() {
        $(document).ready(function () {
            var $scrollingDiv = $("#dragMe");
            $(document.getElementsByClassName('left-bar-list')[0]).scroll(function () {
                $scrollingDiv
                    .stop()
                    .animate({ "marginTop": (document.getElementsByClassName('left-bar-list')[0].scrollTop) }, "slow");
            });
        });

        this.root = document.querySelector(':root');
        this.resizer = document.getElementById("dragMe");
        this.leftSide = this.resizer.previousElementSibling;
        this.rightSide = document.getElementsByClassName("message-space")[0];
        this.rightSide1 = document.getElementsByClassName("select-a-chat")[0];
        this.resizer.addEventListener('mousedown', this.mouseDownHandler);
    },
    methods: {
        mouseDownHandler(e) {
            this.x = e.clientX;
            this.y = e.clientY;
            this.leftWidth = this.leftSide.getBoundingClientRect().width;

            document.addEventListener('mousemove', this.mouseMoveHandler);
            document.addEventListener('mouseup', this.mouseUpHandler);
        },
        mouseUpHandler() {
            this.resizer.style.removeProperty('cursor');
            document.body.style.removeProperty('cursor');

            this.leftSide.style.removeProperty('user-select');
            this.leftSide.style.removeProperty('pointer-events');

            this.rightSide.style.removeProperty('user-select');
            this.rightSide.style.removeProperty('pointer-events');

            document.removeEventListener('mousemove', this.mouseMoveHandler);
            document.removeEventListener('mouseup', this.mouseUpHandler);
        },
        mouseMoveHandler(e) {
            document.body.style.cursor = 'col-resize';
            let leftWidth = parseInt(((this.x || 1) / document.getElementsByTagName("body")[0].getBoundingClientRect().width) * 100);
            let rightWidth = parseInt(100 - ((this.x || 1) / document.getElementsByTagName("body")[0].getBoundingClientRect().width) * 100);
            if (leftWidth < this.maxLeftWidth && leftWidth >= this.minLeftWidth) {
                this.root.style.setProperty('--left-width', `${leftWidth}%`)
                this.root.style.setProperty('--right-width', `${rightWidth}%`)
            }
            this.x = e.clientX;
            this.y = e.clientY;
            this.resizer.style.cursor = 'col-resize';

            this.leftSide.style.userSelect = 'none';
            this.leftSide.style.pointerEvents = 'none';

            this.rightSide.style.userSelect = 'none';
            this.rightSide.style.pointerEvents = 'none';
        },
    }
}
</script>

<style>
.left-bar {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-wrap: nowrap;
}

.left-bar .contact-items {
    min-width: 100%;
}

.left-contact-list {
    flex-wrap: wrap;
    width: 100%;
}

.resizer {
    height: 100%;
    display: block;
    position: sticky;
    background: rgb(33, 33, 33);
    min-width: 1mm;
    bottom: 0;
    cursor: col-resize;
    user-select: none;
}

.resizer:hover {
    min-width: 2mm;
}

.left-bar::-webkit-scrollbar {
    display: none;
}

.left-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.message-contact {
    width: 100%;
}
</style>
<style scoped>
.contact-items *:hover, :focus {
    background-color: rgb(43, 42, 53);
}
</style>