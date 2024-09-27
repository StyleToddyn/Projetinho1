"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5586],{63765:function(t,e,i){var s=i(41564),n=i(93595),o=i(14407),r=i(12185),a=i(22685),h=i(37751),l=i(28025),d=i(30942),c=i(16235),u=i(69606),p=i(10135),_=i(28487),g=i(92662),m=i(31516);class E extends h.A{constructor(t,e,i,s,n,o){super(t,e),this.src_=i,this.extent_=s,this.preemptive_=n,this.grid_=null,this.keys_=null,this.data_=null,this.jsonp_=o}getImage(){return null}getData(t){if(!this.grid_||!this.keys_)return null;const e=(t[0]-this.extent_[0])/(this.extent_[2]-this.extent_[0]),i=(t[1]-this.extent_[1])/(this.extent_[3]-this.extent_[1]),s=this.grid_[Math.floor((1-i)*this.grid_.length)];if("string"!=typeof s)return null;let n=s.charCodeAt(Math.floor(e*s.length));n>=93&&n--,n>=35&&n--,n-=32;let o=null;if(n in this.keys_){const t=this.keys_[n];o=this.data_&&t in this.data_?this.data_[t]:t}return o}forDataAtCoordinate(t,e,i){this.state==d.A.EMPTY&&!0===i?(this.state=d.A.IDLE,(0,g.Jz)(this,a.A.CHANGE,(i=>{e(this.getData(t))})),this.loadInternal_()):!0===i?setTimeout((()=>{e(this.getData(t))}),0):e(this.getData(t))}getKey(){return this.src_}handleError_(){this.state=d.A.ERROR,this.changed()}handleLoad_(t){this.grid_=t.grid,this.keys_=t.keys,this.data_=t.data,this.state=d.A.LOADED,this.changed()}loadInternal_(){if(this.state==d.A.IDLE)if(this.state=d.A.LOADING,this.jsonp_)(0,m.FQ)(this.src_,this.handleLoad_.bind(this),this.handleError_.bind(this));else{const t=new XMLHttpRequest;t.addEventListener("load",this.onXHRLoad_.bind(this)),t.addEventListener("error",this.onXHRError_.bind(this)),t.open("GET",this.src_),t.send()}}onXHRLoad_(t){const e=t.target;if(!e.status||e.status>=200&&e.status<300){let t;try{t=JSON.parse(e.responseText)}catch(t){return void this.handleError_()}this.handleLoad_(t)}else this.handleError_()}onXHRError_(t){this.handleError_()}load(){this.preemptive_?this.loadInternal_():this.setState(d.A.EMPTY)}}class f extends l.A{constructor(t){if(super({projection:(0,_.Jt)("EPSG:3857"),state:"loading",wrapX:void 0===t.wrapX||t.wrapX,zDirection:t.zDirection}),this.preemptive_=void 0===t.preemptive||t.preemptive,this.tileUrlFunction_=u.lg,this.template_=void 0,this.jsonp_=t.jsonp||!1,t.url)if(this.jsonp_)(0,m.FQ)(t.url,this.handleTileJSONResponse.bind(this),this.handleTileJSONError.bind(this));else{const e=new XMLHttpRequest;e.addEventListener("load",this.onXHRLoad_.bind(this)),e.addEventListener("error",this.onXHRError_.bind(this)),e.open("GET",t.url),e.send()}else{if(!t.tileJSON)throw new Error("Either `url` or `tileJSON` options must be provided");this.handleTileJSONResponse(t.tileJSON)}}onXHRLoad_(t){const e=t.target;if(!e.status||e.status>=200&&e.status<300){let t;try{t=JSON.parse(e.responseText)}catch(t){return void this.handleTileJSONError()}this.handleTileJSONResponse(t)}else this.handleTileJSONError()}onXHRError_(t){this.handleTileJSONError()}getTemplate(){return this.template_}forDataAtCoordinateAndResolution(t,e,i,s){if(this.tileGrid){const n=this.tileGrid.getZForResolution(e,this.zDirection),o=this.tileGrid.getTileCoordForCoordAndZ(t,n);this.getTile(o[0],o[1],o[2],1,this.getProjection()).forDataAtCoordinate(t,i,s)}else!0===s?setTimeout((function(){i(null)}),0):i(null)}handleTileJSONError(){this.setState("error")}handleTileJSONResponse(t){const e=(0,_.Jt)("EPSG:4326"),i=this.getProjection();let s;if(void 0!==t.bounds){const n=(0,_.FO)(e,i);s=(0,c.NW)(t.bounds,n)}const n=(0,p.kZ)(i),o=t.minzoom||0,r=t.maxzoom||22,a=(0,p.EN)({extent:n,maxZoom:r,minZoom:o});this.tileGrid=a,this.template_=t.template;const h=t.grids;if(h){if(this.tileUrlFunction_=(0,u.Qz)(h,a),t.attribution){const e=void 0!==s?s:n;this.setAttributions((function(i){return(0,c.HY)(e,i.extent)?[t.attribution]:null}))}this.setState("ready")}else this.setState("error")}getTile(t,e,i,s,n){const o=[t,e,i],r=this.getTileCoordForTileUrlFunction(o,n),a=this.tileUrlFunction_(r,s,n);return new E(o,void 0!==a?d.A.IDLE:d.A.EMPTY,void 0!==a?a:"",this.tileGrid.getTileCoordExtent(o),this.preemptive_,this.jsonp_)}}var v=f,A=i(87240);const T="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0cGdwMHVnMGdlbzMxbDhwazBic2xrNSJ9.WbcTL9uj8JPAsnT9mgb7oQ",b=new r.A({source:new o.A({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+T})}),y=new v({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+T}),x=new r.A({source:y}),J=new A.Ay({center:[0,0],zoom:1}),L=document.getElementById("map"),R=new s.A({layers:[b,x],target:L,view:J}),S=document.getElementById("country-info"),w=document.getElementById("country-flag"),N=document.getElementById("country-name"),O=new n.A({element:S,offset:[15,15],stopEvent:!1});R.addOverlay(O);const D=function(t){const e=J.getResolution();y.forDataAtCoordinateAndResolution(t,e,(function(e){L.style.cursor=e?"pointer":"",e&&(w.src="data:image/png;base64,"+e.flag_png,N.innerHTML=e.admin),O.setPosition(e?t:void 0)}))};R.on("pointermove",(function(t){if(t.dragging)return;const e=R.getEventCoordinate(t.originalEvent);D(e)})),R.on("click",(function(t){D(t.coordinate)}))}},function(t){var e;e=63765,t(t.s=e)}]);
//# sourceMappingURL=utfgrid.js.map