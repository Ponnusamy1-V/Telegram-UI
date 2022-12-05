<template>
    <div class="left-bar">
        <div v-for="contact in leftbardata.concat(leftbardata).concat(leftbardata).concat(leftbardata)" :key="contact" class="contact-items">
            <MessageContact class="message-contact" :contact_name="contact.contact_name" :message="contact.message"
                :time="contact.time" :image="contact.image" />
        </div>
    </div>
</template>

<script>
import MessageContact from "./MessageContact.vue"

export default {
    name: "LeftBar",
    components: {
        MessageContact
    },
    // props: {leftbardata: Array},
    data() {
        return {
            contact: "",
            myObject: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
            leftbardata: [
                {
                    message: "Hello, how are you?",
                    contact_name: "Ponnusamy",
                    time: "23:45",
                    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                },
                {
                    message: "Hello",
                    contact_name: "Ponnusamy",
                    time: "23:45",
                    image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg"
                },
                {
                    message: "Hiii",
                    contact_name: "Shankar",
                    time: "22:45",
                    image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
                }
            ]
        }
    }
}
</script>

<style>
.left-bar {
    height: 100%;
    width: 100%;
    background: rgb(226, 226, 220);
    overflow-y: scroll;
}

.message-contact {
    width: 100%;
}
</style>
<style scoped>
.contact-items *:hover {
    background-color: rgb(155, 152, 151);

}
</style>