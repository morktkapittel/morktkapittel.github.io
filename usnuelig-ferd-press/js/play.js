/*global jQuery, jPlayerPlaylist */

;(function($) {
'use strict';

var myPlaylist = new jPlayerPlaylist({
  jPlayer: "#jquery_jplayer",
  cssSelectorAncestor: "#jp_container_1"
}, [
  {
    title:"I Ring Rundt Lyset",
    mp3:"mp3/irrl.mp3"
  },
  {
    title:"Å snu sæ vækk",
    mp3:"mp3/vsov.mp3"
  },
  {
    title:"Te bunns",
    mp3:"mp3/tb.mp3"
  },
  {
    title:"Vardøger",
    mp3:"mp3/vd.mp3"
  },
  {
    title:"Alt som har reist sæ",
    mp3:"mp3/ashrs.mp3"
  },
  {
    title:"Blindt regn",
    mp3:"mp3/br.mp3"
  },
  {
    title:"Tronebrenner",
    mp3:"mp3/t.mp3"
  },
  {
    title:"Taushetens verdighet",
    mp3:"mp3/tv.mp3"
  }
], {
  swfPath: "jplayer",
  supplied: "mp3",
  smoothPlayBar: true
});

$(document).ready(function(){
  $(function() {
  });
});



})(jQuery);
