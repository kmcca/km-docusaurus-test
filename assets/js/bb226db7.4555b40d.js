"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13412],{36939:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>A,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var n=t(85893),a=t(11151);const s={title:"Manage API specifications in the Veracode Platform",slug:"/r/Manage_API_Specifications_in_the_Veracode_Platform"},o=void 0,c={id:"guides/dynamic_analysis/da_scan_apis/apiscan_manage_specs",title:"Manage API specifications in the Veracode Platform",description:"You use the API Specification Management tab in the Veracode Platform to upload, update, and permanently delete your API specifications.",source:"@site/docs/guides/08_dynamic_analysis/02_da_scan_apis/05_apiscan_manage_specs.md",sourceDirName:"guides/08_dynamic_analysis/02_da_scan_apis",slug:"/r/Manage_API_Specifications_in_the_Veracode_Platform",permalink:"/km-docusaurus-test/r/Manage_API_Specifications_in_the_Veracode_Platform",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Manage API specifications in the Veracode Platform",slug:"/r/Manage_API_Specifications_in_the_Veracode_Platform"},sidebar:"tutorialSidebar",previous:{title:"Example SRM script for OAuth token authorization",permalink:"/km-docusaurus-test/r/Example_SRM_Script_for_OAuth_Token_Authorization"},next:{title:"Remove an API specification from an analysis",permalink:"/km-docusaurus-test/r/Remove_an_API_Specification_from_an_Analysis"}},A={},r=[];function l(e){const i={a:"a",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["You use the ",(0,n.jsx)(i.strong,{children:"API Specification Management"})," tab in the Veracode Platform to upload, update, and permanently delete your API specifications."]}),"\n",(0,n.jsxs)(i.p,{children:["You can also upload an API specification with the ",(0,n.jsx)(i.a,{href:"/km-docusaurus-test/r/Use_the_REST_API_to_Create_a_Dynamic_Analysis_of_an_API",children:"REST API"}),"."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Before you begin:"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["You have a Veracode account with the Creator, Submitter, or Security Lead ",(0,n.jsx)(i.a,{href:"/km-docusaurus-test/r/c_role_permissions",children:"role"}),". Any member of the team associated with the Dynamic Analysis is able to view the analysis and its results."]}),"\n",(0,n.jsxs)(i.li,{children:["You have ",(0,n.jsx)(i.a,{href:"/km-docusaurus-test/r/Remove_an_API_Specification_from_an_Analysis",children:"removed any API specification"})," you want to update or delete from the associated analyses."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"To complete this task:"})}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Sign in to the Veracode Platform."}),"\n",(0,n.jsxs)(i.li,{children:["Select ",(0,n.jsx)(i.strong,{children:"Scans and Analysis"})," > ",(0,n.jsx)(i.strong,{children:"Dynamic Analysis"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Select the ",(0,n.jsx)(i.strong,{children:"API Specification Management"})," tab."]}),"\n",(0,n.jsxs)(i.li,{children:["To upload a new API specification, select ",(0,n.jsx)(i.strong,{children:"Upload API Specification"}),". To manage an existing specification, locate it in the API Specification Management table and select from the following actions in the Actions column."]}),"\n"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Action"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.strong,{children:"View API Specification Details"})," ",(0,n.jsx)(i.img,{alt:"eye_icon.png",src:t(5737).Z+"",width:"18",height:"14"})]}),(0,n.jsx)(i.td,{children:"Opens a read-only window with detailed information about the API scanning configuration for the selected specification. The Associated Analysis field provides a list of analyses to which this specification is associated. You can select an analysis to view additional information, including options for reconfiguring and rerunning an analysis."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.strong,{children:"Update"})," ",(0,n.jsx)(i.img,{alt:"pencil_icon.png",src:t(64474).Z+"",width:"14",height:"15"})]}),(0,n.jsxs)(i.td,{children:["Update the following configuration settings for the selected specification.",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Rename the specification. If you do not enter a name for the API specification, by default, the Veracode Platform uses the filename of the uploaded specification."}),(0,n.jsxs)("li",{children:["Delete the specification file attached to the configuration and replace it with a different file. Depending on the size of your specification file, the upload might take several seconds to complete. Also, the Veracode Platform shows messages about any issues with the specification, such as unsupported file format, invalid syntax, or an ",(0,n.jsx)(i.a,{href:"/km-docusaurus-test/r/Fixing_Relative_URLs_for_API_Scanning",children:"issue with the relative URL"}),"."]}),(0,n.jsx)("li",{children:"For JSON and YAML files, you can add or update a custom base URL, which Veracode uses to identify the server to use during analysis. OpenAPI 2.0 only supports a single server, while OpenAPI 3.0 and HAR files support multiple servers. You typically use these servers to select different environments, such as a production instance and a staging environment, or multiple production instances located in different regions."}),(0,n.jsxs)("li",{children:["Change the visibility of the specification to either ",(0,n.jsx)(i.a,{href:"/km-docusaurus-test/r/c_role_permissions",children:"Security Leads"})," only or both Security Leads and specific teams. After ",(0,n.jsx)(i.a,{href:"/km-docusaurus-test/r/Create_an_API_Specification_Scan",children:"adding the specification to an analysis"}),", you cannot change its visibility."]})]})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.strong,{children:"Delete"})," ",(0,n.jsx)(i.img,{alt:"trash_icon.png",src:t(21384).Z+"",width:"11",height:"13"})]}),(0,n.jsx)(i.td,{children:"Delete the API specification and its configuration settings from Veracode. You cannot undo this action or recover the deleted specification file or its configuration settings."})]})]})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Next steps:"})}),"\n",(0,n.jsxs)(i.p,{children:["Associate the API specification to a ",(0,n.jsx)(i.a,{href:"/km-docusaurus-test/r/Create_an_API_Specification_Scan",children:"new"})," or ",(0,n.jsx)(i.a,{href:"/km-docusaurus-test/r/Configure_and_Run_an_API_Specification_Scan",children:"existing"})," analysis."]})]})}function d(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5737:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAIAAACtuNvgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5wgJDi8InLQYhAAAAZJJREFUKJG9Uq1PAmEcfo4DDvlQlDndZKAzGJwbBjct7kwQaRpt0sSmf4E2jTSxGdksNkEDszhM3pTBMR3qFH054T2OO3gNgCCzaPCJvz3P9nz8OMYYfg/THzQAzP0HnUpZNflinNImsfBhJx/wDogT9j4W12OyJl0pkWIjBQQd/JrH4tb0RKlxZMBv5mMLwyGPpatjLRiVs1QRJ0WcPO7LKmP6+2M5/1FjBk1ftO7F3TvKOmhl0zJpZUUBgOCYPeq3AWYpW51KvolpLbDkODQDwI5EDgpGTyUFJULantf9g+S+nMm9xhUASJHaKRkUPW1rWzdEbnQqIZWm/GWah/xA50vdEEQHeA5gAGA0ZR2TPEwA3LPOmNAmJZ9qgWnrakc0JlhD4zTz3q5tw+cUbb1NUrJ3ru4YgIlPL48satVETiOCEJ51QHoT841rIOixJ5aGbP0D0PLxJY1W8Qxu3zcQ9lvdaj2ZV6MlVgA2va6DgPPH3QAY5ElJ3NbjFZZqAsCMiQuNCttzrnHbt8fg/vUnPwFrCMmIeW+03AAAAABJRU5ErkJggg=="},64474:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAACXBIWXMAABJ0AAASdAHeZh94AAAAB3RJTUUH5AUGFCApYJOU+gAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAB00lEQVQokY2TMWhTURSGv3OTvLw+E5AWRDRWUVOoxEL3gqODi6AVJ7WalrqIu+DuIILgIG5OIiII4iqiTooOxqCVEtNYDUGsxvde8vLuu9ehsVSMtmf/ON//c45EUWTZxDgpAQVGW7QFtSkoLbRWIh4tRXQNOEo2BjMpqH0JOfGizZGXPzhXCQiMJb2hntU8bHR4EgBZxZ16B/tPVQEnIywuhxx/7jO5awuXdqT4He5+Kx6wUVYzLTYCTlc7BALlhS73xj0g5Eoz4XJxCPmj1T70filgutJhpjhEzu8xV9MUtma4XcyilGJqe3adqghOWqjWfaYrHcpFj+FQc6GhIQOf2poPNsWhgotdK0cEJw3Vjz4nq13mxzxcv0e5HqPVqsq1iRxzBQcdGwz9cpwUvK75HH3b5ew+D+dnj9l6jBYQhOulPBf3uiTGYvrBJNE9u7AccOZNyCtRTHmKp22NtiBKuFHKcX6PS6ItybobU4qEB82Y+f0ex7KWx980GlBKcfNgfiAEoIgSmj3LgRGXq5M5ysMCRrg1kWd2t4seAK2qfvXt2LMVTC7LqW2Kd98TDo96zIy6aG3WMv0Fxn5o736OaBlh3FWURhx2eopYW/73Nr8A3p7PJaNFxdUAAAAASUVORK5CYII="},21384:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAACXBIWXMAABJ0AAASdAHeZh94AAAAB3RJTUUH5AUGFB8P6kA7OwAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAABSUlEQVQokY3RsYoUURCF4e/e6ZnpHXRZhVFWdoYNFANfwnxBIyNBEEQMfRBNfAwz8RGMDAQDE8Fsk81GGNnt6Z6+ZdCNoJEFRSWnOPWfStE0UQo58+Wi8XFTpMx8kj1b1e7MKYFJkl5+uohvDbPM1+3ezx3S0HcPKydT2n14ce9QlSSLWVIlHi7n6gQELvvQIQsRpM1mGx/OW1d5UE2wR4V9kCPcujb1eFWrLn61Xn2/0kyTHJQ0LPRBldh34cFxeLSuZSnpcHZce72sLK5X3qwqR9OJd6e1m1PkJEY3JTg6yG7npOpZHzBLnC4mFiMDZCN8X+iCCNoyAO5KKP4R/2/9Eec0tCF/aZx/iWPMdF9CN3q2hR5tCWlkgmpmgHl/3gwHB8+3SdeFpz96ux3L8YRqfaP29n7x+TKUPMTTxvD+XaFOPDmpCX4Dgv982LeMZecAAAAASUVORK5CYII="},11151:(e,i,t)=>{t.d(i,{Z:()=>c,a:()=>o});var n=t(67294);const a={},s=n.createContext(a);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);