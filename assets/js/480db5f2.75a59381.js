"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34939],{48584:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(85893),s=n(11151);const r={title:"Configure findings import settings for Jira Server",slug:"/r/t_jira_findings_import"},o=void 0,a={id:"guides/integrations/ticketing/jira_integration/configure_jira_integration/configure_jira_findings_import",title:"Configure findings import settings for Jira Server",description:"You can configure the Veracode Integration for Jira to specify the findings identified during Veracode scanning to import into Jira.",source:"@site/docs/guides/04_integrations/04_ticketing/04_jira_integration/03_configure_jira_integration/02_configure_jira_findings_import.md",sourceDirName:"guides/04_integrations/04_ticketing/04_jira_integration/03_configure_jira_integration",slug:"/r/t_jira_findings_import",permalink:"/km-docusaurus-test/r/t_jira_findings_import",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configure findings import settings for Jira Server",slug:"/r/t_jira_findings_import"},sidebar:"tutorialSidebar",previous:{title:"Add login credentials to the Jira Server integration",permalink:"/km-docusaurus-test/r/t_jira_credentials"},next:{title:"Associate Veracode fields with Jira Server project screens",permalink:"/km-docusaurus-test/r/t_jira_display_veracode_fields"}},d={},c=[];function l(e){const i={a:"a",admonition:"admonition",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"You can configure the Veracode Integration for Jira to specify the findings identified during Veracode scanning to import into Jira."}),"\n",(0,t.jsx)(i.p,{children:"You can import findings from the Veracode Platform into either a:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Default project that you select from the provided dropdown menu in this procedure."}),"\n",(0,t.jsxs)(i.li,{children:["Project that you have named in a custom field on the ",(0,t.jsx)(i.a,{href:"/km-docusaurus-test/r/t_add_metadata",children:"Metadata page"})," of each Veracode application profile."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Before you begin:"})}),"\n",(0,t.jsxs)(i.p,{children:["Before you can link imported findings to other issues, ensure the issue linking feature in Jira is activated: ",(0,t.jsx)(i.strong,{children:"Administration"})," > ",(0,t.jsx)(i.strong,{children:"Issues"})," > ",(0,t.jsx)(i.strong,{children:"Issue linking"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"To complete this task:"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In Jira, select ",(0,t.jsx)(i.strong,{children:"Administration"})," > ",(0,t.jsx)(i.strong,{children:"Manage apps"})," > ",(0,t.jsx)(i.strong,{children:"Findings Import"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the Import section, select the types of findings to import. Other sections on this page become enabled or disabled depending on your selections."}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["If you select ",(0,t.jsx)("b",{children:"Sandbox static findings"})," or ",(0,t.jsx)("b",{children:"Sandbox SCA findings"}),", the corresponding options for importing sandbox findings are disabled."]})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the Filter Import By section, select which findings to import:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"All findings"}),": from all scans, including closed findings"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Only findings from the most recent scan"}),": all open findings that were found in the most recent scan"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"All unmitigated findings"}),": from all scans, including closed findings"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Only unmitigated findings from most recent scan"}),": all open, unmitigated findings from most recent scan"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"All findings that affect policy"}),": all open findings from all scans that affect policy"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"All unmitigated findings that affect policy"}),": all unmitigated, open findings from all scans that affect policy"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["During each import, the integration checks previously-imported findings to verify if it can close the findings. For example, if you select the import selection criteria ",(0,t.jsx)(i.strong,{children:"Only findings from the most recent scan"})," and the most recent scan resulted in a finding that was fixed, the integration closes the Jira issue for this particular finding."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Select to assign imported findings to a specific epic or link them to a related issue."}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"If you selected to import sandbox findings, these options are disabled."})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Assign to Epic"}),": select to assign imported findings to a specific epic. Then, from the dropdown menu, select the Veracode custom field that contains the exact epic issue key. If you leave this custom field empty, your import results in an error. The integration assigns imported findings from every Veracode application with this exact epic issue key value in the same custom field. For example, you have added the same epic issue key value to Custom Field 5 in every application profile."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Link to Issue"}),": select to link imported findings to a related issue. Then, from the dropdown menu, select the Veracode custom field that contains the exact issue key for the related issue to which to link imported findings. If you leave this custom field empty, your import results in an error. The integration links imported findings from every Veracode application with this exact issue key value in the same custom field. For example, you have added the same issue key value to Custom Field 7 in every application profile."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"From the Import Static and Dynamic Findings As dropdown menu, select the issue type to apply to each imported static and dynamic finding."}),"\n",(0,t.jsx)(i.p,{children:"For SCA findings, the integration imports components as stories and imports vulnerabilities for those components as subtasks of the related stories."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the Import Issues Into section, select the Jira project into which you want to import the security findings or select the Veracode custom field that maps to the appropriate Jira project."}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["You cannot enter custom metadata for sandbox scans of the application using the Veracode Platform. To enter custom metadata for sandbox scans, use the ",(0,t.jsx)(i.a,{href:"/km-docusaurus-test/r/c_sandbox_update_rest",children:"Development Sandbox API"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the Add Values To Issues section, select the labels, or enter a string for a custom label, to add to the issues for all imported findings. You can also select to assign the issues to the next fix version scheduled for your Jira project."}),"\n",(0,t.jsx)(i.p,{children:"For example, you can assign issues to the next fix version of your software build, add a custom label to help you triage or sort your findings, and add a label for the CWE that corresponds to the type of finding discovered during scanning."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"If you selected to import sandbox findings, specify the Jira project into which to import findings, the labels to add to the issues during import, and whether to assign each issue to the next fix version."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the Automated Issue Management section, select whether to automatically close findings mitigated in the Veracode Platform or manually update the status of mitigated findings."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the JIRA User field, enter the username of the Jira user who can create and modify issues."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"This Jira user must have the necessary permissions for all Jira projects into which the integration imports findings."})}),"\n",(0,t.jsxs)(i.ol,{start:"11",children:["\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"Test JIRA User"})," to verify the Jira username."]}),"\n",(0,t.jsxs)(i.li,{children:["Optionally, in the Override Description section, select the ",(0,t.jsx)(i.strong,{children:"Override the Jira Description field"})," checkbox."]}),"\n",(0,t.jsx)(i.li,{children:"Enter the text to add to the Description field in each issue or leave the text field blank. During the next findings import, the contents of this field replace any content in the issue Description field for each imported finding."}),"\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"Save"})," to save all import settings."]}),"\n",(0,t.jsx)(i.li,{children:"If Jira prompts you to perform a re-index, you can proceed with re-indexing. However, Veracode only recommends re-indexing when it is required."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Results:"})}),"\n",(0,t.jsx)(i.p,{children:"The Import Settings section reports any errors detected in your configuration. If there are no errors, the configuration is complete, and you can proceed with importing findings using the Veracode Integration for Jira."})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>o});var t=n(67294);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);