import jest from 'jest'
// const { runCLI } = jest;

async function runTests() {
  // console.log("Running tests...");
  const config = {
    silent: true,
    json: true, // Output results in JSON format
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    // Add any other Jest configurations you need
  };
  // console.log("Jest configuration: ", config);
  // console.log("Location: ", process.cwd());
  const { results } = await jest.runCLI(config as any, [process.cwd()]);
  // console.log("Test results: ", results);
  return results;
}

export { runTests };