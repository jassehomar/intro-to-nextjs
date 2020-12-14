const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const withNextEnv = nextEnv();
// module.exports = withNextEnv();
/*


module.exports = withNextEnv()
*/

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("I am in dev mode");
    return { ...defaultConfig, ...withNextEnv() };
  }

  return { ...defaultConfig, ...withNextEnv() };
};
