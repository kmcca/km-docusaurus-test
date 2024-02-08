"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15597],{62476:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=r(85893),s=r(11151);const i={title:"Configure your Travis CI repository",slug:"/r/Configure_Your_Travis_CI_Repository"},o=void 0,a={id:"guides/SCA/setting_up_agent_based_scans/continuous_integration/travis_ci/configure_travis_repo",title:"Configure your Travis CI repository",description:"To complete this task:",source:"@site/docs/guides/07_SCA/03_setting_up_agent_based_scans/01_continuous_integration/08_travis_ci/03_configure_travis_repo.md",sourceDirName:"guides/07_SCA/03_setting_up_agent_based_scans/01_continuous_integration/08_travis_ci",slug:"/r/Configure_Your_Travis_CI_Repository",permalink:"/km-docusaurus-test/r/Configure_Your_Travis_CI_Repository",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configure your Travis CI repository",slug:"/r/Configure_Your_Travis_CI_Repository"},sidebar:"tutorialSidebar",previous:{title:"Set your Travis CI environment variable",permalink:"/km-docusaurus-test/r/Set_Your_Travis_CI_Environment_Variable"},next:{title:"Gradle plugin for agent-based scanning",permalink:"/km-docusaurus-test/r/t_sc_gradle"}},c={},u=[];function d(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To complete this task:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add this code to your ",(0,t.jsx)(n.code,{children:".travis.yml"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"addons:\n    srcclr: true\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you want verbose output during the scan, add the debug key:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"addons:\n    srcclr:\n        debug: true\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Commit the changes to start a build."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Results:"})}),"\n",(0,t.jsx)(n.p,{children:"Veracode Software Composition Analysis (SCA) performs an agent-based scan, displaying results to your agent-based scanning environment."})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(67294);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);