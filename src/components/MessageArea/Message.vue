<template>
    <div class="message-box-display">
        <div class="message-box">
            <div class="message-area">
                {{ message }}
            </div>
            <div class="message-timestamp">
                {{ timestamp }}
            </div>
        </div>
        <div class="message-info">

        </div>
    </div>
</template>

<script>
export default {
    name: "Message",
    props: { message: String, timestamp: String }
}
</script>

<style>
.message-box-display {
    width: 100%;
    height: 100px;
}
</style>