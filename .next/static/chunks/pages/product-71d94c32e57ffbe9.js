(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{1734:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){return c(3939)}])},5869:function(e,b,a){"use strict";a.d(b,{h:function(){return l}});var f=a(5893),g=a(7294),c=a(1664),h=a.n(c),d=a(6150),i=a.n(d),j=a(6893),k=a(1771);function l(){var a=(0,g.useContext)(k.Vo).signOut;return(0,f.jsx)("header",{className:i().headerContainer,children:(0,f.jsxs)("div",{className:i().headerContent,children:[(0,f.jsx)(h(),{href:"/dashboard",children:(0,f.jsx)("img",{src:"logo.svg",width:190,height:60})}),(0,f.jsxs)("nav",{className:i().navContent,children:[(0,f.jsx)(h(),{href:"/",children:(0,f.jsx)("a",{children:"Pedidos"})}),(0,f.jsx)(h(),{href:"/category",children:(0,f.jsx)("a",{children:"Categoria"})}),(0,f.jsx)(h(),{href:"/product",children:(0,f.jsx)("a",{children:"Novo produto"})}),(0,f.jsx)("button",{onClick:a,children:(0,f.jsx)(j.xqh,{size:24})})]})]})})}},3939:function(f,b,a){"use strict";a.r(b),a.d(b,{"__N_SSP":function(){return q},default:function(){return r}});var g=a(7568),c=a(4051),h=a.n(c),i=a(5893),j=a(7294),d=a(9008),k=a.n(d),l=a(5869),e=a(6123),m=a.n(e),n=a(6893),o=a(6518),p=a(2920),q=!0;function r(t){var a=t.categoryList;console.log(a);var b=(0,j.useState)(""),u=b[0],z=b[1],c=(0,j.useState)(""),v=c[0],A=c[1],d=(0,j.useState)(""),w=d[0],B=d[1],e=(0,j.useState)(""),f=e[0],C=e[1],q=(0,j.useState)(null),D=q[0],E=q[1],r=(0,j.useState)(a||[]),x=r[0];r[1];var s=(0,j.useState)(0),y=s[0],F=s[1];function G(){return(G=(0,g.Z)(h().mark(function a(b){var c,d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(b.preventDefault(),a.prev=1,c=new FormData,!(""===u||""===v||""===w||null===D)){a.next=6;break}return p.Am.warning("Preencha todos os campos!"),a.abrupt("return");case 6:return c.append("name",u),c.append("price",v),c.append("description",w),c.append("file",D),c.append("category_id",x[y].id),d=(0,o.$)(),a.next=14,d.post("/product",c);case 14:p.Am.success("Produto cadastrado com sucesso!"),a.next=21;break;case 17:a.prev=17,a.t0=a.catch(1),console.log(a.t0),p.Am.error("Erro ao cadastrar produto!");case 21:z(""),A(""),B(""),E(null),C("");case 26:case"end":return a.stop()}},a,null,[[1,17]])}))).apply(this,arguments)}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k(),{children:(0,i.jsx)("title",{children:"Novo produto - Pizzaria"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)(l.h,{}),(0,i.jsxs)("main",{className:m().container,children:[(0,i.jsx)("h1",{children:"Cadastrar produto"}),(0,i.jsxs)("form",{onSubmit:function(a){return G.apply(this,arguments)},className:m().form,children:[(0,i.jsxs)("label",{className:m().labelAvatar,children:[(0,i.jsx)("span",{children:(0,i.jsx)(n.Yjd,{size:25,color:"#fff"})}),(0,i.jsx)("input",{type:"file",accept:"image/png, image/jpeg",onChange:function(b){if(b.target.files){var a=b.target.files[0];a&&("image/jpeg"===a.type||"image/png"===a.type)&&(E(a),C(URL.createObjectURL(b.target.files[0])))}}}),f&&(0,i.jsx)("img",{className:m().preview,src:f,alt:"Foto do produto",width:250,height:250})]}),(0,i.jsx)("select",{value:y,onChange:function(a){F(a.target.value)},children:x.map(function(a,b){return(0,i.jsx)("option",{value:b,children:a.name},a.id)})}),(0,i.jsx)("input",{placeholder:"Nome do item",value:u,onChange:function(a){return z(a.target.value)}}),(0,i.jsx)("input",{placeholder:"Valor",value:v,onChange:function(a){return A(a.target.value)}}),(0,i.jsx)("input",{placeholder:"Descri\xe7\xe3o",value:w,onChange:function(a){return B(a.target.value)}}),(0,i.jsx)("button",{className:m().button,type:"submit",children:"Cadastrar"})]})]})]})]})}},6150:function(a){a.exports={headerContainer:"header_headerContainer__sb69X",headerContent:"header_headerContent___WQLC",navContent:"header_navContent__A4gKa"}},6123:function(a){a.exports={container:"product_container__7nDNF",form:"product_form__SGnBM",button:"product_button__jePFf",labelAvatar:"product_labelAvatar__z_Z8J",preview:"product_preview__TBUrI"}}},function(a){a.O(0,[831,893,774,888,179],function(){var b;return a(a.s=1734)}),_N_E=a.O()}])