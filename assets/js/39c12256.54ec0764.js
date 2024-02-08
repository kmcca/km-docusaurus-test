"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97076],{34499:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(85893),d=t(11151);const i={title:"sharedreportpdf.do",slug:"/r/r_sharedreportpdf"},n=void 0,o={id:"guides/apis/xml_apis/vast_xml_apis/sharedreportpdf_do",title:"sharedreportpdf.do",description:"The sharedreportpdf.do call returns the shared report as a PDF document to the specified directory.",source:"@site/docs/guides/14_apis/05_xml_apis/09_vast_xml_apis/03_sharedreportpdf_do.md",sourceDirName:"guides/14_apis/05_xml_apis/09_vast_xml_apis",slug:"/r/r_sharedreportpdf",permalink:"/km-docusaurus-test/r/r_sharedreportpdf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"sharedreportpdf.do",slug:"/r/r_sharedreportpdf"},sidebar:"tutorialSidebar",previous:{title:"sharedreport.do",permalink:"/km-docusaurus-test/r/r_sharedreport"},next:{title:"getsharedreportinfo.do",permalink:"/km-docusaurus-test/r/r_getsharedreportinfo"}},a={},l=[{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie example",id:"httpie-example",level:2},{value:"HTTPie results",id:"httpie-results",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"sharedreportpdf.do"})," call returns the shared report as a PDF document to the specified directory."]}),"\n",(0,s.jsxs)(r.p,{children:["Before using this API, Veracode strongly recommends that you read ",(0,s.jsx)(r.a,{href:"/km-docusaurus-test/r/c_API_usage_guidelines",children:"API usage and access guidelines"}),". Ensure you access the APIs with the ",(0,s.jsx)(r.a,{href:"/km-docusaurus-test/r/Region_Domains_for_Veracode_APIs",children:"domain for your region"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"resource-url",children:"Resource URL"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"https://analysiscenter.veracode.com/api/4.0/sharedreportpdf.do\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,s.jsx)(r.code,{children:"app_id"}),(0,s.jsx)("br",{}),(0,s.jsx)(r.strong,{children:"Required"})]}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:"Integer"}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:"Application ID."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,s.jsx)(r.code,{children:"shared_report_id"}),(0,s.jsx)("br",{}),(0,s.jsx)(r.strong,{children:"Required"})]}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:"Integer"}),(0,s.jsxs)(r.td,{style:{textAlign:"left"},children:["You can get the shared report ID from the ",(0,s.jsx)(r.code,{children:"sharedreportlist.xml"})," file returned by ",(0,s.jsx)(r.a,{href:"/km-docusaurus-test/r/r_getsharedreportlist",children:"getsharedreportlist.do"}),"."]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"httpie-example",children:"HTTPie example"}),"\n",(0,s.jsxs)(r.p,{children:["Examples use the ",(0,s.jsx)(r.a,{href:"/km-docusaurus-test/r/c_httpie_tool",children:"HTTPie command-line tool"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'http --auth-type=veracode_hmac -o c:\\veracodeapi\\sharedreport.pdf "https://analysiscenter.veracode.com/api/4.0/sharedreportpdf.do" "app_id==<app id>" "shared_report_id==10651"\n'})}),"\n",(0,s.jsx)(r.h2,{id:"httpie-results",children:"HTTPie results"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"sharedreportpdf.do"})," call returns the ",(0,s.jsx)(r.code,{children:"summaryreport"})," PDF document."]})]})}function h(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>n});var s=t(67294);const d={},i=s.createContext(d);function n(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);