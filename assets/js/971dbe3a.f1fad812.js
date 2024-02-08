"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32157],{69749:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=a(85893),t=a(11151);const s={author:["Scott Jordan"],title:"Package your code",slug:"/r/compilation_packaging",media_dir:"images/"},o=void 0,r={id:"guides/packaging/README",title:"Package your code",description:"Veracode provides specific requirements for compiling and packaging your application code to ensure successful Static Analysis scans.",source:"@site/docs/guides/03_packaging/README.md",sourceDirName:"guides/03_packaging",slug:"/r/compilation_packaging",permalink:"/km-docusaurus-test/r/compilation_packaging",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{author:["Scott Jordan"],title:"Package your code",slug:"/r/compilation_packaging",media_dir:"images/"},sidebar:"tutorialSidebar",previous:{title:"Onboarding",permalink:"/km-docusaurus-test/onboarding"},next:{title:"Quick reference for packaging requirements",permalink:"/km-docusaurus-test/r/c_comp_quickref"}},c={},l=[{value:"Required files",id:"required-files",level:2},{value:"Uploading archives",id:"uploading-archives",level:2},{value:"Data retention",id:"data-retention",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["Veracode provides specific requirements for compiling and packaging your application code to ensure successful ",(0,n.jsx)(i.a,{href:"/km-docusaurus-test/r/c_static_overview",children:"Static Analysis"})," scans."]}),"\n",(0,n.jsx)(i.p,{children:"This section provides specific instructions for Veracode-supported languages and platforms. Additionally, review this general guidance that applies to all Veracode static scans."}),"\n",(0,n.jsxs)(i.p,{children:["You can use the ",(0,n.jsx)(i.a,{href:"https://docs.veracode.com/cheatsheet/?utm_source=docs&utm_medium=article&utm_campaign=packaging-guidance",children:"Veracode Packaging Cheat Sheet"})," to generate language-specific packaging guidance for Static Analysis."]}),"\n",(0,n.jsxs)(i.p,{children:["For language support specific to Veracode Pipeline Scan, see ",(0,n.jsx)(i.a,{href:"/km-docusaurus-test/r/Pipeline_Scan_Supported_Languages",children:"Pipeline Scan supported languages"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"required-files",children:"Required files"}),"\n",(0,n.jsx)(i.p,{children:"The Veracode Platform requires an executable set of files to perform a static scan. Individual libraries or DLLs that support a main executable generally require the executable to perform an adequate scan. You must upload all executables. Where possible, upload first-party dependent libraries to improve the quality of the scan. Veracode notifies you of any missing dependencies before the scan begins. You have the opportunity to upload them."}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"All dependent libraries are required for C/C++ applications."})}),"\n",(0,n.jsx)(i.p,{children:"If you want source file and line number information for flaws, you must upload the debug symbols for the application, either PDB files for Windows binaries, or applications built including debug symbols according to the instructions in this document. You must upload debug symbols for C/C++ and iOS applications."}),"\n",(0,n.jsx)(i.p,{children:"In general, for a successful upload of files to Veracode, follow these basic guidelines:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Only upload files with names consisting of printable, UTF-8 characters."}),"\n",(0,n.jsx)(i.li,{children:"Only upload applications built using UTF-8 encoding."}),"\n",(0,n.jsx)(i.li,{children:"Do not upload obfuscated binaries."}),"\n",(0,n.jsx)(i.li,{children:"Do not upload installer packages, such as Linux RPM or Windows InstallShield."}),"\n",(0,n.jsx)(i.li,{children:"Do not upload Classic ASP applications in the same scan with application code written in other languages."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"uploading-archives",children:"Uploading archives"}),"\n",(0,n.jsx)(i.p,{children:"You can upload archives of multiple application files in these formats: ZIP, TAR, TAR.GZ, TGZ. The Veracode Platform expands the archive and lists all the executable files it finds inside. These rules apply to uploading archives:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Do not upload a password-protected archive. The Veracode Platform securely encrypts all files that are uploaded. It is not necessary to password protect the archive, and the Veracode Platform is not be able to expand it if a password is present."}),"\n",(0,n.jsx)(i.li,{children:"Do not upload archives of archives. The Veracode Platform only expands the top level of archives and does not proceed if it finds additional archives inside (except for JARs, EARs, and WARs)."}),"\n",(0,n.jsxs)(i.li,{children:["When using tar to combine multiple files, use the ",(0,n.jsx)(i.code,{children:"-h"})," option to ensure that tar archives the file that the symbolic link points to, rather than archiving the symbolic link."]}),"\n",(0,n.jsx)(i.li,{children:"Veracode does not support the RAR archive format."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"data-retention",children:"Data retention"}),"\n",(0,n.jsxs)(i.p,{children:["When you upload your application files, Veracode uses ",(0,n.jsx)(i.a,{href:"/km-docusaurus-test/r/c_data_retention",children:"specific rules for retaining"})," user-provided and system-generated data."]})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,i,a)=>{a.d(i,{Z:()=>r,a:()=>o});var n=a(67294);const t={},s=n.createContext(t);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);