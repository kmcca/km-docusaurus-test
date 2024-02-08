"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29832],{48212:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(85893),r=s(11151);const i={title:"Understanding webhooks",slug:"/r/Understanding_Webhooks"},a=void 0,o={id:"guides/SCA/using_agent_based_scans/project_management/understanding_webhooks",title:"Understanding webhooks",description:"A webhook allows Veracode Software Composition Analysis to notify you when certain events occur in your project. When the event is triggered, Veracode sends an HTTP POST request with a payload to your configured URL.",source:"@site/docs/guides/07_SCA/04_using_agent_based_scans/22_project_management/05_understanding_webhooks.md",sourceDirName:"guides/07_SCA/04_using_agent_based_scans/22_project_management",slug:"/r/Understanding_Webhooks",permalink:"/km-docusaurus-test/r/Understanding_Webhooks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Understanding webhooks",slug:"/r/Understanding_Webhooks"},sidebar:"tutorialSidebar",previous:{title:"Enable notifications for watched projects",permalink:"/km-docusaurus-test/r/Enable_Notifications_for_Watched_Projects"},next:{title:"Add a webhook to a project",permalink:"/km-docusaurus-test/r/Add_Webhook_to_a_Project"}},c={},d=[{value:"Webhook trigger events",id:"webhook-trigger-events",level:2},{value:"Webhook payload examples",id:"webhook-payload-examples",level:2},{value:"Scan success",id:"scan-success",level:3},{value:"Vulnerability issues discovered",id:"vulnerability-issues-discovered",level:3},{value:"Vulnerability issues changed",id:"vulnerability-issues-changed",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A webhook allows Veracode Software Composition Analysis to notify you when certain events occur in your project. When the event is triggered, Veracode sends an HTTP POST request with a payload to your configured URL."}),"\n",(0,t.jsx)(n.h2,{id:"webhook-trigger-events",children:"Webhook trigger events"}),"\n",(0,t.jsx)(n.p,{children:"These events can trigger notifications:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Event"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Scan"}),(0,t.jsx)(n.td,{children:"Veracode successfully scans project."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Vulnerability issues discovered in project library after a scan"}),(0,t.jsx)(n.td,{children:"The Veracode research team releases a new vulnerability that affects your project"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Vulnerability issues changed in project library after a scan"}),(0,t.jsx)(n.td,{children:"The Veracode research team updates a vulnerability that affects your project"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"webhook-payload-examples",children:"Webhook payload examples"}),"\n",(0,t.jsx)(n.p,{children:"Each trigger event generates a particular type of payload with the relevant information. These examples show the content Veracode provides for each event."}),"\n",(0,t.jsx)(n.h3,{id:"scan-success",children:"Scan success"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'    {\n      "event": "SCAN_SUCCESS",\n      "organization": {\n        "id": 310,\n        "name": "Veracode",\n        "planType": "ENTERPRISE"\n      },\n      "workspace": {\n        "id": 4788,\n        "name": "Webhooks"\n      },\n      "user": {\n        "id": 2910,\n        "name": "John Smith"\n      },\n      "scan": {\n        "id": 1099430,\n        "commit": "2bedd63b8e3019121c89108bfccb2421b08e28e9",\n        "branch": "New_demo_branch",\n        "tag": null,\n        "reportLink": "<LINK TO REPORT>",\n        "vulnIssuesCount": 31,\n        "outofDateIssuesCount": 9,\n        "licenseIssuesCount": 0\n      },\n      "project": {\n        "id": 20757,\n        "name": "example-javascript"\n      }\n    }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"vulnerability-issues-discovered",children:"Vulnerability issues discovered"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'    {\n      "event": "VULN_ISSUES_DISCOVERED_AFTER_SCAN",\n      "organization": {\n        "id": 310,\n        "name": "Veracode",\n        "planType": "ENTERPRISE"\n      },\n      "workspace": {\n        "id": 4788,\n        "name": "Webhooks"\n      },\n      "user": null,\n      "issues": [\n        {\n          "id": 111967,\n          "status": "NEW",\n          "issueUrl": "<LINK TO ISSUE>",\n          "vuln": {\n            "id": 16462,\n            "title": \u201cTitle of vulnerability",\n            "cvssScore": 4.3,\n            "cvss3Score": 5.9,\n            "cve": null,\n            "cveStatus": "NA",\n            "stage": "RELEASED",\n            "disclosureDate": null,\n            "hasExploits": false,\n            "vulnerabilityTypes": [],\n            "overview": null\n          }\n        }\n      ],\n      "project": {\n        "id": 20757,\n        "name": "example-javascript"\n      }\n    }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"vulnerability-issues-changed",children:"Vulnerability issues changed"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'    {\n      "event": "VULN_ISSUES_CHANGED_AFTER_SCAN",\n      "organization": {\n        "id": 310,\n        "name": "Veracode",\n        "planType": "ENTERPRISE"\n      },\n      "workspace": {\n        "id": 4788,\n        "name": "Webhooks"\n      },\n      "user": null,\n      "issues": [\n        {\n          "id": 111967,\n          "status": "RESOLVED",\n          "issueUrl": \u201c<LINK TO ISSUE>\u201d,\n          "vuln": {\n            "id": 16462,\n            "title": "Title of vulnerability",\n            "cvssScore": 7.8,\n            "cvss3Score": 5.9,\n            "cve": null,\n            "cveStatus": "NA",\n            "stage": "RELEASED",\n            "disclosureDate": null,\n            "hasExploits": false,\n            "vulnerabilityTypes": [],\n            "overview": null\n          }\n        }\n      ],\n      "project": {\n        "id": 20757,\n        "name": "example-javascript"\n      }\n     }\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var t=s(67294);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);