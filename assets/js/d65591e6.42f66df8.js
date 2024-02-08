"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87844],{99374:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=n(85893),o=n(11151);const s={title:"Precompile ASP.NET files with Visual Studio",slug:"/r/c_precomp_VS"},r=void 0,l={id:"guides/packaging/net/asp_net_web_apps/c_precomp_VS",title:"Precompile ASP.NET files with Visual Studio",description:"This procedure is an alternative to compiling your ASP.NET applications using Veracode Static for Visual Studio.",source:"@site/docs/guides/03_packaging/19_net/02_asp_net_web_apps/02_c_precomp_VS.md",sourceDirName:"guides/03_packaging/19_net/02_asp_net_web_apps",slug:"/r/c_precomp_VS",permalink:"/km-docusaurus-test/r/c_precomp_VS",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Precompile ASP.NET files with Visual Studio",slug:"/r/c_precomp_VS"},sidebar:"tutorialSidebar",previous:{title:"Precompile ASP.NET Core MVC views with Visual Studio 2017 or later",permalink:"/km-docusaurus-test/r/t_MVC2_VS"},next:{title:"Publish ASP.NET applications with Visual Studio 2019 or later",permalink:"/km-docusaurus-test/r/Publish_ASP.NET_Applications_with_Visual_Studio_2019_or_Later"}},c={},a=[];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"This procedure is an alternative to compiling your ASP.NET applications using Veracode Static for Visual Studio."}),"\n",(0,t.jsx)(i.p,{children:"You can use the native Microsoft Publish utility in Visual Studio to prepare binaries for a specific project in the Visual Studio solution. To precompile and deploy ASP.NET files for uploading to Veracode, you can use this procedure with Visual Studio 2005 and later."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"To complete this task:"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"In the Visual Studio Solution Explorer, locate the web project you want to precompile."}),"\n",(0,t.jsxs)(i.li,{children:["Right-click the project and select ",(0,t.jsx)(i.strong,{children:"Publish"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["In the Profile page, click the dropdown profile menu and select ",(0,t.jsx)(i.strong,{children:"New Profile"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Enter a profile name and click ",(0,t.jsx)(i.strong,{children:"OK"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["In the Connection page, from the Publish method dropdown menu, select ",(0,t.jsx)(i.strong,{children:"File System"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Enter the filepath where you want to publish the precompiled web files, and click ",(0,t.jsx)(i.strong,{children:"Next"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"In the Settings page, from the Configuration dropdown menu, select the appropriate build configuration."}),"\n",(0,t.jsx)(i.li,{children:"Expand the File Publish Options menu, and select all three items."}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"The first item, when selected, deletes all existing files from the location you chose above. This step makes it easier for you to find the most recent DLL to upload, however, as it does delete pre-existing files, be careful when deciding the publish location."})}),"\n",(0,t.jsxs)(i.ol,{start:"9",children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click the ",(0,t.jsx)(i.strong,{children:"Configure"})," link in the Precompile during publishing list item."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the Advanced Precompile Settings popup:"}),"\n",(0,t.jsxs)(i.p,{children:["a.  Clear ",(0,t.jsx)(i.strong,{children:"Allow precompiled site to be updateable"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["b.  Select ",(0,t.jsx)(i.strong,{children:"Emit debug information"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["c.  Select ",(0,t.jsx)(i.strong,{children:"Do not merge. Create a separate assembly for each page and control"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click ",(0,t.jsx)(i.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Click ",(0,t.jsx)(i.strong,{children:"Publish"})," to generate the precompiled files."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["You can now browse to the ",(0,t.jsx)(i.code,{children:"bin"})," directory in the published precompiled web files folder and upload them to Veracode."]}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{}),(0,t.jsxs)(i.p,{children:["As of ASP.NET Core 6.0, both views and applicaton types are included in a single ",(0,t.jsx)(i.em,{children:"AppName.dll"})," assembly. See Microsoft changes here: ",(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/compatibility/aspnet-core/6.0/razor-compiler-doesnt-produce-views-assembly",children:"Compiler no longer produces a Views assembly"})]})]})]})}function p(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>r});var t=n(67294);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);