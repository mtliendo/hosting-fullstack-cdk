import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { createAmplifyHosting } from './hosting/amplify'

export class BackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props)

		const amplifyHostedApp = createAmplifyHosting(this, {
			appName: 'fullstack-amplify-example',
			branch: 'main',
			ghOwner: 'mtliendo',
			ghTokenName: 'github-token',
			repo: 'hosting-fullstack-cdk',
		})
	}
}
