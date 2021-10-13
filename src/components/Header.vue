<template>
    <div class="title">
        <h2 :style="{color:color}">{{ title }}</h2>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    color: String
  }
}
</script>