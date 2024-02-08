"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19505],{75784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(85893),i=t(11151);const o={title:"Add a Jenkins build job for Static Analysis",slug:"/r/t_configure_jenkins"},a=void 0,r={id:"guides/integrations/cicd/jenkins_integration/jenkins_add_static_build_job",title:"Add a Jenkins build job for Static Analysis",description:"You can configure a Jenkins build job in a freestyle or pipeline project for uploading binaries to Veracode for Static Analysis. You continue to use your same build process, but you add a post-build action for the Veracode parameters.",source:"@site/docs/guides/04_integrations/03_cicd/07_jenkins_integration/03_jenkins_add_static_build_job.md",sourceDirName:"guides/04_integrations/03_cicd/07_jenkins_integration",slug:"/r/t_configure_jenkins",permalink:"/km-docusaurus-test/r/t_configure_jenkins",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Add a Jenkins build job for Static Analysis",slug:"/r/t_configure_jenkins"},sidebar:"tutorialSidebar",previous:{title:"Uninstall the Veracode Jenkins Plugin",permalink:"/km-docusaurus-test/r/t_uninstall_jenkins"},next:{title:"Add a Jenkins pipeline step with bound credentials for Static Analysis",permalink:"/km-docusaurus-test/r/t_jenkins_pipe"}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can configure a Jenkins build job in a freestyle or pipeline project for uploading binaries to Veracode for ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/c_static_overview",children:"Static Analysis"}),". You continue to use your same build process, but you add a post-build action for the Veracode parameters."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Before you begin:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You meet the ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/c_using_jenkins",children:"prerequisites"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["You have ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/c_about_jenkins",children:"installed the Jenkins Plugin"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The Veracode Jenkins Plugin only supports freestyle and pipeline projects."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To complete this task:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the Jenkins left menu, select ",(0,s.jsx)(n.strong,{children:"New Item"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the Enter an Item name field, enter a name for this new scan that you want to submit to Veracode."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select one of these options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you want to create a new project using the standard projects types provided by Jenkins, select one of the available project types listed."}),"\n",(0,s.jsxs)(n.li,{children:["If you want to create a new project based on an existing project, in the ",(0,s.jsx)(n.strong,{children:"Copy from"})," input box, enter the name of an existing project you want to use as the model when you create the new item."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"Advanced..."})," to expand the Advanced Project Options."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the Post-build Actions section, from the Add post-build action dropdown menu, select ",(0,s.jsx)(n.strong,{children:"Upload and Scan with Veracode"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the Application Name field, enter the name of the application you want Veracode to scan."}),"\n",(0,s.jsxs)(n.p,{children:["To use the Jenkins project name as the application name, enter ",(0,s.jsx)(n.code,{children:"$projectname"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Do not wrap the application name in quotation marks."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the application does not already exist in the Veracode Platform, but is a new application you want Jenkins to create, select the ",(0,s.jsx)(n.strong,{children:"Create Application"})," checkbox."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If you select this option, you must also provide the name of the team that is associated with the application."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"From the Business Criticality dropdown menu, select the level of criticality of this application."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the Sandbox Name field, enter the name of the sandbox in which you want to run the scan as a ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/c_about_sandbox",children:"sandbox scan"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the sandbox does not already exist in the Veracode Platform, but is a new sandbox you want Jenkins to create, select the ",(0,s.jsx)(n.strong,{children:"Create Sandbox"})," checkbox."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the Scan Name field, enter a name for the static scan you want to submit to the Veracode Platform for this application."}),"\n",(0,s.jsxs)(n.p,{children:["To use the Jenkins project build number as the scan name, enter ",(0,s.jsx)(n.code,{children:"$buildnumber"}),". To use the date and time of the Jenkins build job submission as the scan name, enter ",(0,s.jsx)(n.code,{children:"$timestamp"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the Upload field, you can include and exclude filepath patterns of the files you want to upload and scan."}),"\n",(0,s.jsxs)(n.p,{children:["Use a comma-separated list of ant-style ",(0,s.jsx)(n.code,{children:"include"})," patterns relative to the job workspace project name. The project name is the one you entered in the Project name field. For a description of the ant-style pattern format, see ",(0,s.jsx)(n.a,{href:"https://ant.apache.org/manual/dirtasks.html",children:"https://ant.apache.org/manual/dirtasks.html"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The Upload field does not accept variable names."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the Scan field, you can include and exclude filename patterns of the uploaded files you want to scan as top-level modules."}),"\n",(0,s.jsxs)(n.p,{children:["Use a comma-separated list of ant-style ",(0,s.jsx)(n.code,{children:"include"})," patterns with only the filenames of the files you have uploaded, not the filepaths."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The Scan field does not accept variable names."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can rename the files you are uploading by entering the filename pattern of the uploaded files that you want to rename and clicking ",(0,s.jsx)(n.strong,{children:"Save As"}),". You must also enter the replacement filename pattern that represents the groups that the filename pattern captured."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"Wait for scan to complete"})," checkbox if you want the Jenkins job to wait for the Veracode scan to complete."]}),"\n",(0,s.jsxs)(n.p,{children:["Enter the maximum time in minutes that you want the Jenkins job to wait before skipping the ",(0,s.jsx)(n.strong,{children:"Upload and Scan with Veracode"})," action. Allow enough time for a typical scan of your application to complete. A Veracode policy scan fails, regardless of whether it completes or not, if it does not meet the requirements of the associated policy."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For Delete Incomplete Scan, select an option for automatically deleting an incomplete scan, based on its status, to allow the ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/r_uploadandscan",children:(0,s.jsx)(n.code,{children:"uploadandscan"})})," action to continue processing. Default is ",(0,s.jsx)(n.code,{children:"0"}),", which specifies to not delete an incomplete scan."]}),"\n",(0,s.jsxs)(n.p,{children:["To delete scans, you must have a user account with the ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/c_role_permissions",children:"Delete Scans"})," role or an API service account with the ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/c_API_roles_details",children:"Upload and Scan"})," role."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you provided Veracode credentials on the Manage Jenkins page and want to use them for this project, select the ",(0,s.jsx)(n.strong,{children:"Use global Veracode API ID and key"})," checkbox."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the Veracode Credentials section, enter your Veracode API credentials."}),"\n",(0,s.jsxs)(n.p,{children:["If you have ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/t_jenkins_pipe",children:"bound your Veracode API credentials"}),", you can enter the environment variables for the API ID and key."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"Apply"})," and ",(0,s.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the Jenkins project and select ",(0,s.jsx)(n.strong,{children:"Build Now"})," from the left menu."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Next steps:"})}),"\n",(0,s.jsxs)(n.p,{children:["You can monitor the progress of the Veracode job by selecting the build from the Jenkins left menu and clicking ",(0,s.jsx)(n.strong,{children:"Console Output"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(67294);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);