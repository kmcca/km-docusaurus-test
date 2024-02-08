"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77781],{8889:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(85893),n=i(11151);const r={title:"Understanding SCA exploitability information",slug:"/r/Understanding_SCA_exploitability_information"},o=void 0,a={id:"guides/SCA/getting_started_sca/sca_exploit_info",title:"Understanding SCA exploitability information",description:"Veracode SCA provides the following exploitability information that you may combine with vulnerability severity ratings to prioritize what to fix first:",source:"@site/docs/guides/07_SCA/01_getting_started_sca/12_sca_exploit_info.md",sourceDirName:"guides/07_SCA/01_getting_started_sca",slug:"/r/Understanding_SCA_exploitability_information",permalink:"/km-docusaurus-test/r/Understanding_SCA_exploitability_information",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Understanding SCA exploitability information",slug:"/r/Understanding_SCA_exploitability_information"},sidebar:"tutorialSidebar",previous:{title:"Using Veracode SCA with the REST APIs",permalink:"/km-docusaurus-test/r/Using_Veracode_SCA_with_the_REST_APIs"},next:{title:"About SCA agent-based scans",permalink:"/km-docusaurus-test/r/Agent_Based_Scans"}},l={},c=[{value:"EPSS",id:"epss",level:2},{value:"Exploit Observed",id:"exploit-observed",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Veracode SCA provides the following exploitability information that you may combine with vulnerability severity ratings to prioritize what to fix first:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Exploit Prediction Scoring System (EPSS) attempts to calculate the probability that a hacker will exploit a vulnerability."}),"\n",(0,s.jsx)(t.li,{children:"Exploit Observed determines whether a hacker has already exploited a vulnerability or the vulnerable code is public."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"epss",children:"EPSS"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.first.org/epss/",children:"First.org"}),", the organization that created the Common Vulnerability Scoring System (CVSS), developed the Exploit Prediction Scoring System (EPSS). EPSS has two components: probability and percentile."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["EPSS Probability: the EPSS model produces an ",(0,s.jsx)(t.code,{children:"epss_score"})," between 0 and 1 (0 and 100%) that estimates the probability that a software vulnerability will be exploited in the next 30 days. The higher the score, the greater the probability that a vulnerability will be exploited."]}),"\n",(0,s.jsxs)(t.li,{children:["EPSS Percentile: the EPSS model also provides the ",(0,s.jsx)(t.code,{children:"epss_percentile"})," of the current EPSS score, which shows the percentage of all vulnerabilities with the same or lower EPSS scores."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["EPSS data is updated daily. Only published vulnerabilities with an assigned CVE number have an EPSS score. For example, ",(0,s.jsx)(t.a,{href:"https://sca.analysiscenter.veracode.com/vulnerability-database/security/cross-site-scripting-xss-/javascript/SID-35451/summary",children:"SRCCLR-SID-35451"})," has no EPSS score because it does not have a CVE number, and ",(0,s.jsx)(t.a,{href:"https://sca.analysiscenter.veracode.com/vulnerability-database/security/cross-site-scripting-xss-/javascript/sid-6991/summary",children:"CVE-2018-9863"})," has no EPSS score because its status is reserved, not published."]}),"\n",(0,s.jsx)(t.h2,{id:"exploit-observed",children:"Exploit Observed"}),"\n",(0,s.jsxs)(t.p,{children:["When an exploit is observed in the wild or when proof of concept (POC) code becomes publicly available, the ",(0,s.jsx)(t.code,{children:"exploit_observed"})," field is ",(0,s.jsx)(t.code,{children:"true"})," and the ",(0,s.jsx)(t.code,{children:"exploit_source"})," field displays the source of this information. Veracode\u2019s source is the ",(0,s.jsx)(t.a,{href:"https://www.cisa.gov/known-exploited-vulnerabilities-catalog",children:"Known Exploited Vulnerabilities catalog"})," from the Cybersecurity & Infrastructure Security Agency (CISA)."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var s=i(67294);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);