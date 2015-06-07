(function () {
  'use strict';
  
  /* Classie JS */
  function classReg(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function toggleClass(s,a){var e=hasClass(s,a)?removeClass:addClass;e(s,a)}var hasClass,addClass,removeClass;"classList"in document.documentElement?(hasClass=function(s,a){return s.classList.contains(a)},addClass=function(s,a){s.classList.add(a)},removeClass=function(s,a){s.classList.remove(a)}):(hasClass=function(s,a){return classReg(a).test(s.className)},addClass=function(s,a){hasClass(s,a)||(s.className=s.className+" "+a)},removeClass=function(s,a){s.className=s.className.replace(classReg(a)," ")});var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};"function"==typeof define&&define.amd?define(classie):"object"==typeof exports?module.exports=classie:window.classie=classie;
  
  /* Screen detect classieJS() */
  var tab="tablette",mob="mobile",desk="desktop",b=document.getElementsByTagName("html");navigator.userAgent.match(/(android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi)?screen.width>=480&&screen.height>=800||screen.width>=800&&screen.height>=480||navigator.userAgent.match(/ipad/gi)?classie.addClass(b[0],tab):classie.addClass(b[0],mob):classie.addClass(b[0],desk);
  
  
})();