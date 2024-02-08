"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12818],{68958:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var a=n(85893),l=n(11151);const s={author:["Scott Jordan"],title:"Quick reference for packaging requirements",slug:"/r/c_comp_quickref",media_dir:"images/"},d=void 0,c={id:"guides/packaging/understanding_packaging/README",title:"Quick reference for packaging requirements",description:"Veracode provides compilation and packaging recommendations for popular languages and frameworks.",source:"@site/docs/guides/03_packaging/01_understanding_packaging/README.md",sourceDirName:"guides/03_packaging/01_understanding_packaging",slug:"/r/c_comp_quickref",permalink:"/km-docusaurus-test/r/c_comp_quickref",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{author:["Scott Jordan"],title:"Quick reference for packaging requirements",slug:"/r/c_comp_quickref",media_dir:"images/"},sidebar:"tutorialSidebar",previous:{title:"Package your code",permalink:"/km-docusaurus-test/r/compilation_packaging"},next:{title:"Initial support and supported languages meaning",permalink:"/km-docusaurus-test/r/Initial_Support_and_Supported_Languages_Meaning"}},r={},o=[{value:"Java",id:"java",level:2},{value:".NET",id:"net",level:2},{value:"JavaScript and TypeScript",id:"javascript-and-typescript",level:2},{value:"PHP",id:"php",level:2},{value:"Scala",id:"scala",level:2},{value:"Groovy",id:"groovy",level:2},{value:"Kotlin",id:"kotlin",level:2},{value:"Apex",id:"apex",level:2},{value:"PL/SQL",id:"plsql",level:2},{value:"Classic ASP",id:"classic-asp",level:2},{value:"Perl",id:"perl",level:2},{value:"Python",id:"python",level:2},{value:"Android",id:"android",level:2},{value:"Cordova",id:"cordova",level:2},{value:"React Native",id:"react-native",level:2},{value:"Ionic",id:"ionic",level:2},{value:"C++ using Red Hat Linux",id:"c-using-red-hat-linux",level:2},{value:"Visual C++",id:"visual-c",level:2},{value:"COBOL",id:"cobol",level:2},{value:"RPG",id:"rpg",level:2},{value:"Visual Basic 6",id:"visual-basic-6",level:2}];function t(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Veracode provides compilation and packaging recommendations for popular languages and frameworks."}),"\n",(0,a.jsxs)(i.p,{children:["You can use the ",(0,a.jsx)(i.a,{href:"https://docs.veracode.com/cheatsheet/?utm_source=docs&utm_medium=article&utm_campaign=packaging-guidance",children:"Veracode Packaging Cheat Sheet"})," to generate language-specific packaging guidance for Static Analysis."]}),"\n",(0,a.jsxs)(i.p,{children:["For language support specific to Veracode Pipeline Scan, see ",(0,a.jsx)(i.a,{href:"/km-docusaurus-test/r/Pipeline_Scan_Supported_Languages",children:"Pipeline Scan supported languages"}),"."]}),"\n",(0,a.jsx)(i.p,{children:"The following list provides a high-level overview of the packaging requirements for some of the most popular supported languages:"}),"\n",(0,a.jsx)(i.h2,{id:"java",children:"Java"}),"\n",(0,a.jsx)(i.p,{children:"Upload JAR, WAR, or EAR files with debug symbols."}),"\n",(0,a.jsx)(i.h2,{id:"net",children:".NET"}),"\n",(0,a.jsxs)(i.p,{children:["Generate a debug build, zip the build files, include ",(0,a.jsx)(i.code,{children:"deps.json"})," files, and upload the ZIP file."]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"If the application contains ASP files, publish the website to a directory, zip the published directory, and upload the ZIP file."}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"If the application contains TypeScript files, zip the source TypeScript files and upload them separately."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"javascript-and-typescript",children:"JavaScript and TypeScript"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Upload a ZIP file containing your source code. Do not include test code or built distribution files."}),"\n",(0,a.jsxs)(i.li,{children:["Remove the ",(0,a.jsx)(i.code,{children:"node_modules"})," directory if lock files are present."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"php",children:"PHP"}),"\n",(0,a.jsxs)(i.p,{children:["Zip the application source files and upload the ZIP file. Include ",(0,a.jsx)(i.code,{children:"composer.lock"})," in the root of your ZIP archive."]}),"\n",(0,a.jsx)(i.h2,{id:"scala",children:"Scala"}),"\n",(0,a.jsx)(i.p,{children:"Upload JAR files with debug symbols."}),"\n",(0,a.jsx)(i.h2,{id:"groovy",children:"Groovy"}),"\n",(0,a.jsx)(i.p,{children:"Upload JAR or WAR files with debug symbols."}),"\n",(0,a.jsx)(i.h2,{id:"kotlin",children:"Kotlin"}),"\n",(0,a.jsx)(i.p,{children:"Upload JAR or WAR files with debug symbols."}),"\n",(0,a.jsx)(i.h2,{id:"apex",children:"Apex"}),"\n",(0,a.jsx)(i.p,{children:"Zip the application source files and upload the ZIP file."}),"\n",(0,a.jsx)(i.h2,{id:"plsql",children:"PL/SQL"}),"\n",(0,a.jsx)(i.p,{children:"Zip the application source files and upload the ZIP file."}),"\n",(0,a.jsx)(i.h2,{id:"classic-asp",children:"Classic ASP"}),"\n",(0,a.jsx)(i.p,{children:"Zip the application source files and upload the ZIP file."}),"\n",(0,a.jsx)(i.h2,{id:"perl",children:"Perl"}),"\n",(0,a.jsx)(i.p,{children:"Zip the application source files and upload the ZIP file."}),"\n",(0,a.jsx)(i.h2,{id:"python",children:"Python"}),"\n",(0,a.jsxs)(i.p,{children:["Zip the application source files and upload the ZIP file. Include ",(0,a.jsx)(i.code,{children:"Pipfile.lock"})," in the root of your ZIP archive."]}),"\n",(0,a.jsx)(i.h2,{id:"android",children:"Android"}),"\n",(0,a.jsx)(i.p,{children:"Generate a debug build and package it as an APK file."}),"\n",(0,a.jsx)(i.h2,{id:"cordova",children:"Cordova"}),"\n",(0,a.jsx)(i.p,{children:"Upload a compiled APK or IPA file."}),"\n",(0,a.jsx)(i.h2,{id:"react-native",children:"React Native"}),"\n",(0,a.jsx)(i.p,{children:"Zip the application source files and upload the ZIP file, or upload a compiled APK or IPA file."}),"\n",(0,a.jsx)(i.h2,{id:"ionic",children:"Ionic"}),"\n",(0,a.jsx)(i.p,{children:"Zip the application source files and upload the ZIP file."}),"\n",(0,a.jsx)(i.h2,{id:"c-using-red-hat-linux",children:"C++ using Red Hat Linux"}),"\n",(0,a.jsxs)(i.p,{children:["Upload a debug build compiled with the ",(0,a.jsx)(i.code,{children:"-gdwarf-2 -g3 -O0 -fno-builtin"})," flags using GCC."]}),"\n",(0,a.jsx)(i.h2,{id:"visual-c",children:"Visual C++"}),"\n",(0,a.jsxs)(i.p,{children:["Upload a debug build compiled with the ",(0,a.jsx)(i.code,{children:"/Zi /Od /GS- /MTd /link /INCREMENTAL:NO /DEBUG:FULL"})," flags."]}),"\n",(0,a.jsx)(i.h2,{id:"cobol",children:"COBOL"}),"\n",(0,a.jsx)(i.p,{children:"Extract source code files from mainframe systems as UTF-8 encoded text files, zip the extracted files, and upload the ZIP file."}),"\n",(0,a.jsx)(i.h2,{id:"rpg",children:"RPG"}),"\n",(0,a.jsx)(i.p,{children:"Extract source code files from mainframe systems as UTF-8 encoded text files, zip the extracted files, and upload the ZIP file."}),"\n",(0,a.jsx)(i.h2,{id:"visual-basic-6",children:"Visual Basic 6"}),"\n",(0,a.jsx)(i.p,{children:"Zip the application source files and upload the ZIP file."})]})}function p(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>d});var a=n(67294);const l={},s=a.createContext(l);function d(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);