"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78445],{50536:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(85893),n=t(11151);const o={author:["Kevin McCarthy"],"ft:originID":"improve_mitigation","ft:lang":"en-US",title:"About mitigating flaws",slug:"/r/improve_mitigation",media_dir:"images/"},s=void 0,r={id:"guides/findings/improve/improve_mitigation/README",title:"About mitigating flaws",description:"After Veracode completes a scan of your code, you can apply mitigation actions on any discovered vulnerabilities.",source:"@site/docs/guides/09_findings/06_improve/01_improve_mitigation/README.md",sourceDirName:"guides/09_findings/06_improve/01_improve_mitigation",slug:"/r/improve_mitigation",permalink:"/km-docusaurus-test/r/improve_mitigation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{author:["Kevin McCarthy"],"ft:originID":"improve_mitigation","ft:lang":"en-US",title:"About mitigating flaws",slug:"/r/improve_mitigation",media_dir:"images/"},sidebar:"tutorialSidebar",previous:{title:"Improving application security",permalink:"/km-docusaurus-test/r/improve_main"},next:{title:"Reviewing flaws as a team",permalink:"/km-docusaurus-test/r/Reviewing_Flaws_as_a_Team"}},c={},l=[];function m(e){const i={a:"a",admonition:"admonition",li:"li",ol:"ol",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"After Veracode completes a scan of your code, you can apply mitigation actions on any discovered vulnerabilities."}),"\n",(0,a.jsxs)(i.p,{children:["After a scan is complete, the next step in the workflow is to review all the discovered vulnerabilities in detail. Veracode enables you to sort the flaws and decide if you want to take any mitigation actions to temporarily address the flaw. You can mitigate flaws by making changes to the operating system features, network implementation, or application design. After you flag a flaw as mitigated, users in your organization with the Mitigation Approver ",(0,a.jsx)(i.a,{href:"/km-docusaurus-test/r/c_role_permissions",children:"role"})," can accept or reject the mitigations. Accepting the mitigated flaws removes them from the application score calculation and from being considered in the determination of the application's policy status. The mitigating factors are included in the application report."]}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"Mitigations do not provide long-term fixes for application security flaws. For example, changes to your environment or new attack techniques can make many mitigating factors, including network and operating system mitigations, ineffective. Veracode recommends that you use mitigations as part of a long-term plan to remediate flaws in your code."})}),"\n",(0,a.jsx)(i.p,{children:"The mitigation workflow involves:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"/km-docusaurus-test/r/Reviewing_Flaws_as_a_Team",children:"Reviewing the flaws with your team"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"/km-docusaurus-test/r/Propose_Mitigating_Factors_for_a_Flaw",children:"Proposing mitigating factors"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"/km-docusaurus-test/r/Accepting_and_Rejecting_Mitigations",children:"Accepting or rejecting mitigations"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"/km-docusaurus-test/r/View_Mitigated_Flaws_in_Reports",children:"Viewing mitigated flaws in the report"})}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["You can do all the steps in the mitigation workflow from the Triage Flaws view, which you can access from either the Results section of the left navigation menu or from the application overview. You can perform mitigation actions on one flaw at a time or perform a ",(0,a.jsx)(i.a,{href:"/km-docusaurus-test/r/Managing_Mitigations_for_Several_Flaws_at_the_Same_Time",children:"mass action"})," on multiple flaws at one time. You can accept or reject proposed mitigations from the Mitigated Flaws page."]}),"\n",(0,a.jsxs)(i.p,{children:["Veracode automatically applies mitigation actions, including comments, proposals, acceptances, and rejections, to all ",(0,a.jsx)(i.a,{href:"/km-docusaurus-test/r/c_review_matchflaws",children:"matched flaws"})," within the application. Veracode also applies these mitigation actions to copies of the flaw that might exist in other sandboxes and the latest policy scan."]}),"\n",(0,a.jsxs)(i.p,{children:["You can also manage the mitigation workflow with the ",(0,a.jsx)(i.a,{href:"/km-docusaurus-test/r/c_rest_annotations_intro",children:"Annotations REST API"}),"."]})]})}function d(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>s});var a=t(67294);const n={},o=a.createContext(n);function s(e){const i=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:i},e.children)}}}]);