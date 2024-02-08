"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14433],{81892:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=s(85893),a=s(11151);const t={title:"Dynamic Analysis REST API",slug:"/r/c_dynamic_intro"},r=void 0,c={id:"guides/apis/rest_apis/dynamic_rest_api/README",title:"Dynamic Analysis REST API",description:"You can use the Dynamic Analysis API to automate major dynamic scanning tasks.",source:"@site/docs/guides/14_apis/04_rest_apis/05_dynamic_rest_api/README.md",sourceDirName:"guides/14_apis/04_rest_apis/05_dynamic_rest_api",slug:"/r/c_dynamic_intro",permalink:"/km-docusaurus-test/r/c_dynamic_intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Dynamic Analysis REST API",slug:"/r/c_dynamic_intro"},sidebar:"tutorialSidebar",previous:{title:"Delete a development sandbox with the REST API",permalink:"/km-docusaurus-test/r/c_sandbox_delete_rest"},next:{title:"Create a Dynamic Analysis of an API with the REST API",permalink:"/km-docusaurus-test/r/Use_the_REST_API_to_Create_a_Dynamic_Analysis_of_an_API"}},o={},l=[{value:"Permissions and authentication",id:"permissions-and-authentication",level:2},{value:"Dynamic Analysis API specification",id:"dynamic-analysis-api-specification",level:2},{value:"Authentication errors",id:"authentication-errors",level:2},{value:"Scan APIs with the Dynamic Analysis REST API",id:"scan-apis-with-the-dynamic-analysis-rest-api",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"You can use the Dynamic Analysis API to automate major dynamic scanning tasks."}),"\n",(0,i.jsx)(n.p,{children:"This API enables you to programmatically initiate dynamic scanning with the flexibility necessary for incorporating this type of security scanning into your Software Development Life Cycle."}),"\n",(0,i.jsx)(n.p,{children:"The API endpoints perform these tasks:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create analyses with URL scans"}),"\n",(0,i.jsx)(n.li,{children:"Configure analyses and URL scans"}),"\n",(0,i.jsx)(n.li,{children:"Schedule and run analyses"}),"\n",(0,i.jsx)(n.li,{children:"Link analyses to Veracode application profiles"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["After completing a dynamic analysis scan, you can use the ",(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/c_findings_v2_intro",children:"Findings API"})," to get information on a discovered flaw."]}),"\n",(0,i.jsx)(n.h2,{id:"permissions-and-authentication",children:"Permissions and authentication"}),"\n",(0,i.jsx)(n.p,{children:"To be able to use the Veracode Dynamic Analysis REST API, you must have one of these accounts with the required roles:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["An API service account with the Upload and Scan API ",(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/c_API_roles_details",children:"role"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A user account with the Security Lead, Creator, or Submitter ",(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/c_role_permissions",children:"role"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/c_api_credentials3",children:"API credentials"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/c_enabling_hmac",children:"HMAC authentication"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Ensure you access the APIs with the ",(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/Region_Domains_for_Veracode_APIs",children:"domain for your region"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"dynamic-analysis-api-specification",children:"Dynamic Analysis API specification"}),"\n",(0,i.jsxs)(n.p,{children:["The Dynamic Analysis API specification is available from ",(0,i.jsx)(n.a,{href:"https://app.swaggerhub.com/apis/Veracode/veracode-dynamic_analysis_configuration_service_api/1.0",children:"SwaggerHub"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"authentication-errors",children:"Authentication errors"}),"\n",(0,i.jsx)(n.p,{children:"To see authentication errors for the Dynamic Analysis REST API, send:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"http --auth-type=veracode_hmac GET https://api.veracode.com/was/configservice/v1/code_groups/errorcode\n"})}),"\n",(0,i.jsx)(n.h2,{id:"scan-apis-with-the-dynamic-analysis-rest-api",children:"Scan APIs with the Dynamic Analysis REST API"}),"\n",(0,i.jsxs)(n.p,{children:["By default, any ",(0,i.jsx)(n.code,{children:"POST"})," or ",(0,i.jsx)(n.code,{children:"PUT"})," request to the Dynamic Analysis REST API assumes that the target is a web application. For a ",(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/Use_the_REST_API_to_Create_a_Dynamic_Analysis_of_an_API",children:"Dynamic Analysis scan of APIs"}),", append the ",(0,i.jsx)(n.code,{children:"scan_type=API_SCAN"})," query parameter to your ",(0,i.jsx)(n.code,{children:"POST"})," or ",(0,i.jsx)(n.code,{children:"PUT"})," request. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses?scan_type=API_SCAN" < input.json\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To scan web applications, exclude this parameter or change it to ",(0,i.jsx)(n.code,{children:"scan_type=WEB_SCAN"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var i=s(67294);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);