"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41427],{64930:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>_,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=i(85893),a=i(11151);const t={title:"Pipeline Scan example for using Maven with Jenkins",slug:"/r/Pipeline_Scan_Example_for_Using_Maven_with_Jenkins"},r=void 0,c={id:"guides/integrations/cicd/pipeline_scan/pipeline_scan_jenkins_examples/r_jenkins_maven",title:"Pipeline Scan example for using Maven with Jenkins",description:"This example Groovy code shows how to add a Pipeline Scan as a build stage in a Jenkins build pipeline that uses Maven.",source:"@site/docs/guides/04_integrations/03_cicd/09_pipeline_scan/09_pipeline_scan_jenkins_examples/02_r_jenkins_maven.md",sourceDirName:"guides/04_integrations/03_cicd/09_pipeline_scan/09_pipeline_scan_jenkins_examples",slug:"/r/Pipeline_Scan_Example_for_Using_Maven_with_Jenkins",permalink:"/km-docusaurus-test/r/Pipeline_Scan_Example_for_Using_Maven_with_Jenkins",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Pipeline Scan example for using Maven with Jenkins",slug:"/r/Pipeline_Scan_Example_for_Using_Maven_with_Jenkins"},sidebar:"tutorialSidebar",previous:{title:"Pipeline Scan example for using Gradle with Jenkins",permalink:"/km-docusaurus-test/r/Pipeline_Scan_Example_for_Using_Gradle_with_Jenkins"},next:{title:"Pipeline Scan example for using a baseline file with Jenkins",permalink:"/km-docusaurus-test/r/Pipeline_Scan_Example_for_Using_a_Baseline_File_with_Jenkins"}},l={},o=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This example Groovy code shows how to add a Pipeline Scan as a build stage in a Jenkins build pipeline that uses Maven."}),"\n",(0,s.jsxs)(n.p,{children:["The example includes a script that downloads and unzips ",(0,s.jsx)(n.code,{children:"pipeline-scan-LATEST.zip"}),", to ensure you have the latest version, then runs ",(0,s.jsx)(n.code,{children:"pipeline-scan.jar"})," using your ",(0,s.jsx)(n.a,{href:"/km-docusaurus-test/r/c_api_credentials3",children:"API credentials"}),". For improved stability, Veracode recommends that you change these scripts to use the ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/veracode/pipeline-scan",children:"Pipeline Scan Docker image"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-groovy",children:'pipeline {\n  agent { label <\'any-with-jdk8-maven-curl-unzip\'> }\n  stages {\n    stage(\'Maven Build\') {\n      steps {\n        sh \'maven clean verify\'\n      }\n    }\n    stage(\'Veracode Pipeline Scan\') {\n      steps {\n        sh \'curl -O https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip\'\n        sh \'unzip pipeline-scan-LATEST.zip pipeline-scan.jar\'\n        sh \'java -jar pipeline-scan.jar \\\n          --veracode_api_id "${VERACODE_API_ID}" \\\n          --veracode_api_key "${VERACODE_API_SECRET}" \\\n          --file "build/libs/sample.jar" \\\n          --fail_on_severity="Very High, High" \\\n          --fail_on_cwe="80" \\\n          --baseline_file "${CI_BASELINE_PATH}" \\\n          --timeout "${CI_TIMEOUT}" \\\n          --project_name "${env.JOB_NAME}" \\\n          --project_url "${env.GIT_URL}" \\\n          --project_ref "${env.GIT_COMMIT}"\'\n      }\n    }\n  }\n  post {\n    always {\n      archiveArtifacts artifacts: \'results.json\', fingerprint: true\n    }\n  }\n}\n'})})]})}function _(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(67294);const a={},t=s.createContext(a);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);