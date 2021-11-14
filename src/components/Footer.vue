<template>
    <nav class="navbar justify-content-center navbar-expand fixed-bottom navbar-dark bg-primary">
            <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/Homepage">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/question">Survey</a>
                    <a class="nav-item nav-link" href="#">Complaint</a>
                    <a class="nav-item nav-link" href="#">Language</a>
            </div>
    </nav>
</template>

<script>
export default {
  name: 'Footer'
}

</script>

<style scoped>
nav {
    background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
    margin-top: 10px;
}

</style>
