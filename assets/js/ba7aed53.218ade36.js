"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95829],{76272:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=s(85893),n=s(11151);const l={title:"createapp.do",slug:"/r/r_createapp"},r=void 0,d={id:"guides/apis/xml_apis/upload_xml_apis/createapp_do",title:"createapp.do",description:"The createapp.do call creates a new application profile in the portfolio.",source:"@site/docs/guides/14_apis/05_xml_apis/02_upload_xml_apis/05_createapp_do.md",sourceDirName:"guides/14_apis/05_xml_apis/02_upload_xml_apis",slug:"/r/r_createapp",permalink:"/km-docusaurus-test/r/r_createapp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"createapp.do",slug:"/r/r_createapp"},sidebar:"tutorialSidebar",previous:{title:"beginscan.do",permalink:"/km-docusaurus-test/r/r_beginscan"},next:{title:"createbuild.do",permalink:"/km-docusaurus-test/r/r_createbuild"}},c={},a=[{value:"REST API equivalent",id:"rest-api-equivalent",level:2},{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>industry</code> parameter values",id:"industry-parameter-values",level:3},{value:"<code>app_type</code> parameter values",id:"app_type-parameter-values",level:3},{value:"HTTPie example",id:"httpie-example",level:2},{value:"HTTPie results",id:"httpie-results",level:2},{value:"Java example",id:"java-example",level:2},{value:"Java results",id:"java-results",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"createapp.do"})," call creates a new application profile in the portfolio."]}),"\n",(0,i.jsxs)(t.p,{children:["Before using this API, Veracode strongly recommends that you read ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/c_API_usage_guidelines",children:"API usage and access guidelines"}),". Ensure you access the APIs with the ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/Region_Domains_for_Veracode_APIs",children:"domain for your region"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"rest-api-equivalent",children:"REST API equivalent"}),"\n",(0,i.jsxs)(t.p,{children:["The REST API equivalent of this call is a ",(0,i.jsx)(t.code,{children:"POST"})," to ",(0,i.jsx)(t.code,{children:"/appsec/v1/applications"})," in the ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/c_apps_intro",children:"Applications API"}),". Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs."]}),"\n",(0,i.jsx)(t.h2,{id:"resource-url",children:"Resource URL"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://analysiscenter.veracode.com/api/5.0/createapp.do\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"app_name"})," ",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Required"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Your application name."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"business_criticality"}),(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Required"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String (case-sensitive)"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Matches the names of ",(0,i.jsx)(t.code,{children:"Business Criticality"})," enums: ",(0,i.jsx)(t.code,{children:"Very High"}),", ",(0,i.jsx)(t.code,{children:"High"}),", ",(0,i.jsx)(t.code,{children:"Medium"}),", ",(0,i.jsx)(t.code,{children:"Low"}),", ",(0,i.jsx)(t.code,{children:"Very Low"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"description"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Description of the target application."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"vendor_id"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Indicates a third-party (COTS) application. It validates against existing vendors."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"policy"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String (case-sensitive)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Validates against the names of existing policies for this account. Default is the policy set as default for the business criticality parameter."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"business_unit"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String (case-sensitive)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Validates against the names of existing business units for this account."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"business_owner"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the business owner for the application."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"business_owner_email"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Email for the business owner of the application."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"teams"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Comma-separated list of team names associated with the specified application. Validates against the names of existing teams for this account."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"origin"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String (case-sensitive)"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Validates against the names of the ",(0,i.jsx)(t.code,{children:"Origin"})," enums:",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(t.code,{children:"3rd party library"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.code,{children:"Purchased Application"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.code,{children:"Contractor"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.code,{children:"Internally Developed"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.code,{children:"Open Source"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.code,{children:"Outsourced Team"})})]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"industry"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String (case-sensitive)"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Validates against the names of the ",(0,i.jsx)(t.code,{children:"Industry"})," enums. See ",(0,i.jsxs)(t.a,{href:"#industryparam",children:[(0,i.jsx)(t.code,{children:"industry"})," parameter values"]}),". Default is the same industry as the account."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"app_type"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String (case-sensitive)"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Validates against the names of the ",(0,i.jsx)(t.code,{children:"Application Purpose"})," enums. See ",(0,i.jsxs)(t.a,{href:"#apptypeparam",children:[(0,i.jsx)(t.code,{children:"app_type"})," parameter values"]}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"deployment_method"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String (case-sensitive)"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Validates against the names of the ",(0,i.jsx)(t.code,{children:"Deployment Method"})," enums: ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(t.code,{children:"Web Based"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.code,{children:"Enterprise Application Enhancement"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.code,{children:"Client/Server"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.code,{children:"Mobile"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.code,{children:"Stand Alone"})})]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"web_application"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Boolean"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Default is false."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"archer_app_name"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the application in Archer."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"tags"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Comma-separated list of tags."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"next_day_scheduling_enabled"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Boolean"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Specifies if a user can schedule next-day consultations. Only available to user accounts with the Security Lead role or Administrator role and to API service account with the Upload and Scan API role. Default is ",(0,i.jsx)(t.code,{children:"false"}),"."]})]})]})]}),"\n",(0,i.jsx)("a",{name:"industryparam"}),"\n",(0,i.jsxs)(t.h3,{id:"industry-parameter-values",children:[(0,i.jsx)(t.code,{children:"industry"})," parameter values"]}),"\n",(0,i.jsx)(t.p,{children:"Values are case-sensitive."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"agmine"})}),(0,i.jsx)(t.td,{children:"Agriculture & Mining"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"busiserv"})}),(0,i.jsx)(t.td,{children:"Business Services"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"compelec"})}),(0,i.jsx)(t.td,{children:"Computers & Electronics"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"conserv"})}),(0,i.jsx)(t.td,{children:"Consumer Services"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"edu"})}),(0,i.jsx)(t.td,{children:"Education"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enerutil"})}),(0,i.jsx)(t.td,{children:"Energy & Utilities"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"fed"})}),(0,i.jsx)(t.td,{children:"Federal"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"finserv"})}),(0,i.jsx)(t.td,{children:"Financial Services"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"gvmt"})}),(0,i.jsx)(t.td,{children:"Government"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"hpb"})}),(0,i.jsx)(t.td,{children:"Healthcare, Pharmaceuticals, & Biotech"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"local"})}),(0,i.jsx)(t.td,{children:"Local"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"manu"})}),(0,i.jsx)(t.td,{children:"Manufacturing"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"mediaent"})}),(0,i.jsx)(t.td,{children:"Media & Entertainment"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"non-profit"})}),(0,i.jsx)(t.td,{children:"Non-Profit"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"notspec"})}),(0,i.jsx)(t.td,{children:"Not Specified"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"prtnr"})}),(0,i.jsx)(t.td,{children:"Partner"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"realconst"})}),(0,i.jsx)(t.td,{children:"Real Estate & Construction"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"retail"})}),(0,i.jsx)(t.td,{children:"Retail"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"softint"})}),(0,i.jsx)(t.td,{children:"Software & Internet"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"telcom"})}),(0,i.jsx)(t.td,{children:"Telecommunications"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"transerv"})}),(0,i.jsx)(t.td,{children:"Transportation & Storage"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"travel"})}),(0,i.jsx)(t.td,{children:"Travel, Recreation, and Leisure"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"wholedist"})}),(0,i.jsx)(t.td,{children:"Wholesale & Distribution"})]})]})]}),"\n",(0,i.jsx)("a",{name:"apptypeparam"}),"\n",(0,i.jsxs)(t.h3,{id:"app_type-parameter-values",children:[(0,i.jsx)(t.code,{children:"app_type"})," parameter values"]}),"\n",(0,i.jsx)(t.p,{children:"Values are case-sensitive."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Application Design/Construction/IDE/Analysis"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Application Life-Cycle Management"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Application Server/Integration Server"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Back-Office Enterprise"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"CRM/Groupware/Messaging"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Consumer"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Content Management/Authoring"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Engineering"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Enterprise Resource Planning"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Information Access/Delivery/Mining/Portal"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Information/Data Management/Database"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Middleware/Message-oriented/Transaction"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Network Management"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Networking"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Other"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Other Development Tools"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Security"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"ServerWare/Clustering/Web/VM"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Storage"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"System-Level Software"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Systems Management"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Testing Tools"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"httpie-example",children:"HTTPie example"}),"\n",(0,i.jsxs)(t.p,{children:["Examples use the ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/c_httpie_tool",children:"HTTPie command-line tool"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/createapp.do" "app_name==<app name>" "business_criticality==Very High"\n'})}),"\n",(0,i.jsx)(t.h2,{id:"httpie-results",children:"HTTPie results"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"createapp.do"})," call returns the ",(0,i.jsx)(t.code,{children:"appinfo"})," XML document, which references the ",(0,i.jsx)(t.a,{href:"https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd",children:(0,i.jsx)(t.code,{children:"appinfo.xsd"})})," schema file. You can use the XSD schema file to validate the XML data."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n\n<appinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo" \n      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;appinfo \n      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;appinfo.xsd" appinfo_version="1.1" \n      account_id="<account id>">\n   <application app_id="<app id>" app_name="<app name>" business_criticality="Very High" \n      policy="Veracode Recommended Very High" teams="" origin="Not Specified" industry_vertical="Not Specified" \n      app_type="Not Specified" deployment_method="Not Specified" is_web_application="false" \n      modified_date="2019-08-15T13&#x3a;56&#x3a;46-04&#x3a;00" cots="false" vast="false" \n      business_unit="Not Specified" tags="">\n      <customfield name="Custom 1" value="100"/>\n      <customfield name="Custom 2" value="Deferred"/>\n      <customfield name="Custom 3" value=""/>\n      <customfield name="Custom 4" value=""/>\n      <customfield name="Custom 5" value=""/>\n      <customfield name="Custom 6" value=""/>\n      <customfield name="Custom 7" value=""/>\n      <customfield name="Custom 8" value=""/>\n      <customfield name="Custom 9" value=""/>\n      <customfield name="Custom 10" value=""/>\n   </application>\n</appinfo>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"java-example",children:"Java example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action createapp -appname MyApp -criticality veryhigh\n"})}),"\n",(0,i.jsx)(t.h2,{id:"java-results",children:"Java results"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"createapp.do"})," call returns the ",(0,i.jsx)(t.code,{children:"appinfo"})," XML document, which references the ",(0,i.jsx)(t.a,{href:"https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd",children:(0,i.jsx)(t.code,{children:"appinfo.xsd"})})," schema file. You can use the XSD schema file to validate the XML data."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n\n<appinfo xmlns="https://analysiscenter.veracode.com/schema/2.0/appinfo" \n      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n      account_id=<account id> appinfo_version="1.1" \n      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/appinfo https://analysiscenter.veracode.com/resource/2.0/appinfo.xsd">   \n   <application app_id=<app id> app_name="MyApp" app_type="Not Specified" business_criticality="Very High" business_unit="Not Specified" \n      cots="false" deployment_method="Not Specified" industry_vertical="Not Specified" is_web_application="false" \n      modified_date="2018-12-04T11:18:38-05:00" origin="Not Specified" policy="Veracode Recommended Very High" tags="" teams="" vast="false">\n      <customfield name="Custom 1" value="100"/>\n      <customfield name="Custom 2" value="Deferred"/>\n      <customfield name="Custom 3" value=""/>\n      <customfield name="Custom 4" value=""/>\n      <customfield name="Custom 5" value=""/>\n      <customfield name="Custom 6" value=""/>\n      <customfield name="Custom 7" value=""/>\n      <customfield name="Custom 8" value=""/>\n      <customfield name="Custom 9" value=""/>\n      <customfield name="Custom 10" value=""/>\n   </application>\n </appinfo>\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>r});var i=s(67294);const n={},l=i.createContext(n);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);