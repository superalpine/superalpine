$(document).ready(function() {
  $(".book figure li img").click(function(){
    $('#main-img').attr('src',$(this).attr('src').replace('', ''));
  });
  var imgSwap = [];
   $(".book figure li img").each(function(){
    imgUrl = this.src.replace('', '');
    imgSwap.push(imgUrl);
  });
  $(imgSwap).preload();
});
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

function showDivs(prefix,chooser) {
        for(var ary=[],i=0;i<chooser.options.length;i++) {
                var div = document.getElementById(prefix+chooser.options[i].value);
                div.style.display ='none';
              if (chooser.options[i].selected) ary.push(chooser.options[i])

        }
 for (var div,z0=0;z0<ary.length;z0++){
  div=document.getElementById(prefix+ary[z0].value);
  if (div) div.style.display = 'block';
 }
}
