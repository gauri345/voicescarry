<template>
    <nav class="navbar navbar-expand-lg fixed-bottom navbar-dark bg-primary">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/Homepage">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/question">Survey</a>
                    <a class="nav-item nav-link" href="#">Complaint</a>
                    <a class="nav-item nav-link" href="#">Language</a>
                </div>
            </div>
    </nav>
</template>

<script>
export default {
  name: 'Footer'
}

</script>

<style>
nav {
    background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
}
</style>
