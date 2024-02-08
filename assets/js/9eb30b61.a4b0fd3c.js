"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8968],{3420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(85893),a=n(11151);const s={title:"Update an application profile with the REST API",slug:"/r/r_applications_update"},p=void 0,o={id:"guides/apis/rest_apis/applications_rest_api/applications_api_update",title:"Update an application profile with the REST API",description:"Send the following request to update an application profile:",source:"@site/docs/guides/14_apis/04_rest_apis/02_applications_rest_api/03_applications_api_update.md",sourceDirName:"guides/14_apis/04_rest_apis/02_applications_rest_api",slug:"/r/r_applications_update",permalink:"/km-docusaurus-test/r/r_applications_update",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Update an application profile with the REST API",slug:"/r/r_applications_update"},sidebar:"tutorialSidebar",previous:{title:"Create an application profile assigned to a team with the REST API",permalink:"/km-docusaurus-test/r/r_applications_create_assign_team"},next:{title:"Get a list of application profiles by name with the REST API",permalink:"/km-docusaurus-test/r/List_Applications_By_Name"}},r={},l=[];function c(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Send the following request to update an application profile:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'http --auth-type=veracode_hmac PUT "https://api.veracode.com/appsec/v1/applications/{guid}" < input.json\n'})}),"\n",(0,i.jsx)(t.p,{children:"Include a payload that defines the updated properties. For example:"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"When you update an application profile with this API, all properties are required."})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "profile": {\n    "name": "Applications REST API 9.5",\n    "tags": "demo, restapi",\n    "business_unit": {\n      "guid": "{business_unit_guid}"\n    },\n    "business_owners": [\n      {\n        "email": "user@example.com",\n        "name": "string"\n      }\n    ],\n    "archer_app_name": null,\n    "policies": [\n      {\n        "guid": "{policy_guid}",\n        "is_default": true\n      }\n    ],\n    "teams": [\n      {\n        "guid": "{team_guid}"\n      }\n    ],\n    "custom_fields": [\n      {\n        "name": "my_custom_field",\n        "value": "my_custom_value"\n      }\n    ],\n    "description": null,\n    "business_criticality": "HIGH"\n  }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>p});var i=n(67294);const a={},s=i.createContext(a);function p(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:p(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);