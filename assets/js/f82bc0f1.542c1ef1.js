"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43662],{35326:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=t(85893),l=t(11151);const a={title:"getbuildlist.do",slug:"/r/r_getbuildlist"},n=void 0,d={id:"guides/apis/xml_apis/upload_xml_apis/getbuildlist_do",title:"getbuildlist.do",description:"The getbuildlist.do call produces a list of the application policy or sandbox scans in progress or already complete.",source:"@site/docs/guides/14_apis/05_xml_apis/02_upload_xml_apis/12_getbuildlist_do.md",sourceDirName:"guides/14_apis/05_xml_apis/02_upload_xml_apis",slug:"/r/r_getbuildlist",permalink:"/km-docusaurus-test/r/r_getbuildlist",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"getbuildlist.do",slug:"/r/r_getbuildlist"},sidebar:"tutorialSidebar",previous:{title:"getbuildinfo.do",permalink:"/km-docusaurus-test/r/r_getbuildinfo"},next:{title:"getfilelist.do",permalink:"/km-docusaurus-test/r/r_getfilelist"}},r={},c=[{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie example",id:"httpie-example",level:2},{value:"HTTPie results",id:"httpie-results",level:2},{value:"Java example",id:"java-example",level:2},{value:"Java results",id:"java-results",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"getbuildlist.do"})," call produces a list of the application policy or sandbox scans in progress or already complete."]}),"\n",(0,i.jsxs)(s.p,{children:["Before using this API, Veracode strongly recommends that you read ",(0,i.jsx)(s.a,{href:"/km-docusaurus-test/r/c_API_usage_guidelines",children:"API usage and access guidelines"}),". Ensure you access the APIs with the ",(0,i.jsx)(s.a,{href:"/km-docusaurus-test/r/Region_Domains_for_Veracode_APIs",children:"domain for your region"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"resource-url",children:"Resource URL"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"https://analysiscenter.veracode.com/api/5.0/getbuildlist.do\n"})}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"app_id"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Required"})]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Integer"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Application ID."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"sandbox_id"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Integer"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Target sandbox ID."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"httpie-example",children:"HTTPie example"}),"\n",(0,i.jsxs)(s.p,{children:["Examples use the ",(0,i.jsx)(s.a,{href:"/km-docusaurus-test/r/c_httpie_tool",children:"HTTPie command-line tool"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getbuildlist.do" "app_id==<app id>"\n'})}),"\n",(0,i.jsx)(s.h2,{id:"httpie-results",children:"HTTPie results"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"getbuildlist.do"})," call returns the ",(0,i.jsx)(s.code,{children:"buildlist"})," XML document, which references the ",(0,i.jsx)(s.a,{href:"https://analysiscenter.veracode.com/resource/2.0/buildlist.xsd",children:(0,i.jsx)(s.code,{children:"buildlist.xsd"})})," schema file. You can use the XSD schema file to validate the XML data."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n\n<buildlist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;buildlist" \n      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;buildlist \n      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;buildlist.xsd" buildlist_version="1.3" \n      account_id="<account id>" app_id="<app id>" app_name="<app name>"><build build_id="<build id>" \n      version="13 Aug 2019 Static" policy_updated_date="2019-08-13T14&#x3a;02&#x3a;08-04&#x3a;00"/>\n</buildlist>\n'})}),"\n",(0,i.jsx)(s.h2,{id:"java-example",children:"Java example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action getbuildlist \u2013appid <app id>\n"})}),"\n",(0,i.jsx)(s.h2,{id:"java-results",children:"Java results"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"getbuildlist.do"})," call returns the ",(0,i.jsx)(s.code,{children:"buildlist"})," XML document, which references the ",(0,i.jsx)(s.a,{href:"https://analysiscenter.veracode.com/resource/2.0/buildlist.xsd",children:(0,i.jsx)(s.code,{children:"buildlist.xsd"})})," schema file. You can use the XSD schema file to validate the XML data."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n\n<buildlist xmlns="https://analysiscenter.veracode.com/schema/2.0/buildlist" \n      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" account_id="74370" \n      app_id="<app id>" app_name="<app name>" buildlist_version="1.3" \n      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/buildlist \n      https://analysiscenter.veracode.com/resource/2.0/buildlist.xsd">\n   <build build_id="<build id>" \n      policy_updated_date="2019-08-13T14:09:11-04:00" version="13 Aug 2019 Static"/>\n</buildlist>\n'})})]})}function u(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>n});var i=t(67294);const l={},a=i.createContext(l);function n(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);