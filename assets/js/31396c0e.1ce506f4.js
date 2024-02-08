"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85473],{15766:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var n=s(85893),i=s(11151);const a={title:"getteaminfo.do (Deprecated)",slug:"/r/r_getteaminfo"},r=void 0,l={id:"guides/apis/xml_apis/admin_xml_apis/getteaminfo_do",title:"getteaminfo.do (Deprecated)",description:"The getteaminfo.do call returns information about a specific team.",source:"@site/docs/guides/14_apis/05_xml_apis/04_admin_xml_apis/09_getteaminfo_do.md",sourceDirName:"guides/14_apis/05_xml_apis/04_admin_xml_apis",slug:"/r/r_getteaminfo",permalink:"/km-docusaurus-test/r/r_getteaminfo",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"getteaminfo.do (Deprecated)",slug:"/r/r_getteaminfo"},sidebar:"tutorialSidebar",previous:{title:"deleteteam.do (Deprecated)",permalink:"/km-docusaurus-test/r/r_deleteteam"},next:{title:"getteamlist.do (Deprecated)",permalink:"/km-docusaurus-test/r/r_getteamlist"}},c={},o=[{value:"REST API equivalent",id:"rest-api-equivalent",level:2},{value:"Resource URL",id:"resource-url",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTPie example",id:"httpie-example",level:2},{value:"HTTPie results",id:"httpie-results",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"getteaminfo.do"})," call returns information about a specific team."]}),"\n",(0,n.jsxs)(t.p,{children:["Before using this API, Veracode strongly recommends that you read ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/c_API_usage_guidelines",children:"API usage and access guidelines"}),". Ensure you access the APIs with the ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/Region_Domains_for_Veracode_APIs",children:"domain for your region"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"rest-api-equivalent",children:"REST API equivalent"}),"\n",(0,n.jsxs)(t.p,{children:["The REST API equivalent of this call is a ",(0,n.jsx)(t.code,{children:"GET"})," to ",(0,n.jsx)(t.code,{children:"/api/authn/v2/teams/{teamId}"})," using the ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/c_identity_intro",children:"Identity API"}),". Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs."]}),"\n",(0,n.jsx)(t.h2,{id:"resource-url",children:"Resource URL"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"https://analysiscenter.veracode.com/api/3.0/getteaminfo.do\n"})}),"\n",(0,n.jsx)(t.h2,{id:"permissions",children:"Permissions"}),"\n",(0,n.jsx)(t.p,{children:"An API service account requires the Admin API role to use this call. A user account requires the Administrator role to use this call."}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"team_id"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Required"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Integer"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Team ID."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"include_users"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Specify ",(0,n.jsx)(t.code,{children:"Yes"})," to view the members of the team. Default is ",(0,n.jsx)(t.code,{children:"No"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"include_applications"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Specify ",(0,n.jsx)(t.code,{children:"Yes"})," to view applications assigned to the team. Default is ",(0,n.jsx)(t.code,{children:"No"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"httpie-example",children:"HTTPie example"}),"\n",(0,n.jsxs)(t.p,{children:["Examples use the ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/c_httpie_tool",children:"HTTPie command-line tool"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'http --auth-type=veracode_hmac -o teaminfo.xml "https://analysiscenter.veracode.com/api/3.0/getteaminfo.do" "team_id==144659" "include_users==yes" "include_applications==yes"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"httpie-results",children:"HTTPie results"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"getteaminfo.do"})," call returns the ",(0,n.jsx)(t.code,{children:"teaminfo"})," XML document, which references the ",(0,n.jsx)(t.a,{href:"https://analysiscenter.veracode.com/resource/3.0/teaminfo.xsd",children:(0,n.jsx)(t.code,{children:"teaminfo.xsd"})})," schema file. You can use the XSD schema file to validate the XML data."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n\n<teaminfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" \n      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;teaminfo&#x2f;3.0" \n      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;teaminfo&#x2f;3.0 \n      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;teaminfo.xsd" \n      teaminfo_version="3.1" team_name="Demo Team" can_view_shared_types="false" business_unit="<business unit>">\n   <user username="sviceroy&#x26;&#x23;x40&#x3b;example.com" first_name="Saiya" last_name="Viceroy" \n      email_address="sviceroy&#x40;example.com"/>\n   <user username="aswallowtail&#x26;&#x23;x40&#x3b;example.com" first_name="Anna" last_name="Swallowtail" \n      email_address="aswallowtail&#x40;example.com"/>\n   <user username="tmonarch&#x26;&#x23;x40&#x3b;example.com" first_name="Ted" last_name="Monarch" \n      email_address="tmonarch&#x40;example.com"/>\n   <user username="lpieris&#x26;&#x23;x40&#x3b;example.com" first_name="Li" last_name="Pieris" \n      email_address="lpieris&#x40;example.com"/>\n   <application app_id="<app id>" app_name="<app name>" assessment_type="SDLC" account_id="<account id>" \n      business_unit="Not Specified"/>\n   <application app_id="<app id>" app_name="<app name>" assessment_type="SDLC" account_id="<account id>" \n      business_unit="Not Specified"/>\n</teaminfo>\n'})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>r});var n=s(67294);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);