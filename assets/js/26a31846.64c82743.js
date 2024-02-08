"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17781],{31552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=n(85893),r=n(11151);const o={title:"Use the agent with an SCM other than Git",slug:"/r/c_sc_scm"},a=void 0,i={id:"guides/SCA/using_agent_based_scans/using_sca_agent/use_agent_scm_other",title:"Use the agent with an SCM other than Git",description:"You can use the Veracode SCA agent to scan a repository that uses a source code management (SCM) system other than Git. You can use these instructions to configure all commonly used SCM systems, including Subversion (SVN), Mercurial, and Team Foundation Version Control (TFVC).",source:"@site/docs/guides/07_SCA/04_using_agent_based_scans/09_using_sca_agent/01_use_agent_scm_other.md",sourceDirName:"guides/07_SCA/04_using_agent_based_scans/09_using_sca_agent",slug:"/r/c_sc_scm",permalink:"/km-docusaurus-test/r/c_sc_scm",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Use the agent with an SCM other than Git",slug:"/r/c_sc_scm"},sidebar:"tutorialSidebar",previous:{title:"Using the Veracode SCA agent",permalink:"/km-docusaurus-test/r/c_sc_agent_usage"},next:{title:"Enable agent-based scanning behind a proxy",permalink:"/km-docusaurus-test/r/t_sc_agent_proxy"}},c={},d=[{value:"Communicating SCM metadata to the agent",id:"communicating-scm-metadata-to-the-agent",level:2},{value:"Example",id:"example",level:2}];function h(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"You can use the Veracode SCA agent to scan a repository that uses a source code management (SCM) system other than Git. You can use these instructions to configure all commonly used SCM systems, including Subversion (SVN), Mercurial, and Team Foundation Version Control (TFVC)."}),"\n",(0,s.jsx)(t.p,{children:"The Veracode SCA agent normally interacts with a Git repository to learn the branch, commit, working directory state, and similar attributes to make the scan reports the most meaningful to the reader. However, not every organization uses Git and thus the agent needs a mechanism through which the scan data can be associated with the underlying source control metadata."}),"\n",(0,s.jsx)(t.h2,{id:"communicating-scm-metadata-to-the-agent",children:"Communicating SCM metadata to the agent"}),"\n",(0,s.jsx)(t.p,{children:"The Veracode SCA agent accepts SCM metadata from the caller through these environment variables."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Environment Variable"}),(0,s.jsx)(t.th,{children:"What It Controls"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"SRCCLR_SCM_URI"})}),(0,s.jsxs)(t.td,{children:["The URI you use to connect to the SCM system. For example: ",(0,s.jsx)(t.code,{children:"https://svn.example.com/svn/repos"})," or ",(0,s.jsx)(t.code,{children:"https://hg.example.com"}),". ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"NOTE:"}),(0,s.jsx)("br",{})," This value is the default name of the project in Veracode SCA after you complete your first scan."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"SRCCLR_SCM_REF"})}),(0,s.jsx)(t.td,{children:"Any meaningful name of the current state of the working directory, such as a branch, a tag, or a similar concept in your SCM."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"SRCCLR_SCM_REF_TYPE"})}),(0,s.jsxs)(t.td,{children:["Optional. The type of reference described in the ",(0,s.jsx)(t.code,{children:"SRCCLR_SCM_REF"})," variable, which can be one of these case-insensitive strings: ",(0,s.jsx)(t.code,{children:"branch"}),", ",(0,s.jsx)(t.code,{children:"tag"}),", or ",(0,s.jsx)(t.code,{children:"commit"}),". The default value is ",(0,s.jsx)(t.code,{children:"commit"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"SRCCLR_SCM_REV"})}),(0,s.jsx)(t.td,{children:"The revision of the current state of the working directory. For example, a Subversion change number or a Mercurial revision identifier."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"SRCCLR_SCM_SUB_PATH"})}),(0,s.jsxs)(t.td,{children:["Optional. Only meaningful if the project is located in a subdirectory down from the root of the SCM repository, such as with a multi-project Mercurial repository. If you use Subversion or similar directory addressable source control systems, Veracode recommends you specify the full path to the project root as the ",(0,s.jsx)(t.code,{children:"SRCCLR_SCM_URI"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Check out the source as you normally would and change to the working directory."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"$ svn checkout https://svn.code.sf.net/p/properties-mvn/svn/ properties-mvn\n$ cd properties-mvn\n"})}),"\n",(0,s.jsx)(t.p,{children:"To gather the information, use the source control tool to inspect its status."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"$ svn info\nPath: .\nWorking Copy Root Path: /Users/mdaniel/.tmp/properties-mvn\nURL: https://svn.code.sf.net/p/properties-mvn/svn\nRelative URL: ^/\nRepository Root: https://svn.code.sf.net/p/properties-mvn/svn\nRepository UUID: a38e15f5-c4e9-4b0a-8018-68579ae2876f\nRevision: 10\nNode Kind: directory\nSchedule: normal\nLast Changed Author: ayanul\nLast Changed Rev: 10\nLast Changed Date: 2010-09-29 04:28:27 -0700 (Wed, 29 Sep 2010)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now you can capture the relevant pieces of metadata in environment variables and invoke the ",(0,s.jsx)(t.code,{children:"srcclr scan"})," command to begin scanning."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"$ export SRCCLR_SCM_URI=https://svn.code.sf.net/p/properties-mvn/svn\n$ export SRCCLR_SCM_REF=trunk\n$ export SRCCLR_SCM_REF_TYPE=branch\n$ export SRCCLR_SCM_REV=10\n$ srcclr scan\n"})}),"\n",(0,s.jsx)(t.p,{children:"The results print a summary to the terminal and provide a hyperlink to the full details in the Veracode Platform."})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var s=n(67294);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);