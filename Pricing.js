document.addEventListener('DOMContentLoaded', function(){

    // let checkBox = document.getElementById('checkbox');
    // let toggleElements = document.getElementsByClassName("hidden");

    // document.addEventListener('click', priceChange())

    //     function priceChange() {
    //         if (checkBox.checked == false){
    //             toggleElements.classList.remove("none");
    //             document.querySelectorAll('.price').forEach(function(el){
    //                 el.classList.add("hidden");
    //             });
                
    //             console.log(document.querySelectorAll('.price'));
    //     }
    // }

    let checkBox = document.getElementById('checkbox');

    checkbox.addEventListener('click', priceChange);

    function priceChange() {
        if (checkBox.checked) {
            document.querySelectorAll('aside').forEach(function(el){
                el.querySelector('.annual-price').classList.add("hidden");
                el.querySelector('.monthly-price').classList.remove("hidden");
            });
        } else {
            document.querySelectorAll('aside').forEach(function(el){
                el.querySelector('.annual-price').classList.remove("hidden");
                el.querySelector('.monthly-price').classList.add("hidden");
            });       
        }
    }

})
