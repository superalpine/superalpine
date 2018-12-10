$(document).ready(function(){
    $("#Delivery").change(function () {
        $(this).find("option:selected").each(function(){
            if($(this).attr("value")=="UK"){
                $(".payment-button").not(".UK").hide();
                $(".UK").show();
            }
            else if($(this).attr("value")=="Europe"){
                $(".payment-button").not(".Europe").hide();
                $(".Europe").show();
            }
            else if($(this).attr("value")=="USA"){
                $(".payment-button").not(".USA").hide();
                $(".USA").show();
            }
             else if($(this).attr("value")=="Canada"){
                $(".payment-button").not(".Canada").hide();
                $(".Canada").show();
            }
            else if($(this).attr("value")=="Australia"){
                $(".payment-button").not(".Australia").hide();
                $(".Australia").show();
            }
             else if($(this).attr("value")=="NewZealand"){
                $(".payment-button").not(".NewZealand").hide();
                $(".NewZealand").show();
            }
             else if($(this).attr("value")=="Japan"){
                $(".payment-button").not(".Japan").hide();
                $(".Japan").show();
            }
             else if($(this).attr("value")=="Swiss"){
                $(".payment-button").not(".Swiss").hide();
                $(".Swiss").show();
            }
             else if($(this).attr("value")=="Other"){
                $(".payment-button").not(".Other").hide();
                $(".Other").show();
            }
             else if($(this).attr("value")=="UAE"){
                $(".payment-button").not(".UAE").hide();
                $(".UAE").show();
            }
             else if($(this).attr("value")=="SaudiArabia"){
                $(".payment-button").not(".SaudiArabia").hide();
                $(".SaudiArabia").show();
            }
            else{
                $(".payment-button").hide();
            }
        });
    }).change();
});