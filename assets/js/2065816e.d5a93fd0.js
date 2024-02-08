"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34243],{21137:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=s(85893),i=s(11151);const r={title:"Enable pull requests for GitHub",slug:"/r/t_configure_pr_github"},o=void 0,l={id:"guides/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/enable_pull_requests_github",title:"Enable pull requests for GitHub",description:"To use automatic pull requests for Veracode Software Composition Analysis agent-based scanning, you need permission to create pull requests in GitHub.",source:"@site/docs/guides/07_SCA/04_using_agent_based_scans/09_using_sca_agent/06_about_automatic_pull_requests/01_enable_pull_requests_github.md",sourceDirName:"guides/07_SCA/04_using_agent_based_scans/09_using_sca_agent/06_about_automatic_pull_requests",slug:"/r/t_configure_pr_github",permalink:"/km-docusaurus-test/r/t_configure_pr_github",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Enable pull requests for GitHub",slug:"/r/t_configure_pr_github"},sidebar:"tutorialSidebar",previous:{title:"About automatic pull requests",permalink:"/km-docusaurus-test/r/About_Automatic_Pull_Requests"},next:{title:"Video: Enable pull requests for GitHub for use in agent-based scans",permalink:"/km-docusaurus-test/r/c_sc_video__enable_pull_requests_for_github"}},c={},a=[];function u(e){const n={a:"a",admonition:"admonition",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"To use automatic pull requests for Veracode Software Composition Analysis agent-based scanning, you need permission to create pull requests in GitHub."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To complete this task:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://github.com/settings/tokens",children:"https://github.com/settings/tokens"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If prompted, enter your GitHub credentials and log in."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the New personal access token page, click ",(0,t.jsx)(n.strong,{children:"Generate new token"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enter a token description. For example: Allow Veracode Agent-Based Scan to generate pull requests"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the ",(0,t.jsx)(n.strong,{children:"repo"})," checkbox."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Generate token"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After the token generates, click the clipboard icon ",(0,t.jsx)(n.img,{alt:"copy token",src:s(67076).Z+"",width:"15",height:"16"})," to copy the token and save it to a safe location."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"After you leave the page, you cannot access this token again."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add your token using one of these methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add this code to the ",(0,t.jsx)(n.code,{children:"agent.yml"})," ",(0,t.jsx)(n.a,{href:"/km-docusaurus-test/r/c_sc_agent_usage",children:"file"})," installed in your ",(0,t.jsx)(n.code,{children:"~/.srcclr"})," folder:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"scmType: GITHUB\nscmToken: <token copied in earlier step>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the token as an environment variable in a command script. For example, add this code in Linux bash:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'export SRCCLR_SCM_TYPE="GITHUB"\nexport SRCCLR_SCM_TOKEN="<token copied in earlier step>"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you are using an installation of GitHub other than GitHub.com, add your project URL using one of these methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the project URL to the ",(0,t.jsx)(n.code,{children:"agent.yml"})," file installed in your ",(0,t.jsx)(n.code,{children:"~/.srcclr"})," folder. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"scmUrl: https://github.acme.io\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the project URL as an environment variable in a command script. For example, add this code in Linux bash:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'export SRCCLR_SCM_URL="https://github.acme.io"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},67076:(e,n,s)=>{s.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAB3RJTUUH4wYaEgcDJQoxtAAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAAzElEQVQokZ2RIRKDMBBFPx1miqEHwMV16BkqimJ6GSJquUFFuAe6E99L1OHiEGkUiiqYkCyB6VfJbn5e8jfSQz/iT8VU8f0Z8Hx9AQCP+wnX85E0H6hi3Wrc8gRFnqBudZjcSAMhzVysyhS8TOc944rsRXrox6npmmzZgE5kvnmvJnPsFrZkg+K1xp5LF+a1g400qIgsFqNiXIFxtUjenYQNCJJtI/WlTXJIQfL0TyENmUcw7U5kXlCMK3/OFNl9AUnmZUoGQqm4JPP6B4YBX/TTXTfeAAAAAElFTkSuQmCC"},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var t=s(67294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);