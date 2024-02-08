"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36150],{58777:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var a=t(85893),i=t(11151);const s={title:"Example Selenium scripts",slug:"/r/Example_Selenium_scripts"},c=void 0,d={id:"guides/dynamic_analysis/da_scan_web/configure_web_scan/da_login_script/dynamic_web_example_scripts",title:"Example Selenium scripts",description:"The following Selenium scripts demonstrate how to record a script you can use with Veracode Dynamic Analysis. You can use these scripts as templates.",source:"@site/docs/guides/08_dynamic_analysis/01_da_scan_web/03_configure_web_scan/05_da_login_script/04_dynamic_web_example_scripts.md",sourceDirName:"guides/08_dynamic_analysis/01_da_scan_web/03_configure_web_scan/05_da_login_script",slug:"/r/Example_Selenium_scripts",permalink:"/km-docusaurus-test/r/Example_Selenium_scripts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Example Selenium scripts",slug:"/r/Example_Selenium_scripts"},sidebar:"tutorialSidebar",previous:{title:"Video: Create login scripts with Selenium",permalink:"/km-docusaurus-test/r/c_was_video_create_scripts_with_selenium"},next:{title:"Video: Configure a Veracode Dynamic Analysis for internal scanning",permalink:"/km-docusaurus-test/r/c_was_video_configure_internal_scanning"}},r={},o=[{value:"Example script 1",id:"example-script-1",level:2},{value:"Example script 2",id:"example-script-2",level:2},{value:"Example script 3",id:"example-script-3",level:2}];function m(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"The following Selenium scripts demonstrate how to record a script you can use with Veracode Dynamic Analysis. You can use these scripts as templates."}),"\n",(0,a.jsx)(e.h2,{id:"example-script-1",children:"Example script 1"}),"\n",(0,a.jsx)(e.p,{children:"The following script demonstrates signing in to a web application where the username and password fields are on the same page."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "id": "b66324ad-1350-4277-85f1-c48b3800a868",\n  "version": "2.0",\n  "name": "Login",\n  "url": "https://veracode.com",\n  "tests": [{\n    "id": "577b18f4-5b2f-49e8-9fc3-e320cd8f00fa",\n    "name": "Login",\n    "commands": [{\n      "id": "03d62bf6-8784-48cc-b319-30e1c809ab11",\n      "comment": "",\n      "command": "open",\n      "target": "/",\n      "targets": [],\n      "value": ""\n    }, {\n      "id": "81b9dc4d-7c78-49f9-bc4c-9e2186625169",\n      "comment": "",\n      "command": "waitForElementVisible",\n      "target": "id=username",\n      "targets": [],\n      "value": "30000"\n    }, {\n      "id": "53c5ed70-6548-4e39-b456-d0e5502945d4",\n      "comment": "",\n      "command": "type",\n      "target": "id=username",\n      "targets": [],\n      "value": "user1"\n    }, {\n      "id": "1b55d2a4-e472-48e6-822d-a5b54a2986d9",\n      "comment": "",\n      "command": "type",\n      "target": "id=password",\n      "targets": [\n        ["id=password", "id"],\n        ["name=password", "name"],\n        ["css=#password", "css:finder"],\n        ["xpath=//input[@id=\'password\']", "xpath:attributes"],\n        ["xpath=//form[@id=\'form-login\']/div/div[2]/div/div/div/div/div/input", "xpath:idRelative"],\n        ["xpath=//input", "xpath:position"]\n      ],\n      "value": "abc123"\n    }, {\n      "id": "da24efdf-cdd3-4858-b9f8-52e0666b6d73",\n      "comment": "",\n      "command": "click",\n      "target": "id=login-submit",\n      "targets": [],\n      "value": ""\n    }, {\n      "id": "566c3651-194c-4621-bc87-7f5cb64356fe",\n      "comment": "",\n      "command": "waitForElementVisible",\n      "target": "id=create-space-button-next",\n      "targets": [],\n      "value": "30000"\n    }]\n  }],\n  "suites": [{\n    "id": "e17f2325-4ac8-46d3-8f25-7b087a41d356",\n    "name": "Default Suite",\n    "persistSession": false,\n    "parallel": false,\n    "timeout": 300,\n    "tests": ["577b18f4-5b2f-49e8-9fc3-e320cd8f00fa"]\n  }],\n  "urls": ["https://veracode.com/"],\n  "plugins": []\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"example-script-2",children:"Example script 2"}),"\n",(0,a.jsx)(e.p,{children:"The following script demonstrates signing in to a web application where the username and password fields are on separate pages."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "id": "b66324ad-1350-4277-85f1-c48b3800a868",\n  "version": "2.0",\n  "name": "Login",\n  "url": "https://veracode.com",\n  "tests": [{\n    "id": "577b18f4-5b2f-49e8-9fc3-e320cd8f00fa",\n    "name": "Login",\n    "commands": [{\n      "id": "03d62bf6-8784-48cc-b319-30e1c809ab11",\n      "comment": "",\n      "command": "open",\n      "target": "/",\n      "targets": [],\n      "value": ""\n    }, {\n      "id": "81b9dc4d-7c78-49f9-bc4c-9e2186625169",\n      "comment": "",\n      "command": "waitForElementVisible",\n      "target": "id=username",\n      "targets": [],\n      "value": "30000"\n    }, {\n      "id": "53c5ed70-6548-4e39-b456-d0e5502945d4",\n      "comment": "",\n      "command": "type",\n      "target": "id=username",\n      "targets": [],\n      "value": "user1"\n    }, {\n      "id": "d2ba43a8-e109-415a-a2be-0b19e9ffef75",\n      "comment": "",\n      "command": "click",\n      "target": "id=login-submit",\n      "targets": [],\n      "value": ""\n    }, {\n      "id": "4f9104fd-0f7f-4aeb-885f-b27b1eca4363",\n      "comment": "",\n      "command": "waitForElementVisible",\n      "target": "id=password",\n      "targets": [],\n      "value": "30000"\n    }, {\n      "id": "1b55d2a4-e472-48e6-822d-a5b54a2986d9",\n      "comment": "",\n      "command": "type",\n      "target": "id=password",\n      "targets": [\n        ["id=password", "id"],\n        ["name=password", "name"],\n        ["css=#password", "css:finder"],\n        ["xpath=//input[@id=\'password\']", "xpath:attributes"],\n        ["xpath=//form[@id=\'form-login\']/div/div[2]/div/div/div/div/div/input", "xpath:idRelative"],\n        ["xpath=//input", "xpath:position"]\n      ],\n      "value": "abc123"\n    }, {\n      "id": "da24efdf-cdd3-4858-b9f8-52e0666b6d73",\n      "comment": "",\n      "command": "click",\n      "target": "id=login-submit",\n      "targets": [],\n      "value": ""\n    }, {\n      "id": "566c3651-194c-4621-bc87-7f5cb64356fe",\n      "comment": "",\n      "command": "waitForElementVisible",\n      "target": "id=create-space-button-next",\n      "targets": [],\n      "value": "30000"\n    }]\n  }],\n  "suites": [{\n    "id": "e17f2325-4ac8-46d3-8f25-7b087a41d356",\n    "name": "Default Suite",\n    "persistSession": false,\n    "parallel": false,\n    "timeout": 300,\n    "tests": ["577b18f4-5b2f-49e8-9fc3-e320cd8f00fa"]\n  }],\n  "urls": ["https://veracode.com/"],\n  "plugins": []\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"example-script-3",children:"Example script 3"}),"\n",(0,a.jsxs)(e.p,{children:["The following script demonstrates signing in to a web application with multi-factor authentication (MFA) enabled using the ",(0,a.jsx)(e.a,{href:"/km-docusaurus-test/r/c_was_conf_url3",children:"TOTP scanner variable"}),"."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "id": "68c1e8b0-d794-4b37-a7c6-793eb8a434dc",\n  "version": "2.0",\n  "name": "Login_TOTP",\n  "url": "<appURL>",\n  "tests": [{\n    "id": "d084a794-2ca2-48ce-bb5c-a4638eeb1f94",\n    "name": "Login",\n    "commands": [{\n      "id": "8b2550d6-ee29-4230-9ccd-f44798a2407a",\n      "comment": "",\n      "command": "open",\n      "target": "<loginPath>",\n      "targets": [],\n      "value": ""\n    }, {\n      "id": "439e6617-c4d8-49d7-8073-54f638aafc21",\n      "comment": "",\n      "command": "waitForElementPresent",\n      "target": "name=user",\n      "targets": [],\n      "value": "30000"\n    }, {\n      "id": "3c0db2ff-db10-4fcd-8d43-a2c7438e8e1e",\n      "comment": "",\n      "command": "type",\n      "target": "name=user",\n      "targets": [\n        ["name=user", "name"],\n        ["css=tr:nth-child(1) .form-control", "css:finder"],\n        ["xpath=//input[@name=\'user\']", "xpath:attributes"],\n        ["xpath=//div/input", "xpath:position"]\n      ],\n      "value": "<user-totp>"\n    }, {\n      "id": "ee4e1cc9-f9ff-4119-ad3e-b3d3cda39824",\n      "comment": "",\n      "command": "type",\n      "target": "name=password",\n      "targets": [\n        ["name=password", "name"],\n        ["css=tr:nth-child(2) .form-control", "css:finder"],\n        ["xpath=//input[@name=\'password\']", "xpath:attributes"],\n        ["xpath=//tr[2]/td[2]/div/input", "xpath:position"]\n      ],\n      "value": "<password>"\n    }, {\n      "id": "55f3d219-a84f-471d-a13e-41638ad396dc",\n      "comment": "",\n      "command": "click",\n      "target": "id=login",\n      "targets": [\n        ["id=login", "id"],\n        ["name=Login", "name"],\n        ["css=#login", "css:finder"],\n        ["xpath=//button[@id=\'login\']", "xpath:attributes"],\n        ["xpath=//button", "xpath:position"],\n        ["xpath=//button[contains(.,\'Login\')]", "xpath:innerText"]\n      ],\n      "value": ""\n    }, {\n      "id": "9840bd4c-52b8-4df8-9b8c-dc7c3bf71b6e",\n      "comment": "",\n      "command": "waitForElementPresent",\n      "target": "name=totpcode",\n      "targets": [],\n      "value": "30000"\n    }, {\n      "id": "14b8ff3c-05e8-4dbb-a824-2d6dcf39988d",\n      "comment": "",\n      "command": "type",\n      "target": "name=totpcode",\n      "targets": [\n        ["name=totpcode", "name"],\n        ["css=.form-control", "css:finder"],\n        ["xpath=//input[@name=\'totpcode\']", "xpath:attributes"],\n        ["xpath=//input", "xpath:position"]\n      ],\n      "value": "${TOTP_SECRET}"\n    }, {\n      "id": "7c0231b6-84f6-4229-9d0b-928f8df5a378",\n      "comment": "",\n      "command": "click",\n      "target": "id=submit",\n      "targets": [\n        ["id=submit", "id"],\n        ["name=Submit", "name"],\n        ["css=#submit", "css:finder"],\n        ["xpath=//button[@id=\'submit\']", "xpath:attributes"],\n        ["xpath=//button", "xpath:position"],\n        ["xpath=//button[contains(.,\'Submit\')]", "xpath:innerText"]\n      ],\n      "value": ""\n    }, {\n      "id": "5218f117-7594-45f9-b0fe-31ac08144ddf",\n      "comment": "",\n      "command": "waitForElementPresent",\n      "target": "id=<PageElementID>",\n      "targets": [],\n      "value": "30000"\n    }]\n  }],\n  "suites": [{\n    "id": "34ea279e-bdb6-4c97-b562-1c06635c7898",\n    "name": "Default Suite",\n    "persistSession": false,\n    "parallel": false,\n    "timeout": 300,\n    "tests": ["d084a794-2ca2-48ce-bb5c-a4638eeb1f94"]\n  }],\n  "urls": ["<appURL>"],\n  "plugins": []\n}\n'})})]})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(m,{...n})}):m(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>d,a:()=>c});var a=t(67294);const i={},s=a.createContext(i);function c(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);