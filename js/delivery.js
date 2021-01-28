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
window.onload=function() {
  document.getElementById('selectedOptions').value='0';//set value to your default
}