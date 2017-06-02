/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */

// Add Appcues Script

addWidgetScript();

function addWidgetScript() {
  let flw = document.createElement('script');
  flw.type = 'text/javascript';
  flw.src = '//fast.appcues.com/25289.js';

  return (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(flw);
}

// Identify the user

// NOTE: These values should be specific to the current user.
setTimeout(function(){
  Appcues.anonymous();

  $("div#carousel").after('<a class="btn btn-primary btn-sm" href="javascript:Appcues.show(\'-KlVxKHT3RMiTJOTexMB\')">Show hints &#x27a4;</a>');
},1000);
