<template>
    <nav class="navbar relative-top navbar-dark bg-primary">
        <slot></slot>
    </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
nav {
background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
}
.navbar-brand{
  font-size: 100%;
}

</style>