"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12558],{83091:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(85893),r=t(11151);const i={title:"Results XML API",slug:"/r/c_results_main"},n=void 0,o={id:"guides/apis/xml_apis/results_xml_apis/README",title:"Results XML API",description:"You use the Veracode Results API to access your application assessment data from another application or a script.",source:"@site/docs/guides/14_apis/05_xml_apis/03_results_xml_apis/README.md",sourceDirName:"guides/14_apis/05_xml_apis/03_results_xml_apis",slug:"/r/c_results_main",permalink:"/km-docusaurus-test/r/c_results_main",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Results XML API",slug:"/r/c_results_main"},sidebar:"tutorialSidebar",previous:{title:"XML API tutorial: How to scan an application",permalink:"/km-docusaurus-test/r/c_TUTOR_upload"},next:{title:"Results XML APIs quick reference",permalink:"/km-docusaurus-test/r/c_ResultsAPI_calls"}},l={},u=[{value:"REST API equivalent",id:"rest-api-equivalent",level:2},{value:"Prerequisites",id:"prerequisites",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"You use the Veracode Results API to access your application assessment data from another application or a script."}),"\n",(0,a.jsx)(s.p,{children:"The Veracode Results API is a basic HTTPS-based request API that uses simple HTTP calls. You can use any technology that supports making HTTP calls and parsing XML to access the API. For example, you can write a script to automatically download newly published analysis results into a bug tracking system."}),"\n",(0,a.jsx)(s.p,{children:"You can also use this API to retrieve information, in XML format, about these items:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Application profiles"}),"\n",(0,a.jsx)(s.li,{children:"Completed and in-progress builds"}),"\n",(0,a.jsx)(s.li,{children:"Detailed analysis results, which includes call stacks and findings information, or a summary of results, which does not include call stacks and findings information"}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["To learn how to use the Results API, see ",(0,a.jsx)(s.a,{href:"/km-docusaurus-test/r/t_TUTOR_results",children:"XML API tutorial: How to access scan results"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"For performance reasons, this API automatically compresses the XML output, regardless of file size, in Gzip format. When accessing this API in production, Veracode strongly recommends that you use a user agent, such as HTTPie, which is the default, that supports Gzip. To test this API, you can use any tool that supports HTTP."}),"\n",(0,a.jsxs)(s.p,{children:["If you want to query tags in applications, you can add unique tags as metadata when creating your applications. You can then query your applications based on any of the metadata. Use ",(0,a.jsx)(s.a,{href:"/km-docusaurus-test/r/r_createapp",children:(0,a.jsx)(s.code,{children:"createapp.do"})})," to create an application with metadata."]}),"\n",(0,a.jsx)(s.h2,{id:"rest-api-equivalent",children:"REST API equivalent"}),"\n",(0,a.jsxs)(s.p,{children:["The REST API equivalents of many of these calls are available with the ",(0,a.jsx)(s.a,{href:"/km-docusaurus-test/r/c_apps_intro",children:"Applications API"}),", the ",(0,a.jsx)(s.a,{href:"/km-docusaurus-test/r/c_findings_v2_intro",children:"Findings API"}),", and the ",(0,a.jsx)(s.a,{href:"/km-docusaurus-test/r/c_rest_summary_report_intro",children:"Summary Report API"}),". Veracode strongly recommends that you use the REST APIs. For new integrations, always use the REST APIs."]}),"\n",(0,a.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(s.p,{children:"Before using the Results API, you must meet the following prerequisites:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["An API service account with the Results API ",(0,a.jsx)(s.a,{href:"/km-docusaurus-test/r/c_role_permissions",children:"role"})," or a user account with the Reviewer or Security Lead role."]}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/km-docusaurus-test/r/c_api_credentials3",children:"API credentials"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/km-docusaurus-test/r/c_enabling_hmac",children:"HMAC authentication"})}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>n});var a=t(67294);const r={},i=a.createContext(r);function n(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);