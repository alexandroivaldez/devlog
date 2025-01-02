# Devlog  

I made this application to log my personal progress in software development.  

## Cloud Architecture  

The application is stored in S3 and fronted by CloudFront. An Origin Access Control (OAC) was configured to ensure traffic is routed exclusively through the CloudFront distribution, preventing direct public access to the S3 bucket. A custom GitHub Action is used to deploy distribution files into the S3 bucket and create a CloudFront invalidation.  

## UI / UX  

The UI/UX is coming soon...