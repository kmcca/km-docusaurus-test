"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62007],{45384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(85893),r=n(11151);const s={title:"GitHub Workflow Integration",slug:"/r/GitHub_Workflow_Integration_for_Repo_Scanning"},o=void 0,a={id:"guides/integrations/cicd/github_integration/github_workflow_integration",title:"GitHub Workflow Integration",description:"The Veracode GitHub Workflow Integration allows you to set up an automated security scanning program for all of your GitHub repositories with a GitHub app.",source:"@site/docs/guides/04_integrations/03_cicd/06_github_integration/01_github_workflow_integration.md",sourceDirName:"guides/04_integrations/03_cicd/06_github_integration",slug:"/r/GitHub_Workflow_Integration_for_Repo_Scanning",permalink:"/km-docusaurus-test/r/GitHub_Workflow_Integration_for_Repo_Scanning",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"GitHub Workflow Integration",slug:"/r/GitHub_Workflow_Integration_for_Repo_Scanning"},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/km-docusaurus-test/r/c_about_github"},next:{title:"Jenkins",permalink:"/km-docusaurus-test/r/c_about_jenkins"}},c={},l=[{value:"Language support",id:"language-support",level:2},{value:"Configure the integration",id:"configure-the-integration",level:2},{value:"Download the app",id:"download-the-app",level:3},{value:"Fork the integration repository",id:"fork-the-integration-repository",level:3},{value:"Enable GitHub Actions",id:"enable-github-actions",level:3},{value:"Setting up GitHub secrets for scanning",id:"setting-up-github-secrets-for-scanning",level:3},{value:"Configure Veracode API ID and secret for Static Analysis",id:"configure-veracode-api-id-and-secret-for-static-analysis",level:4},{value:"Configure SCA agent token",id:"configure-sca-agent-token",level:4},{value:"How scanning works",id:"how-scanning-works",level:2},{value:"View results",id:"view-results",level:2},{value:"Reviewing results",id:"reviewing-results",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The Veracode GitHub Workflow Integration allows you to set up an automated security scanning program for all of your GitHub repositories with a GitHub app."}),"\n",(0,i.jsxs)(t.p,{children:["The integration repository includes the template workflows required for the GitHub Workflow Integration to function correctly. In addition, it includes the configuration file, ",(0,i.jsx)(t.code,{children:"veracode.yml"}),", which stores the default settings for you to scan your repositories with Veracode."]}),"\n",(0,i.jsx)(t.p,{children:"This document explains the steps required to install the integration, configure Veracode scans, and view your scan results."}),"\n",(0,i.jsx)(t.h2,{id:"language-support",children:"Language support"}),"\n",(0,i.jsx)(t.p,{children:"The GitHub Workflow Integration supports scanning repositories written in the following languages:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Language"}),(0,i.jsx)(t.th,{children:"Static support"}),(0,i.jsx)(t.th,{children:"SCA support"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Java"}),(0,i.jsx)(t.td,{children:"X"}),(0,i.jsx)(t.td,{children:"X"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"JavaScript"}),(0,i.jsx)(t.td,{children:"X"}),(0,i.jsx)(t.td,{children:"X"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TypeScript"}),(0,i.jsx)(t.td,{children:"X"}),(0,i.jsx)(t.td,{children:"X"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Python"}),(0,i.jsx)(t.td,{children:"X"}),(0,i.jsx)(t.td,{children:"X"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PL/SQL"}),(0,i.jsx)(t.td,{children:"X"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Transact-SQL"}),(0,i.jsx)(t.td,{children:"X"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"C#"}),(0,i.jsx)(t.td,{children:"X"}),(0,i.jsx)(t.td,{children:"X"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PHP"}),(0,i.jsx)(t.td,{children:"X"}),(0,i.jsx)(t.td,{children:"X"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Perl"}),(0,i.jsx)(t.td,{children:"X"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Go"}),(0,i.jsx)(t.td,{children:"X"}),(0,i.jsx)(t.td,{children:"X"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Visual Basic 6.0"}),(0,i.jsx)(t.td,{children:"X"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Apex"}),(0,i.jsx)(t.td,{children:"X"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["For Static Analysis, the GitHub Workflow Integration automatically compiles the repository by default. However, for some applications, you may need to provide specific compilation instructions in the original repository. See the ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/compilation_packaging",children:"packaging requirements"})," for each language."]}),"\n",(0,i.jsxs)(t.p,{children:["For SCA, see the ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/c_sc_agent_languages",children:"agent-based scan support matrix"})," for additional support details."]}),"\n",(0,i.jsx)(t.h2,{id:"configure-the-integration",children:"Configure the integration"}),"\n",(0,i.jsx)(t.p,{children:"To set up the GitHub Workflow Integration for repositories in your organization, you must download the Veracode app, fork and clone the Veracode integration repository into your organization account, and enable GitHub Actions."}),"\n",(0,i.jsx)(t.h3,{id:"download-the-app",children:"Download the app"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Select the Veracode Workflow App from the ",(0,i.jsx)(t.a,{href:"https://github.com/marketplace/veracode-workflow-app",children:"GitHub marketplace"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.strong,{children:"Set up a new plan"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Select the organization where you want to install the app."}),"\n",(0,i.jsxs)(t.li,{children:["If you only want Veracode to scan specific repositories, select ",(0,i.jsx)(t.strong,{children:"Only select repositories"}),", and select the repositories that want scanned. If you want to grant Veracode access to scan every repository, select ",(0,i.jsx)(t.strong,{children:"All repositories"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["If you select individual repositories, you must ",(0,i.jsx)(t.a,{href:"#fork-the-integration-repository",children:"fork the Veracode repository into your organization's root folder"})," to enable the Veracode integration."]})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.strong,{children:"Install"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"fork-the-integration-repository",children:"Fork the integration repository"}),"\n",(0,i.jsx)(t.p,{children:"You must fork the Veracode repository for the GitHub Workflow Integration into your organization's root folder to enable Veracode scans of specific repositories and customize the behavior of the integration."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to the ",(0,i.jsx)(t.a,{href:"https://github.com/veracode/github-actions-integration",children:"github-actions-integration"})," repository."]}),"\n",(0,i.jsxs)(t.li,{children:["Fork the repository. See the ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository",children:"GitHub Docs"})," for more details on forking repositories."]}),"\n",(0,i.jsxs)(t.li,{children:["Clone the new repository to your organization account, and name the cloned repository ",(0,i.jsx)(t.code,{children:"veracode"}),". See the ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository",children:"GitHub Docs"})," for more details on cloning forked repositories."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"enable-github-actions",children:"Enable GitHub Actions"}),"\n",(0,i.jsxs)(t.p,{children:["Ensure that this repository and the repositories you want to scan have ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository",children:"GitHub Actions enabled"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"setting-up-github-secrets-for-scanning",children:"Setting up GitHub secrets for scanning"}),"\n",(0,i.jsx)(t.p,{children:"You must add the appropriate GitHub secrets to this repository to enable the GitHub actions that run when a specified GitHub event is triggered."}),"\n",(0,i.jsx)(t.h4,{id:"configure-veracode-api-id-and-secret-for-static-analysis",children:"Configure Veracode API ID and secret for Static Analysis"}),"\n",(0,i.jsx)(t.p,{children:"If you want to perform Veracode Static Analysis scans of your repositories, you must:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/c_api_credentials3",children:"Generate your Veracode API ID and secret key"})," from the ",(0,i.jsx)(t.a,{href:"https://analysiscenter.veracode.com/auth/index.jsp#APICredentialsGenerator",children:"Veracode Platform"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Configure a ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository",children:"GitHub secret in your repository"})," called ",(0,i.jsx)(t.code,{children:"VERACODE_API_ID"})," for your Veracode API ID and another called ",(0,i.jsx)(t.code,{children:"VERACODE_API_KEY"})," for your API secret key."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"configure-sca-agent-token",children:"Configure SCA agent token"}),"\n",(0,i.jsx)(t.p,{children:"Veracode uses the Software Composition Analysis (SCA) agent within your workflows to scan your code."}),"\n",(0,i.jsx)(t.p,{children:"If you want to perform SCA agent-based scans of your repositories, you must:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Identify the agent token value for the SCA workspace in which you want your scan results to appear. If you do not know the token, you can ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/Regenerate_Veracode_SCA_Agent_Tokens",children:"regenerate it"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Configure a ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository",children:"GitHub secret in your repository"})," called ",(0,i.jsx)(t.code,{children:"VERACODE_AGENT_TOKEN"})," for your token."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-scanning-works",children:"How scanning works"}),"\n",(0,i.jsxs)(t.p,{children:["In your ",(0,i.jsx)(t.code,{children:"veracode.yml"})," file, you can customize the behavior of the GitHub Workflow Integration. You can apply several configurations, including:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The types of scans to run"}),"\n",(0,i.jsx)(t.li,{children:"Which branches to target"}),"\n",(0,i.jsx)(t.li,{children:"Which Veracode security policy to apply"}),"\n",(0,i.jsx)(t.li,{children:"Whether a failure breaks the build"}),"\n",(0,i.jsx)(t.li,{children:"Whether the scan is triggered by a push or a pull"}),"\n",(0,i.jsx)(t.li,{children:"The compilation instructions"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["By default, your ",(0,i.jsx)(t.code,{children:"veracode.yml"})," file is configured with the following scan triggers:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Static pipeline scan on any push activity on any branch"}),"\n",(0,i.jsx)(t.li,{children:"SCA agent-based scan on any push activity on any branch"}),"\n",(0,i.jsx)(t.li,{children:"Veracode Container Security scan on any push activity on any branch"}),"\n",(0,i.jsx)(t.li,{children:"Static policy scan with 'break the build' functionality when a pull request is open to your default branch and after code is merged into it"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You can configure all of these to fit your own organization's process by editing the ",(0,i.jsx)(t.code,{children:"veracode.yml"})," file."]}),"\n",(0,i.jsx)(t.h2,{id:"view-results",children:"View results"}),"\n",(0,i.jsxs)(t.p,{children:["After scans of a repository are complete, the Veracode security findings are available in the ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks#checks",children:"check"})," for the repository."]}),"\n",(0,i.jsx)(t.p,{children:"To view the findings:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Open a GitHub repository in which a scan has been completed."}),"\n",(0,i.jsx)(t.li,{children:"Select the branch you want to view."}),"\n",(0,i.jsxs)(t.li,{children:["Select the status icon of the check. The icon can be a green checkmark, a red X, or an orange circle to indicate that the security checks were successful, unsuccessful, or in progress, respectively.\n",(0,i.jsx)(t.img,{alt:"repo_check.png",src:n(675).Z+"",width:"556",height:"313"})]}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.strong,{children:"Details"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For scans triggered by a pull request, you can also view the findings on the request."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Open a GitHub repository in which a scan has been completed."}),"\n",(0,i.jsxs)(t.li,{children:["Select the ",(0,i.jsx)(t.strong,{children:"Pull Requests"})," tab."]}),"\n",(0,i.jsx)(t.li,{children:"Select the pull request."}),"\n",(0,i.jsxs)(t.li,{children:["Select the ",(0,i.jsx)(t.strong,{children:"Checks"})," tab or the ",(0,i.jsx)(t.strong,{children:"Files changed"})," tab.\nThe ",(0,i.jsx)(t.strong,{children:"Files changed"})," tab displays the findings details inline so you can see exactly where in the code the flaw was identified."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"reviewing-results",children:"Reviewing results"}),"\n",(0,i.jsxs)(t.p,{children:["Static Analysis scans return a list of annotations describing each static flaw and a link to the Veracode Platform where you can view a full report of your results. If an ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/request_profile",children:"application profile"})," for a scanned repository does not already exist in the Veracode Platform, Veracode automatically creates one using the name of the repository as the name of the profile."]}),"\n",(0,i.jsxs)(t.p,{children:["For more information on reviewing Static Analysis findings, see ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/review_results",children:"Reviewing scan results"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["SCA scans return a summary report of your open source security findings as well as a detailed list of libraries, vulnerabilities, and licenses. For more information about SCA findings, see ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/Viewing_Agent_Based_Scan_Results",children:"Viewing agent-based scan results"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},675:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/repo_check-116269ddb5ea9e0e085580d90fa7e518.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(67294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);