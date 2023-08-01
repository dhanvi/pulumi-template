import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";


const projectName = pulumi.getProject();

new aws.ecr.Repository(
  projectName,
  {
    imageTagMutability: "IMMUTABLE",
    name: projectName,
  },
);
