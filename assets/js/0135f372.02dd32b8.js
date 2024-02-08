"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39499],{77596:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=s(85893),t=s(11151);const i={title:"Scan APIs",slug:"/r/About_Veracode_API_Scanning"},o=void 0,r={id:"guides/dynamic_analysis/da_scan_apis/README",title:"Scan APIs",description:"You use API Scanning in the Veracode Platform or with the REST API to perform a Dynamic Analysis of your REST APIs. Veracode crawls and analyzes the API endpoints to assess the security posture of the API. The results identify the vulnerabilities you might need to fix.",source:"@site/docs/guides/08_dynamic_analysis/02_da_scan_apis/README.md",sourceDirName:"guides/08_dynamic_analysis/02_da_scan_apis",slug:"/r/About_Veracode_API_Scanning",permalink:"/km-docusaurus-test/r/About_Veracode_API_Scanning",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Scan APIs",slug:"/r/About_Veracode_API_Scanning"},sidebar:"tutorialSidebar",previous:{title:"Video: View Dynamic Analysis results for a web application",permalink:"/km-docusaurus-test/r/c_video_was_results"},next:{title:"About API specification scans",permalink:"/km-docusaurus-test/r/About_API_Scanning_and_API_Specifications"}},c={},u=[{value:"Licensing for API scanning",id:"licensing-for-api-scanning",level:2}];function l(e){const n={a:"a",h2:"h2",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You use API Scanning in the Veracode Platform or with the ",(0,a.jsx)(n.a,{href:"/km-docusaurus-test/r/Use_the_REST_API_to_Create_a_Dynamic_Analysis_of_an_API",children:"REST API"})," to perform a Dynamic Analysis of your REST APIs. Veracode crawls and analyzes the API endpoints to assess the security posture of the API. The results identify the vulnerabilities you might need to fix."]}),"\n",(0,a.jsxs)(n.p,{children:["You can also scan web applications and APIs with ",(0,a.jsx)(n.a,{href:"/km-docusaurus-test/r/crashtest-security-suite",children:"DAST Essentials"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"In the Veracode Platform, you create a new Dynamic Analysis and upload or select the API specification you want to analyze. An analysis can contain a maximum of 250 specifications."}),"\n",(0,a.jsxs)(n.p,{children:["If you want to try API scanning, but you do not have an OpenAPI 3.0 or 2.0 specification, you can create an HTTP Archive (HAR) file using several free tools, such as ",(0,a.jsx)(n.a,{href:"https://toolbox.googleapps.com/apps/har_analyzer/",children:"Chrome Developer Tools"}),". To reduce extraneous traffic, such as third-party traffic, you can select ",(0,a.jsx)(n.strong,{children:"Fetch/XHR"})," to apply filtering before exporting the HAR."]}),"\n",(0,a.jsxs)(n.p,{children:["To learn more about API specification support and how Veracode processes these files during analysis, see ",(0,a.jsx)(n.a,{href:"/km-docusaurus-test/r/About_API_Scanning_and_API_Specifications",children:"this topic"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"licensing-for-api-scanning",children:"Licensing for API scanning"}),"\n",(0,a.jsx)(n.p,{children:"API Scanning requires a Dynamic Analysis license. Veracode uses target URLs in your license to determine the number of API specifications you can scan. Each target URL equates to a unique API server defined in your specifications. When you upload a specification in the Veracode Platform, it imports the URLs of the defined API servers."}),"\n",(0,a.jsx)(n.p,{children:"During a specification scan, Veracode detects the target API server and deducts it from the number of target URLs available in your license. If a specification has multiple servers defined, you can select the server you want to use when configuring the scan. If you scan a specification using a defined server and then scan that same specification using a different server, Veracode treats both servers as separate target URLs and deducts both target URLs from your license."}),"\n",(0,a.jsx)(n.p,{children:"Ensure your Dynamic Analysis license has an adequate number of target URLs for the number of API specifications you want to scan. To obtain or change a Dynamic Analysis license, contact your Veracode sales representative."})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var a=s(67294);const t={},i=a.createContext(t);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);