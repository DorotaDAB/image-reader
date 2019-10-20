(this["webpackJsonpimage-reader"]=this["webpackJsonpimage-reader"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"fileTypeNotSupported":"Not supported file type. Please choose *.jpg file.","fileSizeNotSupported":"Not supported file size. Please choose files smaller than 1 MB.","imgGallery":"Your image gallery","chooseFile":"Choose a file or drag it here","fileName":"File Name:","gps":"GPS:","latitude":"Latitude: ","longitude":"Longitude: ","size":"Size:","kb":" KB","delete":"Delete"}')},,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(10),r=a.n(l),o=(a(17),a(18),a(11)),s=a(3),c=a(4),d=a(7),m=a(5),u=a(2),g=a(6),p=(a(19),a(20),a(1)),h=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).getImage=e.getImage.bind(Object(u.a)(e)),e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"getImage",value:function(){var e=this,t=Math.round(this.props.size/1024),a=void 0!==this.props.long?function(){var t=function(e){return e[0].numerator+e[1].numerator/(60*e[1].denominator)+e[2].numerator/(3600*e[2].denominator)},a=t(e.props.long).toFixed(6),n=t(e.props.lat).toFixed(6);return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null," ",p.latitude," ",n," "),i.a.createElement("p",null," ",p.longitude," ",a," "))}():i.a.createElement("p",null,"Data not available");return i.a.createElement("div",{className:"item-container"},i.a.createElement("img",{src:this.props.file,alt:this.props.name,id:this.props.id,onLoad:this.props.imgLoaded}),i.a.createElement("div",null,i.a.createElement("p",null,p.fileName),i.a.createElement("p",null,this.props.name," ")),i.a.createElement("div",null,i.a.createElement("p",null,p.gps),a),i.a.createElement("div",null,i.a.createElement("p",null,p.size),i.a.createElement("p",null,t," ",p.kb," ")),i.a.createElement("button",{className:"btn btn-delete",onClick:this.props.imgDeleted}," ",p.delete," "))}},{key:"render",value:function(){return this.getImage()}}]),t}(i.a.Component),f=a(8),v=a.n(f),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={images:[],nextId:1},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.displayImages=e.displayImages.bind(Object(u.a)(e)),e.deleteImg=e.deleteImg.bind(Object(u.a)(e)),e.onLoadHandler=e.onLoadHandler.bind(Object(u.a)(e)),e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){if(e.target.files.length>0){if("image/jpeg"!==e.target.files[0].type)return void alert(p.fileTypeNotSupported);if(e.target.files[0].size>1048576)return void alert(p.fileSizeNotSupported);this.setState({images:[].concat(Object(o.a)(this.state.images),[{file:URL.createObjectURL(e.target.files[0]),name:e.target.files[0].name,size:e.target.files[0].size,type:e.target.files[0].type,id:this.state.nextId}])});var t=this.state.nextId;this.setState({nextId:++t})}}},{key:"deleteImg",value:function(e){var t=this.state.images.filter((function(t){return t.id!==e}));this.setState({images:t})}},{key:"onLoadHandler",value:function(e){var t=this;v.a.getData(e.target,(function(){var e=v.a.getTag(this,"GPSLongitude"),a=v.a.getTag(this,"GPSLatitude"),n=Number(this.id),i=t.state.images.findIndex((function(e){return e.id===n})),l=t.state.images,r=l[i];r.longitude=e,r.latitude=a,t.setState({images:l})}))}},{key:"displayImages",value:function(){var e=this;if(this.state.images.length>0)return i.a.createElement("div",{className:"images-container"},this.state.images.map((function(t){return i.a.createElement("div",{className:"list-item",key:t.id},i.a.createElement(h,{file:t.file,name:t.name,type:t.type,size:t.size,id:t.id,long:t.longitude,lat:t.latitude,imgDeleted:e.deleteImg.bind(e,t.id),imgLoaded:e.onLoadHandler}))})))}},{key:"render",value:function(){return i.a.createElement("div",{className:"main-cointainer"},i.a.createElement("h1",null,p.imgGallery),i.a.createElement("input",{type:"file",className:"upload-form",accept:"image/jpeg",onChange:this.handleChange,"data-title":p.chooseFile}),this.displayImages())}}]),t}(i.a.Component);var y=function(){return i.a.createElement("div",{className:"total-container"},i.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.30ced85f.chunk.js.map