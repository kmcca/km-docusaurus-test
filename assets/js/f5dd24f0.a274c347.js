"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65288],{1940:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var a=s(85893),i=s(11151);const n={title:"Prevent sensitive data exposure attacks",slug:"/r/sensitive-data-exposure"},r=void 0,o={id:"guides/dynamic_analysis/dast_essentials/dast_essentials_misc/sensitive-data-exposure",title:"Prevent sensitive data exposure attacks",description:"This section delves into sensitive data exposure risks, how attackers use Random Fuzzing/Fuzzer programs to exploit such risks and various best practices and tools to mitigate such risks in modern application delivery.",source:"@site/docs/guides/08_dynamic_analysis/15_dast_essentials/09_dast_essentials_misc/07_sensitive-data-exposure.md",sourceDirName:"guides/08_dynamic_analysis/15_dast_essentials/09_dast_essentials_misc",slug:"/r/sensitive-data-exposure",permalink:"/km-docusaurus-test/r/sensitive-data-exposure",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Prevent sensitive data exposure attacks",slug:"/r/sensitive-data-exposure"},sidebar:"tutorialSidebar",previous:{title:"Prevent insecure deserialization attacks",permalink:"/km-docusaurus-test/r/insecure-deserialization"},next:{title:"Manage findings",permalink:"/km-docusaurus-test/r/review_main"}},c={},d=[{value:"Security assessment",id:"security-assessment",level:2},{value:"Vulnerability information",id:"vulnerability-information",level:2},{value:"Lack of SSL/HTTPS security on websites",id:"lack-of-sslhttps-security-on-websites",level:3},{value:"SQL Injection Vulnerabilities in databases",id:"sql-injection-vulnerabilities-in-databases",level:3},{value:"Prevent attacks",id:"prevent-attacks",level:2},{value:"Identify and classify sensitive data",id:"identify-and-classify-sensitive-data",level:3},{value:"Apply access controls",id:"apply-access-controls",level:3},{value:"Perform proper data encryption with strong, updated protocols",id:"perform-proper-data-encryption-with-strong-updated-protocols",level:3},{value:"Store passwords using strong, adaptive, and salted-hashing functions",id:"store-passwords-using-strong-adaptive-and-salted-hashing-functions",level:3},{value:"Disable caching and autocomplete on data collection forms",id:"disable-caching-and-autocomplete-on-data-collection-forms",level:3},{value:"Minimize data surface area",id:"minimize-data-surface-area",level:3}];function l(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This section delves into sensitive data exposure risks, how attackers use Random Fuzzing/Fuzzer programs to exploit such risks and various best practices and tools to mitigate such risks in modern application delivery."}),"\n",(0,a.jsx)(t.h2,{id:"security-assessment",children:"Security assessment"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Security_Assessment_ Fuzzer",src:s(4236).Z+"",width:"907",height:"332"})}),"\n",(0,a.jsxs)(t.p,{children:["CVSS vector:  ",(0,a.jsxs)(t.a,{href:"https://www.first.org/cvss/calculator/3.0#CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",children:["AV",":N","/AC",":L","/PR",":N","/UI",":N","/S",":U","/C",":L","/I",":N","/A",":N"]})]}),"\n",(0,a.jsx)(t.h2,{id:"vulnerability-information",children:"Vulnerability information"}),"\n",(0,a.jsx)(t.p,{children:"Sensitive data exposure is associated with how teams handle security controls for certain information. Missing or poor encryption is one of the most common vulnerabilities that lead to the exposure of sensitive data. Cybercriminals typically leverage sensitive data exposure to get a hold of passwords, cryptographic keys, tokens, and other information they can use for system compromise. Some commonly known flaws that lead to the exposure of sensitive data include:"}),"\n",(0,a.jsx)(t.h3,{id:"lack-of-sslhttps-security-on-websites",children:"Lack of SSL/HTTPS security on websites"}),"\n",(0,a.jsxs)(t.p,{children:["As web applications gain mainstream use for modern enterprises, it is important to keep users/visitors protected. ",(0,a.jsx)(t.a,{href:"https://crashtest-security.com/ssl-stripping-attack/",children:"SSL certificates"})," encrypt data between websites/applications and web servers. Organizations with misconfigured ",(0,a.jsx)(t.a,{href:"https://crashtest-security.com/ssl-and-tls-security-misconfiguration-guide/",children:"SSL/HTTPS security"})," risk compromising the privacy and data integrity of the user since it can easily be intercepted in transit."]}),"\n",(0,a.jsxs)(t.h3,{id:"sql-injection-vulnerabilities-in-databases",children:[(0,a.jsx)(t.a,{href:"https://crashtest-security.com/crashtest_injection_attacks",children:"SQL Injection Vulnerabilities"})," in databases"]}),"\n",(0,a.jsx)(t.p,{children:"Without proper security controls, attackers can exploit malicious statements to retrieve the contents of a database. This allows them to create SQL statements that let them perform various database administration actions. Hackers can retrieve sensitive information, such as user credentials or application configuration information, which they use to penetrate further and compromise the system."}),"\n",(0,a.jsx)(t.h2,{id:"prevent-attacks",children:"Prevent attacks"}),"\n",(0,a.jsx)(t.p,{children:"Exposure to sensitive data results in massive remediation expenses and an eventual loss of reputation for the affected organization. It is, therefore, important to enforce a strong, organization-wide culture to prevent sensitive data exposure."}),"\n",(0,a.jsx)(t.p,{children:"The following section outlines the best practices and tools that can be used to prevent sensitive data exposure."}),"\n",(0,a.jsx)(t.h3,{id:"identify-and-classify-sensitive-data",children:"Identify and classify sensitive data"}),"\n",(0,a.jsx)(t.p,{children:"It is important to determine and classify sensitive data with extra security controls. This data should then be filtered by the sensitivity level and secured with the appropriate security controls."}),"\n",(0,a.jsx)(t.h3,{id:"apply-access-controls",children:"Apply access controls"}),"\n",(0,a.jsx)(t.p,{children:"Security teams should focus their energy on the authentication, authorization, and session management processes by provisioning a robust Identity and Access Management (IAM) mechanism. With the right access controls in place, organizations must ensure that only the intended individuals can view and modify sensitive data."}),"\n",(0,a.jsx)(t.h3,{id:"perform-proper-data-encryption-with-strong-updated-protocols",children:"Perform proper data encryption with strong, updated protocols"}),"\n",(0,a.jsx)(t.p,{children:"Sensitive data should never be stored in plain text. It is important to ensure that user credentials and other personal information are protected using modern cryptographic algorithms that address the latest security vulnerabilities."}),"\n",(0,a.jsx)(t.h3,{id:"store-passwords-using-strong-adaptive-and-salted-hashing-functions",children:"Store passwords using strong, adaptive, and salted-hashing functions"}),"\n",(0,a.jsx)(t.p,{children:"Given the advancement of security controls, attackers have also devised clever ways to retrieve passwords. For instance, a hacker can use a rainbow table of precalculated hashes to access a password file that uses unsalted hashes. Salted hashes enhance password security by adding random inputs to a hash function, guaranteeing a unique output, and are thus recommended over unsalted hashes."}),"\n",(0,a.jsx)(t.h3,{id:"disable-caching-and-autocomplete-on-data-collection-forms",children:"Disable caching and autocomplete on data collection forms"}),"\n",(0,a.jsx)(t.p,{children:"While caching and autocomplete features help improve user experience, they contain security risks that may attract attackers. Hackers may rely on a user browser to easily log in to an account since the autocomplete feature fills in the credentials."}),"\n",(0,a.jsx)(t.p,{children:"Caching stores sections of web pages for easier loading in subsequent visits, which allows attackers to use it to map out user movements. Attackers also use cache data to tailor malware. As a best practice, it is recommended that caching and autocomplete of forms are disabled by default and only activated as needed."}),"\n",(0,a.jsx)(t.h3,{id:"minimize-data-surface-area",children:"Minimize data surface area"}),"\n",(0,a.jsx)(t.p,{children:"Security teams should reduce the data attack surface area of a system by considering careful API design, ensuring only the bare minimum amount of data is included in server responses. While doing so, it must also be ensured that the server response does not expose information about the system configuration. Random testing and Data filtering should also be performed at the server-side to reduce the risk of attackers intercepting sensitive data in unfiltered traffic in transit."})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},4236:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/PreventWebAppFrameworkLeakage-a5e14ee8448ff31fc7b13b3208ae9ae4.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>r});var a=s(67294);const i={},n=a.createContext(i);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);