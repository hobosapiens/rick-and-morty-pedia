(this["webpackJsonprick-and-morty-pedia"]=this["webpackJsonprick-and-morty-pedia"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(17),s=n.n(c),i=(n(32),n(6)),o=n(9),l=n(11),u=n(10),d=n(7),j=n(4),h=n(26);n(33);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createElement("path",{fill:"#66d9ef",d:"m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"});function f(e,t){var n=e.title,a=e.titleId,c=b(e,["title","titleId"]);return r.createElement("svg",p({height:"35px",viewBox:"0 0 329.26933 329",width:"35px",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,m)}var g=r.forwardRef(f),O=(n.p,n(0)),x=document.getElementById("modal-root");function v(e,t){var n=e.children,a=e.fade,s=void 0!==a&&a,i=e.defaultOpened,o=void 0!==i&&i,l=Object(r.useState)(o),u=Object(h.a)(l,2),d=u[0],j=u[1],p=Object(r.useCallback)((function(){return j(!1)}),[]);Object(r.useImperativeHandle)(t,(function(){return{open:function(){return j(!0)},close:function(){return j(!1)}}}),[]);var b=Object(r.useCallback)((function(e){27===e.keyCode&&j(!1)}),[]);return Object(r.useEffect)((function(){return d&&document.addEventListener("keydown",b,!1),function(){document.removeEventListener("keydown",b,!1)}}),[b,d]),Object(c.createPortal)(d?Object(O.jsxs)("div",{className:"modal ".concat(s?"modal-fade":""),children:[Object(O.jsx)("div",{className:"modal-overlay",onClick:p}),Object(O.jsx)("span",{role:"button",className:"modal-close","aria-label":"close",onClick:p,children:Object(O.jsx)(g,{})}),Object(O.jsx)("div",{className:"modal-body jumbotron",children:n})]}):null,x)}var y=Object(r.forwardRef)(v),C=(n(35),function(){var e=Object(r.useRef)(null);return Object(O.jsx)("nav",{className:"header",children:Object(O.jsxs)("ul",{className:"header-menu",children:[Object(O.jsx)("li",{className:"menu-home",children:Object(O.jsx)(d.c,{to:"/",className:"btn btn-outline-primary nav-link",exact:!0,children:"#"})}),Object(O.jsx)("li",{className:"menu-page",children:Object(O.jsx)(d.c,{to:"/characters/",className:"btn btn-outline-primary nav-link",children:"/characters"})}),Object(O.jsx)("li",{className:"menu-page",children:Object(O.jsx)(d.c,{to:"/locations/",className:"btn btn-outline-primary nav-link",children:"/locations"})}),Object(O.jsx)("li",{className:"menu-page",children:Object(O.jsx)(d.c,{to:"/episodes/",className:"btn btn-outline-primary nav-link",children:"/episodes"})}),Object(O.jsx)("li",{className:"menu-login",children:Object(O.jsx)(d.c,{to:"/login",className:"btn btn-outline-primary nav-link",children:"Login"})}),Object(O.jsx)("li",{className:"menu-admin",children:Object(O.jsx)(d.c,{to:"/admin",className:"btn btn-outline-primary nav-link",children:"Admin"})}),Object(O.jsxs)("li",{className:"menu-information",children:[Object(O.jsx)("button",{type:"button",onClick:function(){return e.current.open()},children:"i"}),Object(O.jsxs)(y,{ref:e,children:["This project was made for educational purposes.",Object(O.jsx)("br",{}),"To better get acquainted with the React technology",Object(O.jsx)("br",{}),"and learn about the methods of interaction with API."]})]})]})})}),N=(n(43),n(2)),I=n.n(N),k=n(8),w=function(){function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://rickandmortyapi.com/api",this.getAllCharacters=function(){var e=Object(k.a)(I.a.mark((function e(n){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/character/?page=".concat(n));case 2:return r=e.sent,e.abrupt("return",r.results.map(t._transformCharacter));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharactersInfo=function(){var e=Object(k.a)(I.a.mark((function e(n){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/character/?page=".concat(n));case 2:return r=e.sent,e.abrupt("return",r.info);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCharacter=function(){var e=Object(k.a)(I.a.mark((function e(n){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/character/".concat(n));case 2:return r=e.sent,e.abrupt("return",t._transformCharacter(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCharacterImage=function(e){return"".concat(t._apiBase,"/character/avatar/").concat(e,".jpeg")},this.getAllLocations=function(){var e=Object(k.a)(I.a.mark((function e(n){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/location/?page=".concat(n));case 2:return r=e.sent,e.abrupt("return",r.results.map(t._transformLocation));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllLocationsInfo=function(){var e=Object(k.a)(I.a.mark((function e(n){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/location/?page=".concat(n));case 2:return r=e.sent,e.abrupt("return",r.info);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getLocation=function(){var e=Object(k.a)(I.a.mark((function e(n){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/location/".concat(n));case 2:return r=e.sent,e.abrupt("return",t._transformLocation(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllEpisodes=function(){var e=Object(k.a)(I.a.mark((function e(n){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/episode/?page=".concat(n));case 2:return r=e.sent,e.abrupt("return",r.results.map(t._transformEpisode));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllEpisodesInfo=function(){var e=Object(k.a)(I.a.mark((function e(n){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/episode/?page=".concat(n));case 2:return r=e.sent,e.abrupt("return",r.info);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getEpisode=function(){var e=Object(k.a)(I.a.mark((function e(n){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/episode/".concat(n));case 2:return r=e.sent,e.abrupt("return",t._transformEpisode(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,imgURL:e.image,name:e.name,status:e.status,species:e.species,gender:e.gender}},this._transformLocation=function(e){return{id:e.id,name:e.name,type:e.type,dimension:e.dimension,residents:e.residents}},this._transformEpisode=function(e){return{id:e.id,name:e.name,air_date:e.air_date,episode:e.episode,characters:e.characters}}}return Object(o.a)(e,[{key:"getResource",value:function(){var e=Object(k.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Couldn't fetch ".concat(this._apiBase).concat(t,", recieved ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),A=function e(){var t=this;Object(i.a)(this,e),this._characters=[{id:1,name:"[TEST NAME 1]",status:"alive",species:"Human",gender:"male"},{id:2,name:"[TEST NAME 2]",status:"dead",species:"Human",gender:"female"}],this._locations=[{id:1,name:"[TEST LOCATION 1]",type:"Testicle Monster Dimension",dimension:"unknown"},{id:2,name:"[TEST LOCATION 2]",type:"Space station",dimension:"Dimension"}],this._episodes=[{id:1,name:"[TEST EPISODE 1]",air_date:"September 10, 2017",episode:"S03E07"},{id:2,name:"[TEST EPISODE 2]",air_date:"November 26, 2018",episode:"S04E08"}],this.getAllCharacters=Object(k.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._characters);case 1:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(k.a)(I.a.mark((function e(n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._characters[n-1]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllLocations=Object(k.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._locations);case 1:case"end":return e.stop()}}),e)}))),this.getLocation=function(){var e=Object(k.a)(I.a.mark((function e(n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._locations[n-1]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllEpisodes=Object(k.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._episodes);case 1:case"end":return e.stop()}}),e)}))),this.getEpisode=function(){var e=Object(k.a)(I.a.mark((function e(n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._episodes[n-1]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCharacterImage=function(){return"https://placeimg.com/400/500/people"}},E=(n(45),n.p+"static/media/error.fd9925a6.png"),S=function(){return Object(O.jsxs)("div",{className:"error-indicator",children:[Object(O.jsxs)("div",{className:"error-indicator-text",children:[Object(O.jsx)("span",{className:"boom",children:"Oooooooops!"}),Object(O.jsx)("span",{children:"something go wrong"}),Object(O.jsx)("span",{children:"(but Morty already fixing it)"})]}),Object(O.jsx)("div",{className:"error-indicator-img",children:Object(O.jsx)("img",{src:E,alt:"error"})})]})},D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(O.jsx)(S,{}):this.props.children}}]),n}(r.Component),L=a.a.createContext(),_=L.Provider,B=L.Consumer,T=(n(46),function(e){var t=e.data,n=e.onItemSelected,r=e.match,a=e.children,c=t.map((function(e){var t=e.id,c=a(e);return Object(O.jsx)("li",{className:parseInt(r.params.id)===t?"list-group-item list-group-item-action active":"list-group-item list-group-item-action ts",onClick:function(){return n(t)},children:c},t)}));return Object(O.jsx)("ul",{className:"item-list list-group",children:c})}),R=n(3),P=n(27),U=n(25),F=function(e){var t=e.style,n=Object(P.a)(e,["style"]);return Object(O.jsx)("div",Object(R.a)({style:Object(R.a)(Object(R.a)({},t),{borderRadius:6,backgroundColor:"#E89AC7"})},n))},M=function(e){return Object(O.jsx)(U.Scrollbars,Object(R.a)({renderThumbHorizontal:F,renderThumbVertical:F},e))},V={width:294,height:500},H=function(e){return function(t){return Object(O.jsx)("div",{className:"list-wrapper",style:V,children:Object(O.jsx)(M,{children:Object(O.jsx)(e,Object(R.a)({},t))})})}},W=(n(63),function(e){return function(t){Object(l.a)(r,t);var n=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={page:1,pages:null},e.prevPage=function(){e.state.page>1&&e.setState({page:e.state.page-1})},e.nextPage=function(){e.state.page<e.state.pages&&e.setState({page:e.state.page+1})},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.props.getInfo&&this.props.getInfo().then((function(t){e.setState({pages:t.pages})}))}},{key:"render",value:function(){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsxs)("div",{className:"pagination",children:[Object(O.jsx)("button",{type:"button",className:"btn pagination-prev",onClick:this.prevPage,children:"<<"}),Object(O.jsx)("span",{className:"pagination-page",children:this.state.page}),Object(O.jsx)("button",{type:"button",className:"btn pagination-next",onClick:this.nextPage,children:">>"})]}),Object(O.jsx)(e,Object(R.a)(Object(R.a)({},this.props),{},{page:this.state.page}))]})}}]),r}(r.Component)}),z=function(e){return function(t){return function(n){return Object(O.jsx)(t,Object(R.a)(Object(R.a)({},n),{},{children:e}))}}},G=(n(64),function(e){return function(t){Object(l.a)(r,t);var n=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={searchValue:""},e.handleChange=function(t){e.setState({searchValue:t.target.value})},e}return Object(o.a)(r,[{key:"render",value:function(){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("form",{onSubmit:this.handleSubmit,className:"search",children:Object(O.jsx)("input",{type:"text",className:"form-control form-control-sm",id:"inputSmall",value:this.state.value,placeholder:"/ s e a r c h",onChange:this.handleChange})}),Object(O.jsx)(e,Object(R.a)({searchValue:this.state.searchValue},this.props))]})}}]),r}(r.Component)}),J=n.p+"static/media/preloader.cc95e510.png",$=(n(65),function(){return Object(O.jsx)("div",{className:"preloader col-12",children:Object(O.jsx)("img",{src:J,alt:"preloader"})})}),q=function(e){var t,n;return n=t=function(t){Object(l.a)(r,t);var n=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={data:null,loading:!0,error:!1},e.onError=function(t){e.setState({error:!0,loading:!1})},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.update()}},{key:"componentDidUpdate",value:function(e){this.props.getData===e.getData&&this.props.page===e.page&&this.props.searchValue===e.searchValue||this.update()}},{key:"update",value:function(){var e=this;this.setState({loading:!0}),this.props.getData(this.props.page+"&name=".concat(this.props.searchValue)).then((function(t){e.setState({data:t,loading:!1,error:!1})})).catch(this.onError)}},{key:"render",value:function(){var t=this.state,n=t.data,r=t.loading,a=t.error;return r||!n?Object(O.jsx)($,{}):a?Object(O.jsx)(S,{}):Object(O.jsx)(e,Object(R.a)({data:n},this.props))}}]),r}(r.Component),t.defaultProps={page:1},n},X=function(e){return function(t){Object(l.a)(r,t);var n=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={data:null,image:null,loading:!0,error:!1},e.onError=function(t){e.setState({error:!0,loading:!1})},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.selectedItem===e.selectedItem&&this.props.getData===e.getData&&this.props.getImageUrl===e.getImageUrl||this.updateItem()}},{key:"updateItem",value:function(){var e=this;this.setState({loading:!0}),this.props.selectedItem&&this.props.getData(this.props.selectedItem).then((function(t){return e.setState({data:t,image:e.props.getImageUrl(t.id),loading:!1,error:!1})})).catch(this.onError)}},{key:"render",value:function(){var t=this.state,n=t.data,r=t.loading,c=t.error,s=t.image;return Object(O.jsx)(a.a.Fragment,{children:Object(O.jsx)(e,Object(R.a)(Object(R.a)({},this.props),{},{data:n,loading:r,error:c,image:s}))})}}]),r}(r.Component)},K=function(e){return function(t){return function(n){return Object(O.jsx)(B,{children:function(r){var a=e(r);return Object(O.jsx)(t,Object(R.a)(Object(R.a)({},n),a))}})}}},Q=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},Y=function(e){var t=e.name;return Object(O.jsx)("span",{children:t})},Z=Q(K((function(e){return{getData:e.getAllCharacters,getInfo:e.getAllCharactersInfo}})),j.g,G,W,q,z(Y),H)(T),ee=Q(K((function(e){return{getData:e.getAllLocations,getInfo:e.getAllLocationsInfo}})),j.g,G,W,q,z(Y),H)(T),te=Q(K((function(e){return{getData:e.getAllEpisodes,getInfo:e.getAllEpisodesInfo}})),j.g,G,W,q,z(Y),H)(T),ne=(n(66),function(e){var t=e.data,n=e.image,r=e.children;return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("div",{className:"col-lg-4 item-info-photo-wrapper",children:Object(O.jsx)("div",{className:"jumbotron item-info-photo",children:Object(O.jsx)("img",{src:n,alt:t.name})})}),Object(O.jsx)("div",{className:"item-info-text col-lg-8 character-info",children:Object(O.jsx)("ul",{className:"list-group list-group-flush",children:a.a.Children.map(r,(function(e){return a.a.cloneElement(e,{data:t})}))})})]})}),re=function(e){var t=e.residentsArr;return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("div",{className:"location-title",children:"Residents:"}),Object(O.jsx)("ul",{children:t})]})},ae=function(e){var t=e.data,n=e.children,r=e.residents,c=void 0===r?[]:r,s=e.getImageUrl,i=c.map((function(e){var t=e.match(/\d+$/g);return Object(O.jsx)("li",{children:Object(O.jsx)(d.b,{to:"/characters/".concat(t),children:Object(O.jsx)("img",{src:s(t),alt:"character"})})},t)}));return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("div",{className:"item-info-text col-lg-12 location-description",children:Object(O.jsx)("ul",{className:"list-group list-group-flush",children:a.a.Children.map(n,(function(e){return a.a.cloneElement(e,{data:t})}))})}),Object(O.jsx)("div",{className:"col-lg-12 location-residents",children:i.length>0?Object(O.jsx)(re,{residentsArr:i}):Object(O.jsx)("div",{className:"location-title",children:"No residents"})})]})},ce=function(e){var t=e.charactersArr;return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("div",{className:"episode-title",children:"Characters:"}),Object(O.jsx)("ul",{children:t})]})},se=function(e){var t=e.data,n=e.children,r=e.characters,c=void 0===r?[]:r,s=e.getImageUrl,i=c.map((function(e){var t=e.match(/\d+$/g);return Object(O.jsx)("li",{children:Object(O.jsx)(d.b,{to:"/characters/".concat(t),children:Object(O.jsx)("img",{src:s(t),alt:"character"})})},t)}));return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("div",{className:"item-info-text col-lg-12 episode-description",children:Object(O.jsx)("ul",{className:"list-group list-group-flush",children:a.a.Children.map(n,(function(e){return a.a.cloneElement(e,{data:t})}))})}),Object(O.jsx)("div",{className:"col-lg-12 episode-characters",children:i.length>0?Object(O.jsx)(ce,{charactersArr:i}):Object(O.jsx)("div",{className:"episode-title",children:"No characters"})})]})},ie=function(e){var t=e.data,n=e.image,r=e.children,a=e.type,c=e.getImageUrl;return Object(O.jsx)("div",{className:"item-info jumbotron",children:{character:Object(O.jsx)(ne,{data:t,image:n,children:r}),location:Object(O.jsx)(ae,{data:t,children:r,residents:t.residents,getImageUrl:c}),episode:Object(O.jsx)(se,{data:t,children:r,characters:t.characters,getImageUrl:c})}[a]})},oe=function(e){var t=e.data,n=e.image,r=e.loading,c=e.error,s=e.selectedItem,i=e.children,o=e.type,l=e.getImageUrl,u=c?null:Object(O.jsx)("span",{className:"choose-item",children:"CHOOSE ONE"}),d=c?Object(O.jsx)(S,{}):null;if(!s)return Object(O.jsxs)(a.a.Fragment,{children:[u,d]});var j=!(r||c),h=r?Object(O.jsx)($,{}):null,p=j?Object(O.jsx)(ie,{data:t,image:n,children:i,type:o,getImageUrl:l}):null;return Object(O.jsxs)(a.a.Fragment,{children:[h,p]})},le=function(e){var t=e.data,n=e.field,r=e.label;return Object(O.jsxs)("li",{className:"list-group-item name",children:[Object(O.jsxs)("span",{children:[r,": "]}),Object(O.jsx)("span",{children:t[n]})]})},ue=Q(K((function(e){return{getData:e.getCharacter,getImageUrl:e.getCharacterImage}})),X,(function(e){return function(t){return Object(O.jsxs)(e,Object(R.a)(Object(R.a)({type:"character"},t),{},{children:[Object(O.jsx)(le,{label:"Name",field:"name"}),Object(O.jsx)(le,{label:"Status",field:"status"}),Object(O.jsx)(le,{label:"Species",field:"species"}),Object(O.jsx)(le,{label:"Gender",field:"gender"})]}))}}))(oe),de=Q(K((function(e){return{getData:e.getLocation,getImageUrl:e.getCharacterImage}})),X,(function(e){return function(t){return Object(O.jsxs)(e,Object(R.a)(Object(R.a)({type:"location"},t),{},{children:[Object(O.jsx)(le,{label:"Name",field:"name"}),Object(O.jsx)(le,{label:"Type",field:"type"}),Object(O.jsx)(le,{label:"Dimension",field:"dimension"})]}))}}))(oe),je=Q(K((function(e){return{getData:e.getEpisode,getImageUrl:e.getCharacterImage}})),X,(function(e){return function(t){return Object(O.jsxs)(e,Object(R.a)(Object(R.a)({type:"episode"},t),{},{children:[Object(O.jsx)(le,{label:"Name",field:"name"}),Object(O.jsx)(le,{label:"Date",field:"air_date"}),Object(O.jsx)(le,{label:"Episode",field:"episode"})]}))}}))(oe),he=(n(67),function(e){var t=e.left,n=e.right;return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("div",{className:"col-lg-4 left_section",children:t}),Object(O.jsx)("div",{className:"col-lg-7 offset-1 right_section",children:n})]})}),pe=Object(j.g)((function(e){var t=e.history,n=e.match;return Object(O.jsx)(he,{left:Object(O.jsx)(Z,{onItemSelected:function(e){t.push("".concat(e))}}),right:Object(O.jsx)(ue,{selectedItem:n.params.id})})})),be=function(e){var t=e.history,n=e.match;return Object(O.jsx)(he,{left:Object(O.jsx)(ee,{onItemSelected:function(e){t.push("".concat(e))}}),right:Object(O.jsx)(de,{selectedItem:n.params.id})})},me=Object(j.g)((function(e){var t=e.history,n=e.match;return Object(O.jsx)(he,{left:Object(O.jsx)(te,{onItemSelected:function(e){t.push("".concat(e))}}),right:Object(O.jsx)(je,{selectedItem:n.params.id})})})),fe=function(e){var t=e.isLoggedIn,n=e.onApiChange,r=e.apiType;return t?Object(O.jsxs)("div",{className:"jumbotron text-center admin",children:[Object(O.jsxs)("div",{className:"admin-text",children:["Welcome to the super-preferred admin page.",Object(O.jsx)("br",{}),"Where you can change API from real to fake --\x3e",Object(O.jsx)("br",{}),Object(O.jsxs)("b",{children:["Current API: ",r]})]}),Object(O.jsx)("button",{onClick:n,className:"btn btn-outline-primary admin-btn",children:"Change API"})]}):Object(O.jsx)(j.a,{to:"/login"})},ge=(n(68),function(e){var t=e.isLoggedIn,n=e.logIn;return t?Object(O.jsx)(j.a,{to:"/"}):Object(O.jsxs)("div",{className:"jumbotron login",children:[Object(O.jsxs)("div",{className:"login-text",children:["This is a primitive user login system.",Object(O.jsx)("br",{}),"After you log in, you can enter the admin page --\x3e"]}),Object(O.jsx)("button",{onClick:n,className:"btn btn-outline-primary login-btn",children:"LogIn"})]})}),Oe=(n(69),n.p+"static/media/close.a2a9c405.svg"),xe=n.p+"static/media/show.998cfad8.svg",ve=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={character:{},charctersCount:671,loading:!0,prevBtnDisabled:!1,nextBtnDisabled:!1,hideContent:!1},e.randomId=function(){return Math.floor(Math.random()*(e.state.charctersCount-1)+1)},e.onCharacterLoaded=function(t){e.setState({character:t,loading:!1,error:!1})},e.onError=function(t){e.setState({error:!0,loading:!1})},e.updateCharactersCount=function(){e.props.ramApi.getAllCharactersInfo&&e.props.ramApi.getAllCharactersInfo().then((function(t){e.setState({charctersCount:t.count})}))},e.updateCharacter=function(t){e.props.ramApi.getCharacter(t).then(e.onCharacterLoaded).catch(e.onError)},e.prevCharacter=function(){1===e.state.character.id?e.setState({prevBtnDisabled:!0}):(e.setState({prevBtnDisabled:!1,nextBtnDisabled:!1}),e.updateCharacter(e.state.character.id-1),clearInterval(e.interval))},e.nextCharacter=function(){e.state.character.id===e.state.charctersCount?e.setState({nextBtnDisabled:!0}):(e.setState({prevBtnDisabled:!1,nextBtnDisabled:!1}),e.updateCharacter(e.state.character.id+1),clearInterval(e.interval))},e.toggleButton=function(){e.setState({hideContent:!e.state.hideContent})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateInterval;this.updateCharacter(this.randomId()),this.updateCharactersCount(),this.interval=setInterval((function(){e.updateCharacter(e.randomId())}),t)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){if(!(this.props.ramApi instanceof w))return null;var e=this.state,t=e.character,n=e.loading,r=e.error,a=e.prevBtnDisabled,c=e.nextBtnDisabled,s=e.hideContent,i=!(n||r),o=r?Object(O.jsx)(S,{}):null,l=n?Object(O.jsx)($,{}):null,u=i?Object(O.jsx)(Ce,{hideContent:s,toggleButton:this.toggleButton}):null,d=i&&!s?Object(O.jsx)(ye,{character:t,prevBtnDisabled:a,nextBtnDisabled:c,prevCharacter:this.prevCharacter,nextCharacter:this.nextCharacter}):null;return Object(O.jsxs)("div",{className:"col-lg-12",children:[o,l,d,u]})}}]),n}(r.Component);ve.defaultProps={updateInterval:6e3};var ye=function(e){var t=e.prevCharacter,n=e.nextCharacter,r=e.prevBtnDisabled,a=e.nextBtnDisabled,c=e.character,s=c.imgURL,i=c.name,o=c.status,l=c.species,u=c.gender,d=r?"disabled":"",j=a?"disabled":"";return Object(O.jsxs)("div",{className:"random-character col-lg-12 jumbotron",children:[Object(O.jsxs)("div",{className:"random-character-buttons",children:[Object(O.jsx)("button",{className:"btn btn-outline-primary "+d,onClick:t,children:"PREV"}),Object(O.jsx)("button",{className:"btn btn-outline-primary "+j,onClick:n,children:"NEXT"})]}),Object(O.jsx)("div",{className:"random-character-photo jumbotron",children:Object(O.jsx)("img",{src:s,alt:i,className:"random-character-avatar"})}),Object(O.jsx)("div",{className:"random-character-info",children:Object(O.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(O.jsxs)("li",{className:"list-group-item name",children:[Object(O.jsx)("span",{children:"Name: "}),Object(O.jsx)("span",{children:i})]}),Object(O.jsxs)("li",{className:"list-group-item status",children:[Object(O.jsx)("span",{children:"Status: "}),Object(O.jsx)("span",{children:o})]}),Object(O.jsxs)("li",{className:"list-group-item species",children:[Object(O.jsx)("span",{children:"Species: "}),Object(O.jsx)("span",{children:l})]}),Object(O.jsxs)("li",{className:"list-group-item gender",children:[Object(O.jsx)("span",{children:"Gender: "}),Object(O.jsx)("span",{children:u})]})]})})]})},Ce=function(e){var t=e.toggleButton,n=e.hideContent;return Object(O.jsx)(a.a.Fragment,{children:Object(O.jsx)("div",{className:"toggle-button",onClick:t,children:Object(O.jsx)("img",{src:n?xe:Oe,alt:"toggler"})})})},Ne=K((function(e){return{ramApi:e}}))(ve),Ie=n.p+"static/media/rick.c7381089.png",ke=function(){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(Ne,{}),Object(O.jsxs)("div",{className:"jumbotron text-center homepage",children:[Object(O.jsx)("div",{className:"homepage-text",children:"Welcome to Rick And Morty cartoon database, have fun."}),Object(O.jsx)("div",{className:"homepage-img",children:Object(O.jsx)("img",{src:Ie,alt:"rick"})})]})]})},we=n.p+"static/media/404.1551aed8.png",Ae=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={ramApi:new w,isLoggedIn:!1},e.logIn=function(){e.setState({isLoggedIn:!0})},e.onApiChange=function(){e.setState((function(e){return{ramApi:new(e.ramApi instanceof w?A:w)}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.ramApi,r=t.isLoggedIn;return Object(O.jsx)(D,{children:Object(O.jsx)(_,{value:n,children:Object(O.jsx)(d.a,{children:Object(O.jsxs)("div",{className:"app container",children:[Object(O.jsx)(C,{}),Object(O.jsx)("section",{className:"bs-docs-section row",children:Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{exact:!0,path:"/",component:ke}),Object(O.jsx)(j.b,{path:"/characters/:id?",component:pe,exact:!0}),Object(O.jsx)(j.b,{path:"/locations/:id?",component:be,exact:!0}),Object(O.jsx)(j.b,{path:"/episodes/:id?",component:me,exact:!0}),Object(O.jsx)(j.b,{path:"/login",render:function(){return Object(O.jsx)(ge,{isLoggedIn:r,logIn:e.logIn})}}),Object(O.jsx)(j.b,{path:"/admin",render:function(){return Object(O.jsx)(fe,{isLoggedIn:r,onApiChange:e.onApiChange,apiType:n.constructor.name})}}),Object(O.jsx)(j.b,{render:function(){return Object(O.jsx)("img",{src:we,alt:"not found",style:{margin:"auto"}})}})]})})]})})})})}}]),n}(r.Component),Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(Ae,{})}),document.getElementById("root")),Ee()}},[[70,1,2]]]);
//# sourceMappingURL=main.997138cf.chunk.js.map