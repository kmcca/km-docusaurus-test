"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92308],{10315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var s=r(85893),i=r(11151);const n={title:"Azure DevOps YAML properties for Flaw Importer",slug:"/r/Azure_DevOps_YAML_Properties_for_Flaw_Importer"},o=void 0,d={id:"guides/integrations/ticketing/azure_devops_extension/azure_flaw_import_yaml_props",title:"Azure DevOps YAML properties for Flaw Importer",description:"This table describes the YAML properties and their values for adding the Veracode Flaw Importer task to an Azure DevOps build pipeline.",source:"@site/docs/guides/04_integrations/04_ticketing/02_azure_devops_extension/04_azure_flaw_import_yaml_props.md",sourceDirName:"guides/04_integrations/04_ticketing/02_azure_devops_extension",slug:"/r/Azure_DevOps_YAML_Properties_for_Flaw_Importer",permalink:"/km-docusaurus-test/r/Azure_DevOps_YAML_Properties_for_Flaw_Importer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Azure DevOps YAML properties for Flaw Importer",slug:"/r/Azure_DevOps_YAML_Properties_for_Flaw_Importer"},sidebar:"tutorialSidebar",previous:{title:"Use YAML to configure Azure DevOps pipelines for importing findings",permalink:"/km-docusaurus-test/r/Use_YAML_to_Configure_Azure_DevOps_Pipelines_for_Importing_Flaws"},next:{title:"Bugzilla",permalink:"/km-docusaurus-test/r/c_integration_bugzilla"}},c={},l=[];function a(e){const t={a:"a",code:"code",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This table describes the YAML properties and their values for ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/Use_YAML_to_Configure_Azure_DevOps_Pipelines_for_Importing_Flaws",children:"adding the Veracode Flaw Importer task"})," to an Azure DevOps build pipeline."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"ConnectionDetailsSelection"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Required"})]}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["One of these methods for connecting to Veracode:",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"Endpoint"})," to use an existing service connection that includes your ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/c_api_credentials3",children:"API credentials"}),". Include ",(0,s.jsx)(t.code,{children:"AnalysisService"})," to specify a service connection name."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"Credentials"})," to enter your Veracode API credentials. Include ",(0,s.jsx)(t.code,{children:"apiId"})," to enter your API ID and ",(0,s.jsx)(t.code,{children:"apiKey"})," to enter your API key."]})]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"ConnectionDetailsSelection"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Required"})]}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["One of these methods for connecting to Veracode:",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"Endpoint"})," to use an existing service connection that includes your API credentials. Include ",(0,s.jsx)(t.code,{children:"AnalysisService"})," to specify a service connection name."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"Credentials"})," to enter your Veracode API credentials. Include ",(0,s.jsx)(t.code,{children:"apiId"})," to enter your API ID and ",(0,s.jsx)(t.code,{children:"apiKey"})," to enter your API key."]})]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"veracodeAppProfile"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Required"})]}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["Name of the ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/request_profile",children:"application profile"}),". The name is case-sensitive."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"AnalysisService"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["If you set ",(0,s.jsx)(t.code,{children:"ConnectionDetailsSelection"})," to ",(0,s.jsx)(t.code,{children:"Endpoint"}),", the name of the service connection for accessing Veracode.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"If a service connection does not exist, you can ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/Create_a_Service_Connection_in_Azure_DevOps",children:"create a new service connection"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"apiId"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["If you set ",(0,s.jsx)(t.code,{children:"ConnectionDetailsSelection"})," to ",(0,s.jsx)(t.code,{children:"Credentials"}),", your Veracode API ID."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"apiKey"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["If you set ",(0,s.jsx)(t.code,{children:"ConnectionDetailsSelection"})," to ",(0,s.jsx)(t.code,{children:"Credentials"}),", your Veracode API key."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"proxySettings"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["If using a proxy to access Veracode, your proxy settings. For example: ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"-phost abc.com -pport 5252 -puser proxyuser -ppassword proxypassword"})," ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"NOTE:"})," ",(0,s.jsx)("br",{}),"Do not enclose any of the values in single or double quotations."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"sandboxName"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["For development sandbox scans, the name of the sandbox in which to run the scan. If the sandbox does not exist, include ",(0,s.jsx)(t.code,{children:"createSandBox"})," to create it with the specified name."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"scanType"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["Scan types from which to import flaws or vulnerabilities. One of these values: ",(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Dynamic, Static"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"SCA"})," ",(0,s.jsx)("br",{}),", ",(0,s.jsx)(t.code,{children:"Static, SCA"}),", ",(0,s.jsx)(t.code,{children:"Dynamic, Static, SCA"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"importType"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["One of these flaw types to import:",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"All Flaws"}),": includes mitigated and remediated flaws and vulnerabilities from all scans. During the import process, the extension changes the state of the work items for all mitigated and remediated flaws to resolved or closed. After you fix or remediate the flaw, during the next scan, its status changes to fixed or mitigated in the Detailed Report. During the next import, the related work items change to closed. This option imports all flaws without any restrictions."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"All Unmitigated Flaws"}),": includes flaws and vulnerabilities from all scans."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"All Flaws Violating Policy"}),": includes all open flaws and vulnerabilities from all scans that affect policy."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"All Unmitigated Flaws Violating Policy"}),": includes open flaws and vulnerabilities from all scans that affect policy. The default.",(0,s.jsx)("br",{}),"When generating new work items for imported flaws, the extension also imports ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/improve_main",children:"mitigation and annotation comments"}),". If you add comments to a previously imported flaws with work items, the extension does not import the new comments to work items during subsequent imports."]})]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"workItemType"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["One of these work item types to apply to all imported flaws:",(0,s.jsx)(t.code,{children:"Bug"}),", ",(0,s.jsx)(t.code,{children:"Issue"}),", ",(0,s.jsx)(t.code,{children:"Task"}),", ",(0,s.jsx)(t.code,{children:"Epic"}),", ",(0,s.jsx)(t.code,{children:"Feature"}),", ",(0,s.jsx)(t.code,{children:"Test Case"})," ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"NOTE:"})," ",(0,s.jsx)("br",{}),"The Scrum process template does not support the Issue work item type. Also, the Veracode Flaw Importer task can only import flaws to customized work item types that do not contain required fields. If your customized work item types contain required fields, you must select different work item types that do not contain required fields, or the flaws fail to import."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"area"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["Path to the area where you want to group the work items. You can enter up to five levels in the path. To enter the area paths, use the format ",(0,s.jsx)(t.code,{children:"<project_name>\\<area_1>\\<area_2>"}),". For ",(0,s.jsx)(t.code,{children:"<project_name>"}),", enter the name of the project in the Build Pipeline or Release Pipeline task for which you want to import flaws."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"overwriteAreaPathInWorkItemsOnImport"})}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsxs)(t.td,{children:["Set to ",(0,s.jsx)(t.code,{children:"true"})," to replace the area path in new and existing work items with the value specified for ",(0,s.jsx)(t.code,{children:"area"}),". If set to ",(0,s.jsx)(t.code,{children:"false"})," existing work items retain their current area path."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"addCustomTag"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Add a tag with a custom string to all work items for all imported flaws."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"addCweAsATag"})}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsxs)(t.td,{children:["Add a tag with the CWE ID for the discovered flaw to the corresponding work item. Set to ",(0,s.jsx)(t.code,{children:"true"})," to add the tag. Set to ",(0,s.jsx)(t.code,{children:"false"})," to not add the tag. Defaults to ",(0,s.jsx)(t.code,{children:"true"})," and you only see this property in the YAML file if the value is ",(0,s.jsx)(t.code,{children:"false"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"foundInBuild"})}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsxs)(t.td,{children:["Add a tag with the build number of the build in which Veracode discovered the flaw to the corresponding work item. Set to ",(0,s.jsx)(t.code,{children:"true"})," to add the tag. Set to ",(0,s.jsx)(t.code,{children:"false"})," to not add the tag. Defaults to ",(0,s.jsx)(t.code,{children:"true"})," and you only see this property in the YAML file if the value is ",(0,s.jsx)(t.code,{children:"false"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"addScanNameAsATag"})}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsxs)(t.td,{children:["Add a tag to each work item showing the name of the Veracode scan that found the imported flaw. Set to ",(0,s.jsx)(t.code,{children:"true"})," to add the tag. Set to ",(0,s.jsx)(t.code,{children:"false"})," to not add the tag. Defaults to ",(0,s.jsx)(t.code,{children:"true"})," and you only see this property in the YAML file if the value is ",(0,s.jsx)(t.code,{children:"false"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"flawImportLimit"})}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsxs)(t.td,{children:["Maximum number of flaws to import at the same time. Default is ",(0,s.jsx)(t.code,{children:"1000"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"customFields"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsxs)(t.td,{children:["Add custom fields from process templates to generated work items of imported flaws. Enter key-value pairs to specify each field name and value. Add each key-value pair, separated with a colon, on a new line. For example: ",(0,s.jsx)(t.code,{children:"field.name:value"})," ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"NOTE:"})," ",(0,s.jsx)("br",{}),"Ensure these field names match the field names you define in Azure and that all values are valid for a given field type. If there are any mismatch or validation errors, you can only see these errors in the console after importing flaws."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>o});var s=r(67294);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);