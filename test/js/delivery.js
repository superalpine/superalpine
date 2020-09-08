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
             else if($(this).attr("value")=="ROW"){
                $(".payment-button").not(".ROW").hide();
                $(".ROW").show();
            }
            
            else{
                $(".payment-button").hide();
            }
        });
    }).change();
});