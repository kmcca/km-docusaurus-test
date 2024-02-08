"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94587],{84755:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=s(85893),r=s(11151);const a={author:["Kevin McCarthy"],title:"About custom cleansers",slug:"/r/customcleansers",media_dir:"images/"},i=void 0,o={id:"guides/packaging/supported_framworks_cleansers/customcleansers/README",title:"About custom cleansers",description:"You can add Veracode custom cleanser annotations in your code to mitigate findings that the Veracode Static Analysis normally finds.",source:"@site/docs/guides/03_packaging/34_supported_framworks_cleansers/03_customcleansers/README.md",sourceDirName:"guides/03_packaging/34_supported_framworks_cleansers/03_customcleansers",slug:"/r/customcleansers",permalink:"/km-docusaurus-test/r/customcleansers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{author:["Kevin McCarthy"],title:"About custom cleansers",slug:"/r/customcleansers",media_dir:"images/"},sidebar:"tutorialSidebar",previous:{title:"Supported Ruby cleansing functions",permalink:"/km-docusaurus-test/r/Supported_Ruby_Cleansing_Functions"},next:{title:"Annotate Java code",permalink:"/km-docusaurus-test/r/t_annotate_java"}},c={},d=[{value:"Source code",id:"source-code",level:2}];function l(e){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"You can add Veracode custom cleanser annotations in your code to mitigate findings that the Veracode Static Analysis normally finds."}),"\n",(0,n.jsxs)(t.p,{children:["Security Leads can specify the default ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/c_cleanser_admin",children:"mitigation state"})," for findings that arise when the data in the application has passed through custom cleanser functions."]}),"\n",(0,n.jsxs)(t.p,{children:["Custom cleanser functions must be designed to consume non-validated or unmitigated data and return validated or mitigated data. Ensure all data paths that can reach the finding pass through your custom cleanser or an ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/review_cleansers",children:"approved cleanser"}),". If any unmitigated input reaches the finding, it is still reported."]}),"\n",(0,n.jsx)(t.p,{children:"Custom cleanser functions can facilitate how you manage your results by minimizing false positives and accelerating the review process. Sanitizing or cleansing user input to remove the risk of attack addresses many common security issues. Open-source and commercial cleansing functions exist, but many developers at large organizations implement their own enterprise cleansing libraries, which Veracode may not recognize."}),"\n",(0,n.jsx)(t.p,{children:"These cleansing functions provide application security managers and their teams a safe way to avoid and fix security findings. For developers, using cleansing functions can lower noise in reports by reducing the number of findings that a development team needs to review."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If your custom cleanser implementation uses one of the ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/review_cleansers",children:"Veracode supported cleansing functions"}),", the function can assess the findings as reported and mitigated according to the custom cleanser settings. Otherwise, the Static Analysis would either not report the findings or would report them as fixed."]})}),"\n",(0,n.jsx)(t.p,{children:"This table lists the supported Flaw classes and CWEs:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Flaw class"}),(0,n.jsx)(t.th,{children:"CWE"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CRLF Injection"}),(0,n.jsx)(t.td,{children:"93,113,117"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"File Path Injection"}),(0,n.jsx)(t.td,{children:"73"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Open Redirect"}),(0,n.jsx)(t.td,{children:"601"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SQL Injection"}),(0,n.jsx)(t.td,{children:"89"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Cross-Site Scripting"}),(0,n.jsx)(t.td,{children:"80"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"source-code",children:"Source code"}),"\n",(0,n.jsx)(t.p,{children:"Veracode recognizes that users may want to see the source code for these files because they are including them in their own software projects. Veracode has made the custom cleanser annotations open-source available on GitHub at:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/veracode/veracode-attributes",children:"https://github.com/veracode/veracode-attributes"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/veracode/veracode-annotations",children:"https://github.com/veracode/veracode-annotations"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var n=s(67294);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);