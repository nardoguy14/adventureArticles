/*! modernizr 3.0.0-alpha.4 (Custom Build) | MIT *
 * http://modernizr.com/download/#-prefixed !*/
!function(e,n,t){function r(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function o(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function i(e,n){return typeof e===n}function s(){var e,n,t,r,o,s,a;for(var f in g){if(e=[],n=g[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=i(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var r;for(var o in e)if(e[o]in n)return t===!1?e[o]:(r=n[e[o]],i(r,"function")?l(r,t||n):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=f(x?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,a,l,u="modernizr",p=f("div"),c=d();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return i=f("style"),i.type="text/css",i.id="s"+u,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=l,_.offsetHeight):p.parentNode.removeChild(p),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,s){function l(){p&&(delete N.style,delete N.modElem)}if(s=i(s,"undefined")?!1:s,!i(o,"undefined")){var u=m(e,o);if(!i(u,"undefined"))return u}for(var p,d,c,v,h,y=["modernizr","tspan"];!N.style;)p=!0,N.modElem=f(y.shift()),N.style=N.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=N.style[v],a(v,"-")&&(v=r(v)),N.style[v]!==t){if(s||i(o,"undefined"))return l(),"pfx"==n?v:!0;try{N.style[v]=o}catch(g){}if(N.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(s+" ")+s).split(" ");return i(n,"string")||i(n,"undefined")?v(a,n,r,o):(a=(e+" "+E.join(s+" ")+s).split(" "),u(a,n,t))}var y=[],g=[],C={_version:"3.0.0-alpha.4",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase(),w="Moz O ms Webkit",S=C._config.usePrefixes?w.split(" "):[];C._cssomPrefixes=S;var b=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+n}return!1};C.atRule=b;var E=C._config.usePrefixes?w.toLowerCase().split(" "):[];C._domPrefixes=E;var z={elem:f("modernizr")};Modernizr._q.push(function(){delete z.elem});var N={style:z.elem.style};Modernizr._q.unshift(function(){delete N.style}),C.testAllProps=h;C.prefixed=function(e,n,t){return 0===e.indexOf("@")?b(e):(-1!=e.indexOf("-")&&(e=r(e)),n?h(e,n,t):h(e,"pfx"))};s(),o(y),delete C.addTest,delete C.addAsyncTest;for(var P=0;P<Modernizr._q.length;P++)Modernizr._q[P]();e.Modernizr=Modernizr}(window,document);

/**
 * Draw Fill SVG
 *
 * A plugin that simulates a "draw" effect on the stroke of an SVG, fades out
 * the stroke, and fades in a fill colour.
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Call Me Nick
 * http://callmenick.com
 */

(function( window ){

  'use strict';

  /**
   * Cross browser transition end events
   *
   * Use modernizr to detect cross browser transition end events. Make sure
   * to include Modernizr in your doc and have "Modernizr.prefixed()" checked
   * off in the extensibility section.
   */

  var transEndEventNames = {
    "WebkitTransition" : "webkitTransitionEnd",
    "MozTransition"    : "transitionend",
    "OTransition"      : "oTransitionEnd",
    "msTransition"     : "MSTransitionEnd",
    "transition"       : "transitionend"
  },
  transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

  /**
   * Extend obj function
   *
   */

  function extend( a, b ) {
    for( var key in b ) { 
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  /**
   * DrawFillSVG constructor
   *
   */

  function DrawFillSVG( options ) {
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this._init();
  }

  /**
   * DrawFillSVG options
   *
   * Available options:
   * elementId - the ID of the element to draw
   */

  DrawFillSVG.prototype.options = {
    elementId : "svg"
  }

  /**
   * DrawFillSVG _init
   *
   * Initialise DrawFillSVG
   */

  DrawFillSVG.prototype._init = function() {


	var a = document.getElementById(this.options.elementId);
	// Get the SVG document inside the Object tag
	this.svg = a.contentDocument;

    this.paths = this.svg.querySelectorAll("path");
    this._initAnimation();
  }

  /**
   * DrawFillSVG _initAnimation()
   *
   * Reset some style properties on our paths, add some transitions, set the
   * stroke-dasharray to the length of the path, and the stroke-dashoffset to
   * the length of the path pushing it out of view initially. Then, set the 
   * stroke-dashoffset to 0, animating the strokes in a drawing manner. Then,
   * run the path filler sequence.
   */

  DrawFillSVG.prototype._initAnimation = function() {
    for ( var i = 0; i < this.paths.length; i++ ) {
      var path = this.paths[i];
      var length = path.getTotalLength();

      // reset opacities
      path.style.fillOpacity = 0;
      path.style.strokeOpacity = 1;

      // reset transitions
      path.style.transition = path.style.WebkitTransition = "none";

      // reset stroke dash array and stroke dash offset
      path.style.strokeDasharray = length + " " + length;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect();

      // apply new transitions
      path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 2s ease-in-out";

      // go baby go
      path.style.strokeDashoffset = 0;

      // fill the path
      this._fillPath( path );
    }
  }

  /**
   * DrawFillSVG _fillPath()
   *
   * Resets the transition props, then fills the path and fades out the stroke
   * by updating the styles.
   */

  DrawFillSVG.prototype._fillPath = function( path ) {
    path.addEventListener( transEndEventName, function() {
      // reset transitions
      path.style.transition = path.style.WebkitTransition = "none";
      path.style.transition = path.style.WebkitTransition = "fill-opacity 1s ease-in-out, stroke-opacity 1s ease-in-out";

      // edit props
      path.style.fillOpacity = 1;
      path.style.strokeOpacity = 0;
    } );
  }

  /**
   * DrawFillSVG replay
   *
   * A public function that allows you to replay the animation if you want. For
   * example, click a button, and replay the animation.
   */

  DrawFillSVG.prototype.replay = function() {
    this._initAnimation();
  }

  /**
   * Add to global namespace
   */

  window.DrawFillSVG = DrawFillSVG;

})( window );