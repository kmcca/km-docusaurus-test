"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88186],{95952:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=s(85893),a=s(11151);const r={title:"uploadandscanbyappid",slug:"/r/uploadandscanbyappid"},d=void 0,i={id:"guides/apis/api_wrappers/wrappers_composite_actions/uploadandscanbyappid",title:"uploadandscanbyappid",description:"The uploadandscanbyappid composite action enables you to upload files to Veracode for scanning.",source:"@site/docs/guides/14_apis/06_api_wrappers/06_wrappers_composite_actions/02_uploadandscanbyappid.md",sourceDirName:"guides/14_apis/06_api_wrappers/06_wrappers_composite_actions",slug:"/r/uploadandscanbyappid",permalink:"/km-docusaurus-test/r/uploadandscanbyappid",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"uploadandscanbyappid",slug:"/r/uploadandscanbyappid"},sidebar:"tutorialSidebar",previous:{title:"uploadandscan",permalink:"/km-docusaurus-test/r/r_uploadandscan"},next:{title:"alldetailedreports",permalink:"/km-docusaurus-test/r/r_alldetailedreports"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example commands",id:"example-commands",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"uploadandscanbyappid"})," composite action enables you to upload files to Veracode for scanning."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/r_beginprescan",children:(0,n.jsx)(t.code,{children:"auto-scan"})})," parameter is always set to ",(0,n.jsx)(t.code,{children:"true"})," (enabled) with the ",(0,n.jsx)(t.code,{children:"uploadandscanbyappid"})," call. In the Veracode Platform, if the ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/Request_a_Static_Scan_and_Configure_Scan_Options",children:(0,n.jsx)(t.strong,{children:"Auto-Scan"})})," option for a scan configuration is set to Off (disabled), the ",(0,n.jsx)(t.code,{children:"uploadandscanbyappid"})," call overrides the ",(0,n.jsx)(t.strong,{children:"Auto-Scan"})," option."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The Veracode XML APIs and the wrappers use a different syntax. For the wrappers, the parameter names omit the underscores, the parameter values omit spaces, and some parameters use different names. For example, the parameter ",(0,n.jsx)("code",{children:"app_id"})," in the API is ",(0,n.jsx)("code",{children:"appid"})," in the wrapper and the parameter value ",(0,n.jsx)("code",{children:"Very High"})," in the API is ",(0,n.jsx)("code",{children:"VeryHigh"})," in the wrapper. The parameter ",(0,n.jsx)("code",{children:"business_criticality"})," in the API is ",(0,n.jsx)("code",{children:"criticality"})," in the wrapper. The syntax is not interchangeable and using the wrong syntax causes your command to fail. To ensure you are using the correct syntax, see the documentation provided in the Help directory for each wrapper."]})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"appid"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Required"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Application ID."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"filepath"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Required"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Filepath or folderpath of the files you want to upload to Veracode for scanning. By default, the integration uploads all the subdirectories and files of this filepath. Ensure you have prepared the files according to the ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/compilation_packaging",children:"packaging requirements"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"version"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Required"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Name or version of the build that you want to scan."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"createsandbox"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Boolean"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["For development sandbox scans, create a sandbox for the specified Veracode application. Set to ",(0,n.jsx)(t.code,{children:"true"})," to create a sandbox. Set to ",(0,n.jsx)(t.code,{children:"false"})," to not create a sandbox."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"exclude"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Case-sensitive, comma-separated list of module name patterns that represent the names of modules to not scan as top-level modules. The ",(0,n.jsx)(t.code,{children:"*"})," wildcard matches 0 or more characters. The ",(0,n.jsx)(t.code,{children:"?"})," wildcard matches exactly one character."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"include"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Case-sensitive, comma-separated list of module name patterns that represent the names of modules to scan as top-level modules. The ",(0,n.jsx)(t.code,{children:"*"})," wildcard matches 0 or more characters. The ",(0,n.jsx)(t.code,{children:"?"})," wildcard matches exactly one character."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"pattern"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Case-sensitive filename pattern that represents the names of uploaded files to save with a different name. The * wildcard matches 0 or more characters. The ? wildcard matches exactly one character. Each wildcard corresponds to a numbered group that you can reference in the replacement pattern."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"replacement"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Replacement pattern that references groups captured by the filename pattern. For example, if the filename pattern is ",(0,n.jsx)(t.code,{children:"--SNAPSHOT.war"})," and the replacement pattern is ",(0,n.jsx)(t.code,{children:"$1-master-SNAPSHOT.war"}),", an uploaded file named ",(0,n.jsx)(t.code,{children:"app-branch-SNAPSHOT.war"})," is saved as ",(0,n.jsx)(t.code,{children:"app-master-SNAPSHOT.war"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"sandboxid"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ID of the sandbox in which to run the scan."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"sandboxname"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the sandbox in which to run the scan."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"scantimeout"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Number of minutes to wait for the scan to complete and pass policy. If the scan does not complete or fails policy, the build fails. Default is ",(0,n.jsx)(t.code,{children:"60"})," minutes."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example-commands",children:"Example commands"}),"\n",(0,n.jsxs)(t.p,{children:["This example request uses the ",(0,n.jsx)(t.code,{children:"uploadandscanbyappid"})," action in a specific scenario:"]}),"\n",(0,n.jsxs)(t.p,{children:["Veracode recommends that you use an external ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/c_api_credentials3",children:"API credentials file"})," to ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/c_wrappers_using_api_creds_file",children:"provide your credentials to the Veracode API wrapper"}),". When you use an API credentials file, you can omit the ",(0,n.jsx)(t.code,{children:"-vid"})," and ",(0,n.jsx)(t.code,{children:"-vkey"})," parameters for specifying your Veracode API credentials."]}),"\n",(0,n.jsx)(t.p,{children:"Start an application scan:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"java -jar vosp-api-wrapper-java{version}.jar -action uploadandscanbyappid -vid <Veracode API ID> -vkey <Veracode API key> -appid myid -sandboxname mysandbox -createsandbox true -version <unique version> -filepath /workspace/myapp.jar\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"VeracodeC#API -action uploadandscanbyappid -vid <Veracode API ID> -vkey <Veracode API key> -appid myid -sandboxname mysandbox -createsandbox true -version <unique version> -filepath /workspace/myapp.jar\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>d});var n=s(67294);const a={},r=n.createContext(a);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);