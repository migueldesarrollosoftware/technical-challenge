FROM node:14

WORKDIR /app

# Instala la AWS CLI
RUN apt-get update && \
    apt-get install -y awscli

# Configura las credenciales de AWS
RUN aws configure set aws_access_key_id AKIAX7GTW5ALVTR7DNGC && \
    aws configure set aws_secret_access_key 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 && \
    aws configure set default.region us-east-1

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD npx serverless offline