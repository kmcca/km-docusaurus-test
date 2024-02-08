"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28142],{29211:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(85893),t=n(11151);const a={title:"Fix example direct vulnerability for Ant",slug:"/r/Fix_Example_Direct_Vulnerability_for_Ant"},s=void 0,o={id:"guides/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_ant_direct",title:"Fix example direct vulnerability for Ant",description:"When your configuration file specifically references a library, or you add the library to your project as a JAR file, Veracode SCA refers to the library as a direct dependency.",source:"@site/docs/guides/07_SCA/04_using_agent_based_scans/19_finding_and_fixing_vulnerabilities/02_java_sca_agent/11_fix_example_ant_direct.md",sourceDirName:"guides/07_SCA/04_using_agent_based_scans/19_finding_and_fixing_vulnerabilities/02_java_sca_agent",slug:"/r/Fix_Example_Direct_Vulnerability_for_Ant",permalink:"/km-docusaurus-test/r/Fix_Example_Direct_Vulnerability_for_Ant",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Fix example direct vulnerability for Ant",slug:"/r/Fix_Example_Direct_Vulnerability_for_Ant"},sidebar:"tutorialSidebar",previous:{title:"Run an agent-based scan for Ant",permalink:"/km-docusaurus-test/r/Run_an_Agent_Based_Scan_for_Ant"},next:{title:"JavaScript SCA agent-based scanning",permalink:"/km-docusaurus-test/r/c_sc_javascript"}},c={},l=[];function d(e){const i={a:"a",code:"code",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"When your configuration file specifically references a library, or you add the library to your project as a JAR file, Veracode SCA refers to the library as a direct dependency."}),"\n",(0,r.jsxs)(i.p,{children:["These example steps provide a fix for an ",(0,r.jsx)(i.a,{href:"https://www.sourceclear.com/registry/security/unauthorised-modification-of-nodes/java/sid-4029",children:"Unauthorized Modification of Nodes"})," vulnerability in ",(0,r.jsx)(i.a,{href:"https://www.sourceclear.com/registry/libraries/9470?version=0.9.0.1",children:"Apache Kafka, version 0.9.0.1"})," in the ",(0,r.jsx)(i.a,{href:"https://github.com/veracode/example-java-ant",children:"example-java-ant"})," repository."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"To complete this task:"})}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Delete the ",(0,r.jsx)(i.code,{children:"kafka_2.11-0.9.0.1.jar"}),"file in the ",(0,r.jsx)(i.code,{children:"libsrc/"})," directory."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"libsrc/"})," directory is the location where you store the JAR files for your project."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["From the ",(0,r.jsx)(i.a,{href:"/km-docusaurus-test/r/View_SCA_Issue_Details",children:"issue details page"}),", click the link to the appropriate version of the Apache Kafka library in ",(0,r.jsx)(i.a,{href:"https://mvnrepository.com/artifact/org.apache.kafka/kafka_2.11/0.10.2.1",children:"Maven Central"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Within that page, select the download link for the Apache Kafka JAR file."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Download the JAR file to the ",(0,r.jsx)(i.code,{children:"libsrc/"})," directory."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/km-docusaurus-test/r/Validating_Fixed_Agent_Based_Scan_Results",children:"Validate the fix"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>s});var r=n(67294);const t={},a=r.createContext(t);function s(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);