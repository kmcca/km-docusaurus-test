"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61140],{99046:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=a(85893),i=a(11151);const r={title:"Apache Ant",slug:"/r/c_integration_ANT"},s=void 0,o={id:"guides/integrations/cicd/ant_integration",title:"Apache Ant",description:"You can use the Java API wrapper to integrate Veracode Static Analysis with Apache Ant. The integration seamlessly adds static scanning into the existing build processes that you use in your Software Development Life Cycle (SDLC).",source:"@site/docs/guides/04_integrations/03_cicd/01_ant_integration.md",sourceDirName:"guides/04_integrations/03_cicd",slug:"/r/c_integration_ANT",permalink:"/km-docusaurus-test/r/c_integration_ANT",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Apache Ant",slug:"/r/c_integration_ANT"},sidebar:"tutorialSidebar",previous:{title:"CI/CD integrations",permalink:"/km-docusaurus-test/r/c_integration_buildservs"},next:{title:"Apache Maven",permalink:"/km-docusaurus-test/r/c_integration_maven"}},c={},l=[{value:"Integrate with Ant",id:"integrate-with-ant",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.a,{href:"/km-docusaurus-test/r/c_about_wrappers",children:"Java API wrapper"})," to integrate Veracode Static Analysis with Apache Ant. The integration seamlessly adds static scanning into the existing build processes that you use in your Software Development Life Cycle (SDLC)."]}),"\n",(0,t.jsx)(n.p,{children:"You install and integrate the API wrapper on the build server and the wrapper uses the Veracode APIs to establish communication between the build server and Veracode. During application builds, the wrapper uploads your code to Veracode for scanning."}),"\n",(0,t.jsx)(n.h2,{id:"integrate-with-ant",children:"Integrate with Ant"}),"\n",(0,t.jsx)(n.p,{children:"You can add the Java API wrapper to your Ant build server to integrate Static Analysis scanning into your Ant build process. When using Ant to build Java applications, the API wrapper uploads your Java source code to Veracode for scanning."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Before you begin:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Created an application profile for each of the applications in your builds"}),"\n",(0,t.jsxs)(n.li,{children:["Configured an ",(0,t.jsx)(n.a,{href:"/km-docusaurus-test/r/admin_api",children:"API service account"})]}),"\n",(0,t.jsx)(n.li,{children:"Provided the IP address from which you are communicating with Veracode"}),"\n",(0,t.jsx)(n.li,{children:"Installed the Veracode Java API wrapper on your Ant build server"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To complete this task:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On your Ant build server, set the ",(0,t.jsx)(n.code,{children:"JAVA_HOME"})," environment variable to your Java environment and set ",(0,t.jsx)(n.code,{children:"ANT_HOME"})," to your Ant installation directory."]}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"ANT_HOME"}),", on Unix, add ",(0,t.jsx)(n.code,{children:"${ANT_HOME}/bin"}),". On Windows, add ",(0,t.jsx)(n.code,{children:"%ANT_HOME%/bin"})," to your ",(0,t.jsx)(n.code,{children:"PATH"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run this command to verify these variables: ",(0,t.jsx)(n.code,{children:"echo%[environment variable name]%"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a Java project with an Ant build script in a ",(0,t.jsx)(n.code,{children:"build.xml"})," file that cleans, compiles, and packages the Java source code."]}),"\n",(0,t.jsxs)(n.p,{children:["The API wrapper installation does not modify the pre-existing project files, such as the ",(0,t.jsx)(n.code,{children:"build.xml"})," and other build files, but does assume the existing build files have target tasks called ",(0,t.jsx)(n.code,{children:"clean"})," and ",(0,t.jsx)(n.code,{children:"build"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"build.xml"})," file, add these ",(0,t.jsx)(n.code,{children:"<property>"})," and ",(0,t.jsx)(n.code,{children:"<target>"})," elements, including the children elements, for calling the Java API wrapper:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<property file="veracode.properties" prefix="veracode"/>\n <target name="Veracode-UploadAndScan" description="Turns on debug symbols,logging. Cleans, builds, uploads binaries. Starts scan">\n    \x3c!-- Log all output to veracode.log file --\x3e\n    \x3c!-- Override the java compiler command and turn on debug setting --\x3e\n    \x3c!-- Create a time-stamp value to use for the build id --\x3e\n    \x3c!-- Call the Veracode Java wrapper to upload and scan --\x3e\n    <java jar="VeracodeJavaAPI.jar" fork="true">\n      <arg line=" -action ${veracode.action} -vid ${veracode.vid} -vkey ${veracode.vkey} -criticality ${veracode.criticality} -createprofile ${veracode.createprofile} -version ${current.time} -appname ${veracode.appname} -filepath ${veracode.filepath}"/>\n    </java>\n </target>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This build script runs the Java API wrapper with parameters and values set in a ",(0,t.jsx)(n.code,{children:"veracode.properties"})," file. The ",(0,t.jsx)(n.code,{children:"<property>"})," element specifies the ",(0,t.jsx)(n.code,{children:"veracode.properties"})," file. In the ",(0,t.jsx)(n.code,{children:"<target>"})," element, the ",(0,t.jsx)(n.code,{children:"<java>"})," element specifies the path to the Java API wrapper JAR file. The ",(0,t.jsx)(n.code,{children:"<arg>"})," element specifies the ",(0,t.jsx)(n.a,{href:"/km-docusaurus-test/r/r_wrapper_parameters",children:"general parameters"})," and the parameters for ",(0,t.jsx)(n.a,{href:"/km-docusaurus-test/r/r_uploadandscan",children:(0,t.jsx)(n.code,{children:"uploadandscan"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can log the scan results and save them as a LOG file. The integration automatically logs all steps in a ",(0,t.jsx)(n.code,{children:"veracode.log"})," file and stores the file in the same location as your Java project."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"veracode.properties"})," file to set the values for the parameters in the Ant script:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:' # "action" holds the veracodeAPI commands. Refer the Java Wrapper as "java -jar VeracodeJavaAPI.jar -help" for full list of commands \n action=UploadAndScan\n \n # The "createprofile" variable is used to specify whether a new application\n # profile should be created if one does not exist with the name represented\n # by the variable "appname". If createprofile=true and the application profile already\n # exists, the binaries will be uploaded to the existing profile.\n # It can be one of true or false, holds only Boolean data type. \n createprofile=true\n \n # The business criticality can be set to one of "VeryHigh" (default), "High", "Medium", "Low",\n # or "VeryLow". Enclose the value in quotes if it includes spaces.\n # Value Data Type -> String\n criticality="VeryHigh"\n \n # This is the name of the application profile in the Veracode Platform that the\n # binaries will be uploaded to. It is case-sensitive and must match an existing\n # application profile name if createprofile=false.\n # Value Data Type -> String\n appname="??"\n \n # Path to the final packages binary (.JAR, .WAR, .ZIP, etc). Optionally, a\n # top-level folder can be specified and the script will upload all binaries in\n # that folder if not packaged. Escape backslashes using \\\\ and enclose value\n # in quotes if it includes spaces.\n # Multiple files can be assigned to file path separated by space\n \n # Path Data Type -> String(s)\n filepath="C:\\\\...\\\\...\\\\" "C:\\\\..\\\\"\n \n # The ID of the first and the second API (-api1 and -api2)\n # base64username is the Veracode Platform username encoded in Base64\n # base64password is the Veracode Platform password encoded in Base64\n # Data Type -> String\n base64username="??"\n base64password="??"\n \n # API ID and Key\n vid="??"\n vkey="??"\n \n # Optional proxy host, port and proxy credentials for the upload script to use.\n phost="??"\n pport="??"\n puser="??"\n ppass="??"  \n'})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var t=a(67294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);