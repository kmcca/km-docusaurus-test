"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75537],{70368:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var a=s(85893),i=s(11151);const n={title:"Prevent reflected XSS attacks",slug:"/r/reflected-xss"},r=void 0,c={id:"guides/dynamic_analysis/dast_essentials/dast_essentials_xss/reflected-xss",title:"Prevent reflected XSS attacks",description:"This section explains reflected Cross-site Scripting (XSS), typical examples of such attacks, and best practices to prevent the underlying vulnerabilities.",source:"@site/docs/guides/08_dynamic_analysis/15_dast_essentials/07_dast_essentials_xss/01_reflected-xss.md",sourceDirName:"guides/08_dynamic_analysis/15_dast_essentials/07_dast_essentials_xss",slug:"/r/reflected-xss",permalink:"/km-docusaurus-test/r/reflected-xss",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Prevent reflected XSS attacks",slug:"/r/reflected-xss"},sidebar:"tutorialSidebar",previous:{title:"About cross-site scripting (XSS) attacks",permalink:"/km-docusaurus-test/r/cross-site-scripting-xss"},next:{title:"Prevent stored XSS attacks",permalink:"/km-docusaurus-test/r/stored-xss"}},o={},l=[{value:"About reflective XSS",id:"about-reflective-xss",level:2},{value:"Impact to your business",id:"impact-to-your-business",level:2},{value:"Attack examples",id:"attack-examples",level:2},{value:"1. Reflected XSS attack on a search query",id:"1-reflected-xss-attack-on-a-search-query",level:3},{value:"2. Reflected XSS attack on an error message",id:"2-reflected-xss-attack-on-an-error-message",level:3},{value:"Prevent attacks",id:"prevent-attacks",level:2},{value:"Validate user input",id:"validate-user-input",level:3},{value:"Escape dynamic content",id:"escape-dynamic-content",level:3},{value:"Implement a content security policy",id:"implement-a-content-security-policy",level:3},{value:"Utilize a vulnerability scanning tool",id:"utilize-a-vulnerability-scanning-tool",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This section explains reflected Cross-site Scripting (XSS), typical examples of such attacks, and best practices to prevent the underlying vulnerabilities."}),"\n",(0,a.jsx)(t.h2,{id:"about-reflective-xss",children:"About reflective XSS"}),"\n",(0,a.jsx)(t.p,{children:"Reflected (Non-Persistent) XSS attacks occur when the malicious payload is included in the request sent to the vulnerable web application and is then reflected such that the server HTTP response consists of the payload. Attackers leverage social engineering techniques such as phishing attacks to make the victim include the malicious script in their request to the web server. The infected browser then executes the malicious script as the HTTP response."}),"\n",(0,a.jsx)(t.p,{children:"Reflected XSS attacks are non-persistent; each victim must send the request with a malicious payload. As a result, attackers tend to trick as many users as possible to succeed in the attack. Such attacks are often aimed at message forum form submissions, error messages, or search engine results pages, as it is easier to craft a malicious e-mail message that many users can select. As one of the most common types of XSS attacks, reflected XSS does not require the attacker to locate and access a vulnerable web application that would allow them to inject malicious scripts permanently."}),"\n",(0,a.jsx)(t.h2,{id:"impact-to-your-business",children:"Impact to your business"}),"\n",(0,a.jsxs)(t.p,{children:["As reflected, XSS vulnerabilities allow malicious users to misuse inline scripts and JavaScript. The severity of the attacks depends on the functionality and data affected. ",(0,a.jsx)(t.a,{href:"https://crashtest-security.com/javascript-vulnerabilities/",children:"Infected JavaScript"})," can access all the session tokens available to the affected web page, allowing attackers to impersonate legitimate users by stealing their sessions. Attackers can also exploit a reflected XSS vulnerability to access user files, geolocation, microphone, and other devices through HTML5 APIs. Application developers must address such vulnerabilities to protect user data and application functionality."]}),"\n",(0,a.jsx)(t.h2,{id:"attack-examples",children:"Attack examples"}),"\n",(0,a.jsx)(t.p,{children:"Below are some common approaches attackers leverage to carry out reflected XSS attacks."}),"\n",(0,a.jsx)(t.h3,{id:"1-reflected-xss-attack-on-a-search-query",children:"1. Reflected XSS attack on a search query"}),"\n",(0,a.jsx)(t.p,{children:"Assume a web app accepts a search string from users through a search parameter within a query string:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"http://darwin.com/aform.html?search=Hacker1\n"})}),"\n",(0,a.jsx)(t.p,{children:"In the event the application server uses PHP to show the user-supplied value on the results page by pulling it from the URL and then generating the resulting HTML:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"<?php echo 'You Searched:' .$_GET[\"search\"];?>\n"})}),"\n",(0,a.jsx)(t.p,{children:"The web server directly parses the user-supplied value in the URL to HTML with no input validation or output encoding. In such instances, attackers can craft arbitrary code that is executed in the browser when the victim selects a URL:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"http://darwin.com/aform.html?search=<script>alert('XSS by Product1');<\/script>\n"})}),"\n",(0,a.jsx)(t.p,{children:"This script gives hackers access to the cookie for the user session and allows them to assume a legitimate identity of the user."}),"\n",(0,a.jsx)(t.h3,{id:"2-reflected-xss-attack-on-an-error-message",children:"2. Reflected XSS attack on an error message"}),"\n",(0,a.jsx)(t.p,{children:"Suppose a web page accepts an input parameter that contains the text displayed in an error message and displays it directly within its response. In that case, attackers use such vulnerabilities to orchestrate XSS attacks."}),"\n",(0,a.jsx)(t.p,{children:"Assuming the URL that returns the error message as:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"http://darwin.com/error/5/Error.ashx?message=Sorry%20+some+error+message\n"})}),"\n",(0,a.jsx)(t.p,{children:"The returned error page directly copies the values of the URL message parameter and then displays it suitably within the page:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"<p>Sorry, some error message</>\n"})}),"\n",(0,a.jsx)(t.p,{children:"Without sanitization or appropriate validation, attackers can create a malicious payload to generate a pop-up screen:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'http://darwin.com/error/5/Error.ashx?message=<script>alert("XSS by Hacker1")<\/script>\n'})}),"\n",(0,a.jsx)(t.p,{children:"If an unsuspecting user requests this page, the browser executes the malicious script, redirecting the user to an HTML page with the following content in place of the actual content:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'<p><script>alert("XSS by Hacker1");<\/script></p>\n'})}),"\n",(0,a.jsx)(t.h2,{id:"prevent-attacks",children:"Prevent attacks"}),"\n",(0,a.jsx)(t.p,{children:"A reflected XSS attack is a commonly exploited form of XSS vulnerability. Organizations should leverage common prevention mechanisms to prevent the reflected cross-site scripting vulnerabilities in web applications."}),"\n",(0,a.jsx)(t.p,{children:"Protection against reflected XSS primarily involves avoiding using dynamic malicious content from HTTP requests to embed scripts on a vulnerable application. Some approaches to achieve this include:"}),"\n",(0,a.jsx)(t.h3,{id:"validate-user-input",children:"Validate user input"}),"\n",(0,a.jsxs)(t.p,{children:["User input validation/content filtering forms the first line of defense against most XSS attacks, including reflected XSS. It is essential to treat a user input from any source as untrusted and formulate mechanisms to check against semantic and grammatical requirements. ",(0,a.jsx)(t.a,{href:"https://crashtest-security.com/security-teams-devsecops/",children:"Security teams"})," should also apply allowlists/blocklists for data patterns that should be accepted or rejected. Additionally, it is recommended thatQA and administration teams treat data from both authenticated and public users as untrusted inputs while applying the same input sanitization techniques across all users."]}),"\n",(0,a.jsx)(t.h3,{id:"escape-dynamic-content",children:"Escape dynamic content"}),"\n",(0,a.jsxs)(t.p,{children:["Suppose the application relies on user-controllable data as part of its HTTP responses. In that case, the output data should be encoded so that the server does not interpret it as active content. This ensures that any special characters from the application datastore are treated as HTML tag content, not raw HTML. It is recommended to replace any significant dynamic characters with HTML entity encoding schemes to be interpreted safely. Developers should use dedicated tools to enable a safe stylesheet and script encoding if dynamic content is inserted into the ",(0,a.jsx)(t.code,{children:"<script>"})," and ",(0,a.jsx)(t.code,{children:"<style>"})," tags."]}),"\n",(0,a.jsx)(t.h3,{id:"implement-a-content-security-policy",children:"Implement a content security policy"}),"\n",(0,a.jsxs)(t.p,{children:["A robust Content Security Policy lets web administrators/developers control where the web page can load and execute scripts. Since reflected XSS attack relies on the attacker embedding malicious content on a web page, CSPs prevent attacks by specifying the sources of inline scripts. Developers instruct browsers using a ",(0,a.jsx)(t.a,{href:"/km-docusaurus-test/r/content-security-policy",children:"content-security-policy"})," header or ",(0,a.jsx)(t.code,{children:"meta"})," element, including directives for sources and sinks of specific resources and actions. Web developers can add sources of trusted scripts to an allowlist using a directive of the form:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Content-Security-Policy: script-src 'self' https://darwin.com\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This directive allows for the trusted execution of scripts from the server hosting the current page and those originating from ",(0,a.jsx)(t.code,{children:"https://darwin.com"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Most modern browsers support CSPs, making them one of the most crucial aspects of preventing reflected XSS attacks."}),"\n",(0,a.jsx)(t.h3,{id:"utilize-a-vulnerability-scanning-tool",children:"Utilize a vulnerability scanning tool"}),"\n",(0,a.jsx)(t.p,{children:"Vulnerability scanning tools automatically test web applications and underlying source code to identify security gaps that can lead to the successful execution of XSS attacks. DAST Essentials includes an XSS tool that can scan JavaScript and web applications for vulnerabilities, such as XSS with no false positives."})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>r});var a=s(67294);const i={},n=a.createContext(i);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);