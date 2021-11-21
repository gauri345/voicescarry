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
box-shadow: 0px 16px 36px -16px rgba(21, 70, 160, 0.5);
border-radius: 0px 0px 41px 0px;
}

</style>