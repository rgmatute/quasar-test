(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title"),a("div",[a("q-chip",{staticStyle:{cursor:"pointer"}},[a("q-avatar",[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),t._v("\n            Ronny Matute\n      "),a("q-menu",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[a("q-list",{staticStyle:{"min-width":"100px"}},[a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Mi perfil")])],1),a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Novedades")])],1),a("q-separator"),a("q-item",{attrs:{clickable:""}},[a("q-item-section",[t._v("Cerrar Sesion")])],1)],1)],1)],1)],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Essential Links\n      ")]),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},o=[],s={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},l=s,c=a("2877"),u=a("66e5"),p=a("4074"),m=a("0016"),q=a("0170"),d=a("eebe"),b=a.n(d),f=Object(c["a"])(l,r,o,!1,null,null,null),v=f.exports;b()(f,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:m["a"],QItemLabel:q["a"]});var k=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],h={name:"MainLayout",components:{EssentialLink:v},data:function(){return{leftDrawerOpen:!1,essentialLinks:k}}},w=h,Q=a("4d5a"),_=a("e359"),g=a("65c6"),y=a("9c40"),L=a("6ac5"),S=a("cb32"),D=a("b047"),O=a("4e73"),C=a("1c1c"),E=a("eb85"),I=a("9404"),x=a("09e3"),M=Object(c["a"])(w,i,n,!1,null,null,null);e["default"]=M.exports;b()(M,"components",{QLayout:Q["a"],QHeader:_["a"],QToolbar:g["a"],QBtn:y["a"],QToolbarTitle:L["a"],QAvatar:S["a"],QChip:D["a"],QMenu:O["a"],QList:C["a"],QItem:u["a"],QItemSection:p["a"],QSeparator:E["a"],QDrawer:I["a"],QItemLabel:q["a"],QPageContainer:x["a"]})}}]);