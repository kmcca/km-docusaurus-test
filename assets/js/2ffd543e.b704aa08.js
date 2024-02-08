"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6629],{38103:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>_,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=n(85893),s=n(11151);const a={title:"Get findings from a Pipeline Scan with the REST API",slug:"/r/Obtaining_Pipeline_Scan_Findings_with_the_REST_API"},r=void 0,c={id:"guides/apis/rest_apis/pipeline_scan_rest_api/pipeline_scan_api_view_findings",title:"Get findings from a Pipeline Scan with the REST API",description:"Send the following request to obtain findings from a Pipeline Scan:",source:"@site/docs/guides/14_apis/04_rest_apis/12_pipeline_scan_rest_api/06_pipeline_scan_api_view_findings.md",sourceDirName:"guides/14_apis/04_rest_apis/12_pipeline_scan_rest_api",slug:"/r/Obtaining_Pipeline_Scan_Findings_with_the_REST_API",permalink:"/km-docusaurus-test/r/Obtaining_Pipeline_Scan_Findings_with_the_REST_API",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Get findings from a Pipeline Scan with the REST API",slug:"/r/Obtaining_Pipeline_Scan_Findings_with_the_REST_API"},sidebar:"tutorialSidebar",previous:{title:"Get Pipeline Scan details with the REST API",permalink:"/km-docusaurus-test/r/Get_Pipeline_Scan_Details_with_the_REST_API"},next:{title:"Cancel a Pipeline Scan with the REST API",permalink:"/km-docusaurus-test/r/Canceling_a_Pipeline_Scan_with_the_REST_API"}},_={},o=[];function p(e){const i={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Send the following request to obtain findings from a Pipeline Scan:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:'http --auth-type=veracode_hmac GET "https://api.veracode.com/pipeline_scan/v1/scans/{scan_id}/findings"\n'})}),"\n",(0,t.jsxs)(i.p,{children:["Obtain the ",(0,t.jsx)(i.code,{children:"scan_id"})," from the response of the POST to the ",(0,t.jsx)(i.code,{children:"/scans"})," endpoint as described in ",(0,t.jsx)(i.a,{href:"/km-docusaurus-test/r/Configuring_a_Pipeline_Scan_with_the_REST_API",children:"Configure a Pipeline Scan with the REST API"}),"."]})]})}function l(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>r});var t=n(67294);const s={},a=t.createContext(s);function r(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);