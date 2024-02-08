"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85133],{31073:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var r=n(85893),t=n(11151);const d={title:"Supported Perl cleansing functions",slug:"/r/Supported_Perl_Cleansing_Functions"},c=void 0,i={id:"guides/packaging/supported_framworks_cleansers/review_cleansers/supported_perl_cleansing",title:"Supported Perl cleansing functions",description:"Veracode recognizes these cleansing functions for CWE-80 in Perl CGI applications:",source:"@site/docs/guides/03_packaging/34_supported_framworks_cleansers/02_review_cleansers/06_supported_perl_cleansing.md",sourceDirName:"guides/03_packaging/34_supported_framworks_cleansers/02_review_cleansers",slug:"/r/Supported_Perl_Cleansing_Functions",permalink:"/km-docusaurus-test/r/Supported_Perl_Cleansing_Functions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Supported Perl cleansing functions",slug:"/r/Supported_Perl_Cleansing_Functions"},sidebar:"tutorialSidebar",previous:{title:"Supported ColdFusion cleansing functions",permalink:"/km-docusaurus-test/r/Supported_ColdFusion_Cleansing_Functions"},next:{title:"Supported PHP cleansing functions",permalink:"/km-docusaurus-test/r/Supported_PHP_Cleansing_Functions"}},l={},o=[];function h(e){const s={code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Veracode recognizes these cleansing functions for CWE-80 in Perl CGI applications:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Function"}),(0,r.jsx)(s.th,{children:"Flaw class"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"escapeHTML()"})," from the CGI module for HTML markup escaping"]}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"escape()"})," from the CGI module for URL escaping"]}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"encode_entities($scalar)"})," from the HTML::Entities module for HTML markup escaping"]}),(0,r.jsx)(s.td,{children:"CWE-80"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["If Autoescape mode is enabled, which is the default since ",(0,r.jsx)(s.code,{children:"CGI.pm"})," version 1.57, then these CGI functions automatically escape the output HTML:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Function"}),(0,r.jsx)(s.th,{children:"Flaw class"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"textfield()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"textarea()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"password_field()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"filefield()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"popup_menu()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"optgroup()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"scrolling_list()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"checkbox_group()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"checkbox()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"radio_group()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"submit()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"defaults()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"hidden()"})}),(0,r.jsx)(s.td,{children:"CWE-80"})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>c});var r=n(67294);const t={},d=r.createContext(t);function c(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);