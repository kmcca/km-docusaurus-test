"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89769],{19898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var s=r(85893),i=r(11151);const n={title:"API rate limiting",slug:"/r/About_API_Rate_Limiting"},a=void 0,o={id:"guides/apis/about_apis/api_rate_limiting",title:"API rate limiting",description:"To ensure optimal performance and availability of Veracode services to all users, Veracode reserves the right to limit API requests.",source:"@site/docs/guides/14_apis/01_about_apis/02_api_rate_limiting.md",sourceDirName:"guides/14_apis/01_about_apis",slug:"/r/About_API_Rate_Limiting",permalink:"/km-docusaurus-test/r/About_API_Rate_Limiting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"API rate limiting",slug:"/r/About_API_Rate_Limiting"},sidebar:"tutorialSidebar",previous:{title:"API usage guidelines",permalink:"/km-docusaurus-test/r/c_API_usage_guidelines"},next:{title:"API best practices",permalink:"/km-docusaurus-test/r/About_Veracode_API_Best_Practices"}},d={},l=[{value:"API rate limits",id:"api-rate-limits",level:2},{value:"Resolve API rate limiting",id:"resolve-api-rate-limiting",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"To ensure optimal performance and availability of Veracode services to all users, Veracode reserves the right to limit API requests."}),"\n",(0,s.jsx)(t.h2,{id:"api-rate-limits",children:"API rate limits"}),"\n",(0,s.jsxs)(t.p,{children:["Veracode rate limits, or throttles, API requests from any ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/c_about_veracode_accounts",children:"Veracode account"})," that exceeds the allowed limits. After reaching the request limit, any API requests to Veracode return HTTP status code ",(0,s.jsx)(t.code,{children:"429"}),". The header information in the HTTP response indicates the number of seconds to wait before resending the request."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"API calls"}),(0,s.jsx)(t.th,{children:"Allowed limit"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/c_about_flawreport",children:"Flaw Report"})," and ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/c_results_main",children:"Results"})," XML APIs:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(t.code,{children:"detailedreport.do"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.code,{children:"summaryreport.do"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.code,{children:"generateflawreport.do"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.code,{children:"downloadflawreport.do"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.code,{children:"detailedreportpdf.do"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.code,{children:"summaryreportpdf.do"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.code,{children:"thirdpartyreportpdf.do"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.code,{children:"sharedreport.do"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.code,{children:"sharedreportpdf.do"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.code,{children:"getsharedreportinfo.do"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.code,{children:"getsharedreportlist.do"})})]})]}),(0,s.jsx)(t.td,{children:"80 calls/minute per IP address"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"All other XML APIs"}),(0,s.jsx)(t.td,{children:"250 calls/minute per IP address"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"All REST APIs"}),(0,s.jsx)(t.td,{children:"500 calls/minute per IP address"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"resolve-api-rate-limiting",children:"Resolve API rate limiting"}),"\n",(0,s.jsx)(t.p,{children:"If your automations appear to be experiencing rate limiting, you can review them for these issues or configuration settings in an attempt to remove the limiting and restore your API requests to normal performance:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Any bugs, for example, that might be causing the APIs to send unnecessary requests."}),"\n",(0,s.jsx)(t.li,{children:"Any hard-coded API frequencies that you can reduce to ensure that they are under 250 API requests per minute."}),"\n",(0,s.jsx)(t.li,{children:"Teams that are using the same API credentials for a large number of scans, such as running several scans with the same credentials in more than one development pipeline, and sending an excessive number of requests. Veracode recommends using separate API credentials for each project particularly for teams that need to run a high number of scans."}),"\n",(0,s.jsxs)(t.li,{children:["The interval value for the ",(0,s.jsx)(t.code,{children:"retry-after"})," header is sufficient for your requests. Do not retry your requests until after this interval has expired."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var s=r(67294);const i={},n=s.createContext(i);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);