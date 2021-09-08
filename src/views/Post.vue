<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import {useRoute} from 'vue-router'
import {watch} from 'vue'
import useResource from '../composables/useResource.js'
const route = useRoute()

//Post
const {item: post, fetchOne: fetchPost} = useResource('posts')
fetchPost(route.params.id)

// User
const {item: user, fetchOne: fetchUser} = useResource('users');
watch(
  ()=>({...post.value}),
  () => fetchUser(post.value.userId)
)

</script>
