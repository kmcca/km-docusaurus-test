"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57737],{3114:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(85893),t=i(11151);const a={title:"Fix example transitive vulnerability for Yarn 1.0 or later",slug:"/r/Fix_Example_Transitive_Vulnerability_for_Yarn_1_or_Later"},s=void 0,o={id:"guides/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_yarn_transitive",title:"Fix example transitive vulnerability for Yarn 1.0 or later",description:"Because Yarn projects allow for multiple versions of the same library, you cannot override a vulnerable library by adding the appropriate version directly to the configuration file.",source:"@site/docs/guides/07_SCA/04_using_agent_based_scans/19_finding_and_fixing_vulnerabilities/03_javascript_sca_agent/08_fix_example_yarn_transitive.md",sourceDirName:"guides/07_SCA/04_using_agent_based_scans/19_finding_and_fixing_vulnerabilities/03_javascript_sca_agent",slug:"/r/Fix_Example_Transitive_Vulnerability_for_Yarn_1_or_Later",permalink:"/km-docusaurus-test/r/Fix_Example_Transitive_Vulnerability_for_Yarn_1_or_Later",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Fix example transitive vulnerability for Yarn 1.0 or later",slug:"/r/Fix_Example_Transitive_Vulnerability_for_Yarn_1_or_Later"},sidebar:"tutorialSidebar",previous:{title:"Fix example direct vulnerability for Yarn",permalink:"/km-docusaurus-test/r/Fix_Example_Direct_Vulnerability_for_Yarn"},next:{title:"Fix example transitive vulnerability for Yarn earlier than 1.0",permalink:"/km-docusaurus-test/r/Fix_Example_Transitive_Vulnerability_for_Yarn_Earlier_than_1"}},l={},c=[];function d(e){const r={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Because Yarn projects allow for multiple versions of the same library, you cannot override a vulnerable library by adding the appropriate version directly to the configuration file."}),"\n",(0,n.jsxs)(r.p,{children:["These steps provide a fix for a ",(0,n.jsx)(r.a,{href:"https://www.sourceclear.com/registry/vulnerabilities/2678",children:"Timing Attack Via Signature Validation"})," vulnerability in ",(0,n.jsx)(r.a,{href:"https://www.sourceclear.com/registry/libraries/610?version=1.0.3",children:"cookie-signature, version 1.0.3"})," in the ",(0,n.jsx)(r.a,{href:"https://github.com/veracode/example-javascript-yarn",children:"example-javascript-yarn"})," repository."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"To complete this task:"})}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Add this ",(0,n.jsx)(r.code,{children:"resolutions"})," section to your ",(0,n.jsx)(r.code,{children:"package.json"})," file:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'"resolutions": {\n  "cookie-signature": "1.0.4"\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["If a ",(0,n.jsx)(r.code,{children:"resolutions"})," section already exists, add ",(0,n.jsx)(r.code,{children:'"cookie-signature": "1.0.4"'})," to it."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Run the ",(0,n.jsx)(r.code,{children:"yarn install"})," command."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Next steps:"})}),"\n",(0,n.jsx)(r.p,{children:"After completing these steps, build, test, and rescan your project to ensure the fix succeeded."})]})}function u(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,r,i)=>{i.d(r,{Z:()=>o,a:()=>s});var n=i(67294);const t={},a=n.createContext(t);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);