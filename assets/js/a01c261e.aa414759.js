"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28630],{23655:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=t(85893),i=t(11151);const r={title:"Security Labs Edit lesson page",slug:"/r/Editing_Security_Labs_Lessons"},o=void 0,d={id:"guides/training/security_labs/customize/edit_lab_options",title:"Security Labs Edit lesson page",description:"You can choose from Overview, Setup, and Content on the Edit lesson page in Security Labs. These tables define the features in each tab:",source:"@site/docs/guides/11_training/01_security_labs/03_customize/06_edit_lab_options.md",sourceDirName:"guides/11_training/01_security_labs/03_customize",slug:"/r/Editing_Security_Labs_Lessons",permalink:"/km-docusaurus-test/r/Editing_Security_Labs_Lessons",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Security Labs Edit lesson page",slug:"/r/Editing_Security_Labs_Lessons"},sidebar:"tutorialSidebar",previous:{title:"Edit Security Labs lessons",permalink:"/km-docusaurus-test/r/Edit_Security_Labs"},next:{title:"Display types in Security Labs lessons",permalink:"/km-docusaurus-test/r/Choosing_Display_Types_in_Security_Labs_Lessons"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"Content",id:"content",level:2}];function a(e){const s={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["You can choose from ",(0,n.jsx)(s.strong,{children:"Overview"}),", ",(0,n.jsx)(s.strong,{children:"Setup"}),", and ",(0,n.jsx)(s.strong,{children:"Content"})," on the Edit lesson page in Security Labs. These tables define the features in each tab:"]}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Feature"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Stack"}),(0,n.jsx)(s.td,{children:"The language of your lesson."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Slug"}),(0,n.jsxs)(s.td,{children:["The last subdirectory of the URL for your lesson. For example, adding ",(0,n.jsx)(s.code,{children:"node-sqli"})," means the URL of your lesson is ",(0,n.jsx)(s.code,{children:"http://securitylabs.veracode.com/lesson/node-sqli"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Display type"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/km-docusaurus-test/r/Choosing_Display_Types_in_Security_Labs_Lessons",children:"More information"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Allow others to view this lesson?"}),(0,n.jsx)(s.td,{children:"Publish or unpublish a lesson. Any team members can still access an unpublished lesson if they have a direct link to the lab URL, but you cannot assign the lesson to users until you publish."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Prevent future edits?"}),(0,n.jsxs)(s.td,{children:["Toggle a lesson to ",(0,n.jsx)(s.code,{children:"Locked"})," to prevent further changes."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Topic"}),(0,n.jsxs)(s.td,{children:["Enter a value to appear in place of the words ",(0,n.jsx)(s.code,{children:"this topic"})," for the modal shown at the beginning and end of the lesson which asks users to ",(0,n.jsx)(s.code,{children:"Rate your familiarity with this topic."})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Points"}),(0,n.jsxs)(s.td,{children:["Optionally, assign points for the difficulty of the lab. ",(0,n.jsx)(s.code,{children:"10"})," points is most common for lessons with average difficulty. For more difficult lessons, increase the points a user can earn to ",(0,n.jsx)(s.code,{children:"20"})," or ",(0,n.jsx)(s.code,{children:"30"}),"."]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Feature"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Is this a lesson or a challenge?"}),(0,n.jsxs)(s.td,{children:["Choose ",(0,n.jsx)(s.strong,{children:"Challenge"})," or ",(0,n.jsx)(s.strong,{children:"Lesson"}),". Challenge labs are meant to be more difficult practice that does not provide step-by-step guidance to users. They list as ",(0,n.jsx)(s.code,{children:"{Title} Challenge"})," and provide a warning to your users that they should be familiar with the topic."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Servers"}),(0,n.jsx)(s.td,{children:"A Docker image based on the applications identified by a language and a security topic."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Additional server setup commands"}),(0,n.jsx)(s.td,{children:"Optionally include additional setup code. This code runs in Bash shell as the root user after a user selects the lab."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Expand Paths"}),(0,n.jsx)(s.td,{children:"Automatically expand any folders in the GUI editor."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Editor Hints"}),(0,n.jsx)(s.td,{children:"Place a red dot next to the name of any file or folder specified in the GUI editor."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"content",children:"Content"}),"\n",(0,n.jsx)(s.p,{children:"You can write all content in Markdown."}),"\n",(0,n.jsxs)(s.p,{children:["Use the escape sequence ",(0,n.jsx)(s.code,{children:"{$VIRTUAL_HOST}"})," in any lesson text to display the current lab URL of the user. For example,  ",(0,n.jsx)(s.code,{children:"{$VIRTUAL_HOST}/api"})," displays as ",(0,n.jsx)(s.code,{children:"https://xxxxxx.vsl.dev/api"}),"."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Feature"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Conclusion"}),(0,n.jsx)(s.td,{children:'Shows as a final step of instruction text in place of the phrase "You have completed this lab!".'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Steps"}),(0,n.jsx)(s.td,{children:"Select to add steps."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Summary"}),(0,n.jsx)(s.td,{children:"Summarize the steps the user needs to take."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Hint"}),(0,n.jsxs)(s.td,{children:["Displays if the user has been on a step for a long time, or tries to select ",(0,n.jsx)(s.strong,{children:"Next"})," before completing a step."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Solution"}),(0,n.jsx)(s.td,{children:"Provide a solution for the step that is visible only to administrators."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Checks"}),(0,n.jsx)(s.td,{children:"Choose to run checks every few seconds on a step to determine if the user can progress to the next step. The check itself is Bash code run as the root user on the container, and the result is the exact terminal output expected from running the check."})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>o});var n=t(67294);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);