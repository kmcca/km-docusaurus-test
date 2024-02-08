"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68558],{46533:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(85893),s=t(11151);const r={title:"Findings data dictionary",slug:"/r/r_findings_explore"},d=void 0,a={id:"guides/findings/analytics/using_explore/findings_explore",title:"Findings data dictionary",description:"The following definitions describe the dimensions and measures in the Findings explore in Veracode Analytics.",source:"@site/docs/guides/09_findings/01_analytics/07_using_explore/04_findings_explore.md",sourceDirName:"guides/09_findings/01_analytics/07_using_explore",slug:"/r/r_findings_explore",permalink:"/km-docusaurus-test/r/r_findings_explore",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Findings data dictionary",slug:"/r/r_findings_explore"},sidebar:"tutorialSidebar",previous:{title:"IDE and Pipeline scans explore data dictionary",permalink:"/km-docusaurus-test/r/r_greenlight_explore"},next:{title:"Users explore data dictionary",permalink:"/km-docusaurus-test/r/r_users_explore"}},o={},c=[{value:"Applications measures",id:"applications-measures",level:2},{value:"CVE dimensions",id:"cve-dimensions",level:2},{value:"CWE dimensions",id:"cwe-dimensions",level:2},{value:"Findings dimensions",id:"findings-dimensions",level:2},{value:"Findings measures",id:"findings-measures",level:2},{value:"Resolution and mitigation",id:"resolution-and-mitigation",level:2},{value:"SCA dimensions",id:"sca-dimensions",level:2},{value:"SCA measures",id:"sca-measures",level:2},{value:"SCA license dimensions",id:"sca-license-dimensions",level:2},{value:"SCA license measures",id:"sca-license-measures",level:2}];function l(e){const i={code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"The following definitions describe the dimensions and measures in the Findings explore in Veracode Analytics."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Dimension"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Application Custom Fields"}),(0,n.jsxs)(i.td,{children:["The metadata entered in application custom fields 1-25. Located from ",(0,n.jsx)(i.strong,{children:"Application"})," > ",(0,n.jsx)(i.strong,{children:"Metadata"})," > ",(0,n.jsx)(i.strong,{children:"Asset"})," > ",(0,n.jsx)(i.strong,{children:"Custom Fields"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Application ID"}),(0,n.jsx)(i.td,{children:"The unique numerical identifier associated with the application profile, provided by Veracode."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Application Name"}),(0,n.jsx)(i.td,{children:"The name of the application, created by the user when creating an application on the Veracode Platform."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Application Passed Policy (Yes/No)"}),(0,n.jsx)(i.td,{children:"Determines if the application did or did not pass policy compliance. Values are Yes or No."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Application Purpose"}),(0,n.jsx)(i.td,{children:"The business purpose of the application, located from the application metadata."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Application Rescanned (Yes/No)"}),(0,n.jsx)(i.td,{children:"Determines if the application was rescanned. Values are Yes or No."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Application Scanned (Yes/No)"}),(0,n.jsx)(i.td,{children:"Determines if the application was scanned. Values are Yes or No."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Archer Application Name"}),(0,n.jsxs)(i.td,{children:["The application name where the data is published to Archer. Located from ",(0,n.jsx)(i.strong,{children:"Application"})," > ",(0,n.jsx)(i.strong,{children:"Metadata"})," > ",(0,n.jsx)(i.strong,{children:"Archer Name"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Business Owner Email"}),(0,n.jsx)(i.td,{children:"The email address associated with the business owner of the application."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Business Owner Name"}),(0,n.jsxs)(i.td,{children:["The first and last name of the user responsible for the application. Located from ",(0,n.jsx)(i.strong,{children:"Application"})," > ",(0,n.jsx)(i.strong,{children:"Profile"})," > ",(0,n.jsx)(i.strong,{children:"Organizational Information"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Business Unit"}),(0,n.jsx)(i.td,{children:"The name of the business unit."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Created Date"}),(0,n.jsx)(i.td,{children:"The date the application was created."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Current Policy"}),(0,n.jsx)(i.td,{children:"The current policy associated with the application."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Current Policy Compliance"}),(0,n.jsx)(i.td,{children:"The application policy compliance based on the latest scan results."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Dynamic Scan Due Date"}),(0,n.jsx)(i.td,{children:"The date by which a dynamic scan must run, per the application policy. If the date is in the past, the due date was missed."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Dynamic Scan Frequency"}),(0,n.jsx)(i.td,{children:"The dynamic scan frequency, such as weekly, monthly, quarterly, that the policy determines for the application."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Industry"}),(0,n.jsxs)(i.td,{children:["The type of industry for which the application is used. Located from ",(0,n.jsx)(i.strong,{children:"Application"})," > ",(0,n.jsx)(i.strong,{children:"Metadata"})," > ",(0,n.jsx)(i.strong,{children:"Industry"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Initial Published Date"}),(0,n.jsx)(i.td,{children:"The earliest date that a scan for the application was published."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Latest Published Date"}),(0,n.jsx)(i.td,{children:"The most-recent date that a scan for the application was published."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"License Account"}),(0,n.jsx)(i.td,{children:"Scans licensed by this account. For third-party applications, it is the account that paid for the scan. For SDLC applications, it is the same as the scanning account."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"License Type"}),(0,n.jsx)(i.td,{children:"The type of license: SDLC license or Third-party license. Most applications are software delivery lifecycle (SDLC) license, third-party license type is not commonly used. Veracode offers you the ability to scan your software supplier partners through the Veracode Platform. Values are either SDLC for internal testing of first-party software or third-party for permitting a software supplier to test the code they are developing for the Veracode user."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Manual Penetration Test Due Date"}),(0,n.jsx)(i.td,{children:"The date by which a manual penetration test is required, per the application policy. If the date is in the past, the due date was missed."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Manual Penetration Test Frequency"}),(0,n.jsx)(i.td,{children:"The manual penetration test frequency, such as weekly, monthly, quarterly, that the policy determines for the application."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Number of Dynamic Scans"}),(0,n.jsx)(i.td,{children:"The number of dynamic scans of the application."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Number of Static Scans"}),(0,n.jsx)(i.td,{children:"The number of static scans of the application."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Requested a Consultation"}),(0,n.jsx)(i.td,{children:"Veracode offers the ability to schedule a consultation with application security consultants to better understand Veracode scanning and results. Values are No Readout Requested or Readout Requested based on if the application has had a consultation requested."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Scanning Account"}),(0,n.jsx)(i.td,{children:"The account where scans occurred. For software delivery lifecycle (SDLC) applications, it is the same as the licensed account. For third-party applications, it is the vendor account. Third-party applications are not commonly used."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Scanning Status"}),(0,n.jsx)(i.td,{children:"The scanning status for the application. Values are DynamicMP + SDLC, DynamicMP Only, No Published Policy Scans, and SDLC only."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Static Scan Due Date"}),(0,n.jsx)(i.td,{children:"The date by which a static scan must run, per the application policy. If the date is in the past, the due date was missed."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Static Scan Frequency"}),(0,n.jsx)(i.td,{children:"The static scan frequency, such as weekly, monthly, quarterly, that the policy determines for the application."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Tags List"}),(0,n.jsx)(i.td,{children:"The list of tags for the application that are added from the application metadata. Veracode allows users to provide a tag to organize their applications as part of the application metadata."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Web Application Flag"}),(0,n.jsx)(i.td,{children:"Determines if the application is a web application or not. This flag is set on the application metadata page."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"applications-measures",children:"Applications measures"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Measure"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Application Scan Counts"}),(0,n.jsx)(i.td,{children:"The total count of applications scanned, rescanned, and not scanned in the past 90 and 365 days."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Applications with Consultations"}),(0,n.jsx)(i.td,{children:"The count of applications for which security consultations have been requested."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Count"}),(0,n.jsx)(i.td,{children:"The count of distinct application IDs"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Percentage of Applications with Consultation Requests"}),(0,n.jsx)(i.td,{children:"The percentage of applications for which a consultation call was requested."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"cve-dimensions",children:"CVE dimensions"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Dimension"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Access Complexity"}),(0,n.jsx)(i.td,{children:"According to the CVSS standard, this metric measures the complexity of the attack required to exploit the vulnerability after an attacker has gained access to the target system."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Access Vector"}),(0,n.jsx)(i.td,{children:"According to the CVSS standard, this metric represents how the vulnerability is exploited."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Authentication"}),(0,n.jsx)(i.td,{children:"According to the CVSS standard, this metric measures the number of times an attacker must authenticate to a target to be able to exploit a vulnerability."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Availability Impact"}),(0,n.jsx)(i.td,{children:"According to the CVSS standard, this metric measures the impact a successfully exploited vulnerability will have on the accessibility of information resources."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Confidentiality Impact"}),(0,n.jsx)(i.td,{children:"From the CVSS standard, this metric measures the impact on confidentiality of a successfully exploited vulnerability."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"CVE ID"}),(0,n.jsx)(i.td,{children:"The ID established by MITRE of publicly known cybersecurity vulnerabilities."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"CVSSv2 Score"}),(0,n.jsx)(i.td,{children:"The numerical score produced by Version 2.0 of the Common Vulnerability Scoring System (CVSS) that reflects the severity of the principal characteristics of a vulnerability."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"CVSSv3 Score"}),(0,n.jsx)(i.td,{children:"The numerical score produced by Version 3.0 of the Common Vulnerability Scoring System (CVSS) that reflects the severity of the principal characteristics of a vulnerability."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Integrity Impact"}),(0,n.jsx)(i.td,{children:"According to the CVSS standard, this value is the measure of the impact to the trustworthiness and guaranteed veracity of information by a successfully exploited vulnerability."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"No-CVE ID"}),(0,n.jsx)(i.td,{children:"The ID Veracode provides in its proprietary database of vulnerabilities found in open-source libraries."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Published Date"}),(0,n.jsx)(i.td,{children:"Date the vulnerability was published to the National Vulnerability Database."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Summary"}),(0,n.jsx)(i.td,{children:"The description and details of the vulnerability."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Vulnerability Title"}),(0,n.jsx)(i.td,{children:"A short summary of the vulnerability."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"cwe-dimensions",children:"CWE dimensions"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Dimension"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Category Name"}),(0,n.jsx)(i.td,{children:"Category of the common weakness enumeration (CWE) category for the finding found after the application was scanned."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Description"}),(0,n.jsx)(i.td,{children:"The CWE category description for the finding."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Flaw Name"}),(0,n.jsx)(i.td,{children:"The CWE name of the finding."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"ID"}),(0,n.jsx)(i.td,{children:"The CWE ID of the finding. This dimension is most useful when combined with the Flaw Name dimension."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Latest CWE Top 25"}),(0,n.jsx)(i.td,{children:"A list of errors that can lead to the most serious software vulnerabilities according to the latest SANS/MITRE CWE Top 25."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"OWASP 2013"}),(0,n.jsx)(i.td,{children:"The top ten vulnerabilities identified by the 2013 version of the Open Web Application Security Project (OWASP)."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"OWASP 2017"}),(0,n.jsx)(i.td,{children:"The top ten vulnerabilities identified by the 2017 version of the Open Web Application Security Project (OWASP)."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Remediation Effort"}),(0,n.jsx)(i.td,{children:"The level of effort it takes to remediate the finding."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"SANS 25"}),(0,n.jsx)(i.td,{children:"The list of the most significant errors that can lead to software vulnerabilities, according to the SANS top 25 list."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Top 5 Categories"}),(0,n.jsx)(i.td,{children:"The finding by CWE top 5 category of the most significant errors that can lead to software vulnerabilities, according to the SANS top 25 list."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"findings-dimensions",children:"Findings dimensions"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Dimension"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Application ID"}),(0,n.jsx)(i.td,{children:"The application ID associated with the finding."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Archived by Sandbox Expiration (Yes / No)"}),(0,n.jsx)(i.td,{children:"The flag to denote if Veracode archived the finding and deleted the scan from view due to sandbox scan expiration. Use this flag to filter in or out findings that only existed in archived scan data. Findings that exist in non-archived scan data is not considered archived."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Component Path"}),(0,n.jsx)(i.td,{children:"The custom name and severity of the library at the time of the build of the compilation of the application."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Custom Severity"}),(0,n.jsxs)(i.td,{children:["The user-created severity for the finding. Located from",(0,n.jsx)(i.strong,{children:"Policy"})," > ",(0,n.jsx)(i.strong,{children:"Policies"})," > ",(0,n.jsx)(i.strong,{children:"Custom Severities"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Custom Severity Description"}),(0,n.jsx)(i.td,{children:"The description for the finding with user-created severity."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Custom Severity Name"}),(0,n.jsx)(i.td,{children:"The name of the severity of the finding. Values are Informational, Very Low, Low, Medium, High, or Very High."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"CWE ID"}),(0,n.jsx)(i.td,{children:"The ID and the name of the common weakness enumeration (CWE) found after the application was scanned."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Description"}),(0,n.jsx)(i.td,{children:"Provides a brief description of the finding. For a category description, see the CWE Description dimension."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Dynamic Findings - General"}),(0,n.jsxs)(i.td,{children:["Contains: ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Path: Provides the URL path where Dynamic Analysis discovered the vulnerability."}),(0,n.jsx)("li",{children:"Vulnerable Parameter: The specific injection point that identifies the vulnerability discovered by Dynamic Analysis. Examples include cookies, query strings, and POST body data. Not all vulnerabilities have a vulnerable parameter."})]})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Exploitability"}),(0,n.jsx)(i.td,{children:"The rating for the likelihood that an attacker could exploit the finding."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Exploitability Description"}),(0,n.jsx)(i.td,{children:"The description for the likelihood that an attacker could exploit the finding."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Fixable (Yes / No)"}),(0,n.jsx)(i.td,{children:"Determines if a finding could be resolved using Veracode Fix."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Fixed Date"}),(0,n.jsx)(i.td,{children:"The date a finding was closed because it was no longer present in the scan results for the application. The finding has been fixed or remediated."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Finding Status"}),(0,n.jsx)(i.td,{children:"The status of the finding. Values are Open or Closed."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"First Found Date"}),(0,n.jsx)(i.td,{children:"The date the finding was first found. You can filter by Date, Month, Quarter, Time, Week, Year."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Flaw Age"}),(0,n.jsx)(i.td,{children:"The range between the Finding Found Date and Finding Resolved Date dimensions. If the resolved date is null, use today's date."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Flaw Age Tier"}),(0,n.jsx)(i.td,{children:"The length of time by days the finding was open. Values are 1, 7, 30, or 90 days."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Flaw ID"}),(0,n.jsx)(i.td,{children:"The ID of the finding on the Veracode Platform."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Grace Period Expiration Date"}),(0,n.jsx)(i.td,{children:"The date on which a grace period expires for the finding. Veracode calculates this date based on the last date a finding was opened (First Found or Last Reopened date), and based on the grace period provided in the security policy assigned to the application. This date only applies to open findings that impact policy compliance."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Last Found Date"}),(0,n.jsx)(i.td,{children:"The date the finding was last found. You can filter by Date, Month, Quarter, Time, Week, Year."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Library First Found in Active Scans"}),(0,n.jsx)(i.td,{children:"The earliest date of a scan where this library was found. This date can be later than when the Veracode SCA tool detected a vulnerability because you may have archived or deleted earlier scans with that library."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Mitigation Status"}),(0,n.jsx)(i.td,{children:"The mitigation status for the finding. Values are Proposed, Accepted, Rejected, or Not Mitigated. Provides the latest mitigation workflow status for a mitigation on a finding."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Module Name"}),(0,n.jsx)(i.td,{children:"The name of the module in which the finding was seen."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Most Recent Mitigation Details"}),(0,n.jsxs)(i.td,{children:["The fields in this menu include the most recent mitigations details for:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Acceptance Comment - the comment provided with the most recent acceptance action on a mitigation proposal."}),(0,n.jsx)("li",{children:"Acceptance Date - date the most recent mitigation proposal was accepted."}),(0,n.jsx)("li",{children:"Acceptance Time - time the most recent mitigation proposal was accepted."}),(0,n.jsx)("li",{children:"Accepter Username - name of the person who accepted the most recent mitigation proposal."}),(0,n.jsx)("li",{children:"MPR Comment - comment provided by Veracode in the most recent Mitigation Proposal Review of a mitigation proposal."}),(0,n.jsx)("li",{children:"MPR Date - date of the most recent occurrence of a Mitigation Proposal Review for this mitigation proposal."}),(0,n.jsx)("li",{children:"MPR Status - determines whether or not the finding conforms to the risk tolerance guidelines established by your organization."}),(0,n.jsx)("li",{children:"MPR Time - time of the most recent occurrence of a Mitigation Proposal Review for this mitigation proposal."}),(0,n.jsx)("li",{children:"MPR Username - Veracode provides Mitigation Proposal Reviews as a service to offer guidance on validity, propriety, and effectiveness of mitigation proposals according to the risk tolerance guidelines of your organization. Veracode is always the username returned in this field."}),(0,n.jsx)("li",{children:"Proposal Comment - comment provided with the most recent mitigation proposal."}),(0,n.jsx)("li",{children:"Proposal Date - date the most recent mitigation proposal was made."}),(0,n.jsx)("li",{children:"Proposal Time - time the most recent mitigation proposal was made."}),(0,n.jsx)("li",{children:"Proposer Username - username of the user who provided the most recent mitigation proposal."}),(0,n.jsx)("li",{children:"Rejecter Username - username of the user who rejected the most recent mitigation proposal."}),(0,n.jsx)("li",{children:"Rejection Comment - comment provided with the rejection of the most recent mitigation proposal."}),(0,n.jsx)("li",{children:"Rejection Date - date of the most recent rejection the most recent mitigation proposal was rejected."}),(0,n.jsx)("li",{children:"Rejection Time - time the most recent mitigation proposal was rejected."})]})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"New Finding (Yes/No)"}),(0,n.jsx)(i.td,{children:"Determines if the finding is new. Values are Yes or No."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Policy or Sandbox Scan"}),(0,n.jsx)(i.td,{children:"Determines if the finding is in a policy or sandbox scan."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Policy Rule Passed (Yes/No)"}),(0,n.jsx)(i.td,{children:"Determines if a finding passed policy. For open findings or mitigated closed findings, this is determined by the current policy attached to the application. For closed fixed findings, this is determined by the version of the policy that was attached at the time the finding was closed. Values are Yes or No."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Reopened Date"}),(0,n.jsx)(i.td,{children:"The date a finding was reopened. You can filter by Date, Month, Quarter, Time, Week, Year."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Reopened Finding (Yes/No)"}),(0,n.jsx)(i.td,{children:"Determines if the finding is a reopened finding."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Resolved Date"}),(0,n.jsx)(i.td,{children:"The date a finding was closed either through remediation, indicating the finding is no longer available in the results, or through a mitigation or resolution workflow that has been approved. You can filter by Date, Month, Quarter, Time, Week, Year."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Sandbox Name"}),(0,n.jsx)(i.td,{children:"The name of the sandbox scan in which the finding was found."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Scan Type"}),(0,n.jsx)(i.td,{children:"The type of scan that produced this finding. Values are Dynamic, Static or Manual Penetration Test."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Second Party Component"}),(0,n.jsx)(i.td,{children:"The name of the second party component used by the module in which the finding was seen."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Static Findings - General"}),(0,n.jsxs)(i.td,{children:["Contains:  ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Attack Vector: the location of the flaw (the sink) discovered by Static Analysis in the function call, as seen in the Triage Flaws view of the Veracode Platform."}),(0,n.jsx)("li",{children:"Class Path: the full name of the class path containing the finding, as seen in the Data Path details page in the Triage Flaws view of the Veracode Platform."}),(0,n.jsx)("li",{children:"Filename/Class: the filename or class in which Veracode discovered the static finding. This value is combined with the line number in the Source field in the Triage Flaws view of the Veracode Platform."}),(0,n.jsx)("li",{children:"Function Name: the name of the function in which Veracode discovered the static finding. This value replaces the filename in the Source field of the Triage Flaws view in the Veracode Platform when you compile and upload the modules without debug symbols."}),(0,n.jsx)("li",{children:"Most Recent Line Number: in the most recent static scan, this value is the line number in which Veracode discovered this finding, or the relative location in the function that contains the finding."})]})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Submodule Path"}),(0,n.jsx)(i.td,{children:"Secondary party module information."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Unique to a Single Context (Yes/No)"}),(0,n.jsx)(i.td,{children:"A finding is unique and has only been seen in a single sandbox or policy context within an application."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"findings-measures",children:"Findings measures"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Measure"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Average Mitigation Process - Days"}),(0,n.jsx)(i.td,{children:"The average time that elapses between a finding being proposed to accepted."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Time to Resolve"}),(0,n.jsx)(i.td,{children:"The count of days that elapsed from the time a finding was opened or reopened to the earliest subsequent resolution. Resolution types are remediation or an accepted mitigation. This measure is calculated within a single sandbox. The Time To Resolve measure is always calculated on a per-context basis, meaning it is calculated for the time to resolve a finding within a single sandbox context, instead of the multiple instances of a finding across several sandboxes."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Total Mitigation Process Days"}),(0,n.jsx)(i.td,{children:"The total time that elapses between a finding being proposed to accepted."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Total Number of Flaws - Application"}),(0,n.jsx)(i.td,{children:"The total number of findings by application. You can use the dimensions below to filter on count of findings by severity."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Total Number of Sandbox Flaws"}),(0,n.jsx)(i.td,{children:"The total number of findings by sandbox. You can use the dimensions below to filter on count of findings by severity."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"resolution-and-mitigation",children:"Resolution and mitigation"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Measure"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Latest Resolution and Mitigation Status"}),(0,n.jsxs)(i.td,{children:["The latest resolution and mitigation status for a flaw. If a flaw is closed through scan, that status supersedes all others. Possible statuses are: ",(0,n.jsx)(i.code,{children:"Approved"}),", ",(0,n.jsx)(i.code,{children:"Closed - Previously Reported"}),", ",(0,n.jsx)(i.code,{children:"Closed - through Scan"}),", ",(0,n.jsx)(i.code,{children:"No Resolution/Mitigation"}),", ",(0,n.jsx)(i.code,{children:"Proposed"}),", ",(0,n.jsx)(i.code,{children:"Rejected"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Resolution and Mitigation Status"}),(0,n.jsxs)(i.td,{children:["The mitigation status of the finding and resolution: ",(0,n.jsx)(i.code,{children:"Approved"}),", ",(0,n.jsx)(i.code,{children:"Proposed"}),", ",(0,n.jsx)(i.code,{children:"Automated"}),", or ",(0,n.jsx)(i.code,{children:"None"}),". If the flaw is closed, this field reflects the reason for its original closure. Veracode recommends you use the Latest Resolution Status to surface the final closure reason."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Resolution and Mitigation Type"}),(0,n.jsx)(i.td,{children:"The type of resolution and mitigation."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"sca-dimensions",children:"SCA dimensions"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Dimension"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Component ID"}),(0,n.jsx)(i.td,{children:"ID that Veracode gives to each unique component."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Component Name"}),(0,n.jsx)(i.td,{children:"Name of the library component, including version. For some languages, this name is the component filename."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Component Version"}),(0,n.jsx)(i.td,{children:"Version or extension of the component file."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Library"}),(0,n.jsx)(i.td,{children:"Name of the library component without version or extension."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Library Description"}),(0,n.jsx)(i.td,{children:"Description of the library. For Java, descriptions are sourced from Maven. For other languages, the description field is often blank."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Library Vendor"}),(0,n.jsx)(i.td,{children:"The organization of open-source projects that provides the library. For Java, vendor identities are sourced from Maven. For other languages, the vendor field is often blank."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"sca-measures",children:"SCA measures"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Measure"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Component Count"}),(0,n.jsx)(i.td,{children:"Count of unique component IDs."})]})})]}),"\n",(0,n.jsx)(i.h2,{id:"sca-license-dimensions",children:"SCA license dimensions"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Dimension"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"License Name"}),(0,n.jsx)(i.td,{children:"Name of intellectual property licenses associated with a library."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"License Risk"}),(0,n.jsx)(i.td,{children:"The risk ratings associated with the license (Low, Medium, High)."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"sca-license-measures",children:"SCA license measures"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Measure"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"License Count"}),(0,n.jsx)(i.td,{children:"Name of intellectual property licenses associated with a library."})]})})]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>a,a:()=>d});var n=t(67294);const s={},r=n.createContext(s);function d(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);