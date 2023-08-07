pipeline {
  agent any

  environment {
    PUBLIC_hcaptchaSitekey = credentials('files-hcaptchaSitekey')
    gatewayUrl      = credentials('files-gatewayUrl')
    authUrl         = credentials('files-authUrl')
  }

  stages {
    stage('build dev') {
      when { branch 'dev' }
      steps {
        sh 'docker build -t ezraweb/files:dev --build-arg PUBLIC_hcaptchaSitekey="${PUBLIC_hcaptchaSitekey}" --build-arg gatewayUrl="${gatewayUrl}" --build-arg authUrl="${authUrl}" .'
      }
    }
    stage('build main') {
      when { branch 'main' }
      steps {
        sh 'docker build -t ezraweb/files:latest --build-arg PUBLIC_hcaptchaSitekey="${PUBLIC_hcaptchaSitekey}" --build-arg gatewayUrl="${gatewayUrl}" --build-arg authUrl="${authUrl}" .'
      }
    }
  }
}
