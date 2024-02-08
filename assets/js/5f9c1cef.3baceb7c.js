"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48625],{30201:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=s(85893),i=s(11151);const l={title:"removefile.do",slug:"/r/r_removefile"},n=void 0,d={id:"guides/apis/xml_apis/upload_xml_apis/removefile_do",title:"removefile.do",description:"The removefile.do call deletes a file from an existing application build.",source:"@site/docs/guides/14_apis/05_xml_apis/02_upload_xml_apis/17_removefile_do.md",sourceDirName:"guides/14_apis/05_xml_apis/02_upload_xml_apis",slug:"/r/r_removefile",permalink:"/km-docusaurus-test/r/r_removefile",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"removefile.do",slug:"/r/r_removefile"},sidebar:"tutorialSidebar",previous:{title:"getvendorlist.do",permalink:"/km-docusaurus-test/r/r_getvendorlist"},next:{title:"updateapp.do",permalink:"/km-docusaurus-test/r/r_updateapp"}},o={},c=[{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie example",id:"httpie-example",level:2},{value:"HTTPie results",id:"httpie-results",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"removefile.do"})," call deletes a file from an existing application build."]}),"\n",(0,r.jsxs)(t.p,{children:["Before using this API, Veracode strongly recommends that you read ",(0,r.jsx)(t.a,{href:"/km-docusaurus-test/r/c_API_usage_guidelines",children:"API usage and access guidelines"}),". Ensure you access the APIs with the ",(0,r.jsx)(t.a,{href:"/km-docusaurus-test/r/Region_Domains_for_Veracode_APIs",children:"domain for your region"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"resource-url",children:"Resource URL"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"https://analysiscenter.veracode.com/api/5.0/removefile.do\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"app_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Required"})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Application ID."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"file_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Required"})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Obtain the ",(0,r.jsx)(t.code,{children:"file_id"})," by calling ",(0,r.jsx)(t.a,{href:"/km-docusaurus-test/r/r_getfilelist",children:"getfilelist.do"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"sandbox_id"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Enter the ID of the sandbox that contains the file to delete."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"httpie-example",children:"HTTPie example"}),"\n",(0,r.jsxs)(t.p,{children:["Examples use the ",(0,r.jsx)(t.a,{href:"/km-docusaurus-test/r/c_httpie_tool",children:"HTTPie command-line tool"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/removefile.do" "app_id==<application ID>" "file_id==<file ID>"\n'})}),"\n",(0,r.jsx)(t.h2,{id:"httpie-results",children:"HTTPie results"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"removefile.do"})," call returns the ",(0,r.jsx)(t.code,{children:"removefile"})," XML document, which references the ",(0,r.jsx)(t.a,{href:"https://analysiscenter.veracode.com/resource/removefile.xsd",children:(0,r.jsx)(t.code,{children:"removefile.xsd"})})," schema file. You can use the XSD schema file to validate the XML data."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n\n<removefile xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \nxmlns="https://analysiscenter.veracode.com/schema/removefile" \nxsi:schemaLocation="https://analysiscenter.veracode.com/schema/removefile \nhttps://analysiscenter.veracode.com/resource/removefile.xsd" account_id="29188" app_id="71935">\n  <result>success</result>\n</removefile>\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>n});var r=s(67294);const i={},l=r.createContext(i);function n(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);