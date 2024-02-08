"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11942],{14977:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(85893),t=i(11151);const r={title:"Veracode Jenkins Plugin prerequisites",slug:"/r/c_using_jenkins"},a=void 0,o={id:"guides/integrations/cicd/jenkins_integration/jenkins_prereqs",title:"Veracode Jenkins Plugin prerequisites",description:"Before you can install and use the Veracode Jenkins Plugin, you must meet these prerequisites and have a Veracode account with the required roles.",source:"@site/docs/guides/04_integrations/03_cicd/07_jenkins_integration/01_jenkins_prereqs.md",sourceDirName:"guides/04_integrations/03_cicd/07_jenkins_integration",slug:"/r/c_using_jenkins",permalink:"/km-docusaurus-test/r/c_using_jenkins",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Veracode Jenkins Plugin prerequisites",slug:"/r/c_using_jenkins"},sidebar:"tutorialSidebar",previous:{title:"Jenkins",permalink:"/km-docusaurus-test/r/c_about_jenkins"},next:{title:"Install the Veracode Jenkins Plugin",permalink:"/km-docusaurus-test/r/t_install_jenkins"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Permissions",id:"permissions",level:2}];function u(e){const n={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Before you can install and use the Veracode Jenkins Plugin, you must meet these prerequisites and have a Veracode account with the required roles."}),"\n",(0,s.jsxs)(n.p,{children:["Starting with version 20.6.10.0 of the Veracode Jenkins Plugin, Veracode distributes the plugin as open source under an MIT license. You can download the plugin source code from ",(0,s.jsx)(n.a,{href:"https://github.com/jenkinsci",children:"GitHub"}),". On the ",(0,s.jsx)(n.a,{href:"https://plugins.jenkins.io/",children:"Jenkins Marketplace"})," and in the Jenkins Plugin Manager, the plugin name is Veracode Scan."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before you can install and use the Jenkins Plugins, you must have:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Jenkins 2.60\u20132.332.4. Although there are additional Veracode Jenkins plugins available from the Jenkins server list of available plugins, Veracode only supports the Veracode-developed plugin available here."}),"\n",(0,s.jsx)(n.li,{children:"Java 8 or 11."}),"\n",(0,s.jsx)(n.li,{children:"Installed any dependencies on the Jenkins server. The Veracode Jenkins Plugin has a dependency on numerous plugins including the Jenkins Structs plugin and Jenkins Symbol Annotation plugin, as do most default installations of Jenkins. Newer versions of Jenkins automatically resolve these dependencies at the time of installation. If this fails, you must manually install the dependencies."}),"\n",(0,s.jsx)(n.li,{children:"Jenkins server has Internet connectivity."}),"\n",(0,s.jsxs)(n.li,{children:["You have packaged the application code you plan to upload to Veracode for scanning to include the required debug symbols, as described in the ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/compilation_packaging",children:"packaging requirements"}),". If you have a .NET application, you can use the ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/c_title_VS",children:"Visual Studio extension"})," to prepare your application. You can also automate the preparation of a .NET application by precompiling it with MSBUILD."]}),"\n",(0,s.jsxs)(n.li,{children:["Generated ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/c_api_credentials3",children:"Veracode API credentials"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,s.jsx)(n.p,{children:"You must have one of these Veracode accounts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A user account with these ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/c_role_permissions",children:"roles"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Creator or Security Lead role to be able to create application profiles, and upload and scan applications"}),"\n",(0,s.jsx)(n.li,{children:"Submitter role to create a new scan for an existing application and upload and scan these applications"}),"\n",(0,s.jsx)(n.li,{children:"Reviewer role to check scan completion"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["An API service account with these ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/c_API_roles_details",children:"roles"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Upload API to create application profiles, create sandboxes, and upload and scan applications"}),"\n",(0,s.jsx)(n.li,{children:"Upload API - Submit only to submit scans"}),"\n",(0,s.jsx)(n.li,{children:"Results API to check scan completion"}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var s=i(67294);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);