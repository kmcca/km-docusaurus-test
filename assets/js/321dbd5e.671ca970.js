"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84074],{68456:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=t(85893),n=t(11151);const s={title:"Mapping finding severities to Jira Cloud priorities",slug:"/r/c_jira_cloud_mapping_severities"},a=void 0,o={id:"guides/integrations/ticketing/jira_cloud_integration/configure_jira_cloud_integration/jira_cloud_mapping_sevs_to_priorities/README",title:"Mapping finding severities to Jira Cloud priorities",description:"The Veracode Integration for Jira Cloud can map Veracode flaw severities in the Veracode Platform to your custom priorities in Jira Cloud.",source:"@site/docs/guides/04_integrations/04_ticketing/05_jira_cloud_integration/03_configure_jira_cloud_integration/05_jira_cloud_mapping_sevs_to_priorities/README.md",sourceDirName:"guides/04_integrations/04_ticketing/05_jira_cloud_integration/03_configure_jira_cloud_integration/05_jira_cloud_mapping_sevs_to_priorities",slug:"/r/c_jira_cloud_mapping_severities",permalink:"/km-docusaurus-test/r/c_jira_cloud_mapping_severities",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Mapping finding severities to Jira Cloud priorities",slug:"/r/c_jira_cloud_mapping_severities"},sidebar:"tutorialSidebar",previous:{title:"Example: Mapping Veracode fields to Jira fields",permalink:"/km-docusaurus-test/r/c_jira_cloud_field_map_ex"},next:{title:"Map finding severities to Jira Cloud priorities",permalink:"/km-docusaurus-test/r/t_jira_cloud_config_sev_mapping"}},l={},p=[{value:"Default severity mappings",id:"default-severity-mappings",level:2},{value:"Severity mapping limitations",id:"severity-mapping-limitations",level:2},{value:"Invalid severity mappings",id:"invalid-severity-mappings",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"The Veracode Integration for Jira Cloud can map Veracode flaw severities in the Veracode Platform to your custom priorities in Jira Cloud."}),"\n",(0,r.jsxs)(i.p,{children:["The Veracode Platform ",(0,r.jsx)(i.a,{href:"/km-docusaurus-test/r/review_severity_exploitability",children:"severity scale"})," uses six flaw severities: Very High, High, Medium, Low, Very Low, and Informational. In Jira Cloud, you can create any number of priorities using any names you want, but you are limited to mapping the six severities to a maximum of six priorities. The severity mapping applies to all new flaws during the next import to Jira Cloud. You configure severity mapping on the Veracode Severity Mappings page, which you can access in the Jira Cloud interface from: ",(0,r.jsx)(i.strong,{children:"Administration"})," > ",(0,r.jsx)(i.strong,{children:"Add-ons"})," > ",(0,r.jsx)(i.strong,{children:"Severity Mappings"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"default-severity-mappings",children:"Default severity mappings"}),"\n",(0,r.jsx)(i.p,{children:"After you install the integration, it checks for an existing mapping between Veracode severities and your Jira priorities. If a mapping exists, the integration leaves the mapping configuration intact and applies it to the next flaw import. If no mapping exists, the integration creates a default mapping based on the number of priorities in Jira Cloud. You can change the default mapping at any time."}),"\n",(0,r.jsx)(i.p,{children:"For a Jira Cloud system with exactly six priorities, the integration creates this default mapping:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["The Very High severity maps to ",(0,r.jsx)(i.strong,{children:"Highest"}),", which is the highest priority."]}),"\n",(0,r.jsxs)(i.li,{children:["The High severity maps to ",(0,r.jsx)(i.strong,{children:"High"}),", which is the second-highest priority."]}),"\n",(0,r.jsxs)(i.li,{children:["The Medium severity maps to ",(0,r.jsx)(i.strong,{children:"Medium"}),", which is the third-highest priority, and so on."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"If the Jira Cloud system has more than six priorities, the integration maps the Veracode severities to the six-highest priorities. The remaining lower priorities are not mapped. If necessary, you can map a severity to a lower priority. For a Jira Cloud system with less than six priorities, the integration maps the highest severities to the highest priorities. The remaining severities all map to the same lowest priority."}),"\n",(0,r.jsx)(i.h2,{id:"severity-mapping-limitations",children:"Severity mapping limitations"}),"\n",(0,r.jsx)(i.p,{children:"A severity mapping has these limitations:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"You can only create a single mapping. When you change and save the mapping, which must be valid, it replaces the previous configuration. If you add, edit, or delete priorities, you must manually update and save the mapping to reflect the new priorities or the mapping might be invalid."}),"\n",(0,r.jsx)(i.li,{children:"The mapping only applies to new flaws you import to Jira Cloud. It does not apply to flaws (issues) already imported to Jira Cloud."}),"\n",(0,r.jsx)(i.li,{children:"You cannot disable severity mapping."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"invalid-severity-mappings",children:"Invalid severity mappings"}),"\n",(0,r.jsx)(i.p,{children:"If there are issues with the mapped priorities in Jira Cloud, the severity mapping could be invalid. You must manually correct any issues with your priorities and, then, update your mapping to be in sync with the mapped priorities."}),"\n",(0,r.jsx)(i.p,{children:"A mapping can be invalid for the following reasons:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["The mapped priorities no longer exist in the Jira Cloud system, but the configured mapping still contains the previous priorities. Someone might have deleted or renamed one or more priorities after you saved the mapping or while you were creating the mapping, but had not yet saved it. The invalid mapping causes these issues:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["After importing flaws from the Veracode Platform to Jira Cloud, the Priority field in all issues mapped to the missing priority is blank. The integration records this warning message in the Jira Cloud logs: ",(0,r.jsx)(i.code,{children:"Invalid priority set in Severity Mappings page with priority: <PriorityName>"})]}),"\n",(0,r.jsxs)(i.li,{children:["After configuring the mapping, when you select ",(0,r.jsx)(i.strong,{children:"Save"}),", the mapping fails to save and you see this error message: ",(0,r.jsx)(i.code,{children:"One or more of the priorities selected are not valid Jira priorities. Please try again."})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Flaws in the Veracode Platform have a severity that is outside the severity scale. After importing the flaws into Jira Cloud, the Priority field in all issues mapped to that severity is blank. The integration records this warning message in the Jira Cloud logs: ",(0,r.jsx)(i.code,{children:"Invalid severity received from Veracode Platform, setting priority to null. Severity received: <SeverityName>"})]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>a});var r=t(67294);const n={},s=r.createContext(n);function a(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);