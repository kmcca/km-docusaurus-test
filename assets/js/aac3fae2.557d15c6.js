"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66475],{55092:(i,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(85893),r=t(11151);const o={title:"Perform a one-time findings import into Jira Server",slug:"/r/t_jira_onetime_finding_import"},s=void 0,a={id:"guides/integrations/ticketing/jira_integration/jira_import_findings/jira_onetime_findings_import",title:"Perform a one-time findings import into Jira Server",description:"You can use the Veracode Integration for Jira to perform one-time imports of findings from the Veracode Platform to Jira.",source:"@site/docs/guides/04_integrations/04_ticketing/04_jira_integration/04_jira_import_findings/02_jira_onetime_findings_import.md",sourceDirName:"guides/04_integrations/04_ticketing/04_jira_integration/04_jira_import_findings",slug:"/r/t_jira_onetime_finding_import",permalink:"/km-docusaurus-test/r/t_jira_onetime_finding_import",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Perform a one-time findings import into Jira Server",slug:"/r/t_jira_onetime_finding_import"},sidebar:"tutorialSidebar",previous:{title:"Import findings to Jira Server on a schedule",permalink:"/km-docusaurus-test/r/t_jira_auto_finding_import"},next:{title:"Import specific findings into Jira Server",permalink:"/km-docusaurus-test/r/t_jira_select_finding_import"}},d={},c=[];function m(i){const e={a:"a",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"You can use the Veracode Integration for Jira to perform one-time imports of findings from the Veracode Platform to Jira."}),"\n",(0,n.jsx)(e.p,{children:"The integration imports findings in order of severity, with higher severity taking precedence, then in order of creation date, with earlier findings taking precedence."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"To complete this task:"})}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["In Jira, select ",(0,n.jsx)(e.strong,{children:"Administration"})," > ",(0,n.jsx)(e.strong,{children:"Manage apps"})," > ",(0,n.jsx)(e.strong,{children:"One Time Import"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"In the Import Limit field, enter the maximum number of static findings you want to import for any application. Import limits do not apply to SCA findings. If you do not provide an import limit, the integration imports all findings found in Veracode scans."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"If you want to override the general import limit for a specific application:"}),"\n",(0,n.jsxs)(e.p,{children:["a. Select the ",(0,n.jsx)(e.strong,{children:"Override by Application"})," checkbox."]}),"\n",(0,n.jsxs)(e.p,{children:["b. Select the ",(0,n.jsx)(e.a,{href:"/km-docusaurus-test/r/t_add_metadata",children:"Veracode custom field"})," that determines the import limit for the application. If the Veracode custom field configuration is invalid, the integration ignores the override and applies the general import limit."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Select ",(0,n.jsx)(e.strong,{children:"Import to JIRA"}),"."]}),"\n"]}),"\n"]})]})}function l(i={}){const{wrapper:e}={...(0,r.a)(),...i.components};return e?(0,n.jsx)(e,{...i,children:(0,n.jsx)(m,{...i})}):m(i)}},11151:(i,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var n=t(67294);const r={},o=n.createContext(r);function s(i){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function a(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(r):i.components||r:s(i.components),n.createElement(o.Provider,{value:e},i.children)}}}]);