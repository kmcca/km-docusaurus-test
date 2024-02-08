"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12865],{57931:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=n(85893),i=n(11151);const a={title:"beginprescan.do",slug:"/r/r_beginprescan"},l=void 0,r={id:"guides/apis/xml_apis/upload_xml_apis/beginprescan_do",title:"beginprescan.do",description:"The beginprescan.do call runs the prescan of the application.",source:"@site/docs/guides/14_apis/05_xml_apis/02_upload_xml_apis/03_beginprescan_do.md",sourceDirName:"guides/14_apis/05_xml_apis/02_upload_xml_apis",slug:"/r/r_beginprescan",permalink:"/km-docusaurus-test/r/r_beginprescan",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"beginprescan.do",slug:"/r/r_beginprescan"},sidebar:"tutorialSidebar",previous:{title:"Mapping Upload API tasks",permalink:"/km-docusaurus-test/r/c_mapping_Upload"},next:{title:"beginscan.do",permalink:"/km-docusaurus-test/r/r_beginscan"}},c={},d=[{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie example",id:"httpie-example",level:2},{value:"HTTPie results",id:"httpie-results",level:2},{value:"Java example",id:"java-example",level:2},{value:"Java results",id:"java-results",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"beginprescan.do"})," call runs the prescan of the application."]}),"\n",(0,t.jsxs)(s.p,{children:["Before using this API, Veracode strongly recommends that you read ",(0,t.jsx)(s.a,{href:"/km-docusaurus-test/r/c_API_usage_guidelines",children:"API usage and access guidelines"}),". Ensure you access the APIs with the ",(0,t.jsx)(s.a,{href:"/km-docusaurus-test/r/Region_Domains_for_Veracode_APIs",children:"domain for your region"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"beginprescan"})," call determines whether the auto-scan feature is on or off based on:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The value of the ",(0,t.jsx)(s.code,{children:"auto_scan"})," parameter."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"auto_scan"})," setting of the previous scan."]}),"\n",(0,t.jsxs)(s.li,{children:["If it is the first scan of an application, the ",(0,t.jsx)(s.code,{children:"auto_scan"})," setting is based on the ",(0,t.jsx)(s.code,{children:"auto_scan"})," feature switch value."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"When auto_scan is true, the specified build automatically begins scanning after the prescan completes."}),"\n",(0,t.jsx)(s.h2,{id:"resource-url",children:"Resource URL"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"https://analysiscenter.veracode.com/api/5.0/beginprescan.do\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"app_id"}),(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Required"})]}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Integer"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Application ID."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"auto_scan"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Boolean"}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["If you want to automatically submit a full scan, use this parameter. If this parameter is not present, ",(0,t.jsx)(s.code,{children:"auto_scan"})," is set based on the ",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"auto_scan"})," setting of previous scans of the application"]}),(0,t.jsxs)("li",{children:["Feature switch value of ",(0,t.jsx)(s.code,{children:"auto_scan"})]})]}),"The full scan does not submit if the prescan results in errors."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"include_new_modules"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Boolean"}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["If both ",(0,t.jsx)(s.code,{children:"auto_scan"})," and ",(0,t.jsx)(s.code,{children:"scan_all_nonfatal_top_level_modules"})," are ",(0,t.jsx)(s.code,{children:"true"}),", set this parameter to ",(0,t.jsx)(s.code,{children:"true"})," to automatically select all new top-level modules for inclusion in the scan. By default, the scan only includes previously selected modules."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"sandbox_id"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Integer"}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Target sandbox ID."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"scan_all_nonfatal_top_level_modules"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Boolean"}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["If ",(0,t.jsx)(s.code,{children:"auto_scan"})," is ",(0,t.jsx)(s.code,{children:"false"}),", this parameter is ignored. The scan starts after prescan as long as the application has more than one module, and at least one of the top-level modules has no fatal errors. Default is ",(0,t.jsx)(s.code,{children:"false"}),"."]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"httpie-example",children:"HTTPie example"}),"\n",(0,t.jsxs)(s.p,{children:["Examples use the ",(0,t.jsx)(s.a,{href:"/km-docusaurus-test/r/c_httpie_tool",children:"HTTPie command-line tool"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/beginprescan.do" "app_id==<app id>" "auto_scan==false"\n'})}),"\n",(0,t.jsx)(s.h2,{id:"httpie-results",children:"HTTPie results"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"beginprescan.do"})," call returns the ",(0,t.jsx)(s.code,{children:"buildinfo"})," XML document, which references the ",(0,t.jsx)(s.a,{href:"https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd",children:"buildinfo.xsd"})," schema file. You can use the XSD schema file to validate the XML data."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<buildinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;\n      XMLSchema-instance"xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema\n      &#x2f;4.0&#x2f;buildinfo"xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;\n      analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;buildinfohttps&#x3a;&#x2f;&#x2f;\n      analysiscenter.veracode.com&#x2f;resource&#x2f;4.0&#x2f;\n      buildinfo.xsd"buildinfo_version="1.5" account_id="<account id>" \n      app_id="<app id>" build_id="<build id>">\n   <build version="v1" build_id="<build id>" submitter="<VeracodeUsername>" platform="Not Specified" \n      lifecycle_stage="Not Specified" results_ready="false" policy_name="Veracode Transitional Very High" \n      policy_version="1" policy_compliance_status="Not Assessed" rules_status="Not Assessed" \n      grace_period_expired="false" scan_overdue="false" legacy_scan_engine="false">\n      <analysis_unit analysis_type="Static" status="Prescan Submitted"/>\n   </build>\n</buildinfo>\n'})}),"\n",(0,t.jsx)(s.h2,{id:"java-example",children:"Java example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action beginprescan -appid <app id>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"java-results",children:"Java results"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"beginprescan.do"})," call returns the ",(0,t.jsx)(s.code,{children:"buildinfo"})," XML document, which references the ",(0,t.jsx)(s.a,{href:"https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd",children:"buildinfo.xsd"})," schema file. You can use the XSD schema file to validate the XML data."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> \n\n<buildinfo xmlns="https://analysiscenter.veracode.com/schema/4.0/buildinfo"\n      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n      account_id=<account id> app_id=<app id> build_id=<build id> buildinfo_version="1.5"\n      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/4.0/buildinfo\n      https://analysiscenter.veracode.com/resource/4.0/buildinfo.xsd"> \n   <build build_id=<build id> grace_period_expired="false" legacy_scan_engine="false" lifecycle_stage="Not Specified" \n      platform="Not Specified" policy_compliance_status="Not Assessed" policy_name="Veracode Recommended Very High" \n      policy_version="1" results_ready="false" rules_status="Not Assessed" scan_overdue="false" \n      submitter=<VeracodeUsername> version="4 Dec 2018 Static">\n      <analysis_unit analysis_type="Static" status="Prescan Submitted"/>\n   </build>\n</buildinfo>\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>l});var t=n(67294);const i={},a=t.createContext(i);function l(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);