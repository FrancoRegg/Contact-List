import path from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;
let publicUrl = `ws://localhost:${port}/ws`;

// Only for Gitpod
if (process.env.GITPOD_WORKSPACE_URL) {
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
  publicUrl = `wss://${port}-${host}/ws`;
}

// Only for Codespaces
if (process.env.CODESPACE_NAME) {
  publicUrl = `wss://${process.env.CODESPACE_NAME}-${port}.preview.app.github.dev/ws`;
}

export default merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port,
    hot: true,
    allowedHosts: "all",
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    client: {
      webSocketURL: publicUrl
    },
  },
  plugins: []
});
