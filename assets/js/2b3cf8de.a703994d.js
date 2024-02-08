"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32589],{32593:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(85893),s=a(11151);const i={title:"Update a team with the REST API",slug:"/r/c_identity_update_team"},r=void 0,d={id:"guides/apis/rest_apis/identity_rest_api/identity_api_update_team",title:"Update a team with the REST API",description:"This use case scenario provides the Identity REST API request and payload for changing the name of a team.",source:"@site/docs/guides/14_apis/04_rest_apis/11_identity_rest_api/18_identity_api_update_team.md",sourceDirName:"guides/14_apis/04_rest_apis/11_identity_rest_api",slug:"/r/c_identity_update_team",permalink:"/km-docusaurus-test/r/c_identity_update_team",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Update a team with the REST API",slug:"/r/c_identity_update_team"},sidebar:"tutorialSidebar",previous:{title:"Get team details with the REST API",permalink:"/km-docusaurus-test/r/c_identity_team_info"},next:{title:"Delete a team with the REST API",permalink:"/km-docusaurus-test/r/c_identity_delete_team"}},o={},c=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This use case scenario provides the Identity REST API request and payload for changing the name of a ",(0,n.jsx)(t.a,{href:"/km-docusaurus-test/r/admin_team",children:"team"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Send the following request to change the name of a team:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'http --auth-type=veracode_hmac PUT "https://api.veracode.com/api/authn/v2/teams/{teamId}?partial=true" < input.json\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"teamId"})," is the numeric ID, separated with hyphens, for the target team. For example: ",(0,n.jsx)(t.code,{children:"7336556f-9ef2-4a1c-b536-be8608822db6"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The API passes the JSON file that you populate with the necessary values as shown in this example payload:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "team_name": "Physical Penetration Testing"\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>d,a:()=>r});var n=a(67294);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);