<script>
for (var numero = 1; numero <= 100; numero++) {
    var noprimo = false;
    for (var i = 2; i <= numero; i++) {
       if (numero%i===0 && i!==numero) {
            noprimo = true;
        }
    }
    if(numero%2==0){
                console.log("Par ", numero);
    }
    if (noprimo === false) {
                console.log("Primo ", numero);

    }
}
</script>
