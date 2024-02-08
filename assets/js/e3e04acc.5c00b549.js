"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57614],{81040:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var n=t(85893),d=t(11151);const r={title:"deletesandbox.do",slug:"/r/r_deletesandbox"},a=void 0,o={id:"guides/apis/xml_apis/sandbox_xml_apis/deletesandbox_do",title:"deletesandbox.do",description:"The deletesandbox.do call deletes the specified sandbox.",source:"@site/docs/guides/14_apis/05_xml_apis/08_sandbox_xml_apis/06_deletesandbox_do.md",sourceDirName:"guides/14_apis/05_xml_apis/08_sandbox_xml_apis",slug:"/r/r_deletesandbox",permalink:"/km-docusaurus-test/r/r_deletesandbox",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"deletesandbox.do",slug:"/r/r_deletesandbox"},sidebar:"tutorialSidebar",previous:{title:"updatesandbox.do",permalink:"/km-docusaurus-test/r/r_updatesandbox"},next:{title:"VAST XML API",permalink:"/km-docusaurus-test/r/c_VAST_api"}},l={},i=[{value:"REST API equivalent",id:"rest-api-equivalent",level:2},{value:"Resource URL",id:"resource-url",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie example",id:"httpie-example",level:2},{value:"HTTPie results",id:"httpie-results",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"deletesandbox.do"})," call deletes the specified ",(0,n.jsx)(s.a,{href:"/km-docusaurus-test/r/c_about_sandbox",children:"sandbox"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Before using this API, Veracode strongly recommends that you read ",(0,n.jsx)(s.a,{href:"/km-docusaurus-test/r/c_API_usage_guidelines",children:"API usage and access guidelines"}),". Ensure you access the APIs with the ",(0,n.jsx)(s.a,{href:"/km-docusaurus-test/r/Region_Domains_for_Veracode_APIs",children:"domain for your region"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"rest-api-equivalent",children:"REST API equivalent"}),"\n",(0,n.jsxs)(s.p,{children:["The REST API equivalent of this call is a ",(0,n.jsx)(s.code,{children:"DELETE"})," to ",(0,n.jsx)(s.code,{children:"/appsec/v1/applications/{applicationGuid}/sandboxes/{sandboxGuid}"})," using the ",(0,n.jsx)(s.a,{href:"/km-docusaurus-test/r/c_rest_sandbox_intro",children:"Development Sandbox API"}),". Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs."]}),"\n",(0,n.jsx)(s.h2,{id:"resource-url",children:"Resource URL"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"https://analysiscenter.veracode.com/api/5.0/deletesandbox.do\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"deletesandbox.do"})," call deletes a sandbox and its contents. You cannot undo the deletion."]}),"\n",(0,n.jsx)(s.h2,{id:"permissions",children:"Permissions"}),"\n",(0,n.jsxs)(s.p,{children:["An API service account requires the Upload and Scan ",(0,n.jsx)(s.a,{href:"/km-docusaurus-test/r/c_role_permissions",children:"role"})," to use this call. A user account requires the Creator, Security Lead, or Sandbox Administrator role to use this call. If you have delete permission, you do not have to own the sandbox to delete it. If you are a team-restricted user, you can only delete sandboxes that your teams own."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"sandbox_id"}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Required"})]}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"Integer"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"ID of the target sandbox."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"httpie-example",children:"HTTPie example"}),"\n",(0,n.jsxs)(s.p,{children:["Examples use the ",(0,n.jsx)(s.a,{href:"/km-docusaurus-test/r/c_httpie_tool",children:"HTTPie command-line tool"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/deletesandbox.do" "sandbox_id==1554802"\n'})}),"\n",(0,n.jsx)(s.h2,{id:"httpie-results",children:"HTTPie results"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"deletesandbox.do"})," call returns the ",(0,n.jsx)(s.code,{children:"deletesandboxresult"})," XML document, which references the ",(0,n.jsx)(s.a,{href:"https://analysiscenter.veracode.com/resource/deletesandboxresult.xsd",children:(0,n.jsx)(s.code,{children:"deletesandboxresult.xsd"})})," schema file. You can use the XSD schema file to validate the XML data."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n\n<deletesandboxresult xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n  xmlns="https://analysiscenter.veracode.com/schema/deletesandboxresult" \n  xsi:schemaLocation="https://analysiscenter.veracode.com/schema/deletesandboxresult.xsd" \n  account_id="28823" app_id="61230" sandbox_id="1554802">\n    <result>success</result>\n</deletesandboxresult>\n\n'})})]})}function u(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>a});var n=t(67294);const d={},r=n.createContext(d);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);