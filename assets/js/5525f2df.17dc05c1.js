"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7968],{66566:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=s(85893),i=s(11151);const n={title:"Delete API credentials for an API user with the REST API",slug:"/r/Deleting_API_Credentials_for_an_API_User_with_the_Identity_API"},a=void 0,o={id:"guides/apis/rest_apis/identity_rest_api/identity_rest_api_delete_api_creds",title:"Delete API credentials for an API user with the REST API",description:"This use case scenario provides the Identity REST API request for deleting API credentials from an API service account.",source:"@site/docs/guides/14_apis/04_rest_apis/11_identity_rest_api/13_identity_rest_api_delete_api_creds.md",sourceDirName:"guides/14_apis/04_rest_apis/11_identity_rest_api",slug:"/r/Deleting_API_Credentials_for_an_API_User_with_the_Identity_API",permalink:"/km-docusaurus-test/r/Deleting_API_Credentials_for_an_API_User_with_the_Identity_API",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Delete API credentials for an API user with the REST API",slug:"/r/Deleting_API_Credentials_for_an_API_User_with_the_Identity_API"},sidebar:"tutorialSidebar",previous:{title:"Revoke API credentials with the REST API",permalink:"/km-docusaurus-test/r/c_identity_revoke_creds"},next:{title:"Create a team with the REST API",permalink:"/km-docusaurus-test/r/c_identity_create_team"}},c={},d=[];function _(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This use case scenario provides the Identity REST API request for deleting ",(0,r.jsx)(t.a,{href:"/km-docusaurus-test/r/c_api_credentials3",children:"API credentials"})," from an API service account."]}),"\n",(0,r.jsxs)(t.p,{children:["Send the following request to delete the API credentials from the API user you specify for ",(0,r.jsx)(t.code,{children:"userId"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'http --auth-type=veracode_hmac --json DELETE "https://api.veracode.com/api/authn/v2/api_credentials/user_id/{userId}"\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You must include the ",(0,r.jsx)(t.code,{children:"--json"})," parameter to force the request to send the ",(0,r.jsx)(t.code,{children:"Content-Type: application/json"})," in the HTTP header."]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var r=s(67294);const i={},n=r.createContext(i);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);