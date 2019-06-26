$(".blockShop .row").on("click", function(){
    $(".cart").addClass("item");
});

var price_1 = 12;
var price_2 = 30;

jQuery('.price-1').text(price_1);
jQuery('.price-2').text(price_2);
jQuery('.total').text(price_1 + price_2);

jQuery('.shopping-cart .row .remove-button-1').on('click', function () {
    $(".shopping-cart .row-1").addClass("hidden");
});

jQuery('.shopping-cart .row .remove-button-2').on('click', function () {
    $(".shopping-cart .row-2").addClass("hidden");
});

var qty_1 = 1;
var qty_2 = 1;

jQuery('.plus-1').on("click", function () {
    $('input.qty-1').val(qty_1 + 1);
});

jQuery('.minus-1').on("click", function () {
    $('input.qty-1').val(qty_1 - 1);
});

jQuery('.plus-2').on("click", function () {
    $('input.qty-2').val(qty_2 + 1);
});

jQuery('.minus-2').on("click", function () {
    $('input.qty-2').val(qty_2 - 1);
});
