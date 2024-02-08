"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89092],{55493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(85893),i=t(11151);const a={title:"Link Dynamic Analysis results to an application profile with the REST API",slug:"/r/t_dynamic_linkAPI"},l=void 0,r={id:"guides/apis/rest_apis/dynamic_rest_api/dynamic_api_link_results",title:"Link Dynamic Analysis results to an application profile with the REST API",description:"You can use the Dynamic Analysis API to link analysis scan results to an application profile.",source:"@site/docs/guides/14_apis/04_rest_apis/05_dynamic_rest_api/17_dynamic_api_link_results.md",sourceDirName:"guides/14_apis/04_rest_apis/05_dynamic_rest_api",slug:"/r/t_dynamic_linkAPI",permalink:"/km-docusaurus-test/r/t_dynamic_linkAPI",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"Link Dynamic Analysis results to an application profile with the REST API",slug:"/r/t_dynamic_linkAPI"},sidebar:"tutorialSidebar",previous:{title:"Update the schedule of a Dynamic Analysis with the REST API",permalink:"/km-docusaurus-test/r/t_dynamic_edit_schedule"},next:{title:"Unlink Dynamic Analysis results from an application profile with the REST API",permalink:"/km-docusaurus-test/r/Unlink_Dynamic_Analysis_Results_from_an_Application_with_the_REST_API"}},o={},c=[];function p(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can use the Dynamic Analysis API to link analysis scan results to an ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/request_profile",children:"application profile"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Linking results allows you to aggregate all scan types of the target URL into a single report and also evaluate the results against policy."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To complete this task:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Send the following request to get a list of application profiles by name:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'http --auth-type=veracode_hmac GET "https://api.veracode.com/was/configservice/v1/platform_applications"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also get application details by making a GET call to the ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/c_apps_intro",children:"Applications API"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Locate the application UUID and add the UUID to the ",(0,s.jsx)(n.code,{children:"linked_platform_app_uuid"})," property in your JSON file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Send the following request to create an analysis that links the results to the specified UUID for your application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses" < input.json\n'})}),"\n",(0,s.jsx)(n.p,{children:"The API passes the JSON file that you populate with the necessary values as shown in this example payload:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Name-of-Your-Dynamic-Analysis",\n  "scans": [\n    {\n      "linked_platform_app_uuid": "abcd1234-e6d0-475d-ac70-abff5388fa75",\n      "scan_config_request": {\n        "target_url": {\n          "url": "http://www.example.com/",\n          "http_and_https": true,\n          "directory_restriction_type": "DIRECTORY_AND_SUBDIRECTORY"\n        }\n      }\n    }\n  ],\n  "schedule": {\n    "now": true,\n    "duration": {\n      "length": 1,\n      "unit": "DAY"\n    }\n  }\n}         \n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, ",(0,s.jsx)(n.code,{children:"linked_platform_app_uuid"})," specifies the UUID of the application profile to link to the scan results. ",(0,s.jsx)(n.code,{children:"target_url"})," specifies the URL configuration for the target web application you want to scan."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var s=t(67294);const i={},a=s.createContext(i);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);