"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90918],{51262:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=i(85893),a=i(11151);const n={title:"Reviewing the estimated completion time for a static scan",slug:"/r/request_time"},o=void 0,r={id:"guides/static/request_time",title:"Reviewing the estimated completion time for a static scan",description:"Veracode computes the estimated completion time for static scans of applications based on historical delivery times for applications of similar size and language.",source:"@site/docs/guides/06_static/16_request_time.md",sourceDirName:"guides/06_static",slug:"/r/request_time",permalink:"/km-docusaurus-test/r/request_time",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Reviewing the estimated completion time for a static scan",slug:"/r/request_time"},sidebar:"tutorialSidebar",previous:{title:"Reviewing the static scan details",permalink:"/km-docusaurus-test/r/Reviewing_the_Static_Scan_Details"},next:{title:"Checking the scan status",permalink:"/km-docusaurus-test/r/Checking_the_Scan_Status"}},c={},l=[{value:"Considerations for large applications",id:"considerations-for-large-applications",level:2},{value:"Review estimated completion time",id:"review-estimated-completion-time",level:2},{value:"Scans under investigation",id:"scans-under-investigation",level:2}];function d(e){const t={a:"a",h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Veracode computes the estimated completion time for static scans of applications based on historical delivery times for applications of similar size and language."}),"\n",(0,s.jsx)(t.h2,{id:"considerations-for-large-applications",children:"Considerations for large applications"}),"\n",(0,s.jsx)(t.p,{children:"The amount of time that it takes to deliver results for a static scan depends on many factors, including the language or platform in which the application was written, the size of the application, and whether the application is being scanned on behalf of a third party."}),"\n",(0,s.jsx)(t.p,{children:"Large applications may take additional time to process. The actual processing time can vary by language, platform, and unique behaviors of the submitted code. For example, applications submitted with missing dependencies, or with dependencies compiled without debug symbols, can take longer."}),"\n",(0,s.jsx)(t.p,{children:"Veracode makes every effort to deliver results as soon as possible. Therefore, if applications complete analysis sooner than the estimated delivery window, Veracode publishes the results sooner."}),"\n",(0,s.jsx)(t.h2,{id:"review-estimated-completion-time",children:"Review estimated completion time"}),"\n",(0,s.jsx)(t.p,{children:"After initial submission, the estimated completion time for a static scan is based on the time it took to deliver results for past versions of the application. You can review the estimated completion time for your application on the prescan results page."}),"\n",(0,s.jsxs)(t.p,{children:["The estimated completion time for an application is shown on the ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/Requesting_a_Static_Scan",children:"prescan results page before the application is submitted"}),", and on the ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/c_using_static_overview",children:"static scan overview page"})," after submission."]}),"\n",(0,s.jsx)(t.p,{children:"On the prescan results page before submission, the estimated completion time dynamically updates as modules are selected."}),"\n",(0,s.jsxs)(t.p,{children:["You can ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/c_using_static_overview",children:"see the estimated delivery date"})," on the scan overview page after you have submitted the application."]}),"\n",(0,s.jsx)(t.h2,{id:"scans-under-investigation",children:"Scans under investigation"}),"\n",(0,s.jsx)(t.p,{children:"If Veracode encounters a technical issue during scanning, the Estimated Delivery field shows the Under Investigation status, indicating that Veracode is working to resolve the issue."})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var s=i(67294);const a={},n=s.createContext(a);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);