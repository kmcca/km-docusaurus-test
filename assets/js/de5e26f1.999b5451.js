"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76709],{29909:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var o=i(85893),l=i(11151);const t={title:"Configure Pipeline Scan logging",slug:"/r/c_pipeline_scan_logging"},s=void 0,r={id:"guides/integrations/cicd/pipeline_scan/c_pipeline_scan_logging",title:"Configure Pipeline Scan logging",description:"Veracode provides a few configuration options for generating log messages from Pipeline Scans.",source:"@site/docs/guides/04_integrations/03_cicd/09_pipeline_scan/03_c_pipeline_scan_logging.md",sourceDirName:"guides/04_integrations/03_cicd/09_pipeline_scan",slug:"/r/c_pipeline_scan_logging",permalink:"/km-docusaurus-test/r/c_pipeline_scan_logging",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configure Pipeline Scan logging",slug:"/r/c_pipeline_scan_logging"},sidebar:"tutorialSidebar",previous:{title:"Use policies with Pipeline Scans",permalink:"/km-docusaurus-test/r/Using_Policies_with_the_Pipeline_Scan"},next:{title:"Pipeline Scan parameters",permalink:"/km-docusaurus-test/r/r_pipeline_scan_commands"}},a={},c=[{value:"<code>pipeline.scan.log4j2.properties</code> example",id:"pipelinescanlog4j2properties-example",level:2},{value:"<code>log4j2.xml</code> configuration file example",id:"log4j2xml-configuration-file-example",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Veracode provides a few configuration options for generating log messages from Pipeline Scans."}),"\n",(0,o.jsxs)(n.p,{children:["To obtain detailed console output during scanning, add the parameter ",(0,o.jsx)(n.a,{href:"/km-docusaurus-test/r/r_pipeline_scan_commands",children:(0,o.jsx)(n.code,{children:"--verbose=true"})})," to your pipeline script."]}),"\n",(0,o.jsxs)(n.p,{children:["To send logging information to outputs other than the console, you can use the ",(0,o.jsx)(n.a,{href:"https://logging.apache.org/log4j/2.x/",children:"Apache Log4j 2 utility"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To configure logging settings, you can include a Log4j 2 configuration file with the name ",(0,o.jsx)(n.code,{children:"pipeline.scan.log4j2.properties"})," in the execution directory of ",(0,o.jsx)(n.code,{children:"pipeline-scan.jar"}),". The configuration file overrides the command-line options."]}),"\n",(0,o.jsx)(n.p,{children:"The following examples show a Java and XML configuration that uses Log4j 2 to:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Send verbose and debug messages to the log file ",(0,o.jsx)(n.code,{children:"pipeline-scan.log"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Send information messages to the console."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In both examples, you can turn on log for console by setting ",(0,o.jsx)(n.code,{children:"logger.file.additivity"})," to ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"pipelinescanlog4j2properties-example",children:[(0,o.jsx)(n.code,{children:"pipeline.scan.log4j2.properties"})," example"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"      # Extra logging related to initialization of Log4j\n      # Set to debug or trace if log4j initialization is failing\n      status = warn\n\n      # Name of the configuration\n      name = ConsoleLogForPipelineScan\n\n      # Define the output file, e.g. logs/pipeline-scan.log, pipeline-scan.log\n      property.filename = pipeline-scan.log\n\n      # Console appender configuration\n      appender.console.type = Console\n      appender.console.name = consoleLogger\n      appender.console.layout.type = PatternLayout\n      appender.console.layout.pattern = [%d{dd MMM yyyy HH:mm:ss,SSSS}] PIPELINE-SCAN %p: %m %n\n\n      # File appender configuration\n      appender.file.type = File\n      appender.file.name = fileLogger\n      appender.file.fileName = ${filename}\n      appender.file.layout.type = PatternLayout\n      appender.file.layout.pattern = [%d{dd MMM yyyy HH:mm:ss,SSSS}] PIPELINE-SCAN %p: %m %n\n\n      logger.file.name=PIPELINE_SCAN\n      logger.file.level = debug\n      logger.file.additivity = false\n      logger.file.appenderRef.file.ref = fileLogger\n\n      rootLogger.level = info\n      rootLogger.appenderRef.stdout.ref = consoleLogger\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"log4j2xml-configuration-file-example",children:[(0,o.jsx)(n.code,{children:"log4j2.xml"})," configuration file example"]}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, to use a ",(0,o.jsx)(n.code,{children:"log4j2.xml"})," configuration file like this example, you must specify the command line option ",(0,o.jsx)(n.code,{children:"-Dlog4j.configurationFile=[path-to]/log4j2.xml"})," when running a pipeline scan:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Configuration status="WARN">\n    <Appenders>\n        <Console name="Console" target="SYSTEM_OUT">\n            <PatternLayout pattern="%d{HH:mm:ss.SSS} %-5level - %msg%n"/>\n        </Console>\n        <File name="File" fileName="pipeline-scan.log" append="true">\n            <PatternLayout>\n                <Pattern>%d{HH:mm:ss.SSS} [%t] %-5level - %msg%n</Pattern>\n            </PatternLayout>\n        </File>\n    </Appenders>\n    <Loggers>\n        <Logger name="PIPELINE_SCAN" level="debug" additivity="false">\n            <AppenderRef ref="File"/>\n        </Logger>\n        <Root level="info">\n            <AppenderRef ref="Console"/>\n        </Root>\n    </Loggers>\n</Configuration>\n'})})]})}function g(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var o=i(67294);const l={},t=o.createContext(l);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);