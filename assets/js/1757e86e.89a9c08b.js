"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70023],{98401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(85893),i=n(11151);const a={title:"Applying scan requirements to a policy",slug:"/r/c_policy_scan_reqs"},c=void 0,o={id:"guides/findings/policies/policy_scan_reqs",title:"Applying scan requirements to a policy",description:"When creating a policy, you can set a single scan frequency requirement for all scan types or set the requirement for specific scan types.",source:"@site/docs/guides/09_findings/09_policies/10_policy_scan_reqs.md",sourceDirName:"guides/09_findings/09_policies",slug:"/r/c_policy_scan_reqs",permalink:"/km-docusaurus-test/r/c_policy_scan_reqs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Applying scan requirements to a policy",slug:"/r/c_policy_scan_reqs"},sidebar:"tutorialSidebar",previous:{title:"Customizing severities for a policy",permalink:"/km-docusaurus-test/r/c_policy_custom_severities"},next:{title:"Edit a policy",permalink:"/km-docusaurus-test/r/t_edit_policy"}},r={},l=[];function u(e){const t={a:"a",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["When ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/t_create_policy",children:"creating a policy"}),", you can set a single scan frequency requirement for all scan types or set the requirement for specific scan types."]}),"\n",(0,s.jsx)(t.p,{children:"Scan requirements define how frequently you must scan an application for it to pass policy. On the Scan Requirements page, you can define one or more required scan types and set the scan frequency for each type. You can select Any Scan Type, or specify one or more of the following scan types: Static Analysis, Dynamic Analysis, or Manual Penetration Testing."}),"\n",(0,s.jsx)(t.p,{children:"You can select the following scan frequencies: once, weekly, monthly (30 days), quarterly (90 days), semi-annually (180 days), annually, every 18 months, every two years, or every three years."}),"\n",(0,s.jsx)(t.p,{children:"Veracode uses the scan frequency and the date of the first scan of the application to determine the scan due date. When an application approaches the date defined in the scan requirement, Veracode sends a notification to members of the teams associated with the application."}),"\n",(0,s.jsx)(t.p,{children:"If you do not scan the application as frequently as the requirement dictates, the application does not pass policy until it meets the requirement. If you change the policy of the application, Veracode recalculates the scan due dates based on the date of the first scan of the application and the new scan frequency rule."})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var s=n(67294);const i={},a=s.createContext(i);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);