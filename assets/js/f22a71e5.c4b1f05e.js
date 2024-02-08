"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84439],{17634:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(85893),a=t(11151);const r={title:"Manually install an ISM endpoint",slug:"/r/t_configure_endpoint_manual"},i=void 0,s={id:"guides/dynamic_analysis/ism/manually_install_endpoint",title:"Manually install an ISM endpoint",description:"If you are running your endpoint on a machine other than Windows or Linux, or you choose not to use the ISM endpoint installer, you can manually install the endpoint.",source:"@site/docs/guides/08_dynamic_analysis/14_ism/11_manually_install_endpoint.md",sourceDirName:"guides/08_dynamic_analysis/14_ism",slug:"/r/t_configure_endpoint_manual",permalink:"/km-docusaurus-test/r/t_configure_endpoint_manual",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Manually install an ISM endpoint",slug:"/r/t_configure_endpoint_manual"},sidebar:"tutorialSidebar",previous:{title:"Update an ISM endpoint",permalink:"/km-docusaurus-test/r/t_update_endpoint"},next:{title:"Manually update an ISM endpoint",permalink:"/km-docusaurus-test/r/t_update_endpoint_manual"}},l={},c=[];function d(n){const e={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"If you are running your endpoint on a machine other than Windows or Linux, or you choose not to use the ISM endpoint installer, you can manually install the endpoint."}),"\n",(0,o.jsx)(e.p,{children:"You must deploy the endpoint to a location accessible to the web applications or REST APIs you want to scan or the analysis fails."}),"\n",(0,o.jsxs)(e.p,{children:["Thee following tasks continues from either ",(0,o.jsx)(e.a,{href:"/km-docusaurus-test/r/t_configure_gateway",children:"step 6 of Configure Internal Scanning"})," or ",(0,o.jsx)(e.a,{href:"/km-docusaurus-test/r/t_create_endpoint",children:"step 6 of Add Endpoint to Gateway"}),"."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"To complete this task:"})}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Select ",(0,o.jsx)(e.strong,{children:"Download"})," to download the ZIP file containing the endpoint."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Move the ZIP file to a machine behind your firewall with access to your internal applications or REST APIs."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Extract the ZIP file."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Start the endpoint JAR file from the command line with the appropriate commands for your proxy configuration. You can also copy the following commands from the Set Up Your Environment window:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"If you are not using a web proxy to access the internet:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"java -jar Veracode_ISM_Endpoint_{yourendpointname}.jar\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"If you are using an unauthenticated web proxy:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"java -Dhttps.proxyHost={your_proxy_host} -Dhttps.proxyPort={your_proxy_port} -jar Veracode_ISM_Endpoint_{your_endpoint_name}.jar \n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"If you are using an authenticated web proxy, launch the endpoint:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"java -Dhttps.proxyHost={your_proxy_host} -Dhttps.proxyPort={your_proxy_port} -jar Veracode_ISM_Endpoint_{your_endpoint_name}.jar --authenticate\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"After launching the endpoint for an authenticated web proxy, run the endpoint:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"java -Dhttps.proxyHost={your_proxy_host} -Dhttps.proxyPort={your_proxy_port} -jar Veracode_ISM_Endpoint_{your_endpoint_name}.jar\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"If you only want to use the web proxy for communication between the endpoint and gateway:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"java -Dhttps.proxyHost={your_proxy_host} -Dhttps.proxyPort={your_proxy_port} -jar Veracode_ISM_Endpoint_{your_endpoint_name}.jar --proxygatewayonly\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Select ",(0,o.jsx)(e.strong,{children:"Close"}),"."]}),"\n",(0,o.jsx)(e.p,{children:"The new gateway and endpoint now appear on the Internal Scanning Management page."}),"\n",(0,o.jsx)(e.p,{children:"If the endpoint fails to connect to the gateway, your organization may need to add the gateway IP address or domain name to your allowlist. The IP address and domain are visible from the Internal Scanning Management page and the gateway page."}),"\n",(0,o.jsx)(e.p,{children:"The gateway may have a status of Initializing for a few minutes after you create it. The endpoint has a status of Pending until you successfully deploy it. When you successfully deploy the endpoint, it has a status of Ready."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Next steps:"})}),"\n",(0,o.jsx)(e.p,{children:"You can now create the following Dynamic Analyses for internal scanning:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"/km-docusaurus-test/r/t_create_was",children:"Create a web application scan"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"/km-docusaurus-test/r/Create_an_API_Specification_Scan",children:"Create an API specification scan"})}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>i});var o=t(67294);const a={},r=o.createContext(a);function i(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);