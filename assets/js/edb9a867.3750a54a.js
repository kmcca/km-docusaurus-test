"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63109],{68161:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var t=r(85893),n=r(11151);const a={title:"Troubleshoot DAST Essentials target errors",slug:"/r/crashtest-security-user-support"},i=void 0,o={id:"guides/dynamic_analysis/dast_essentials/dast_essentials_faq/crashtest-security-user-support",title:"Troubleshoot DAST Essentials target errors",description:"This section explains how to troubleshoot target errors.",source:"@site/docs/guides/08_dynamic_analysis/15_dast_essentials/06_dast_essentials_faq/01_crashtest-security-user-support.md",sourceDirName:"guides/08_dynamic_analysis/15_dast_essentials/06_dast_essentials_faq",slug:"/r/crashtest-security-user-support",permalink:"/km-docusaurus-test/r/crashtest-security-user-support",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Troubleshoot DAST Essentials target errors",slug:"/r/crashtest-security-user-support"},sidebar:"tutorialSidebar",previous:{title:"DAST Essentials FAQs",permalink:"/km-docusaurus-test/r/getting-started-with-crashtest-security"},next:{title:"DAST Essentials scan errors",permalink:"/km-docusaurus-test/r/scan-errors-troubleshooting"}},l={},h=[{value:"How should I interpret the error messages during my scans, and what should I do?",id:"how-should-i-interpret-the-error-messages-during-my-scans-and-what-should-i-do",level:2},{value:"What should I do when I receive error message &quot;Failed to verify the scan targets&quot;?",id:"what-should-i-do-when-i-receive-error-message-failed-to-verify-the-scan-targets",level:2},{value:"What should I do when I receive error message &quot;Scanner could not log in&quot;?",id:"what-should-i-do-when-i-receive-error-message-scanner-could-not-log-in",level:2},{value:"What should I do when I receive the error message &quot;Scan failed for unknown reasons&quot;?",id:"what-should-i-do-when-i-receive-the-error-message-scan-failed-for-unknown-reasons",level:2},{value:"Why is my scan taking so long?",id:"why-is-my-scan-taking-so-long",level:2}];function c(e){const s={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"This section explains how to troubleshoot target errors."}),"\n",(0,t.jsx)(s.h2,{id:"how-should-i-interpret-the-error-messages-during-my-scans-and-what-should-i-do",children:"How should I interpret the error messages during my scans, and what should I do?"}),"\n",(0,t.jsxs)(s.p,{children:["If the scan configuration is not done correctly, or there is a problem with one of the scanners, you will receive an error message while the scan runs, or after it finishes. For help with any scan errors, see ",(0,t.jsx)(s.a,{href:"/km-docusaurus-test/r/scan-errors-troubleshooting",children:"troubleshooting"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"what-should-i-do-when-i-receive-error-message-failed-to-verify-the-scan-targets",children:'What should I do when I receive error message "Failed to verify the scan targets"?'}),"\n",(0,t.jsx)(s.p,{children:"First, check if the verification file has been uploaded correctly. If this is not the case, ensure the website is accessible to the scanner by the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The website should be publicly accessible."}),"\n",(0,t.jsxs)(s.li,{children:["If protected by a firewall, ensure that the required IP addresses are on your ",(0,t.jsx)(s.a,{href:"/km-docusaurus-test/r/IP_addresses",children:"allowlist"})," (check the IP addresses provided previously)."]}),"\n",(0,t.jsx)(s.li,{children:"The credentials must be first configured when the application has an HTTP basic authentication."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"what-should-i-do-when-i-receive-error-message-scanner-could-not-log-in",children:'What should I do when I receive error message "Scanner could not log in"?'}),"\n",(0,t.jsx)(s.p,{children:"You have to ensure that the website is accessible to the scanner. Check the following actions to make this possible."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The website should be publicly accessible."}),"\n",(0,t.jsxs)(s.li,{children:["If protected by a firewall, ensure the required IP addresses are on your ",(0,t.jsx)(s.a,{href:"/km-docusaurus-test/r/IP_addresses",children:"allowlist"})," (check the IP addresses provided previously)."]}),"\n",(0,t.jsx)(s.li,{children:"If the application has an HTTP basic authentication, check that the credentials are correct."}),"\n",(0,t.jsx)(s.li,{children:"If protected by a login form, ensure that the credentials are correct."}),"\n",(0,t.jsx)(s.li,{children:"If the authentication is token-based, ensure they are valid long enough to run a scan (ideally 24h+)."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"what-should-i-do-when-i-receive-the-error-message-scan-failed-for-unknown-reasons",children:'What should I do when I receive the error message "Scan failed for unknown reasons"?'}),"\n",(0,t.jsx)(s.p,{children:"There might be several reasons causing this error. First, check the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The application is available."}),"\n",(0,t.jsx)(s.li,{children:"Login credentials are correct."}),"\n",(0,t.jsxs)(s.li,{children:["IP addresses are on your ",(0,t.jsx)(s.a,{href:"/km-docusaurus-test/r/IP_addresses",children:"allowlist"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If all of these are checked, but are not working, contact ",(0,t.jsx)(s.a,{href:"mailto:support@veracode.com",children:"Veracode Technical Support"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"why-is-my-scan-taking-so-long",children:"Why is my scan taking so long?"}),"\n",(0,t.jsx)(s.p,{children:"The full, invasive vulnerability scan might take longer than usual if you have an extensive application or have a vast number of pages. This can also happen if the crawler cannot group the paths to the pages due to their complex structure. Avoid this issue by the following actions:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Group your pages in the ",(0,t.jsx)(s.strong,{children:"Grouped URL"})," setting. The pattern for grouping uses the asterisk as a placeholder for parts of the path."]}),"\n",(0,t.jsx)(s.li,{children:"Add URLs to the Denied URLs section, so you can reduce the scan scope manually before the start."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If your web application is relatively small and usually scans, this might need an expert review. For assistance, contact ",(0,t.jsx)(s.a,{href:"mailto:support@veracode.com",children:"Veracode Technical Support"}),"."]})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>o,a:()=>i});var t=r(67294);const n={},a=t.createContext(n);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);