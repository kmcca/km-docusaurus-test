"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86677],{8318:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=i(85893),o=i(11151);const a={title:".NET MAUI packaging",slug:"/r/NET_MAUI_Application_Packaging"},r=void 0,s={id:"guides/packaging/maui",title:".NET MAUI packaging",description:"Your .NET Multi-platform App UI (.NET MAUI) applications must meet specific compilation requirements before you can submit them for scanning.",source:"@site/docs/guides/03_packaging/20_maui.md",sourceDirName:"guides/03_packaging",slug:"/r/NET_MAUI_Application_Packaging",permalink:"/km-docusaurus-test/r/NET_MAUI_Application_Packaging",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:".NET MAUI packaging",slug:"/r/NET_MAUI_Application_Packaging"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting precompilation errors",permalink:"/km-docusaurus-test/r/c_comp_troubleshoot"},next:{title:"Perl packaging",permalink:"/km-docusaurus-test/r/compilation_perl"}},l={},c=[{value:"Required files",id:"required-files",level:2},{value:"Supported .NET MAUI platforms and versions",id:"supported-net-maui-platforms-and-versions",level:2},{value:"Compilation of a .NET MAUI application",id:"compilation-of-a-net-maui-application",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Your .NET Multi-platform App UI (.NET MAUI) applications must meet specific compilation requirements before you can submit them for scanning."}),"\n",(0,t.jsxs)(n.p,{children:["For instructions for other platforms, see ",(0,t.jsx)(n.a,{href:"/km-docusaurus-test/r/r_supported_table",children:"Supported languages and platforms"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"required-files",children:"Required files"}),"\n",(0,t.jsx)(n.p,{children:"Veracode requires that you submit the DLL and PDB files created when you build your .NET MAUI application to a target environment. Upload these files individually or package them in a ZIP file."}),"\n",(0,t.jsx)(n.h2,{id:"supported-net-maui-platforms-and-versions",children:"Supported .NET MAUI platforms and versions"}),"\n",(0,t.jsx)(n.p,{children:"You can write .NET MAUI applications, running on .NET 7, for the following platforms:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Android 5.0 (API 21) or later."}),"\n",(0,t.jsx)(n.li,{children:"iOS 11 or later, using the latest release of Xcode."}),"\n",(0,t.jsx)(n.li,{children:"macOS 10.15 or later, using Mac Catalyst."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Veracode does not support .NET MAUI applications written in WinUI3 that target Windows 10 or 11."})}),"\n",(0,t.jsx)(n.h2,{id:"compilation-of-a-net-maui-application",children:"Compilation of a .NET MAUI application"}),"\n",(0,t.jsx)(n.p,{children:"You can use the .NET CLI to compile a .NET MAUI application by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dotnet build -c Debug\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After you build the project using the debug configuration, the build creates a subdirectory named ",(0,t.jsx)(n.code,{children:"bin/Debug"}),". Inside this directory, there are subfolders for each of the different platforms you can target. Create a ZIP file for each target you want to upload to the Veracode Platform."]}),"\n",(0,t.jsx)(n.p,{children:"If your application does not use platform-specific calls, you only need to scan a single package for one of the target platforms. If you want to scan for multiple platforms, such as iOS and Android, you must use a separate application profile for each package."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ZIP file must ",(0,t.jsx)(n.em,{children:"not"})," include subfolders. It should only contain DLL and PDB files."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bin/Debug/net6.0-android/"})," for Android"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bin/Debug/net6.0-ios/iossimulator-%/"})," for IOS"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bin/Debug/net6.0-maccatalyst/maccatalyst-%/"})," for MacOSX"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>r});var t=i(67294);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);