<template>
    <div 
        class="chat-input-area" 
        contenteditable="true" 
        placeholder="Type a message..."
        oninput="if(this.innerHTML.trim()==='<br>')this.innerHTML=''" />
</template>

<script>
export default {
    name: "InputArea",
    data() {
        return {
            input_message: ""
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
    color: black;
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