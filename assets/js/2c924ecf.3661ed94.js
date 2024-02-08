"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80555],{61391:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var i=s(85893),a=s(11151);const n={title:"AWS CodeStar",slug:"/r/c_aws_codestar_about"},r=void 0,o={id:"guides/integrations/cicd/aws_codestar_integration/README",title:"AWS CodeStar",description:"You can use Veracode for AWS CodeStar to seamlessly integrate Veracode Static Analysis and Veracode Software Composition Analysis (SCA) agent-based scans with your Amazon Web Services (AWS) pipelines.",source:"@site/docs/guides/04_integrations/03_cicd/04_aws_codestar_integration/README.md",sourceDirName:"guides/04_integrations/03_cicd/04_aws_codestar_integration",slug:"/r/c_aws_codestar_about",permalink:"/km-docusaurus-test/r/c_aws_codestar_about",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AWS CodeStar",slug:"/r/c_aws_codestar_about"},sidebar:"tutorialSidebar",previous:{title:"Upload and scan an application from Bamboo",permalink:"/km-docusaurus-test/r/t_bamboo_app_submission"},next:{title:"Configure an AWS pipeline for Veracode security scanning",permalink:"/km-docusaurus-test/r/t_aws_config_codepipeline_static"}},c={},d=[{value:"Simple AWS pipeline stage example",id:"simple-aws-pipeline-stage-example",level:2}];function l(e){const t={a:"a",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"You can use Veracode for AWS CodeStar to seamlessly integrate Veracode Static Analysis and Veracode Software Composition Analysis (SCA) agent-based scans with your Amazon Web Services (AWS) pipelines."}),"\n",(0,i.jsx)(t.p,{children:"This table describes the workflows for integrating the supported scan types:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Scan Type"}),(0,i.jsx)(t.th,{children:"Integration Workflow"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/c_static_overview",children:"Veracode Static Analysis"})}),(0,i.jsxs)(t.td,{children:["The general workflow for integrating static analysis, using a ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/c_appsec_policies",children:"policy"})," or ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/c_about_sandbox",children:"development sandbox"}),", into your AWS pipeline: ",(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/t_aws_config_codebuild_static",children:"Configure a new or existing CodeBuild project"})," that includes the ",(0,i.jsx)(t.a,{href:"https://hub.docker.com/u/veracode",children:"Java API wrapper Docker image"}),"."]}),(0,i.jsxs)("li",{children:["Configure the CodeBuild project to include your ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/c_api_credentials3",children:"Veracode API credentials"})," and the command for calling the Java API wrapper."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/t_aws_config_codebuild_static",children:"Add the CodeBuild project to a stage in your pipeline"})," that runs after the stage that builds your application. The API commands upload the build output from the application build stage to Veracode for analysis."]})]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/Software_Composition_Analysis",children:"Veracode Software Composition Analysis"})}),(0,i.jsxs)(t.td,{children:["The general workflow for integrating SCA into your AWS pipeline: ",(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/t_aws_config_codebuild_sca",children:"Configure a new or existing CodeBuild project"})," that includes a Docker image for including SCA."]}),(0,i.jsx)("li",{children:"Configure the CodeBuild project to include your Agent-Based Scanning API token, environment variables for accessing your source code management (SCM) system, and the command for installing agent-based scanning for performing SCA."}),(0,i.jsxs)("li",{children:[(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/t_aws_config_codebuild_static",children:"Add the CodeBuild project to a stage in your pipeline"})," that runs after the stage that builds your application. Agent-based scanning performs SCA on the build output from the application build stage."]})]})]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"simple-aws-pipeline-stage-example",children:"Simple AWS pipeline stage example"}),"\n",(0,i.jsx)(t.p,{children:"You could create an AWS pipeline with two build stages to add Veracode security scanning:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Build stage: builds the application you want to analyze."}),"\n",(0,i.jsxs)(t.li,{children:["Security stage: receives the build output from the Build stage. The Security stage could include two actions for both the static analysis and SCA build projects:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"An action that uses the Java API wrapper to upload the build output to Veracode for static analysis."}),"\n",(0,i.jsx)(t.li,{children:"An action that uses agent-based scanning to perform SCA on the build output."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>r});var i=s(67294);const a={},n=i.createContext(a);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);