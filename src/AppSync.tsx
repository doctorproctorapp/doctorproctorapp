interface Config {
  aws_appsync_graphqlEndpoint: string;
  aws_appsync_region: string;
  aws_appsync_authenticationType: 'API_KEY';
  aws_appsync_apiKey: string;
}

const config: Config = {
  aws_appsync_graphqlEndpoint:
    'https://bxe5v6iprzgmvcsh6qulm7cb4y.appsync-api.us-west-2.amazonaws.com/graphql',
  aws_appsync_region: 'us-west-2',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-jp7u5wobkref3bwe3p5t5dv2jy',
};

export default config;
