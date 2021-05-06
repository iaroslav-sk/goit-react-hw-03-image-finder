(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"style_ImageGalleryItem__3dFNf",ImageGalleryItem_image:"style_ImageGalleryItem_image__AjPtX"}},11:function(e,t,a){e.exports={overlay:"style_overlay__2QcCb",modal:"style_modal__1x_GF"}},21:function(e,t,a){e.exports={App:"main_App__2iLDw"}},23:function(e,t,a){e.exports={ImageGallery:"style_ImageGallery__2Umst"}},24:function(e,t,a){e.exports={button:"style_button__3PjFp"}},27:function(e,t,a){e.exports={loader:"loader_loader__2EWkt"}},4:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__3yELE",SearchForm:"SearchBar_SearchForm__2trC1",SearchForm_button:"SearchBar_SearchForm_button__3XoOd",SearchForm_button_label:"SearchBar_SearchForm_button_label__2xM2q",SearchForm_input:"SearchBar_SearchForm_input__M-rmB"}},71:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(22),c=a.n(o),l=a(12),i=a(5),s=a(6),u=a(8),h=a(7),m=a(23),g=a.n(m),d=a(10),b=a.n(d),y=a(0);var j=function(e){var t=e.gallery,a=e.onClickGalleryItem;return Object(y.jsx)(y.Fragment,{children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL,o=e.tags;return Object(y.jsx)("li",{className:b.a.ImageGalleryItem,onClick:function(){return a(n,o)},children:Object(y.jsx)("img",{src:r,alt:"",className:b.a.ImageGalleryItem_image})},t)}))})};var _=function(e){var t=e.gallery,a=e.onClickImage;return Object(y.jsx)("ul",{className:g.a.ImageGallery,children:Object(y.jsx)(j,{gallery:t,onClickGalleryItem:a})})},f=a(4),p=a.n(f),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={insearch:""},e.handleFormSubmit=function(t){t.preventDefault(),e.props.onSubmitData(e.state.insearch)},e.handleChange=function(t){var a=t.currentTarget.value;e.setState({insearch:a})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(y.jsx)("header",{className:p.a.Searchbar,children:Object(y.jsxs)("form",{className:p.a.SearchForm,onSubmit:this.handleFormSubmit,children:[Object(y.jsx)("button",{type:"submit",className:p.a.SearchForm_button,children:Object(y.jsx)("span",{className:p.a.SearchForm_button_label,children:"Search"})}),Object(y.jsx)("input",{className:p.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.insearch,onChange:this.handleChange})]})})}}]),a}(r.Component),S=a(24),x=a.n(S);var O=function(e){var t=e.onClick;return Object(y.jsx)("button",{type:"button",className:x.a.button,onClick:t,children:"Load More"})},F=a(25),I=a.n(F),k=function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r;return I.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(n,"&key=20541911-f3d3c691a8e03834e792077a0&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},C=a(11),w=a.n(C);var M=function(e){var t=e.onClickImage,a=e.imageForModal,r=e.title;return e.onClick,Object(y.jsx)("div",{className:w.a.overlay,onClick:t,children:Object(y.jsx)("div",{className:w.a.modal,children:Object(y.jsx)("img",{src:a,alt:r})})})},G=(a(21),a(26)),N=a.n(G),D=a(27),L=a.n(D);var B=function(){return Object(y.jsx)("div",{className:L.a.loader,children:Object(y.jsx)(N.a,{type:"Bars",color:"#00BFFF",height:60,width:80})})},P=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={gallery:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,showModal:!1,imageForModal:"",title:""},e.handleKeyDown=function(t){"Escape"===t.code&&(e.toggleModal(),window.removeEventListener("keydown",e.handleKeyDown))},e.onClickGalleryItem=function(t,a){e.toggleModal(),e.setState({imageForModal:t,title:a})},e.backDroppCloseModal=function(t){t.target===t.currentTarget&&e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.formSubmitData=function(t){e.setState({searchQuery:t,gallery:[],currentPage:1})},e.scrollTo=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.fechImages=function(){var t=e.state,a=t.currentPage,r=t.searchQuery,n={currentPage:a,searchQuery:r,error:null};e.setState({isLoading:!0}),k(n).then((function(t){return e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){a>1&&e.scrollTo(),e.setState({isLoading:!1})}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fechImages(),window.addEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading,r=e.showModal,n=e.imageForModal,o=e.title,c=t.length>0&&!a;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(v,{onSubmitData:this.formSubmitData}),Object(y.jsx)(_,{gallery:this.state.gallery,onClick:this.toggleModal,onClickImage:this.onClickGalleryItem}),a&&Object(y.jsx)(B,{}),c&&Object(y.jsx)(O,{onClick:this.fechImages}),r&&Object(y.jsx)(M,{onClickImage:this.backDroppCloseModal,imageForModal:n,title:o})]})}}]),a}(r.Component);c.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(P,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.c87b786d.chunk.js.map