import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ca-central-1_SCbakNgLl',
  ClientId: '2vda6v9k4qrvepmor7b14fldjf',
};

export default new CognitoUserPool(poolData);
