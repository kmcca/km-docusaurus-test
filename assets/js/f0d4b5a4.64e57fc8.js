"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30548],{46413:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=i(85893),d=i(11151);const r={title:"updateapp.do",slug:"/r/r_updateapp"},t=void 0,c={id:"guides/apis/xml_apis/upload_xml_apis/updateapp_do",title:"updateapp.do",description:"The updateapp.do call modifies the settings of an existing application in the portfolio.",source:"@site/docs/guides/14_apis/05_xml_apis/02_upload_xml_apis/18_updateapp_do.md",sourceDirName:"guides/14_apis/05_xml_apis/02_upload_xml_apis",slug:"/r/r_updateapp",permalink:"/km-docusaurus-test/r/r_updateapp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"updateapp.do",slug:"/r/r_updateapp"},sidebar:"tutorialSidebar",previous:{title:"removefile.do",permalink:"/km-docusaurus-test/r/r_removefile"},next:{title:"updatebuild.do",permalink:"/km-docusaurus-test/r/r_updatebuild"}},l={},a=[{value:"REST API equivalent",id:"rest-api-equivalent",level:2},{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>industry</code> parameter values",id:"industry-parameter-values",level:3},{value:"<code>app_type</code> parameter values",id:"app_type-parameter-values",level:3},{value:"HTTPie example",id:"httpie-example",level:3},{value:"HTTPie results",id:"httpie-results",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"updateapp.do"})," call modifies the settings of an existing application in the portfolio."]}),"\n",(0,n.jsxs)(s.p,{children:["Before using this API, Veracode strongly recommends that you read ",(0,n.jsx)(s.a,{href:"/km-docusaurus-test/r/c_API_usage_guidelines",children:"API usage and access guidelines"}),". Ensure you access the APIs with the ",(0,n.jsx)(s.a,{href:"/km-docusaurus-test/r/Region_Domains_for_Veracode_APIs",children:"domain for your region"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"rest-api-equivalent",children:"REST API equivalent"}),"\n",(0,n.jsxs)(s.p,{children:["The REST API equivalent of this call is a ",(0,n.jsx)(s.code,{children:"PUT"})," to ",(0,n.jsx)(s.code,{children:"/appsec/v1/applications"})," using the ",(0,n.jsx)(s.a,{href:"/km-docusaurus-test/r/r_applications_update",children:"Applications API"}),". Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs."]}),"\n",(0,n.jsx)(s.h2,{id:"resource-url",children:"Resource URL"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"https://analysiscenter.veracode.com/api/5.0/updateapp.do\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"app_id"}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Required"})]}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"Application ID."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"app_name"})}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"Changes the application name."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"description"})}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"Changes the application description."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"business_criticality"}),(0,n.jsx)("br",{}),"Name for wrapper: ",(0,n.jsx)(s.code,{children:"criticality"})]}),(0,n.jsx)(s.td,{children:"String (case-sensitive)"}),(0,n.jsxs)(s.td,{children:["Matches the names of the business criticality enums:",(0,n.jsx)(s.code,{children:"Very High"}),", ",(0,n.jsx)(s.code,{children:"High"}),", ",(0,n.jsx)(s.code,{children:"Medium"}),", ",(0,n.jsx)(s.code,{children:"Low"}),", ",(0,n.jsx)(s.code,{children:"Very Low"})," ",(0,n.jsx)("br",{}),"You cannot change this value for applications that a vendor shares with your account."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"policy"})}),(0,n.jsx)(s.td,{children:"String (case-sensitive)"}),(0,n.jsxs)(s.td,{children:["Validates against the names of existing policies for this account. You cannot change this value for applications that a vendor shares with your account. Default is the policy set as default for the ",(0,n.jsx)(s.code,{children:"business_criticality"})," parameter."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"business_unit"})}),(0,n.jsx)(s.td,{children:"String (case-sensitive)"}),(0,n.jsx)(s.td,{children:"Validates against the names of existing business units for this account."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"business_owner"})}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"Name of the business owner for the application."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"business_owner_email"})}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"Email address for the business owner of the application."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"teams"})}),(0,n.jsx)(s.td,{children:"String (case-sensitive)"}),(0,n.jsx)(s.td,{children:"Comma-separated list of team names. Validates against the names of existing teams for this account."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"origin"})}),(0,n.jsx)(s.td,{children:"String (case-sensitive)"}),(0,n.jsxs)(s.td,{children:["Validates against the names of the ",(0,n.jsx)(s.code,{children:"Origin"})," enums:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(s.code,{children:"3rd party library"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.code,{children:"Purchased Application"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.code,{children:"Contractor"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.code,{children:"Internally Developed"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.code,{children:"Open Source"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.code,{children:"Outsourced Team"})})]}),"Defaults to ",(0,n.jsx)(s.code,{children:"Not Specified"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"industry"})}),(0,n.jsx)(s.td,{children:"String (case-sensitive)"}),(0,n.jsxs)(s.td,{children:["Validates against the names of the ",(0,n.jsx)(s.code,{children:"Industry"})," enums. See ",(0,n.jsxs)(s.a,{href:"#industry-parameter-values",children:[(0,n.jsx)(s.code,{children:"industry"})," Parameter Values"]}),". Defaults to the same industry as the account."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"app_type"})}),(0,n.jsx)(s.td,{children:"String (case-sensitive)"}),(0,n.jsxs)(s.td,{children:["Validates against the names of the ",(0,n.jsx)(s.code,{children:"Application Purpose"})," enums. See ",(0,n.jsxs)(s.a,{href:"#apptype-parameter-values",children:[(0,n.jsx)(s.code,{children:"app_type"})," Parameter Values"]}),". Defaults to ",(0,n.jsx)(s.code,{children:"Not Specified"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"deployment_method"}),(0,n.jsx)("br",{}),"Name for wrapper: ",(0,n.jsx)(s.code,{children:"deploymenttype"})]}),(0,n.jsx)(s.td,{children:"String (case-sensitive)"}),(0,n.jsxs)(s.td,{children:["Validates against the names of the ",(0,n.jsx)(s.code,{children:"Deployment Method"})," enums. Defaults to ",(0,n.jsx)(s.code,{children:"Not Specified"}),". Case-sensitive enum values are: ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(s.code,{children:"Web Based"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.code,{children:"Enterprise Application Enhancement"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.code,{children:"Client/Server"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.code,{children:"Mobile"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.code,{children:"Stand Alone"})})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"archer_app_name"})}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"Name of the application in Archer."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"tags"})}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"Comma-separated list of tags."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"custom_field_name"})}),(0,n.jsx)(s.td,{children:"String (case-sensitive)"}),(0,n.jsxs)(s.td,{children:["Specifies the custom field that ",(0,n.jsx)(s.code,{children:"custom_field_value"})," changes. If either is present, then the other is required. Call ",(0,n.jsx)(s.code,{children:"updateapp.do"})," once for each custom field you need to update."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"custom_field_value"})}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsxs)(s.td,{children:["The value of the custom field that ",(0,n.jsx)(s.code,{children:"custom_field_name"})," specifies. If either is present, then the other is required. Call ",(0,n.jsx)(s.code,{children:"updateapp.do"})," once for each custom field you need to update."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"next_day_scheduling_enabled"})}),(0,n.jsx)(s.td,{children:"Boolean"}),(0,n.jsxs)(s.td,{children:["Specifies if a user can schedule next-day consultations. Only available to user accounts with the Security Lead or Administrator roles and to API service accounts with the Upload and Scan API role. Default is ",(0,n.jsx)(s.code,{children:"false"}),"."]})]})]})]}),"\n",(0,n.jsxs)(s.h3,{id:"industry-parameter-values",children:[(0,n.jsx)(s.code,{children:"industry"})," parameter values"]}),"\n",(0,n.jsx)(s.p,{children:"Values are case-sensitive."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Value"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"agmine"})}),(0,n.jsx)(s.td,{children:"Agriculture & Mining"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"busiserv"})}),(0,n.jsx)(s.td,{children:"Business Services"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"compelec"})}),(0,n.jsx)(s.td,{children:"Computers & Electronics"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"conserv"})}),(0,n.jsx)(s.td,{children:"Consumer Services"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"edu"})}),(0,n.jsx)(s.td,{children:"Education"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"enerutil"})}),(0,n.jsx)(s.td,{children:"Energy & Utilities"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"fed"})}),(0,n.jsx)(s.td,{children:"Federal"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"finserv"})}),(0,n.jsx)(s.td,{children:"Financial Services"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"gvmt"})}),(0,n.jsx)(s.td,{children:"Government"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"hpb"})}),(0,n.jsx)(s.td,{children:"Healthcare, Pharmaceuticals, & Biotech"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"local"})}),(0,n.jsx)(s.td,{children:"Local"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"manu"})}),(0,n.jsx)(s.td,{children:"Manufacturing"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"mediaent"})}),(0,n.jsx)(s.td,{children:"Media & Entertainment"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"non-profit"})}),(0,n.jsx)(s.td,{children:"Non-Profit"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"notspec"})}),(0,n.jsx)(s.td,{children:"Not Specified"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"prtnr"})}),(0,n.jsx)(s.td,{children:"Partner"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"realconst"})}),(0,n.jsx)(s.td,{children:"Real Estate & Construction"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"retail"})}),(0,n.jsx)(s.td,{children:"Retail"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"softint"})}),(0,n.jsx)(s.td,{children:"Software & Internet"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"telcom"})}),(0,n.jsx)(s.td,{children:"Telecommunications"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"transerv"})}),(0,n.jsx)(s.td,{children:"Transportation & Storage"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"travel"})}),(0,n.jsx)(s.td,{children:"Travel, Recreation, and Leisure"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"wholedist"})}),(0,n.jsx)(s.td,{children:"Wholesale & Distribution"})]})]})]}),"\n",(0,n.jsxs)(s.h3,{id:"app_type-parameter-values",children:[(0,n.jsx)(s.code,{children:"app_type"})," parameter values"]}),"\n",(0,n.jsx)(s.p,{children:"Values are case-sensitive."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Application Design/Construction/IDE/Analysis"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Application Life-Cycle Management"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Application Server/Integration Server"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Back-Office Enterprise"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"CRM/Groupware/Messaging"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Consumer"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Content Management/Authoring"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Engineering"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Enterprise Resource Planning"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Information Access/Delivery/Mining/Portal"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Information/Data Management/Database"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Middleware/Message-oriented/Transaction"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Network Management"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Networking"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Other"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Other Development Tools"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Security"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"ServerWare/Clustering/Web/VM"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Storage"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"System-Level Software"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Systems Management"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Testing Tools"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"httpie-example",children:"HTTPie example"}),"\n",(0,n.jsxs)(s.p,{children:["Examples use the ",(0,n.jsx)(s.a,{href:"/km-docusaurus-test/r/c_httpie_tool",children:"HTTPie command-line tool"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/updateapp.do" "app_id==<app id>" "custom_field_name==Custom 10" "custom_field_value==jjones"\n'})}),"\n",(0,n.jsx)(s.h3,{id:"httpie-results",children:"HTTPie results"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"updateapp.do"})," call returns the ",(0,n.jsx)(s.code,{children:"appinfo"})," XML document, which references the ",(0,n.jsx)(s.a,{href:"https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd",children:(0,n.jsx)(s.code,{children:"appinfo.xsd"})})," schema file. You can use the XSD schema file to validate the XML data."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n\n<appinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo" \n      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo \n      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;appinfo.xsd" appinfo_version="1.1" \n      account_id="<account id>">\n   <application app_id="<app id>" app_name="<app name>" description="<app description>" \n      business_criticality="Very High" policy="Veracode Transitional Very High" \n      policy_updated_date="2019-08-13T14&#x3a;02&#x3a;08-04&#x3a;00" teams="Demo Team" origin="Not Specified" \n      industry_vertical="Other" app_type="Other" deployment_method="Not Specified" is_web_application="false" \n      archer_app_name="<archer app name>" modified_date="2019-08-13T13&#x3a;59&#x3a;38-04&#x3a;00" cots="false" \n      vast="false" business_unit="Not Specified" tags="">\n      <customfield name="Custom 1" value=""/>\n      <customfield name="Custom 2" value=""/>\n      <customfield name="Custom 3" value=""/>\n      <customfield name="Custom 4" value=""/>\n      <customfield name="Custom 5" value=""/>\n      <customfield name="Custom 6" value=""/>\n      <customfield name="Custom 7" value=""/>\n      <customfield name="Custom 8" value=""/>\n      <customfield name="Custom 9" value=""/>\n      <customfield name="Custom 10" value="jjones"/>\n   </application>\n</appinfo>\n'})})]})}function o(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>c,a:()=>t});var n=i(67294);const d={},r=n.createContext(d);function t(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);