# <img src="https://github.com/user-attachments/assets/81d564f4-31e0-477c-a485-efb6afbff4c7" alt="PollyTalk Icon" height="50" /> PollyTalk

PollyTalk is a web application that converts user-input text into natural-sounding speech using AWS Polly. Built with Next.js, Tailwind CSS, and deployed on AWS Amplify, PollyTalk offers a seamless and user-friendly experience for converting text to audio. The application provides the option to listen to the generated speech online or download it as an MP3 file for offline use.
 🔗 [Website-Link](https://master.dgbfsukrksue6.amplifyapp.com/)


 https://github.com/user-attachments/assets/20fe44d3-21fb-4220-8daa-a4ed0081fbca 
 
# Features 
- **Text to Speech Conversion:** Converts user-input text into lifelike speech using AWS Polly.  
- **Downloadable Audio:** Users can download the generated speech as an MP3 file for offline listening.  
- **Responsive Design:** Built with Tailwind CSS for a modern, mobile-friendly interface.  
- **Deployed on AWS Amplify:** A fully serverless architecture for high scalability and performance.

# System Architecture
![image](https://github.com/user-attachments/assets/359888e2-669b-4afc-9011-b3cdb96d556b)



# How to use Amazon Polly


## 1. Join AWS
To create an AWS account
1. Open https://aws.amazon.com and select [Create an AWS Account].
2. Follow the online instructions.


## 2. Create IAM user
To create an administrator user and log in to the console
1. Create an admin user named adminuser in your AWS account. For instructions, See [Creating Users and Administrators Groups for the First Time](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html).
2. Users can log in to the AWS Management console using specific URLs. For more information, See [How to log in to your account in the User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_how-users-sign-in.html).

## 3. Getting Started with the AWS 
Configuring the AWS Command Line Interface
- `aws configure`
```bash
AWS Access Key ID [None]: YOUR-AWS-ACCESS-KEY-ID
AWS Secret Access Key [None]: YOUR-AWS-SECRET-ACCESS-KEY
Default region name [None]: 
Default output format [None]: 
```
## 4. Available Voices
If you want to change the language, change the name_id variable.
```bash
  const handleTextToSpeech = () => {
    Polly.synthesizeSpeech({
      Text: text,
      OutputFormat: "mp3",
      VoiceId: "Salli"
    }, (error, data) => {
      if (error) {
        console.error(error)
      } else {
        setAudioFile(data)
      }
    })
  }
```
- [`Voice List`](https://docs.aws.amazon.com/polly/latest/dg/voicelist.html)

## This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
## 1. Clone the repository:
```
git clone https://github.com/varunsainadh-116/PollyTalk.git
cd pollytalk
```
## 2. Install dependencies:
```
npm install

```
## 3. First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

