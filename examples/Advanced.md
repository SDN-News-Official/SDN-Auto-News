deploy-azure.yml
name: Deploy Azure Resources

on:
  push:
    branches:
      - main  # جب آپ مین برانچ پر کوڈ پش کریں گے تو یہ چلے گا

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:

      # 1. کوڈ کو چیک آؤٹ کرنا (جیسا کہ آپ کی تصویر میں ذکر تھا)
      - name: Checkout Code
        uses: actions/checkout@v3

      # 2. ایژر (Azure) میں لاگ ان ہونا
      - name: Azure Login
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}

      # 3. ARM Template کی تعیناتی (تصویر والا مین ایکشن)
      - name: Deploy ARM Template
        uses: azure/arm-deploy@v1
        with:
          subscriptionId: ${{ secrets.AZURE_SUBSCRIPTION }}
          resourceGroupName: "MyResourceGroup" # اپنے ریسورس گروپ کا نام یہاں لکھیں
          template: ./azuredeploy.json        # اپنی فائل کا درست راستہ (Path) دیں
          parameters: ./azuredeploy.parameters.json # اگر پیرامیٹرز فائل ہے
