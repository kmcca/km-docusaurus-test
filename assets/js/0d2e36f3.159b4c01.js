"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98158],{12720:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=n(85893),s=n(11151);const r={title:"C/C++ on Linux packaging",slug:"/r/compilation_nix"},l=void 0,d={id:"guides/packaging/cplusplus",title:"C/C++ on Linux packaging",description:"Your C/C++ applications must meet specific compilation requirements before you can submit them for scanning.",source:"@site/docs/guides/03_packaging/09_cplusplus.md",sourceDirName:"guides/03_packaging",slug:"/r/compilation_nix",permalink:"/km-docusaurus-test/r/compilation_nix",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"C/C++ on Linux packaging",slug:"/r/compilation_nix"},sidebar:"tutorialSidebar",previous:{title:"ColdFusion packaging",permalink:"/km-docusaurus-test/r/compilation_CF"},next:{title:"C/C++ on Windows packaging",permalink:"/km-docusaurus-test/r/compilation_winccpp"}},c={},o=[{value:"Required files",id:"required-files",level:2},{value:"Supported C/C++ on Linux platforms and compiler versions",id:"supported-cc-on-linux-platforms-and-compiler-versions",level:2},{value:"Supported architectures",id:"supported-architectures",level:2},{value:"Platform-specific debug settings",id:"platform-specific-debug-settings",level:2},{value:"(Optional) Hide symbols on executables",id:"optional-hide-symbols-on-executables",level:2},{value:"Packaging guidance",id:"packaging-guidance",level:2},{value:"Compatibility notes",id:"compatibility-notes",level:2}];function a(e){const i={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Your C/C++ applications must meet specific compilation requirements before you can submit them for scanning."}),"\n",(0,t.jsx)(i.h2,{id:"required-files",children:"Required files"}),"\n",(0,t.jsx)(i.p,{children:"Veracode requires all binary executables, all required libraries, and the complete debug information for the application."}),"\n",(0,t.jsx)(i.h2,{id:"supported-cc-on-linux-platforms-and-compiler-versions",children:"Supported C/C++ on Linux platforms and compiler versions"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Platform and architecture"}),(0,t.jsx)(i.th,{children:"Version"}),(0,t.jsx)(i.th,{children:"GCC compilers"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CentOS and Red Hat Enterprise Linux (x64)"}),(0,t.jsx)(i.td,{children:"8"}),(0,t.jsx)(i.td,{children:"12, 11, 10, 9, 8"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"7"}),(0,t.jsx)(i.td,{children:"8.3, 7.3, 6.3, 5.3, 4.9, 4.8"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"6"}),(0,t.jsx)(i.td,{children:"7.3, 6.3, 5.3, 4.9, 4.8, 4.4"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"5"}),(0,t.jsx)(i.td,{children:"4.9, 4.8, 4.7, 4.1"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CentOS and Red Hat Enterprise Linux (x86)"}),(0,t.jsx)(i.td,{children:"5"}),(0,t.jsx)(i.td,{children:"4.9, 4.8, 4.2, 4.1"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"4"}),(0,t.jsx)(i.td,{children:"4.2, 4.1, 4.0, 3.4, 3.3"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"3"}),(0,t.jsx)(i.td,{children:"3.2"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"openSUSE (x86)"}),(0,t.jsx)(i.td,{children:"10"}),(0,t.jsx)(i.td,{children:"4.1, 4.5, 4.8, 4.9"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"openSUSE (x64)"}),(0,t.jsx)(i.td,{children:"11"}),(0,t.jsx)(i.td,{children:"4.9, 4.8, 4.5"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"openSUSE (x86)"}),(0,t.jsx)(i.td,{children:"11"}),(0,t.jsx)(i.td,{children:"4.9, 4.8, 4.5"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"supported-architectures",children:"Supported architectures"}),"\n",(0,t.jsx)(i.p,{children:"Veracode supports analyzing C/C++ code compiled for the Intel IA32 and X86_64 architectures. Veracode does not currently support analyzing C/C++ code compiled for Itanium (IA64), Alpha, MIPS, PowerPC, ARM, or other microarchitectures."}),"\n",(0,t.jsx)(i.h2,{id:"platform-specific-debug-settings",children:"Platform-specific debug settings"}),"\n",(0,t.jsx)(i.p,{children:"Ensure that you compile the binary files with debug settings. Compile code with these options:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"-gdwarf-2 -g3 -O0 -fno-builtin\n"})}),"\n",(0,t.jsx)(i.p,{children:"Do not compile code with any of these options:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"-O"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"-mflat"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"-mno-faster-structs"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"-mimpure-text"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"-mcpu={ultrasparc or ultrasparc3}"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"-mtune={ultrasparc or ultrasparc3}"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"-mlittle-endian"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"-mcmodel"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"-mstack-bias"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"-p, -pg, -fprofile-<any>"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"optional-hide-symbols-on-executables",children:"(Optional) Hide symbols on executables"}),"\n",(0,t.jsx)(i.p,{children:"Veracode Static Analysis treats each Linux binary as a library and marks each method potentially exposed to user input, or 'dllexported'. This may lead to unrealistic flaws.\nTo reduce these flaws and help Veracode Static Analysis determine that the application only uses the 'main' method directly, add this option to the executables you do not use as a library:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"-Wl,--version-script=veracode.expmap"})}),"\n",(0,t.jsxs)(i.p,{children:["Then, create a ",(0,t.jsx)(i.code,{children:"veracode.expmap"})," that contains this line:"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"{global:main;local:*;};"})}),"\n",(0,t.jsx)(i.h2,{id:"packaging-guidance",children:"Packaging guidance"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"You must package applications as EXE, TAR, TAR.GZ, TGZ, or SO files."}),"\n",(0,t.jsx)(i.li,{children:"Dwarf debug symbols are mandatory for main executables. Failure to upload debug symbols for Linux C/C++ applications prevents the scan from proceeding."}),"\n",(0,t.jsx)(i.li,{children:"Failure to upload dependencies for Linux C/C++ applications results in a warning during prescan."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"compatibility-notes",children:"Compatibility notes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["GCC 4.4 is only supported on:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"64-bit RedHat Enterprise Linux 5 and 6"}),"\n",(0,t.jsx)(i.li,{children:"32-bit and 64-bit openSUSE 11"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"GCC 6 and 7 are only supported on 64-bit operating systems."}),"\n",(0,t.jsx)(i.li,{children:"You must package applications as a TAR file (extensions of TAR, TAR.GZ, TGZ), ZIP file, or submit individual native binaries with the SO extension."}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>l});var t=n(67294);const s={},r=t.createContext(s);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);