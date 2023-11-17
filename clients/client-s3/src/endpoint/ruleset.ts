// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/s3.json */

const bJ="required",
bK="type",
bL="conditions",
bM="fn",
bN="argv",
bO="ref",
bP="assign",
bQ="url",
bR="properties",
bS="authSchemes",
bT="disableDoubleEncoding",
bU="signingName",
bV="signingRegion",
bW="headers";
const a=false,
b=true,
c="isSet",
d="booleanEquals",
e="error",
f="aws.partition",
g="stringEquals",
h="getAttr",
i="name",
j="substring",
k="hardwareType",
l="regionPrefix",
m="bucketAliasSuffix",
n="outpostId",
o="isValidHostLabel",
p="not",
q="parseURL",
r="s3-outposts",
s="endpoint",
t="tree",
u="aws.isVirtualHostableS3Bucket",
v="s3",
w="{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}",
x="{url#scheme}://{Bucket}.{url#authority}{url#path}",
y="https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}",
z="https://{Bucket}.s3.{partitionResult#dnsSuffix}",
A="aws.parseArn",
B="bucketArn",
C="arnType",
D="",
E="s3-object-lambda",
F="accesspoint",
G="accessPointName",
H="{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}",
I="mrapPartition",
J="outpostType",
K="arnPrefix",
L="{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}",
M="https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
N="{url#scheme}://{url#authority}{url#path}",
O="https://s3.{partitionResult#dnsSuffix}",
P={[bJ]:false,[bK]:"String"},
Q={[bJ]:true,"default":false,[bK]:"Boolean"},
R={[bJ]:false,[bK]:"Boolean"},
S={[bM]:d,[bN]:[{[bO]:"Accelerate"},true]},
T={[bM]:d,[bN]:[{[bO]:"UseFIPS"},true]},
U={[bM]:d,[bN]:[{[bO]:"UseDualStack"},true]},
V={[bM]:c,[bN]:[{[bO]:"Endpoint"}]},
W={[bM]:f,[bN]:[{[bO]:"Region"}],[bP]:"partitionResult"},
X={[bM]:g,[bN]:[{[bM]:h,[bN]:[{[bO]:"partitionResult"},i]},"aws-cn"]},
Y={[bM]:c,[bN]:[{[bO]:"Bucket"}]},
Z={[bO]:"Bucket"},
aa={[bO]:k},
ab={[bL]:[{[bM]:p,[bN]:[V]}],[e]:"Expected a endpoint to be specified but no endpoint was found",[bK]:e},
ac={[bM]:p,[bN]:[V]},
ad={[bM]:q,[bN]:[{[bO]:"Endpoint"}],[bP]:"url"},
ae={[bS]:[{[bT]:true,[i]:"sigv4",[bU]:r,[bV]:"{Region}"}]},
af={},
ag={[bM]:d,[bN]:[{[bO]:"ForcePathStyle"},false]},
ah={[bO]:"ForcePathStyle"},
ai={[bM]:d,[bN]:[{[bO]:"Accelerate"},false]},
aj={[bM]:g,[bN]:[{[bO]:"Region"},"aws-global"]},
ak={[bS]:[{[bT]:true,[i]:"sigv4",[bU]:v,[bV]:"us-east-1"}]},
al={[bM]:p,[bN]:[aj]},
am={[bM]:d,[bN]:[{[bO]:"UseGlobalEndpoint"},true]},
an={[bQ]:"https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",[bR]:{[bS]:[{[bT]:true,[i]:"sigv4",[bU]:v,[bV]:"{Region}"}]},[bW]:{}},
ao={[bS]:[{[bT]:true,[i]:"sigv4",[bU]:v,[bV]:"{Region}"}]},
ap={[bM]:d,[bN]:[{[bO]:"UseGlobalEndpoint"},false]},
aq={[bM]:d,[bN]:[{[bO]:"UseDualStack"},false]},
ar={[bQ]:"https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}",[bR]:ao,[bW]:{}},
as={[bM]:d,[bN]:[{[bO]:"UseFIPS"},false]},
at={[bQ]:"https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}",[bR]:ao,[bW]:{}},
au={[bQ]:"https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}",[bR]:ao,[bW]:{}},
av={[bM]:d,[bN]:[{[bM]:h,[bN]:[{[bO]:"url"},"isIp"]},true]},
aw={[bO]:"url"},
ax={[bM]:d,[bN]:[{[bM]:h,[bN]:[aw,"isIp"]},false]},
ay={[bQ]:w,[bR]:ao,[bW]:{}},
az={[bQ]:x,[bR]:ao,[bW]:{}},
aA={[s]:az,[bK]:s},
aB={[bQ]:y,[bR]:ao,[bW]:{}},
aC={[bQ]:"https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}",[bR]:ao,[bW]:{}},
aD={[e]:"Invalid region: region was not a valid DNS name.",[bK]:e},
aE={[bO]:B},
aF={[bO]:C},
aG={[bM]:h,[bN]:[aE,"service"]},
aH={[bO]:G},
aI={[bL]:[U],[e]:"S3 Object Lambda does not support Dual-stack",[bK]:e},
aJ={[bL]:[S],[e]:"S3 Object Lambda does not support S3 Accelerate",[bK]:e},
aK={[bL]:[{[bM]:c,[bN]:[{[bO]:"DisableAccessPoints"}]},{[bM]:d,[bN]:[{[bO]:"DisableAccessPoints"},true]}],[e]:"Access points are not supported for this operation",[bK]:e},
aL={[bL]:[{[bM]:c,[bN]:[{[bO]:"UseArnRegion"}]},{[bM]:d,[bN]:[{[bO]:"UseArnRegion"},false]},{[bM]:p,[bN]:[{[bM]:g,[bN]:[{[bM]:h,[bN]:[aE,"region"]},"{Region}"]}]}],[e]:"Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`",[bK]:e},
aM={[bM]:h,[bN]:[{[bO]:"bucketPartition"},i]},
aN={[bM]:h,[bN]:[aE,"accountId"]},
aO={[bS]:[{[bT]:true,[i]:"sigv4",[bU]:E,[bV]:"{bucketArn#region}"}]},
aP={[e]:"Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`",[bK]:e},
aQ={[e]:"Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`",[bK]:e},
aR={[e]:"Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)",[bK]:e},
aS={[e]:"Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`",[bK]:e},
aT={[e]:"Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.",[bK]:e},
aU={[e]:"Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided",[bK]:e},
aV={[bS]:[{[bT]:true,[i]:"sigv4",[bU]:v,[bV]:"{bucketArn#region}"}]},
aW={[bS]:[{[bT]:true,[i]:"sigv4",[bU]:r,[bV]:"{bucketArn#region}"}]},
aX={[bM]:A,[bN]:[Z]},
aY={[bQ]:"https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[bR]:ao,[bW]:{}},
aZ={[bQ]:"https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[bR]:ao,[bW]:{}},
ba={[bQ]:"https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[bR]:ao,[bW]:{}},
bb={[bQ]:L,[bR]:ao,[bW]:{}},
bc={[bQ]:"https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[bR]:ao,[bW]:{}},
bd={[bO]:"UseObjectLambdaEndpoint"},
be={[bS]:[{[bT]:true,[i]:"sigv4",[bU]:E,[bV]:"{Region}"}]},
bf={[bQ]:"https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",[bR]:ao,[bW]:{}},
bg={[bQ]:"https://s3-fips.{Region}.{partitionResult#dnsSuffix}",[bR]:ao,[bW]:{}},
bh={[bQ]:"https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}",[bR]:ao,[bW]:{}},
bi={[bQ]:N,[bR]:ao,[bW]:{}},
bj={[bQ]:"https://s3.{Region}.{partitionResult#dnsSuffix}",[bR]:ao,[bW]:{}},
bk=[{[bO]:"Region"}],
bl=[{[bO]:"Endpoint"}],
bm=[Z],
bn=[{[bM]:o,[bN]:[{[bO]:n},false]}],
bo=[{[bM]:g,[bN]:[{[bO]:l},"beta"]}],
bp=[V,ad],
bq=[Y],
br=[W],
bs=[{[bM]:o,[bN]:[{[bO]:"Region"},false]}],
bt=[{[bM]:g,[bN]:[{[bO]:"Region"},"us-east-1"]}],
bu=[{[bM]:g,[bN]:[aF,F]}],
bv=[{[bM]:h,[bN]:[aE,"resourceId[1]"],[bP]:G},{[bM]:p,[bN]:[{[bM]:g,[bN]:[aH,D]}]}],
bw=[aE,"resourceId[1]"],
bx=[U],
by=[S],
bz=[{[bM]:p,[bN]:[{[bM]:g,[bN]:[{[bM]:h,[bN]:[aE,"region"]},D]}]}],
bA=[{[bM]:p,[bN]:[{[bM]:c,[bN]:[{[bM]:h,[bN]:[aE,"resourceId[2]"]}]}]}],
bB=[aE,"resourceId[2]"],
bC=[{[bM]:f,[bN]:[{[bM]:h,[bN]:[aE,"region"]}],[bP]:"bucketPartition"}],
bD=[{[bM]:g,[bN]:[aM,{[bM]:h,[bN]:[{[bO]:"partitionResult"},i]}]}],
bE=[{[bM]:o,[bN]:[{[bM]:h,[bN]:[aE,"region"]},true]}],
bF=[{[bM]:o,[bN]:[aN,false]}],
bG=[{[bM]:o,[bN]:[aH,false]}],
bH=[T],
bI=[{[bM]:o,[bN]:[{[bO]:"Region"},true]}];
const _data={version:"1.0",parameters:{Bucket:P,Region:P,UseFIPS:Q,UseDualStack:Q,Endpoint:P,ForcePathStyle:Q,Accelerate:Q,UseGlobalEndpoint:Q,UseObjectLambdaEndpoint:R,DisableAccessPoints:R,DisableMultiRegionAccessPoints:Q,UseArnRegion:R},rules:[{[bL]:[{[bM]:c,[bN]:bk}],rules:[{[bL]:[S,T],error:"Accelerate cannot be used with FIPS",[bK]:e},{[bL]:[U,V],error:"Cannot set dual-stack in combination with a custom endpoint.",[bK]:e},{[bL]:[V,T],error:"A custom endpoint cannot be combined with FIPS",[bK]:e},{[bL]:[V,S],error:"A custom endpoint cannot be combined with S3 Accelerate",[bK]:e},{[bL]:[T,W,X],error:"Partition does not support FIPS",[bK]:e},{[bL]:[Y,{[bM]:j,[bN]:[Z,49,50,b],[bP]:k},{[bM]:j,[bN]:[Z,8,12,b],[bP]:l},{[bM]:j,[bN]:[Z,0,7,b],[bP]:m},{[bM]:j,[bN]:[Z,32,49,b],[bP]:n},{[bM]:f,[bN]:bk,[bP]:"regionPartition"},{[bM]:g,[bN]:[{[bO]:m},"--op-s3"]}],rules:[{[bL]:bn,rules:[{[bL]:[{[bM]:g,[bN]:[aa,"e"]}],rules:[{[bL]:bo,rules:[ab,{[bL]:bp,endpoint:{[bQ]:"https://{Bucket}.ec2.{url#authority}",[bR]:ae,[bW]:af},[bK]:s}],[bK]:t},{endpoint:{[bQ]:"https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}",[bR]:ae,[bW]:af},[bK]:s}],[bK]:t},{[bL]:[{[bM]:g,[bN]:[aa,"o"]}],rules:[{[bL]:bo,rules:[ab,{[bL]:bp,endpoint:{[bQ]:"https://{Bucket}.op-{outpostId}.{url#authority}",[bR]:ae,[bW]:af},[bK]:s}],[bK]:t},{endpoint:{[bQ]:"https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}",[bR]:ae,[bW]:af},[bK]:s}],[bK]:t},{error:"Unrecognized hardware type: \"Expected hardware type o or e but got {hardwareType}\"",[bK]:e}],[bK]:t},{error:"Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.",[bK]:e}],[bK]:t},{[bL]:bq,rules:[{[bL]:[V,{[bM]:p,[bN]:[{[bM]:c,[bN]:[{[bM]:q,[bN]:bl}]}]}],error:"Custom endpoint `{Endpoint}` was not a valid URI",[bK]:e},{[bL]:[ag,{[bM]:u,[bN]:[Z,a]}],rules:[{[bL]:br,rules:[{[bL]:bs,rules:[{[bL]:[S,X],error:"S3 Accelerate cannot be used in this region",[bK]:e},{[bL]:[U,T,ai,ac,aj],endpoint:{[bQ]:"https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",[bR]:ak,[bW]:af},[bK]:s},{[bL]:[U,T,ai,ac,al,am],rules:[{endpoint:an,[bK]:s}],[bK]:t},{[bL]:[U,T,ai,ac,al,ap],endpoint:an,[bK]:s},{[bL]:[aq,T,ai,ac,aj],endpoint:{[bQ]:"https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}",[bR]:ak,[bW]:af},[bK]:s},{[bL]:[aq,T,ai,ac,al,am],rules:[{endpoint:ar,[bK]:s}],[bK]:t},{[bL]:[aq,T,ai,ac,al,ap],endpoint:ar,[bK]:s},{[bL]:[U,as,S,ac,aj],endpoint:{[bQ]:"https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}",[bR]:ak,[bW]:af},[bK]:s},{[bL]:[U,as,S,ac,al,am],rules:[{endpoint:at,[bK]:s}],[bK]:t},{[bL]:[U,as,S,ac,al,ap],endpoint:at,[bK]:s},{[bL]:[U,as,ai,ac,aj],endpoint:{[bQ]:"https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",[bR]:ak,[bW]:af},[bK]:s},{[bL]:[U,as,ai,ac,al,am],rules:[{endpoint:au,[bK]:s}],[bK]:t},{[bL]:[U,as,ai,ac,al,ap],endpoint:au,[bK]:s},{[bL]:[aq,as,ai,V,ad,av,aj],endpoint:{[bQ]:w,[bR]:ak,[bW]:af},[bK]:s},{[bL]:[aq,as,ai,V,ad,ax,aj],endpoint:{[bQ]:x,[bR]:ak,[bW]:af},[bK]:s},{[bL]:[aq,as,ai,V,ad,av,al,am],rules:[{[bL]:bt,endpoint:ay,[bK]:s},{endpoint:ay,[bK]:s}],[bK]:t},{[bL]:[aq,as,ai,V,ad,ax,al,am],rules:[{[bL]:bt,endpoint:az,[bK]:s},aA],[bK]:t},{[bL]:[aq,as,ai,V,ad,av,al,ap],endpoint:ay,[bK]:s},{[bL]:[aq,as,ai,V,ad,ax,al,ap],endpoint:az,[bK]:s},{[bL]:[aq,as,S,ac,aj],endpoint:{[bQ]:y,[bR]:ak,[bW]:af},[bK]:s},{[bL]:[aq,as,S,ac,al,am],rules:[{[bL]:bt,endpoint:aB,[bK]:s},{endpoint:aB,[bK]:s}],[bK]:t},{[bL]:[aq,as,S,ac,al,ap],endpoint:aB,[bK]:s},{[bL]:[aq,as,ai,ac,aj],endpoint:{[bQ]:z,[bR]:ak,[bW]:af},[bK]:s},{[bL]:[aq,as,ai,ac,al,am],rules:[{[bL]:bt,endpoint:{[bQ]:z,[bR]:ao,[bW]:af},[bK]:s},{endpoint:aC,[bK]:s}],[bK]:t},{[bL]:[aq,as,ai,ac,al,ap],endpoint:aC,[bK]:s}],[bK]:t},aD],[bK]:t}],[bK]:t},{[bL]:[V,ad,{[bM]:g,[bN]:[{[bM]:h,[bN]:[aw,"scheme"]},"http"]},{[bM]:u,[bN]:[Z,b]},ag,as,aq,ai],rules:[{[bL]:br,rules:[{[bL]:bs,rules:[aA],[bK]:t},aD],[bK]:t}],[bK]:t},{[bL]:[ag,{[bM]:A,[bN]:bm,[bP]:B}],rules:[{[bL]:[{[bM]:h,[bN]:[aE,"resourceId[0]"],[bP]:C},{[bM]:p,[bN]:[{[bM]:g,[bN]:[aF,D]}]}],rules:[{[bL]:[{[bM]:g,[bN]:[aG,E]}],rules:[{[bL]:bu,rules:[{[bL]:bv,rules:[aI,aJ,{[bL]:bz,rules:[aK,{[bL]:bA,rules:[aL,{[bL]:bC,rules:[{[bL]:br,rules:[{[bL]:bD,rules:[{[bL]:bE,rules:[{[bL]:[{[bM]:g,[bN]:[aN,D]}],error:"Invalid ARN: Missing account id",[bK]:e},{[bL]:bF,rules:[{[bL]:bG,rules:[{[bL]:bp,endpoint:{[bQ]:H,[bR]:aO,[bW]:af},[bK]:s},{[bL]:bH,endpoint:{[bQ]:"https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",[bR]:aO,[bW]:af},[bK]:s},{endpoint:{[bQ]:"https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}",[bR]:aO,[bW]:af},[bK]:s}],[bK]:t},aP],[bK]:t},aQ],[bK]:t},aR],[bK]:t},aS],[bK]:t}],[bK]:t}],[bK]:t},aT],[bK]:t},{error:"Invalid ARN: bucket ARN is missing a region",[bK]:e}],[bK]:t},aU],[bK]:t},{error:"Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`",[bK]:e}],[bK]:t},{[bL]:bu,rules:[{[bL]:bv,rules:[{[bL]:bz,rules:[{[bL]:bu,rules:[{[bL]:bz,rules:[aK,{[bL]:bA,rules:[aL,{[bL]:bC,rules:[{[bL]:br,rules:[{[bL]:[{[bM]:g,[bN]:[aM,"{partitionResult#name}"]}],rules:[{[bL]:bE,rules:[{[bL]:[{[bM]:g,[bN]:[aG,v]}],rules:[{[bL]:bF,rules:[{[bL]:bG,rules:[{[bL]:by,error:"Access Points do not support S3 Accelerate",[bK]:e},{[bL]:[T,U],endpoint:{[bQ]:"https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",[bR]:aV,[bW]:af},[bK]:s},{[bL]:[T,aq],endpoint:{[bQ]:"https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",[bR]:aV,[bW]:af},[bK]:s},{[bL]:[as,U],endpoint:{[bQ]:"https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",[bR]:aV,[bW]:af},[bK]:s},{[bL]:[as,aq,V,ad],endpoint:{[bQ]:H,[bR]:aV,[bW]:af},[bK]:s},{[bL]:[as,aq],endpoint:{[bQ]:"https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}",[bR]:aV,[bW]:af},[bK]:s}],[bK]:t},aP],[bK]:t},aQ],[bK]:t},{error:"Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}",[bK]:e}],[bK]:t},aR],[bK]:t},aS],[bK]:t}],[bK]:t}],[bK]:t},aT],[bK]:t}],[bK]:t}],[bK]:t},{[bL]:[{[bM]:o,[bN]:[aH,b]}],rules:[{[bL]:bx,error:"S3 MRAP does not support dual-stack",[bK]:e},{[bL]:bH,error:"S3 MRAP does not support FIPS",[bK]:e},{[bL]:by,error:"S3 MRAP does not support S3 Accelerate",[bK]:e},{[bL]:[{[bM]:d,[bN]:[{[bO]:"DisableMultiRegionAccessPoints"},b]}],error:"Invalid configuration: Multi-Region Access Point ARNs are disabled.",[bK]:e},{[bL]:[{[bM]:f,[bN]:bk,[bP]:I}],rules:[{[bL]:[{[bM]:g,[bN]:[{[bM]:h,[bN]:[{[bO]:I},i]},{[bM]:h,[bN]:[aE,"partition"]}]}],rules:[{endpoint:{[bQ]:"https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}",[bR]:{[bS]:[{[bT]:b,name:"sigv4a",[bU]:v,signingRegionSet:["*"]}]},[bW]:af},[bK]:s}],[bK]:t},{error:"Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`",[bK]:e}],[bK]:t}],[bK]:t},{error:"Invalid Access Point Name",[bK]:e}],[bK]:t},aU],[bK]:t},{[bL]:[{[bM]:g,[bN]:[aG,r]}],rules:[{[bL]:bx,error:"S3 Outposts does not support Dual-stack",[bK]:e},{[bL]:bH,error:"S3 Outposts does not support FIPS",[bK]:e},{[bL]:by,error:"S3 Outposts does not support S3 Accelerate",[bK]:e},{[bL]:[{[bM]:c,[bN]:[{[bM]:h,[bN]:[aE,"resourceId[4]"]}]}],error:"Invalid Arn: Outpost Access Point ARN contains sub resources",[bK]:e},{[bL]:[{[bM]:h,[bN]:bw,[bP]:n}],rules:[{[bL]:bn,rules:[aL,{[bL]:bC,rules:[{[bL]:br,rules:[{[bL]:bD,rules:[{[bL]:bE,rules:[{[bL]:bF,rules:[{[bL]:[{[bM]:h,[bN]:bB,[bP]:J}],rules:[{[bL]:[{[bM]:h,[bN]:[aE,"resourceId[3]"],[bP]:G}],rules:[{[bL]:[{[bM]:g,[bN]:[{[bO]:J},F]}],rules:[{[bL]:bp,endpoint:{[bQ]:"https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}",[bR]:aW,[bW]:af},[bK]:s},{endpoint:{[bQ]:"https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}",[bR]:aW,[bW]:af},[bK]:s}],[bK]:t},{error:"Expected an outpost type `accesspoint`, found {outpostType}",[bK]:e}],[bK]:t},{error:"Invalid ARN: expected an access point name",[bK]:e}],[bK]:t},{error:"Invalid ARN: Expected a 4-component resource",[bK]:e}],[bK]:t},aQ],[bK]:t},aR],[bK]:t},aS],[bK]:t}],[bK]:t}],[bK]:t},{error:"Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`",[bK]:e}],[bK]:t},{error:"Invalid ARN: The Outpost Id was not set",[bK]:e}],[bK]:t},{error:"Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})",[bK]:e}],[bK]:t},{error:"Invalid ARN: No ARN type specified",[bK]:e}],[bK]:t},{[bL]:[{[bM]:j,[bN]:[Z,0,4,a],[bP]:K},{[bM]:g,[bN]:[{[bO]:K},"arn:"]},{[bM]:p,[bN]:[{[bM]:c,[bN]:[aX]}]}],error:"Invalid ARN: `{Bucket}` was not a valid ARN",[bK]:e},{[bL]:[{[bM]:d,[bN]:[ah,b]},aX],error:"Path-style addressing cannot be used with ARN buckets",[bK]:e},{[bL]:[{[bM]:"uriEncode",[bN]:bm,[bP]:"uri_encoded_bucket"}],rules:[{[bL]:br,rules:[{[bL]:[ai],rules:[{[bL]:[U,ac,T,aj],endpoint:{[bQ]:"https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[bR]:ak,[bW]:af},[bK]:s},{[bL]:[U,ac,T,al,am],rules:[{endpoint:aY,[bK]:s}],[bK]:t},{[bL]:[U,ac,T,al,ap],endpoint:aY,[bK]:s},{[bL]:[aq,ac,T,aj],endpoint:{[bQ]:"https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[bR]:ak,[bW]:af},[bK]:s},{[bL]:[aq,ac,T,al,am],rules:[{endpoint:aZ,[bK]:s}],[bK]:t},{[bL]:[aq,ac,T,al,ap],endpoint:aZ,[bK]:s},{[bL]:[U,ac,as,aj],endpoint:{[bQ]:"https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[bR]:ak,[bW]:af},[bK]:s},{[bL]:[U,ac,as,al,am],rules:[{endpoint:ba,[bK]:s}],[bK]:t},{[bL]:[U,ac,as,al,ap],endpoint:ba,[bK]:s},{[bL]:[aq,V,ad,as,aj],endpoint:{[bQ]:L,[bR]:ak,[bW]:af},[bK]:s},{[bL]:[aq,V,ad,as,al,am],rules:[{[bL]:bt,endpoint:bb,[bK]:s},{endpoint:bb,[bK]:s}],[bK]:t},{[bL]:[aq,V,ad,as,al,ap],endpoint:bb,[bK]:s},{[bL]:[aq,ac,as,aj],endpoint:{[bQ]:M,[bR]:ak,[bW]:af},[bK]:s},{[bL]:[aq,ac,as,al,am],rules:[{[bL]:bt,endpoint:{[bQ]:M,[bR]:ao,[bW]:af},[bK]:s},{endpoint:bc,[bK]:s}],[bK]:t},{[bL]:[aq,ac,as,al,ap],endpoint:bc,[bK]:s}],[bK]:t},{error:"Path-style addressing cannot be used with S3 Accelerate",[bK]:e}],[bK]:t}],[bK]:t}],[bK]:t},{[bL]:[{[bM]:c,[bN]:[bd]},{[bM]:d,[bN]:[bd,b]}],rules:[{[bL]:br,rules:[{[bL]:bI,rules:[aI,aJ,{[bL]:bp,endpoint:{[bQ]:N,[bR]:be,[bW]:af},[bK]:s},{[bL]:bH,endpoint:{[bQ]:"https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}",[bR]:be,[bW]:af},[bK]:s},{endpoint:{[bQ]:"https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}",[bR]:be,[bW]:af},[bK]:s}],[bK]:t},aD],[bK]:t}],[bK]:t},{[bL]:[{[bM]:p,[bN]:bq}],rules:[{[bL]:br,rules:[{[bL]:bI,rules:[{[bL]:[T,U,ac,aj],endpoint:{[bQ]:"https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",[bR]:ak,[bW]:af},[bK]:s},{[bL]:[T,U,ac,al,am],rules:[{endpoint:bf,[bK]:s}],[bK]:t},{[bL]:[T,U,ac,al,ap],endpoint:bf,[bK]:s},{[bL]:[T,aq,ac,aj],endpoint:{[bQ]:"https://s3-fips.us-east-1.{partitionResult#dnsSuffix}",[bR]:ak,[bW]:af},[bK]:s},{[bL]:[T,aq,ac,al,am],rules:[{endpoint:bg,[bK]:s}],[bK]:t},{[bL]:[T,aq,ac,al,ap],endpoint:bg,[bK]:s},{[bL]:[as,U,ac,aj],endpoint:{[bQ]:"https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",[bR]:ak,[bW]:af},[bK]:s},{[bL]:[as,U,ac,al,am],rules:[{endpoint:bh,[bK]:s}],[bK]:t},{[bL]:[as,U,ac,al,ap],endpoint:bh,[bK]:s},{[bL]:[as,aq,V,ad,aj],endpoint:{[bQ]:N,[bR]:ak,[bW]:af},[bK]:s},{[bL]:[as,aq,V,ad,al,am],rules:[{[bL]:bt,endpoint:bi,[bK]:s},{endpoint:bi,[bK]:s}],[bK]:t},{[bL]:[as,aq,V,ad,al,ap],endpoint:bi,[bK]:s},{[bL]:[as,aq,ac,aj],endpoint:{[bQ]:O,[bR]:ak,[bW]:af},[bK]:s},{[bL]:[as,aq,ac,al,am],rules:[{[bL]:bt,endpoint:{[bQ]:O,[bR]:ao,[bW]:af},[bK]:s},{endpoint:bj,[bK]:s}],[bK]:t},{[bL]:[as,aq,ac,al,ap],endpoint:bj,[bK]:s}],[bK]:t},aD],[bK]:t}],[bK]:t}],[bK]:t},{error:"A region must be set when sending requests to S3.",[bK]:e}]};
export const ruleSet: RuleSetObject = _data;
